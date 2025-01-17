---
title: Testing Apps
order: 7
---
## Running Test Specs
```none
  Usage
    enact test [options]

  Options:
    --watch           Watch for file changes after initoial test run and re-execute as needed.
    --no-cache        Ignore cached test result data
    ... (all other options supportd by Jest are allowed)
```
The `enact test` command (aliased as `npm run test`) will activate a [Jest](https://jestjs.io/) test runner on all discovered *-specs.js files. All the complicated configuration is hidden away within Enact CLI to avoid any confusion or additional difficulty in testing source code.

Internally Enact CLI supports [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) out of the box, so there's no need to install them locally on your project. Simply import/require it within specs files and it'll be there. You will want to familiarize yourself with React Testing Library's utilities in order to write more complex tests.
Enzyme support is deprecated and will be removed in a future major release.

To create a test please create a ***-specs.js** file in the folder of the component you wish to test.

Run --help for more information on available options.
