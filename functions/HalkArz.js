const EventEmitter = require('node:events');
const arzlar  = require("./init/arzlar");
const taslakArzlar = require("./init/tasklak-arzlar");
const açıkArzlar = require("./init/acik-arzlar");
const duyurular = require("./init/duyurular");
const analizler = require("./init/analizler");
const kur = require("./init/kur");
const { YamlDatabase } = require("five.db");
const db = global.db = new YamlDatabase({databasePath:"./functions/database/arz-database.yml"});
var Events = {
Duyurular: "duyurular",
Analizler: "analizler",
};
class HalkArz extends EventEmitter {
constructor(){
super();
this.event = new EventEmitter();
};
init(){
try {
setInterval(async() => {
let duyuruData = db.get(`lastTitleDuyuru`);
let duyuru = await duyurular();
if(!duyuruData || duyuruData !== duyuru?.baslik){
db.set(`lastTitleDuyuru`,duyuru?.baslik);
this.emit("duyurular",duyuru)
}  
let analizData = db.get(`lastTitleAnaliz`);
let analiz = await analizler();
if(!analizData || analizData !== analiz?.baslik){
db.set(`lastTitleAnaliz`,analiz?.baslik);
this.emit("analizler",analiz)
}
}, 5000);
} catch (error) {
console.error(error);
}
}
}
module.exports = { HalkArz, taslakArzlar, açıkArzlar, arzlar, Events};