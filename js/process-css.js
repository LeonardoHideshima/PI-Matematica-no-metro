var fs = require("fs");
var postcss = require("postcss");
var colorblindPlugin = require("postcss-colorblind");

var css = fs.readFileSync("input.css", "utf8");

postcss()
  .use(colorblindPlugin({method:'achromatopsia'}))
  .process(css)
  .then(function(result) {
    fs.writeFileSync('output.css', result.css);
  });
