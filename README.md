<h1 align="center">Welcome to halkarz 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/halkarz" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/halkarz.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/approvalcyber" target="_blank">
    <img alt="Twitter: approvalcyber" src="https://img.shields.io/twitter/follow/approvalcyber.svg?style=social" />
  </a>
</p>

> Halka arz ile sunulan şirketlerin detaylı verilerini bu modül sayesinde alabilirsiniz.

### 🏠 [Homepage](https://github.com/Approval-Denial/halka-arz)
### ⚡ [Npm](https://www.npmjs.com/package/halkarz)

## Install

```sh
npm i halkarz
```



## Author

* Website: approvalcyber.dev
* Twitter: [@approvalcyber](https://twitter.com/approvalcyber)
* Github: [@approval-denial](https://github.com/approval-denial)

## Example

```js
const {arzlar,taslak_arzlar,acik_arzlar} = require("./index")

acik_arzlar()
.then(data =>{
  setTimeout(() => {
    console.log(data)
  }, 10000);
})
 
  // I added timeout because it needs time when pulling data
```



## Show your support

Give a ⭐️ if this project helped you!

