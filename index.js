var ConcatSource = require('webpack-sources').ConcatSource;
var corejsBuilder = require('core-js-builder');

function CoreJsPlugin(options) {
  this.options = options || {};
}

CoreJsPlugin.prototype.apply = function CoreJsPluginApply (compiler) {
  var self = this;
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize-chunk-assets', function(chunks, callback) {
      chunks.forEach(function(chunk) {
        if (!chunk.isInitial()) return;
        corejsBuilder(self.options)
          .then(function(bundledCode) {
            chunk.files.forEach(function(file) {
              var src = new ConcatSource('/* core-js */\n', bundledCode, compilation.assets[file]);
              compilation.assets[file] = src
            });
            

          });// end then
      });// end for each
      callback();
    });// end optimize-chunk-assets
  });// end compilation
};// end apply

module.exports = CoreJsPlugin;
