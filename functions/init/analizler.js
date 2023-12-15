const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async() => {
var res = await axios.get("https://halkarz.com/analizler/");
let data = res?.data;
const $ = cheerio.load(`${data}`);
let url = $(`#getin > section > ul:nth-child(2) > li > article > div > h3 > a`).attr("href");
let res2 = await axios.get(url);
let data2 = res2?.data;
const $$ = cheerio.load(`${data2}`);
var baslik = $$("#getin > article.duyurular-post-wrap > article > h1 > strong").text().trim();
var icerik = $$("#getin > article.duyurular-post-wrap > article > p:nth-child(4)").text().trim();
var islemTarihi = $$("#getin > article.index-list.detail-page.duyurular-page-single.analizler-page > div > div > time").text().trim();
var obj = {baslik,icerik,islemTarihi,url};
return obj;
}