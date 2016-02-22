# js-templates.example [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/js-templates.example.svg)](https://www.npmjs.com/package/js-templates.example) [![Downloads](https://img.shields.io/npm/dt/js-templates.example.svg)](https://www.npmjs.com/package/js-templates.example) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A template for example files

## Installation

```sh
$ npm i --save js-templates.example
```

## Example

```js
const exampleTemplate = require("js-templates.example");

console.log(exampleTemplate("foo"));
// "use strict";
//
// const foo = require("../lib");
//
// console.log(foo());
```

## Documentation

### `exampleTemplate(name)`
Generates a template file for examples.

#### Params
- **String** `name`: The function name.

#### Return
- **String** The rendered template.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md