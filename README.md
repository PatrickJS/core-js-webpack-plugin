# core-js-webpack-plugin
[core-js](https://github.com/zloirock/core-js#custom-build-from-external-scripts) builder as a Webpack Plugin


### Custom build (from external scripts)

[`core-js-builder`](https://www.npmjs.com/package/core-js-builder) package exports a function that takes the same parameters as the `build` target from the previous section. This will conditionally include or exclude certain parts of `core-js`:

```js
plugins: [
  new CoreJsPlugin({
    modules: ['es6', 'core.dict'], // modules / namespaces
    blacklist: ['es6.reflect'],    // blacklist of modules / namespaces, by default - empty list
    library: false,                // flag for build without global namespace pollution, by default - false
    umd: true                      // use UMD wrapper for export `core` object, by default - true
  })
]
```
