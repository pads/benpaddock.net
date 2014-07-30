[![Build Status](https://travis-ci.org/pads/benpaddock.net.png?branch=master)](https://travis-ci.org/pads/benpaddock.net)

benpaddock.net
==============

My personal website.

A customised [TiddlyWeb](https://github.com/TiddlyWeb) install in the making.

* Targeted for a [Raspberry Pi](http://www.raspberrypi.org/).
* Runs as a WSGI application behind [Nginx](http://wiki.nginx.org/Main).
* Data is stored in a [MariaDB](http://mariadb.org/) database.
* Font icons courtesy of [Fontello](http://fontello.com).

Development Notes
=================

Run `setup.sh` using `sudo env PATH=$PATH`.

To host on your local machine, install `tsapp`:
 
    pip install tsapp` 
    
Edit the `.tsapp` file so that `target_server` is set to `http://localhost:8080`.
    
Then run the server: `tsapp serve`.

Credit
======

* [Google](https://www.google.com/fonts) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/) for the web fonts.
* [Normalize.css](http://necolas.github.io/normalize.css/) for the base CSS.
* @cdent for making [TiddlyWeb](http://tiddlyweb.com/) and [tsapp](http://tsapp.tiddlyspace.com)
