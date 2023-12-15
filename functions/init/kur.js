const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async(bistKodu) => {
try {
if(bistKodu == undefined || bistKodu == '' || typeof bistKodu !== "string") return {error:"404",text:"Bist Kodu Girilmedi!"};
var res = await axios.get(`https://tr.tradingview.com/chart/?symbol=BIST%3A${bistKodu.toUpperCase()}`);
let data = res?.data;
const $ = cheerio.load(`${data}`);

let oncekiFiyat = $(`body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--center > div.chart-container.single-visible.top-full-width-chart.active > div.chart-container-border > div > div.chart-markup-table > div:nth-child(1) > div.chart-markup-table.pane > div > div.legend-l31H9iuA.noWrap-l31H9iuA.wrappable-l31H9iuA > div.legendMainSourceWrapper-l31H9iuA > div.container-hw_3o_pb > div.buttonsWrapper-hw_3o_pb.notAvailableOnMobile-hw_3o_pb.withoutBg-hw_3o_pb > div.apply-common-tooltip.button-hw_3o_pb.sellButton-hw_3o_pb > span.buttonText-hw_3o_pb`).text().trim();

let guncelFiyat = $(`body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--center > div.chart-container.single-visible.top-full-width-chart.active > div.chart-container-border > div > div.chart-markup-table > div:nth-child(1) > div.chart-markup-table.pane > div > div.legend-l31H9iuA.noWrap-l31H9iuA.wrappable-l31H9iuA > div.legendMainSourceWrapper-l31H9iuA > div.container-hw_3o_pb > div.buttonsWrapper-hw_3o_pb.notAvailableOnMobile-hw_3o_pb.withoutBg-hw_3o_pb > div.apply-common-tooltip.button-hw_3o_pb.buyButton-hw_3o_pb > span.buttonText-hw_3o_pb`).text().trim();

let oran = $(`body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--center > div.chart-container.single-visible.top-full-width-chart.active > div.chart-container-border > div > div.chart-markup-table > div:nth-child(1) > div.chart-markup-table.pane > div > div.legend-l31H9iuA.noWrap-l31H9iuA.wrappable-l31H9iuA > div.legendMainSourceWrapper-l31H9iuA > div.container-hw_3o_pb > div.buttonsWrapper-hw_3o_pb.notAvailableOnMobile-hw_3o_pb.withoutBg-hw_3o_pb > div.spreadQtyWrapper-hw_3o_pb.withoutQty-hw_3o_pb > div.apply-common-tooltip.spread-hw_3o_pb`).text().trim();

let firmaAdi = $(`body > div.js-rootresizer__contents.layout-with-border-radius > div.layout__area--center > div.chart-container.single-visible.top-full-width-chart.active > div.chart-container-border > div > div.chart-markup-table > div:nth-child(1) > div.chart-markup-table.pane > div > div.legend-l31H9iuA.noWrap-l31H9iuA.wrappable-l31H9iuA > div.legendMainSourceWrapper-l31H9iuA > div.item-l31H9iuA.series-l31H9iuA.withTail-l31H9iuA > div.noWrapWrapper-l31H9iuA > div.titlesWrapper-l31H9iuA > div.titleWrapper-l31H9iuA.mainTitle-l31H9iuA.apply-overflow-tooltip.apply-common-tooltip.withAction-l31H9iuA.withDot-l31H9iuA > div.title-l31H9iuA`).text()
console.log(firmaAdi);

var obj = {bistKodu,firmaAdi,oncekiFiyat,guncelFiyat,oran};
return obj;
}catch(err){
return {error:"404",text:"Girilen Bist Kodu Borsa Üzerinde Bulunamadı!"};
};
}