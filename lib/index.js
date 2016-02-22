"use strict";

const camelo = require("camelo");

/**
 * exampleTemplate
 * Generates a template file for examples.
 *
 * @name exampleTemplate
 * @function
 * @param {String} name The function name.
 * @return {String} The rendered template.
 */
module.exports = function exampleTemplate (name) {

    name = camelo(name);

    return `"use strict";

const ${name} = require("../lib");

console.log(${name}());`;
};
