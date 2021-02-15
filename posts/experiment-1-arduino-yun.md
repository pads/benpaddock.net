---
title: "Experiment #1 - Arduino Yun"
description: For Christmas I was lucky enough to receive an Arduino Yun
  microcontroller board.
date: 2015-01-05T12:15:00.000Z
---
For Christmas I was lucky enough to receive an [Arduino Yun](https://href.li/?http://arduino.cc/en/Main/ArduinoBoardYun) microcontroller board.  A regular Arduino board allows components such as motors and sensors to be programmed and provides a fun way to hack with hardware and software combined.  The Yun version goes a step further and incorporates an embedded Linux server with WiFi and Ethernet connectivity.

With this kit at my disposal, I decided to jump on the [Internet of Things](https://href.li/?http://en.wikipedia.org/wiki/Internet_of_Things) bandwagon and create a simple web app that outputs temperature and light sensor readings.  The system architecture is split into three sections:

1. The hardware - Wiring up the breadboard. \
2. The Arduino sketch - The code that reads input from the sensors and outputs the readings to both an LCD and to the web via an API. \
3. The web application - A single page that uses JavaScript to poll the API for the sensor data and displays the output in a more interesting way than just numbers.

**Hardware Setup**

The first image below shows how the circuit is put together.  The microcontroller is upside down because the orientation allows for the LCD to display text upright without the LCD covering up most of the breadboard.  

The second image is the schematic version of the circuit.  Both were created using the excellent [Fritzing app](https://href.li/?http://fritzing.org/home/).

![Arduino breadboard diagram](/public/images/blog/tumblr_inline_pk1e6cz6ff1qbpbq8_500.jpg "Arduino Breadboard Diagram")

![Circuit diagram](/public/images/blog/tumblr_inline_pk1e6ctn9z1qbpbq8_500.jpg "Circuit Diagram")

This image shows what it looks like in real life:

![Arduino breadboard](/public/images/blog/tumblr_inline_pk1e6dgypd1qbpbq8_500.jpg "Arduino Breadboard")

The circuit consists of:

* A thermometer (the black semi-circular object on the right-hand side).
* A photoresistor, to measure light (the object that looks a bit like an electric hob, to the left and above the thermometer).
* A potentiometer (the blue object with the large white knob) to vary resistance as part of the LCD circuit.  This alters the contrast of the display.
* A 16x2 dot matix liquid crystal display (LCD).

The green wires that go up to the top of the Yun microcontroller capture input from the sensors.  These input values are available via the programmable firmware (sketches) on the controller.

The board can be powered via the micro USB connection between the standard USB and Ethernet connections.  A standard (non-Apple) smartphone charger does the job nicely here.  You can also use portable USB power banks if you want to move around to get different temperature and light readings more easily.

All the parts supplied came from the [Arduino Starter Kit](https://href.li/?http://arduino.cc/en/Main/ArduinoStarterKit) which is a great introduction to hardware hacking as it includes a multitude of different sensors, LEDs, an electric motor and more.

**Programming the Arduino**

The Arduino can be programmed via code that is similar to C.  It is pretty straight forward to get to grips with and there are built-in libraries that you can use to work with various hardware components.  This code runs as firmware directly on the microcontroller.  There is an [IDE that you can download](https://href.li/?http://arduino.cc/en/main/software) to write the code and upload it to the microcontroller via USB, Bluetooth or WiFi/Ethernet.

With the Yun there is a library called Bridge that allows the code to communicate with the embedded Linux server.  This allows you to read inputs from the board and output them as a response to a web server request.  This means you can write a simple web server that provides an API for clients to obtain data from the sensors.  The code below (adapted from [the Bridge example](https://href.li/?http://arduino.cc/en/Tutorial/Bridge)) runs a web server with 2 endpoints.  One endpoint for reading temperature and one for light (via GET requests):

```
// Currently supported API (attached to /arduino):
//
// "/temperature" -> analogRead(0)
// "/light"       -> analogRead(1)

#include 
#include 
#include 
#include 

int temperaturePin = 0;
int lightPin = 1;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Listen on default port 5555, the webserver on the Yun
// will forward there all the HTTP requests for us.
YunServer server;

void setup() {
  Serial.begin(9600);

  // Bridge startup
  pinMode(13,OUTPUT);
  digitalWrite(13, LOW);
  Bridge.begin();
  digitalWrite(13, HIGH);

  // Set columns and rows to use for the LCD display on the Yun
  lcd.begin(16, 2);
  // Start on the first row
  lcd.print("Waiting...");

  server.listenOnLocalhost();
  server.begin();
}

void loop() {
  // Get clients coming from server
  YunClient client = server.accept();

  // There is a new client?
  if (client) {
    // Process request
    process(client);

    // Close connection and free resources.
    client.stop();
  }

  delay(50); // Poll every 50ms
}

void process(YunClient client) {
  String command = client.readStringUntil('\r');

  if (command == "temperature") {
    analogCommand(client, 0);
  } else if (command == "light") {
    analogCommand(client, 1);
  } else {
    handleNotFound(client, command);
  }  
}

void analogCommand(YunClient client, int pin) {
  int value;
  int reading = analogRead(pin);

  client.println("Status: 200");
  client.println("Content-type: application/json; charset=utf-8");
  client.println();

  if (pin == lightPin) {
    client.print("{\"light\": " + String(reading) + ", \"measure\": \"lx\"}");
    
    lcd.setCursor(0, 0);
    lcd.print("Requested: Light");
    lcd.setCursor(0, 1);
    lcd.print("Output: " + String(reading) + " lx   ");
    
  } else if(pin == temperaturePin) {
    float temperatureInVolts = (reading / 1024.0) * 5.0;
    float temperatureInCelcius = (temperatureInVolts - 0.5) * 100;
    
    client.print("{\"temperature\": " + String(temperatureInCelcius) + ", \"measure\": \"C\"}");
    
    lcd.setCursor(0, 0);
    lcd.print("Requested: Temp ");
    lcd.setCursor(0, 1);
    lcd.print("Output: " + String(temperatureInCelcius) + " C");
  }
    // Update datastore key with the current pin value
  String key = "A";
  key += pin;
  Bridge.put(key, String(value));
}

void handleNotFound(YunClient client, String command) {
  client.println("Status: 404");
  
  lcd.setCursor(0, 0);
  lcd.print("R:" + command);
  lcd.setCursor(0, 1);
  lcd.print("Output:Not found");
}
```

**The Web Application**

For the final part of this project, I decided to write a quick and dirty [AngularJS](https://href.li/?https://angularjs.org/) application that polls the API for data every 2.5 seconds.  It then updates some text on a web page with the current reading as well as updating a graphical representation of temperature ([an adaptation of a  CSS thermometer](https://href.li/?http://codepen.io/TommyCreenan/pen/pCslj/)) and light (a CSS light bulb similar to the thermometer).  

All of the assets are uploaded via SSH to a public www folder on the embedded Linux server.  The end result is this:

![Web app showing thermometer and light](/public/images/blog/tumblr_inline_pk1e6d0mkh1qbpbq8_500.png "Web app")

The thermometer animates up and down as the temperature changes and the lightbulb opacity alters depending on the output of the light reading. Below is the LCD showing debug information from each API request:

![Arduino with temperature output](/public/images/blog/tumblr_inline_pk1e6ehcxp1qbpbq8_500.jpg "Arduino With Output Display")

**Conclusion**

I found out after lots of testing that the temperature fluctuates too often so I suspect that the calculation is incorrect.  The sensor output probably needs to be [calibrated](https://href.li/?http://arduino.cc/en/tutorial/calibration).  

The light reading is stable but I'm not sure what measurement it's outputting.  Some very brief googling suggests that by default it is using Lux (lx) which is Lumen per square meter.

Putting the project together from scratch was great fun as it combined both hardware and software.  It made me aware just how much basic electronics knowledge I'd lost since learning it at school.  It was also great to see how easy it is to connect real world inputs such as temperature with the web.  This particular example is a one-way relationship and so it would be good in future to experiment with taking input from the web and outputting it on the Arduino.

If you want to have a go at this yourself.  Please check out the [code on GitHub](https://href.li/?https://github.com/pads/arduino-yun-experiment) and ask any questions either as an issue there or as a comment here.

Happy hacking!