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

I also use a number of node.js tools to initialise ng-weather. You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

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
* `gulp` concatenates JavaScript, compiles Sass and move HTML files into dist/ [The streaming build system](http://gulpjs.com/).


I have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `dist/components` - contains the angular framework files


### Run the application

I have preconfigured the project with a simple development web server. 

Firstly we have to build the application:

```
gulp build
```

The simplest way to start the server is:

```
gulp server
```

At this point your browser will open the Web page (localhost -port 9122).

### Run tasks with gulp
- Run `gulp watch` for live compiling SCSS and JS
- Run `gulp build` for building
- Run `gulp server` for starting the server
- Run `gulp test-converter` for testing the temperatureCoverter (first exercise)

## Directory Layout

    app/          --> all of the files to be used in development
      css/        --> CSS files (Sass)
      js/         --> JavaScript files
      partials/   --> AngularJS partials
    dist/         --> public folder - minified scripts
      index.html  --> index page
    test/         --> test scripts


## Application walkthrough

Directives are one of the most important components of any AngularJS application. I built a "standalone" directive module which consumes data from a configurable service. This service `weatherService`, calls the openweathermap.org API and returns the JSON with the data requested.

weather.html partial visualise the data.


### Widget - directive

![](https://dl.dropboxusercontent.com/u/1089758/ng-weather.png)

The widget can be instantiated adding a div with class `weather-widget` in the HTML.

`<div class="weather-widget" unit="celsius" days="5"></div>`

### Attributes
- __unit__: `celsius` or `fahrenheit` which shows the temperatures in imperial or metric unit.
- __days__: `[1..7]` shows the weather forcast for n-days.



