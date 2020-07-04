const Ajv = require("ajv");
const glob = require("glob");
const path = require("path");

var ajv = new Ajv();

glob.sync(`${__dirname}/src/schemas/*.json`).forEach((file) => {
  console.log(file);

  const schema = require(path.resolve(file));

  ajv.compile(schema);
});
