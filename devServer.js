const express = require("express"),
  webpack = require("webpack"),
  path = require("path"),
  config = require("./webpack.config.dev");
(compiler = webpack(config)), (app = express());

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(7770, "localhost", err => {
  if (err) {
    return console.log(err);
  }
  console.log("Listening at http://localhost:7770");
});
