const {HalkArz,Events,açıkArzlar,arzlar,taslakArzlar} = require("./functions/HalkArz")
const xd = new HalkArz();

const axios = require("axios");
const cheerio = require("cheerio");


xd.init();



xd.on(Events.Duyurular,(data) => {
    console.log(data)
})

xd.on(Events.Analizler,(data) => {
    console.log(data)
})



