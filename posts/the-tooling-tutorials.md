---
title: The Tooling Tutorials
description: Last week myself and fellow Osmosoft colleague Colm Britton
  attended an all-day workshop in Brighton on useful tools and techniques for
  web development.
date: 2012-11-16T12:25:00.000Z
---
Last week myself and fellow Osmosoft colleague Colm Britton attended an all-day workshop in Brighton on useful tools and techniques for web development.  In this post I'm going to provide a brief summary of what I found out. 

There were 6 sessions in the day covering the following web development topics (I attended the first four):

**Build** 

This session was presented by [Remy Sharp](http://remysharp.com) and covered how to automate useful tasks for a web project using a tool called [Grunt](http://gruntjs.com).  This tool lets you easily run tasks such as testing (including watching for code changes and automatically re-running the tests) and concatinating/minifying JavaScript files for production deployment.

**Modular JavaScript** 

This session was presented by [Rebecca Murphey](http://rmurphey.com/) who talked about [RequireJS](http://requirejs.org/). The talk covered the concept of writing small modules of JavaScript to make them more managable and structure web applications better.  RequireJS modules avoid polluting the global namespace, which is considered a bad thing, and runs such that only the modules you explicitly need are loaded and used where necessary. 

**Version control with Git** 

Run by [Jake Archibald](http://jakearchibald.co.uk/) who ran through a beginner's guide to [Git](http://git-scm.com/), which is a distributed version control system.  Personally, I did not gain much from this as I have been using Git a lot since joining Osmosoft but I did discover a [useful Git environment script](https://github.com/jakearchibald/git-convenience) written by Jake to make it easier to use common Git commands and see the current state of the project you are developing.

**Debugging** 

Remy covered this session.  He gave the group a small game application that was broken and asked us to debug it using Chrome.  He went through the various developer tools Chrome gives you out of the box.  There are some very powerful features including break points based on DOM events (such as clicks) and watching the DOM tree for changes in it's structure.  Finally, Remy showed us how to debug mobile web pages on the desktop via a proxy. 

**Testing** 

I didn't attend this session but the presenter Rebecca Murphey has hosted the slides here: https://speakerdeck.com/rmurphey/writing-testable-javascript

**SASS (pre-processing CSS)** 

Again, I did not attend this session.  This was also presented by Jake Archibald. 

More details of the event can be found here: http://2012.full-frontal.org/workshop/tooling.  I also made some notes of the sessions on [my Tiddlyspace](http://pads.tiddlyspace.com/Tooling%20Workshop%20Notes). 

Also, I'll be presenting a more in-depth session on what I learned at a BT developer conference soon.  The presentation material will be made available online after this.