# Angular ShowCase Application
### This is the seed for Quick Start Projects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.


## What is a bloc ?
A bloc is a site area allowing you to package multiple views within an area to deliver it to the site, an area could be a store or a user area , but the architecture of the seed is built upon the bloc architecture.

[![N|Solid](https://github.com/BaylyConsulting/BC-Angular-4-Seed/blob/V-2-0-0/src/assets/i/figure1.jpg?raw=true)]()


Creating a new Bloc

1. Create a folder under ```/src``` calling it your bloc name ```name.bloc```
2. populate it with the files from the example.bloc and edit it to create a new bloc (new module and component name)
3. Add the bloc to the ```/src/app/app.routes``` using the example in the routes file to know how and you are off and running.


then you are good to go and ready to use the board library

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

## Code Validation
Run `npm run tslint` to validate the code via lint
Run `npm run stylelint` to validate the code via stylelint
Autofix is also available just following the above command with `-fix` and it will autofix most common mistakes

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

