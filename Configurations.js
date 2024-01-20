require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "2349049640547";   // You can replace this number with yours //
}


global.owner = gg.split("2349049640547,2349150690169");
global.mongodb = process.env.MONGODB || "mongodb+srv://pobasuyi69:9UW3Yra6HZFUCT0B@cluster0.lum7yrw.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "567HGKJHSFLJFG";
global.prefa = process.env.PREFIX || "#";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `SHADOW-MD`;
global.author = process.env.AUTHOR || "By: Cipher";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";

module.exports = {
  mongodb: global.mongodb,
};
