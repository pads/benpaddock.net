---
title: Learning Ember
description: I have recently started a new web application project and have
  chosen the Ember JavaScript framework to help me build it.
date: 2014-08-31T11:30:00.000Z
---
I have recently started a new web application project and have chosen the [Ember](http://emberjs.com) JavaScript framework to help me build it. I chose Ember because it was fairly straight forward enough to grok, described concepts using language that made sense to me and it uses sensible conventions. I’ve been hypocritical about convention over configuration in the past but at this stage, it feels like Ember doesn’t offer much resistance to customising an application to satisfy particular constraints.

I’ll briefly introduce Ember at this point, followed by what’s going to come up in future posts. Ember utilises the Model-View-Controller (MVC) pattern. It also has a comprehensive router that supports nested routes (e.g. “users/1/contact_details”) and as well as create, read, update and delete (CRUD) operation wiring via resources (if you know [Rails](http://rubyonrails.org/) you will be very familiar with this).

Ember also uses a class system and you usually extend these classes to suit your needs. By default Ember generates classes (such as routes and controllers) for you unless you explicitly implement them yourself does this for you. If you don’t need much logic beyond rendering something then you never need write any code here (again, think Rails).

Models are one such class type and the Ember guides use a separate library called [Ember Data](http://emberjs.com/api/data/) as an example implementation (there is also a library called, funnily enough, [Ember Model](https://github.com/ebryn/ember-model)).

Ember uses controllers primarily provide actions for the user interface to interact with the model. They also have their own properties that can be interacted with from the interface and they can communicate with other controllers. I have found that the relationship between models and controllers is not always set in stone as it all depends on how you use routes. This may not make sense right now but I’ll cover this in a separate post.

Views are made up of Handlebars templates (for dynamic HTML rendering) backed by JavaScript to provide custom logic. Ember comes with a lot of built-in views (e.g. a select input) but allows you to write your own. You can bind model attributes to a view of an automatic two-way relationship between what the user does and how the state changes as a result.

Given, all of the above, I could go into great lengths to explain more but that would result in a huge post. This first post is an introduction and also lays out my plan to explain my learnings of Ember. I’m aiming to regurgitate my understanding on a post-by-post basis as the project progresses. To date, I have used the following parts of Ember whilst working on my current project:

- The application itself: Getting up and running.
- Models: Representation of data as an object.
- Stores: Managing instances of models (records) including finding, creating and destroying them.
- Adapters: The interfaces that provide the data e.g. REST, local storage and fixture (hard-coded data).
- Views: So far I have created a custom view based on a text field to provide filtering behaviour.
- Controllers: Implementing user interface actions and augmenting the templates.
- Routes: How the URL drives the application flow and state.
- Templates: Using Handlebars features and displaying model state.
- Classes: Using features of the Ember object model and creating a custom class that doesn’t fit under any other base class in Ember.
- Serialisers: Customising how Ember sends and receives data.
- Transforms: Customising model attributes (similar to serialisers above).
- Validation: Validating models via the ember-validations library.
- Unit testing: Testing most of what has been listed above.

I plan to cover each of these as topics on a regular enough basis. I’m hoping that by writing this down I can reinforce my learning and as a bonus, help other people wanting to learn too. The guides are enough for a hello world example but after that, I found that there is a bit of Googling to do as I became stuck on scenarios not covered in the docs. Having said that, the API docs provide good coverage and it is open source. I am in no doubt, guilty of not reading enough.
