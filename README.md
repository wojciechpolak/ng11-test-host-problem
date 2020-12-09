# "Component inside a test host" issue with Ivy (ng10, ng11)

Testing a component inside a test host, according to:
https://angular.io/guide/testing-components-scenarios#component-inside-a-test-host

Reproduction repo for [Issue #39838](https://github.com/angular/angular/issues/39838)

`ngc` throws error (but only when Ivy is enabled):

```
$ npx ngc
src/app/foobar/foobar.component.spec.ts:12:14 - error NG8001: 'app-foobar' is not a known element:
1. If 'app-foobar' is an Angular component, then verify that it is part of this module.
2. If 'app-foobar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

12   template: `<app-foobar [abc]="'xyz'"></app-foobar>`
                ~~~~~~~~~~~~~~~~~~~~~~~~~~
src/app/foobar/foobar.component.spec.ts:12:26 - error NG8002: Can't bind to 'abc' since it isn't a known property of 'app-foobar'.
1. If 'app-foobar' is an Angular component and it has 'abc' input, then verify that it is part of this module.
2. If 'app-foobar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.

12   template: `<app-foobar [abc]="'xyz'"></app-foobar>`
```

But everything else works just fine (test, build, serve).

Disable Ivy in `tsconfig.json`, re-run `ngc` and it will pass successfully.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

This problem is also valid for previous Angular 10.

## Boostrap

Run `npm ci`

Before running `npx ngc`, run `npx ngcc`

## Running unit tests

Run `ng test` to execute the unit tests.
This should pass successfully with or without Ivy. However, `ngc` fails with Ivy.
