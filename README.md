<h1 align="center">halkarz 👋</h1>
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

### 🏠 [Github](https://github.com/Approval-Denial/halka-arz)
### ⚡ [Npm](https://www.npmjs.com/package/halkarz)

## Yükleme

```sh
/* NPM İçin */
npm i halkarz

/* Yarn İçin */
yarn add harkarz
```


## Örnekler

```js
const { HalkArz, Events, açıkArzlar, arzlar, taslakArzlar } = require("harkarz");
const arzClient = new HalkArz();

arzClient.init(); // Event Emitter

arzClient.on(Events.Duyurular,async(data) => {
console.log(data);
/*
{
  firmaAdi: '',
  bistKodu: '',
  baslik: '',
  icerik: '',
  islemTarihi: '',
  url: ''
}
*/
});

arzClient.on(Events.Analizler,async(data) => {
console.log(data);
/*
{
  baslik: '',
  icerik: '',
  islemTarihi: '',
  url: ''
}
*/
});


arzlar().then((data) => {
setTimeout(() => {console.log(data)}, 10000);
});

taslakArzlar().then((data) => {
setTimeout(() => {console.log(data)}, 10000);
})

açıkArzlar().then((data) => {
setTimeout(() => {console.log(data)}, 10000);
});
```



## Author's

* Website: approvalcyber.dev
* Twitter: [@approvalcyber](https://twitter.com/approvalcyber)
* Github: [@approval-denial](https://github.com/approval-denial), [@Bes-js](https://github.com/Bes-js)