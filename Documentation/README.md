# NurseScheduler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Pre-Requesites

`npm install @syncfusion/ej2-angular-calendars --save`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
This command can be simplified to `ng g c component-name`.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




# Code Structure

The overall structure of this project can be found in the /Documentation folder as 'uml.png'.

## Button component

Where the add and delete shift buttons are created. They use the nurse-dropdown component to display a pop-up with several dropdown menus.

## Calendar component

Where the calendar is generated, with the today's current date pre-selected. Whenever a new date is selected, this component sends that data to the parent component, for other components usage.

## Gannt-Chart component

Where the data is recieved to populate the schedule.

## Nurse-Dropdown component

Where popups are created for when the add shift button is clicked.

## Sidebar component

Helper component that organizes button, warnings-table, and week-copy components into one place.

## Warnings-Table component

Where the nurse warnings are displayed.

## Week-Copy component

Where the "Week Of:" display and the copy schedule button are handled.
