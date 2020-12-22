const Ajv = require("ajv").default;
const addFormats = require("ajv-formats").default;

const glob = require("glob");
const path = require("path");

var ajv = new Ajv();
addFormats(ajv);

glob.sync(`${__dirname}/src/schemas/*.json`).forEach((file) => {
  console.log(file);

  const schema = require(path.resolve(file));

  ajv.compile(schema);
});
