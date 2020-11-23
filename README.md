# DGUSLayout

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Getting started - Installation instructions
1. Install NodeJS (v. 15.2) See https://nodejs.org/en/
1. Run command prompt, and write command `npm install -g yarn  @angular/cli`
1. In command prompt, go to cloned git repo `cd <full path>/DGUSLayout`
1. In cloned folder, run `yarn`
1. Now, after automatic isntall all packages, can you run `ng serve --open`
1. After some time, automatically is opened default web browser, with screens
1. On now, its done.




## Create new page
1. Run command `ng generate component screens/<componentname>` - Its will generate componet file to src/app/screens folder
2. On second, modify generated component, with .ts suffix - See `l000.component.ts` - Its required add `extends` and remove constructor
1. Insert new page to `src/app/app-routing.module.ts`
1. Allow screen in `src/app/pages/pages.component.html` - Remove h class
1. Its all


# Default notes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
