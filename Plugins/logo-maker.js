const maker = require("mumaker");

let mergedCommands = [
  "3dchristmas",
  "3dneon",
  "3dspace",
  "3dstone",
  "bear",
  "blackpink",
  "blood",
  "bookeh",
  "candy",
  "carbon",
  "chocolate",
  "christmas",
  "cloud",
  "circuit",
  "deepsea",
  "dropwater",
  "glitch",
  "glitch2",
  "glitch3",
  "graffiti",
  "joker",
  "lion",
  "holographic",
  "magma",
  "matrix",
  "neon",
  "neonlight",
  "neongreen",
  "papercut",
  "pencil",
  "pornhub",
  "scifi",
  "sparklechristmas",
  "thunder",
  "thunder2",
  "wolf",
  "wall",
  "transformer",
];
module.exports = {
  name: "logomakers",
  alias: [...mergedCommands],
  uniquecommands: [
    "3dchristmas",
    "3dneon",
    "3dspace",
    "3dstone",
    "bear",
    "blackpink",
    "blood",
    "bookeh",
    "candy",
    "carbon",
    "chocolate",
    "christmas",
    "cloud",
    "circuit",
    "deepsea",
    "dropwater",
    "glitch",
    "glitch2",
    "glitch3",
    "graffiti",
    "joker",
    "lion",
    "holographic",
    "magma",
    "matrix",
    "neon",
    "neonlight",
    "neongreen",
    "papercut",
    "pencil",
    "pornhub",
    "scifi",
    "sparklechristmas",
    "thunder",
    "thunder2",
    "wolf",
    "wall",
    "transformer",
  ],
  description: "All Logo maker Commands",
  start: async (
    shadow,
    m,
    {
      inputCMD,
      text,
      pushName,
      prefix,
      doReact,
      args,
      mentionByTag,
      mime,
      isMedia,
      quoted,
    }
  ) => {
    if (inputCMD == "logomakers") return m.reply("choose logomaker from menu");
    switch (inputCMD) {
      case "3dcristmas":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}3dchristmas shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/3d-christmas-text-effect-by-name-1055.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "3dneon":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}3dneon shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "3dspace":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}3dspace shadow Bot , Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/create-space-3d-text-effect-online-985.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "3dstone":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}3dstone shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "bear":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}bear shadow Bot , Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "blackpink":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}blackpink shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-blackpink-logo-style-online-1001.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));

        break;

      case "blood":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}blood shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/horror-blood-text-effect-online-883.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "bokeh":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}bokeh shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/bokeh-text-effect-876.html", [`${text}`])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "candy":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}candy shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "carbon":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}carbon shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/carbon-text-effect-833.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "chocolate":
        if (!text) {
          doReact("❌");
          return m.reply(`Example: *${prefix}chocolate shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "christmas":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}christmas shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "circuit":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}circuit shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "cloud":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}cloud shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "deepsea":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}deepsea shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "demon":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}demon shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "dropwater":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}dropwater shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/dropwater-text-effect-872.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "glitch":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}glitch shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "glitch2":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}glitch2 shadow Bot , Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "glitch3":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}glitch3 shadow Bot , Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "graffiti":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}graffiti shadow Bot,Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "hollographic":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}holographic shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "joker":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}joker shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/create-logo-joker-online-934.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "lion":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}lion shadow Bot , Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/create-lion-logo-mascot-online-938.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "magma":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}magma shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "matrix":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}matrix shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/matrix-style-text-effect-online-884.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "neon":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}neon shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/neon-text-effect-online-879.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "neondevil":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}neondevil shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "neongreen":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}neonlight shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "neonlight":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}neonlight shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "papercut":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}papercut shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "pencil":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}pencil shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "pornhub":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}pornhub shadow Bot,Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "scifi":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}scifi shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "sparklechristmas":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}schristmas shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/sparkles-merry-christmas-text-effect-1054.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "thunder":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}thunder shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/online-thunder-text-effect-generator-1031.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "transformer":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}transformer shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-a-transformer-text-effect-online-1035.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "thunder2":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}thunder2 shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro(
            "https://textpro.me/create-thunder-text-effect-online-881.html",
            [`${text}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "wall":
        if (!text) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}wall shadow Bot*`);
        }
        await doReact("🏮");
        maker
          .textpro("https://textpro.me/break-wall-text-effect-871.html", [
            `${text}`,
          ])
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      case "wolf":
        if (!text.includes(",")) {
          await doReact("❌");
          return m.reply(`Example: *${prefix}wolf shadow Bot , Cipher*`);
        }
        await doReact("🏮");
        teks1 = text.split(",")[0];
        teks2 = text.split(",")[1];
        maker
          .textpro(
            "https://textpro.me/create-wolf-logo-galaxy-online-936.html",
            [`${teks1}`, `${teks2}`]
          )
          .then((data) =>
            shadow.sendMessage(
              m.from,
              { image: { url: data }, caption: `Made by ${botName}` },
              { quoted: m }
            )
          )
          .catch((err) => m.reply("An Error occued !"));
        break;

      default:
        break;
    }
  },
};
