const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async() => {
var res = await axios.get("https://halkarz.com/haberler/");
let data = res?.data;
const $ = cheerio.load(`${data}`);
let url = $(`#getin > section > ul:nth-child(2) > li > article > div > h3 > a`).attr("href");
let res2 = await axios.get(url);
let data2 = res2?.data;
const $$ = cheerio.load(`${data2}`);
var firmaAdi = $$("#getin > article.index-list.duyurular-bottom-link > a > div.il-content > h3.il-halka-arz-sirket").text().trim();
var bistKodu = $$("#getin > article.index-list.duyurular-bottom-link > a > div.il-content > h2").text().trim();
var baslik = $$("#getin > article.index-list.detail-page.duyurular-page-single > div > h1").text().trim();
var icerik = $$("#getin > article.duyurular-post-wrap > article > div.spk-bulten").text().trim();
var islemTarihi = $$("#getin > article.duyurular-post-wrap > article > article > table > tbody > tr > td:nth-child(2) > strong").text().trim();
var obj = {firmaAdi,bistKodu,baslik,icerik,islemTarihi,url};
return obj;
}