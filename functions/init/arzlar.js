const axios = require("axios");
const cheerio = require("cheerio");
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const arzlar = async () => {
  var data = [];
  try {
    const response = await axios.get("https://halkarz.com");
    const $ = cheerio.load(response.data);
    const halkaArzList = [];
    $("div.tab_content div.tab_item ul.halka-arz-list li").each((index, li) => {
      const text = $(li).html();
      halkaArzList.push(text);
    });

    if (halkaArzList.length > 0) {
      $("article.index-list").each(async (index, article) => {
        const $article = $(article);
        const link = $article.find("h3.il-halka-arz-sirket a").attr("href");
        try {
          const newresponse = await axios.get(link);
          const $$ = cheerio.load(newresponse.data);
          const halkaArzSirket = $$(".il-halka-arz-sirket").text().trim();
          const halkaArzBilgileri = $$(".il-content .il-b").text().trim();
          const halkaArzTarihi = $$("tr.font-16 td time").text().trim();
          const halkaArzFiyati = $$("tr.font-16 td strong").text().trim();
          const dagitimYontemi = $$('tr td em:contains("Dağıtım Yöntemi : ")').parent().next().find("strong").text();
          const pay = $$('tr td em:contains("Pay : ")').parent().next().find("strong").text();
          const araciKurum = $$('tr td em:contains("Aracı Kurum : ")').parent().next().find("strong").text();
          const bistKodu = $$('tr td em:contains("Bist Kodu : ")').parent().next().find("strong").text();
          const pazar = $$('tr td em:contains("Pazar : ")').parent().next().find("strong").text();

          const özetBilgilerList = $$('article.sp-arz-extra ul.aex-in li');
          const bilgiler = [];
          özetBilgilerList.each((index, element) => {
            const title = $$(element).find('h5').text().trim();
            const pElements = $$(element).find('p');
            const bilgiArray = [];
            pElements.each((i, pElement) => {
              const pText = $$(pElement).text().replace(/<br\s?\/?>/g, '').replace(/<small>|<\/small>/g, '').trim().replace(/\s+/g, ' ');
              bilgiArray.push(pText);
            });

            bilgiler.push({ title, bilgiler: bilgiArray });
          });

          data.push({
            halkaArzSirket,
            halkaArzBilgileri,
            halkaArzTarihi,
            halkaArzFiyati,
            dagitimYontemi,
            pay,
            araciKurum,
            pazar,
            bistKodu,
            otherData: bilgiler
          });
        } catch (error) {
          data =  { error: "404", text: "Not found" }
        }
      });
      return data
    } else {
      data =  { error: "404", text: "Not found" }
    }
  } catch (error) {
    data =  { error: "404", text: "Not found" }
  }

};
module.exports = arzlar
