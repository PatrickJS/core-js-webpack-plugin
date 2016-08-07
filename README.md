# core-js-webpack-plugin
[core-js](https://github.com/zloirock/core-js#custom-build-from-external-scripts) builder as a Webpack Plugin



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
