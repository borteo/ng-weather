ng-weather
==========

Simple AngularJS weather forecast widget

Current version: 0.1

## Features

- General development features:
  - Sass
  - Gulp.js, Bower
  - Karma-jasmine tests


## Getting Started

To get you started you can simply clone the ng-weather repository and install the dependencies:

### Prerequisites

You need git to clone the ng-weather repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

I also use a number of node.js tools to initialise ng-drawing. You must have node.js and
its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone ng-weather

Clone the ng-weather repository using [git](http://git-scm.com/):

```
git clone https://github.com/borteo/ng-weather.git
cd ng-weather
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code. The tools help to manage the application.

* We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.org/).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io/).
* `gulp` concatenates JavaScript, compiles Sass and move html files into dist/ [The streaming build system](http://gulpjs.com/).


I have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `dist/components` - contains the angular framework files


### Run the application

I have preconfigured the project with a simple development web server. 

Firstly we have to compile and move the stylesheets, JavaScripts and HTML files into dist folder:

```
gulp build
```

The simplest way to start the server is:

```
gulp server
```

At this poit your browser will open the localhost (port 9122) page.

### Run tasks with gulp
- Run `gulp watch` for live compiling SCSS and JS
- Run `gulp build` for building
- Run `gulp server` for starting the server
- Run `gulp test-temperature` for testing the temperatureCoverter

## Directory Layout

    app/                --> all of the files to be used in development
      css/              --> css files (Sass)
      js/               --> javascript files
      partials/         --> AngularJS partials

    test/             	--> test scripts


## Application walkthrough

Directives are one of the most important components of any AngularJS application. I built a "standalone" directive module which consumes data from a configurable service. This service `weatherService`, calls the openweathermap.org API and returns the JSON with the data requested.

The widget can be instantiated adding a div with class `weather-widget` in the HTML.

