const tts = require("google-tts-api");
let mergedCommands = [
  "say",
  "speak",
  "tts",
  "saybengali",
  "saybangla",
  "sayhindi",
  "sayja",
  "sayjapanese",
  "saykorean",
  "saychinese",
  "sayindo",
  "sayindonesian",
];

module.exports = {
  name: "texttospeech",
  alias: [...mergedCommands],
  uniquecommands: [
    "say",
    "speak",
    "tts",
    "saybengali",
    "sayhindi",
    "sayjapanese",
    "saykorean",
    "saychinese",
    "sayindo",
  ],
  description: "All Text to Speech Commands",
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
    let sayMess;
    if (!text && !m.quoted) {
      await doReact("❔");
      return m.reply(
        `Please provide a text (Type or mention a message) !\n\nExample: ${prefix}say shadow MD is OP`
      );
    }
    if (!isMedia) {
      sayMess = m.quoted
        ? m.quoted.msg
        : args[0]
        ? args.join(" ")
        : "No text found";
    } else {
      await doReact("❌");
      return m.reply(
        `Please provide a text (Type or mention a message) !\n\nExample: ${prefix}say shadow MD is OP`
      );
    }
    switch (inputCMD) {
      case "say":
      case "speak":
      case "tts":
        await doReact("🪄");
        await shadow.sendPresenceUpdate("recording", m.from);
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "en",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !: ${e}`);
        });

        break;

      case "saybengali":
      case "saybangla":
        await doReact("🪄");
        await shadow.sendPresenceUpdate("recording", m.from);
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "bn",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !: ${e}`);
        });

        break;

      case "sayhindi":
        await doReact("🪄");
        await shadow.sendPresenceUpdate("recording", m.from);
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "hi",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !`);
        });

        break;

      case "sayja":
      case "sayjapanese":
        await shadow.sendPresenceUpdate("recording", m.from);
        await doReact("🪄");
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "ja",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !`);
        });
        break;

      case "saykorean":
        await doReact("🪄");
        await shadow.sendPresenceUpdate("recording", m.from);
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "ko",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !`);
        });
        break;

      case "saychinese":
        await doReact("🪄");
        await shadow.sendPresenceUpdate("recording", m.from);
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "zh-TW",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !`);
        });

        break;

      case "sayindo":
      case "sayindonesian":
        await doReact("🪄");
        await shadow.sendPresenceUpdate("recording", m.from);
        texttospeechurl = tts.getAllAudioUrls(sayMess, {
          lang: "id",
          slow: false,
          host: "https://translate.google.com",
          splitPunct: ',.?',
        });

        await shadow.sendMessage(
          m.from,
          { audio: { url: texttospeechurl[0].url }, mimetype: "audio/mpeg" },
          { quoted: m }
        ).catch((e) => {
          m.reply(`An error Occurd !`);
        });

        break;

      default:
        break;
    }
  },
};
