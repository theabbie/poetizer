# Poetizer API

![Poetizer](https://user-images.githubusercontent.com/17960677/102003881-48dbfa80-3d31-11eb-9528-d17785fdc599.png)

>**Unofficial Poetizer API**

## Example

The Following Code snipet will help you understand how to use this.

```js
var Poetizer = require("poetizer");
var poetizer = new Poetizer();

(async function() {
  await poetizer.login("email@example.com","password");
  // or
  poetizer.addToken(token);

  await poetizer.post("title","poem",["tags"]);
})();
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios

## Credits

* [Poetizer](https://poetizer.com) For Creating an excellent platform.

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information

