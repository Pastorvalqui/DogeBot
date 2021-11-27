// Script by Xeon 
// 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭
// ©Xeon Bot Incorporated
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const googleImage = require('g-i-s');
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { herodetails } = require('./lib/herodetail.js')
const { herolist } = require('./lib/herolist.js')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
// BATAS IMAGE FOLDER //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Good night";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Good evening🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Good afternoon🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Good afternoon☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Good morning🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Good night🌃";
    }
 // BATAS \\
menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = false;
autovn = false;
multi = true
harga = 0
matauang = 'USD'
nopref = true
numbernye = '0'
autoketik = false;
prefixStatus = false;
targetpc = "916909137213"; 
owner = "916909137213"; 
fakeyoi = "Agan"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
ApiZeks = "https://api.zeks.xyz",
zeksApikey = "Alphabott",
nomorowner1 = "@916909137213"; 
fake = `𝗢𝘄𝗻𝗲𝗿 : ${fakeyoi}\n㋛︎ 𝗣𝗿𝗲𝗳𝗶𝘅 :「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = true;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = xeon = async (xeon, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = xeon.user.jid;
    
    const botNumberss = xeon.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await xeon.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await xeon.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await xeon.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await xeon.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? xeon.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? xeon.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await xeon.chats.all();
    const ownerNumber = [`916909137213@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(xeon, mek);
    const groupMetadata = isGroup ? await xeon.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? xeon.user.jid
      : xeon.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? xeon.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `Hi ${pushname} ${ucapanWaktu} \n\nBefore Using the Bot Verify First `
       const daftar2 = '```Click the button below to verify bro or type 8473\n𝐃𝐨𝐠𝐞 𝐁𝐨𝐭```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `Verify`,
            },
            type: 1,
          },]
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "𝙒𝙖𝙞𝙩 𝘼 𝙈𝙞𝙣𝙪𝙩𝙚 シ︎",
      success: "Success シ︎",
      wrongFormat: "Wrong format, try again in the menu",
      error: {
        stick: "not that sticker :v",
        apiz: "error!, maybe because the api key has expired",
        Iv: "The link is error :v",
      },
      only: {
        group: "Only on chat group",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      xeon.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./xeon.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			xeon.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/916909137213?text=hello`}}})
		}*/
    const sendMess = (hehe, teks) => {
      xeon.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? xeon.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : xeon.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "Xeon",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./xeon.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `628551000185@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      xeon.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      xeon.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      xeon.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
xeon.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		xeon.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("done");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            xeon.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    xeon.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "Xeon",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "𝐃𝐨𝐠𝐞 𝐁𝐨𝐭",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        xeon.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
xeon.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xeon.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xeon.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xeon.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
xeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        xeon.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      xeon.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = xeon.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Xeon Bot Inc.`, "footerText": "*_𝐃𝐨𝐠𝐞 𝐁𝐨𝐭_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            xeon.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            xeon.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Katalog
const reply = (teks) => {
             res = xeon.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*Xeon*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             xeon.relayWAMessage(res)
        }
const fakewa = (teks) => {        
xeon.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Xeon`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/916909137213?text=hello`}}})
		}
const replyfakelink = (teks) => {
xeon.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\n𝐃𝐨𝐠𝐞 𝐁𝐨𝐭. (@nnda.krnwn_) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
xeon.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/916909137213`,
                "mediaType": "10",
                "mediaUrl": `wa.me/916909137213`,
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/916909137213`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
xeon.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hello ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
"mediaUrl": "https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await xeon.relayWAMessage(
        xeon.prepareMessageFromContent(
          target,
          xeon.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      xeon.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        xeon.sendMessage(
          mek.key.remoteJid,
          `@${owner} Currently Offline!\n\n*Reason :* ${alasan}\n*Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Seconds ago\n\nPlease contact again later`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  xeon.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Currently Offline!\n\n *Reason :* ${alasan}\n *Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Seconds ago\n\nPlease contact again later`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return xeon.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "916909137213@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " You have voted",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Reason*: ${_votes[0].reason}\n*Number of Votes* : ${vote.length} Vote\n*Duration* : ${_votes[0].durasi} Minute\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "916909137213@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " You have voted",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Reason*: ${_votes[0].reason}\n*Number of Votes* : ${vote.length} Vote\n*Duration* : ${_votes[0].durasi} Minute\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      xeon.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("only admin");
        reply("ANTILINK DETECTED!! SORRY YOU WILL BE KICKED ;V");
        xeon.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Detected sending image/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      xeon.copyNForward(m.chat, msg);
    }

    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        xeon.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("91")) {
        reply("GRUP ONLY +91!");
        xeon.groupRemove(from, [sender]);
      }
    }
    //auto voice note by xeon
    for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					xeon.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			//auto sticker
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					xeon.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			//auto image
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					xeon.sendMessage(from, result, image, { quoted: mek})
					}
			}
			// auto text 
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			// $cat
			    if (budy.startsWith('$')){
      const cod = args.join(' ')
      exec(cod, (err, stdout) => {
      if(err) return reply(`${err}`)
      if (stdout) {
      reply(`${stdout}`)
      }
      })
    }
    // whatsapp profie o status san\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await xeon.setStatus(`Bot Mode On Since ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':
              
if (isRegistered) return reply('Your account is verified')
const serialUser = createSerial(18)
	         try {
								ppimg = await xeon.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 *USER REGISTRATION* 」
*Thank you for registering in the 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭 Database*

*☂︎ Name :* ${pushname}
*☂︎ API :* +${sender.split('@')[0]}
*☂︎ Serial:* ${serialUser}
*☂ ︎Total:* ${_registered.length} User

*「 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭 」*`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `</️MENU`},type:1}]
              imageMsg = (await xeon.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'Xeon', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
              xeon.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			xeon.updatePresence(from, Presence.composing)
			reply(`*Thank you for being registered 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭*`)
		}, 2000)
        break
      
case 'help':
case 'menu':
groups = xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await xeon.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       txtt =`Hi ${pushname} 👋\n\nIF YOU ARE USING MOD WHATSAPP & BUTTONS DOESNT SHOW, TYPE #allmenu`

               buttons = [{buttonId:`allmenu`, 
               buttonText:{displayText: 'MENU🐶'},type:1},
               {buttonId:`owner`,buttonText:{displayText:'CREATOR🐶'},type:1},
               {buttonId:`command`,buttonText:{displayText:'LIST MENU🐶'},type:1}]


               imageMsg = (await xeon.prepareMessageMedia(fs.readFileSync(`./stik/oksip.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/oksip.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `シ︎ 𝙎𝙩𝙖𝙩𝙪𝙨 シ︎
               
 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               xeon.relayWAMessage(prep)
             
               break

        case 'allmenu':
        case 'xeon':
groups = xeon.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = xeon.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await xeon.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "916909137213@s.whatsapp.net"
        dtod = '916909137213'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await xeon.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `
🐶 Hi @${sender.split("@")[0]}

シ︎ 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
シ︎ 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
シ︎ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
シ︎ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
シ︎ 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
シ︎ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
${readmore}
 
 ⬣ 𝙊𝙒𝙉𝙀𝙍 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}off
> ⬡ ${prefix}isbaileys
> ⬡ ${prefix}banchat
> ⬡ ${prefix}unbanchat
> ⬡ ${prefix}listbc
> ⬡ ${prefix}setcmd
> ⬡ ${prefix}delcmd
> ⬡ ${prefix}listcmd
> ⬡ ${prefix}restart
> ⬡ ${prefix}antidelete on|off
> ⬡ ${prefix}autotype on|off
> ⬡ ${prefix}autoread gc in / gc off
> ⬡ ${prefix}autovn on|off
> ⬡ ${prefix}anticall on|off
> ⬡ ${prefix}getcaption
> ⬡ ${prefix}bugcatalog
> ⬡ ${prefix}buggc id grup
> ⬡ ${prefix}okvirtex
> ⬡ ${prefix}on
> ⬡ ${prefix}status
> ⬡ ${prefix}setthumb
> ⬡ ${prefix}settarget
> ⬡ ${prefix}setfakeimg
> ⬡ ${prefix}setreply
> ⬡ ${prefix}hacked name
> ⬡ ${prefix}setprefix
> ⬡ ${prefix}mode /public-self/
> ⬡ ${prefix}term <code>
> ⬡ ${prefix}eval <code>
> ⬡ ${prefix}colongsw reply
 > ⬡ ${prefix}addvn <reply audio with name>
 > ⬡ ${prefix}delvn <audio name>
 > ⬡ ${prefix}vnlist
 > ⬡ ${prefix}addsticker <reply sticker with name>
 > ⬡ ${prefix}delsticker <sticker name>
 > ⬡ ${prefix}stickerlist
 > ⬡ ${prefix}addimage <reply image with name>
 > ⬡ ${prefix}delimage <image name>
 > ⬡ ${prefix}imagelist
  > ⬡ ${prefix}bc


 ⬣ 𝙂𝙍𝙊𝙐𝙋 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}grup 
> ⬡ ${prefix}promote 
> ⬡ ${prefix}demote 
> ⬡ ${prefix}setdesc
> ⬡ ${prefix}setname
> ⬡ ${prefix}nsfw 1/0
> ⬡ ${prefix}kick 
> ⬡ ${prefix}add 
> ⬡ ${prefix}getbio
> ⬡ ${prefix}getname 
> ⬡ ${prefix}reminder 
> ⬡ ${prefix}listonline
> ⬡ ${prefix}sider reply
> ⬡ ${prefix}antilink on|off
> ⬡ ${prefix}tod
> ⬡ ${prefix}tospam amount
> ⬡ ${prefix}antivirtex on|off
> ⬡ ${prefix}autojoin on|off
> ⬡ ${prefix}kickarea
> ⬡ ${prefix}grouplink
> ⬡ ${prefix}resetlink
> ⬡ ${prefix}group [open/close(button)]
 

 ⬣ 𝙈𝘼𝙆𝙄𝙉𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}sticker
> ⬡ ${prefix}swm author|packname
> ⬡ ${prefix}take author|packname
> ⬡ ${prefix}fdeface
> ⬡ ${prefix}emoji
> ⬡ ${prefix}golden text
> ⬡ ${prefix}flower text
> ⬡ ${prefix}wooden text
> ⬡ ${prefix}burn text
> ⬡ ${prefix}glow text
> ⬡ ${prefix}summer text
> ⬡ ${prefix}neon text
> ⬡ ${prefix}coffeecup text
> ⬡ ${prefix}coffeecup2 text
> ⬡ ${prefix}battlefield text|text
> ⬡ ${prefix}googletxt2 text|text
> ⬡ ${prefix}transformer text|text
> ⬡ ${prefix}write text
> ⬡ ${prefix}waifu
> ⬡ ${prefix}phlogo text|*text
> ⬡ ${prefix}tfire text
> ⬡ ${prefix}phcomment text|text
> ⬡ ${prefix}wolf text
> ⬡ ${prefix}ytgol text
> ⬡ ${prefix}ytsilver text
> ⬡ ${prefix}t3d text
> ⬡ ${prefix}logoa text|text
> ⬡ ${prefix}marvel text|text
> ⬡ ${prefix}leavest text
> ⬡ ${prefix}neon2 text
> ⬡ ${prefix}wall text
> ⬡ ${prefix}notewrite text
> ⬡ ${prefix}pubglogo text|text

 
 ⬣ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}tomp3
> ⬡ ${prefix}tomp4
> ⬡ ${prefix}toimg
> ⬡ ${prefix}slow
> ⬡ ${prefix}fast
> ⬡ ${prefix}reverse
> ⬡ ${prefix}tourl


 ⬣ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}play query
> ⬡ ${prefix}play2 query
> ⬡ ${prefix}playv2 link
> ⬡ ${prefix}playm2 link
> ⬡ ${prefix}song query
> ⬡ ${prefix}video query
> ⬡ ${prefix}instagram link
> ⬡ ${prefix}twitter
> ⬡ ${prefix}facebook link
> ⬡ ${prefix}tiktok link
> ⬡ ${prefix}tiktokmp3 link
> ⬡ ${prefix}ytmp3 link
> ⬡ ${prefix}ytmp4 link
 

 ⬣ 𝙏𝘼𝙂 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}hidetag
> ⬡ ${prefix}contag
> ⬡ ${prefix}sticktag
> ⬡ ${prefix}totag
 

 ⬣ 𝙐𝙋𝙎𝙒 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}upswtxt
> ⬡ ${prefix}upswlocation
> ⬡ ${prefix}upswsticker
> ⬡ ${prefix}upswimage
> ⬡ ${prefix}upswvideo
> ⬡ ${prefix}upswgif
 

 ⬣ 𝙁𝙐𝙉 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}slander
> ⬡ ${prefix}slanderpc
> ⬡ ${prefix}contact 0|p
> ⬡ ${prefix}suit
> ⬡ ${prefix}toxic
> ⬡ ${prefix}dice
> ⬡ ${prefix}intake
> ⬡ ${prefix}viewonce
> ⬡ ${prefix}hbd
> ⬡ ${prefix}herodetail hero name
> ⬡ ${prefix}herolist hero name
> ⬡ ${prefix}beautycheck @tag
> ⬡ ${prefix}uglycheck @tag
> ⬡ ${prefix}handsomecheck @tag
> ⬡ ${prefix}lesbicheck @tag
> ⬡ ${prefix}character @tag
> ⬡ ${prefix}gaycheck @tag
> ⬡ ${prefix}is
> ⬡ ${prefix}can
> ⬡ ${prefix}rate
> ⬡ ${prefix}when
> ⬡ ${prefix}couple
> ⬡ ${prefix}handsome
> ⬡ ${prefix}pretty


 ⬣ 𝙉𝙎𝙁𝙒 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎
> ⬡ ${prefix}yuri
> ⬡ ${prefix}hentai
> ⬡ ${prefix}anal
> ⬡ ${prefix}eroneko
> ⬡ ${prefix}lesbian
> ⬡ ${prefix}kitsune
> ⬡ ${prefix}bj
> ⬡ ${prefix}pussy
> ⬡ ${prefix}wallpaper
> ⬡ ${prefix}neko2
> ⬡ ${prefix}baka
> ⬡ ${prefix}slap
> ⬡ ${prefix}poke
> ⬡ ${prefix}keta
> ⬡ ${prefix}awoo
> ⬡ ${prefix}blowjob
> ⬡ ${prefix}megumin
> ⬡ ${prefix}neko
> ⬡ ${prefix}trapnime

𝗡𝗼𝘁𝗲 : Horny = Bonks💥
Just Learn to Make Bots 🐶
 
𝘼𝙈 𝙉𝙊𝙏 𝘼 𝙋𝙍𝙊𝙂𝙍𝘼𝙈𝙈𝙀𝙍 𝘽𝙍𝙊
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`credit`,buttonText:{displayText:'THANKS TO'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'credit':
   dtod = '916909137213'
   dtod1 = '916909137213'
   dtod2 = '919774340154'
   dtod3 = ''
   dtod4 ='0'
   var yez = `
   [ 𝐶𝑟𝑒𝑑𝑖𝑡𝑠 𝐵𝑦 ] :
   
 🌿 : wa.me/${dtod1.split("@")[0]}
 🌿 : wa.me/${dtod.split('@')[0]}
 🌿 : wa.me/${dtod2.split('@')[0]}
 `
     credit = xeon.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "hehe", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            xeon.relayWAMessage(credit)
        break
case 'suit':
              if (!q) return reply(`Send orders ${prefix}suit scissors / stone / paper`)
              const userspilih = q
              if (!userspilih.match(/rock|scissors|paper/)) return reply(`Choose rock, paper, scissors`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'rock';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'scissors';
              } else {
              computer = 'paper';
}
              if ( userspilih == computer ) {
              reply(`Series Match!`)
              } else if ( userspilih == 'rock' ) {
              if( computer == 'scissors' ) {
              reply(`You choose Rock and Scissors bot\nYou win!`)
              } else {
              reply(`You choose Rock and bots choose Paper\nYou lose!`)
}
              } else if ( userspilih == 'scissors' ) {
              if( computer == 'rock' ) {
              reply(`You choose Scissors and bots choose Rock\nYou lose!`)
              } else {
              reply(`You choose Scissors and Paper bot\nYou win!`)
}
              } else if ( userspilih == 'paper' ) {
              if( computer == 'rock' ) {
              reply(`You choose Paper and Rock bot\nYou win!`)
              } else {
              reply(`You choose Paper and bots choose Scissors\nYou lose`)
}
}
              break
case 'bugreport':
              if (args.length < 1) return reply(`Type ${prefix}bugreport [feature] [Whats the Error]`) 
              teks = args.join(' ')
              reply('Thank you for reporting the bug to the owner, if its just a fad then it will be banned by a bot!')
              xeon.sendMessage('916909137213@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              break
case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
break
case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
              case 'storyanime': case 'sanime':{
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dapapi}`)
kodi = `*_CLICK NEXT FOR MORE_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break       
case 'quotesyt':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dapapi}`)
                xeon.sendMessage(from, dapuhy, image, {quoted: mek})        
                break    
case 'auu': // by xeon
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       reply('No Sis')
        sendButMessage(from, `Hi ${pushname} 🐶`, `What do you want to answer??`, [
          {
            buttonId: `oklah`,
            buttonText: {
              displayText: `WHY:)`,
            },
            type: 1,
          },
          {
            buttonId: `apaan6`,
            buttonText: {
              displayText: `BYE`,
            },
            type: 1,
          },
          {
            buttonId: `lawokkk`,
            buttonText: {
              displayText: `END :/`,
            },
            type: 1,
          },
        ]);
        break;
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('yes no time')
break
case 'h':
reply('he/she is gone bro.. may he/she go to hell too 😏')
break
case 'okeyx':
reply('💐🌺🌻I WELCOME THE NEW MEMBER WITH SOME FLOWERS🌻🌺💐')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  reply('*click on the link below*\nwa.me/916909137213')
break
   
case 'owner':
           case 'creator':
             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Busy!!')
               await sleep(1000)
               haibg =`Hi ${pushname}\nThats my owner, What do you want to know about??`
               buttons = [{buttonId: `mygithub`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`iggw`,buttonText:{displayText:'PM ON WHATSAPP'},type:1}]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Created By ${fakeyoi} 🌿`, buttons: buttons, headerType: 1 }
               prep = await xeon.prepareMessageFromContent(from,{buttonsMessage},{})
               xeon.relayWAMessage(prep)
               break     
            
case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
xeon.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Enter the Group ID')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                 xeon.toggleDisappearingMessages(from, 0)
               xeon.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": fs.readFileSync(`./xeon.jpg`),
                "sourceUrl": "https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
        xeon.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        xeon.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
xeon.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieDick",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
xeon.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
xeon.toggleDisappearingMessages(from, 0)
break
case 'bugcatalog':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
xeon.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = xeon.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             xeon.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
                           case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									 xeon.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									 xeon.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
              case 'dice':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			xeon.sendMessage(from, damdu, sticker, {quoted: mek})
			break
 case 'owner3':
let ini_list = []
for (let i of nomorowner1) {
const vname = xeon.contacts[i] != undefined ? xeon.contacts[i].vname || xeon.contacts[i].notify : undefined
ini_list.push({
"displayName": 'Xeon',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${xeon.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await xeon.sendMessage(from, {
"displayName": `${ini_list.length} contact`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
xeon.sendMessage(from,'This is my owners contact',text,{quoted: mek})
break
case 'command':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
 footerText: '𝐃𝐨𝐠𝐞 𝐁𝐨𝐭',
 description: `Hi @${sender.split('@')[0]}, Please select the menu here`,
 sections: [
                     {
                      "title": `Xeon`,
 rows: [
                          {
                              "title": "Script",
                              "rowId": ""
                           },
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "Rentbot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": "d"
                           },
                           {
                              "title": "UpswMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
xeon.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'downloadmenu':
menu = `シ︎𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶シ︎
㋛${prefix}𝙮𝙩𝙢𝙥4 𝙡𝙞𝙣𝙠

㋛${prefix}𝙮𝙩𝙢𝙥3 𝙡𝙞𝙣𝙠

㋛${prefix}𝙥𝙡𝙖𝙮 𝙦𝙪𝙚𝙧𝙮

㋛${prefix}𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 <𝙪𝙧𝙡>

㋛${prefix}𝙩𝙬𝙞𝙩𝙩𝙚𝙧 <𝙪𝙧𝙡>
`
sendButMessage(from, menu, `𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `𝘽𝙖𝙘𝙠 𝙈𝙚𝙣𝙪 シ︎`,
            },
            type: 1,
          },]);
break
case 'groupmenu':
menu = `シ𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶︎シ︎
㋛${prefix}grup [3 Button]

㋛${prefix}promote <reply chat member>

㋛${prefix}demote <reply chat member>

㋛${prefix}setdesc

㋛${prefix}nsfw 1/0

㋛${prefix}setname

㋛${prefix}kick <reply/tag member>

㋛${prefix}add <reply/tag member>

㋛${prefix}getbio <reply chat member>

㋛${prefix}getname <reply chat member>

㋛${prefix}reminder <msg/2s>

㋛${prefix}listonline

㋛${prefix}sider [reply chat bot]

㋛${prefix}antilink

㋛${prefix}tod 

㋛${prefix}tospam amount

㋛${prefix}autojoin

㋛${prefix}antivirtex

㋛${prefix}kickarea

㋛${prefix}grouplink

㋛${prefix}resetlink

㋛${prefix}group [open/close(button)]
`
sendButMessage(from, menu, ` 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'ownermenu':
menu = `シ︎𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶シ︎
㋛${prefix}off

㋛${prefix}bc

㋛${prefix}isbaileys

㋛${prefix}banchat

㋛${prefix}unbanchat

㋛${prefix}listbc

㋛${prefix}antidelete on|off

㋛${prefix}autotype on| off

㋛${prefix}autoread gc on / gc off

㋛${prefix}autovn on / off

㋛${prefix}anticall on | off

㋛${prefix}getcaption

㋛${prefix}bugcatalog

㋛${prefix}buggc [id grup]

㋛${prefix}okvirtex

㋛${prefix}on

㋛${prefix}status

㋛${prefix}setthumb

㋛${prefix}settarget

㋛${prefix}setfakeimg

㋛${prefix}setreply

㋛${prefix}hacked

㋛${prefix}setprefix

㋛${prefix}mode [2 Button self/public]

㋛${prefix}term <code>

㋛${prefix}eval <code>

㋛${prefix}colongsw [reply sw]

㋛${prefix}addvn <reply audio with name>

㋛${prefix}delvn <audio name>
 
㋛${prefix}vnlist
 
㋛${prefix}addsticker <reply sticker with name>
 
㋛${prefix}delsticker <sticker name>
 
㋛${prefix}stickerlist
 
㋛${prefix}addimage <reply image with name>
 
㋛${prefix}delimage <image name>
 
㋛${prefix}imagelist`
sendButMessage(from, menu, `𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'upswmenu':
menu = `シ︎𝘜𝘱𝘴𝘸 𝘔𝘦𝘯𝘶シ︎
㋛${prefix}upswteks teks

㋛${prefix}upswvideo

㋛${prefix}upswimage

㋛${prefix}upswvoice

㋛${prefix}upswsticker

㋛${prefix}upswlocation
`
sendButMessage(from, menu, ` 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'othermenu':
menu = `シ︎𝘖𝘵𝘩𝘦𝘳 𝘔𝘦𝘯𝘶シ︎
㋛${prefix}ping

㋛${prefix}inspect

㋛${prefix}join

㋛${prefix}dice

㋛${prefix}numbers [number]

㋛${prefix}quote

㋛${prefix}write text

㋛${prefix}writeleft text

㋛${prefix}folioleft text

㋛${prefix}folioright text

㋛${prefix}ss link web

㋛${prefix}songlyrics <query>

㋛${prefix}namemeaning <name>

㋛${prefix}debug

㋛${prefix}loli 

㋛${prefix}debug2

㋛${prefix}infoearthquake

㋛${prefix}chat 91|P

㋛${prefix}searchmessage <query>

㋛${prefix}get url

㋛${prefix}githubstalk <query>

㋛${prefix}ytsearch <query>

㋛${prefix}igstalk <query>

㋛${prefix}tiktokstalk <query>

㋛${prefix}play <query>

㋛${prefix}video <query>

㋛${prefix}igstory <username>

㋛${prefix}twitter <link>

㋛${prefix}tiktok <link>

㋛${prefix}fb <link>

㋛${prefix}image <query>

㋛${prefix}anime <random>

㋛${prefix}pinterest <query>

㋛${prefix}comic <query>

㋛${prefix}lyrics <query>

㋛${prefix}chara <query>

㋛${prefix}playstore <query>

㋛${prefix}google <query>

㋛${prefix}gimage <query>
`
sendButMessage(from, menu, ` 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'makermenu':
menu = `シ︎𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶シ︎
㋛${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧

㋛${prefix}𝙨𝙬𝙢 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>

㋛${prefix}𝙩𝙖𝙠𝙚 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>

㋛${prefix}fdeface

㋛${prefix}emoji

㋛${prefix}golden text

㋛${prefix}flower text

㋛${prefix}wooden text

㋛${prefix}burn text

㋛${prefix}glow text

㋛${prefix}summer text

㋛${prefix}neon text

㋛${prefix}coffeecup2 text

㋛${prefix}coffeecup text

㋛${prefix}battlefield text|text

㋛${prefix}googletxt2 text|text

㋛${prefix}transformer text|text

㋛${prefix}write text

㋛${prefix}waifu
`
sendButMessage(from, menu, ` 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'catalog':
      list = await xeon.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": iye
        },
        "businessOwnerJid": sender
      },
      "footerText": " 𝐃𝐨𝐠𝐞 𝐁𝐨𝐭"
    }
  }, {quoted: freply})
  xeon.relayWAMessage(list, {waitForAck: true})
       
case 'triggered':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await xeon.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                let ane = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${tolink}`)
                fs.writeFileSync('./sticker/triggered.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xeon.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
                    
                    fs.unlinkSync(`./sticker/triggered.webp`)	
                })
                }
            
                break
  break
case 'script':
		case 'sc':
		case 'sourcecode':
		xeon.sendMessage(from, { text: "https://github.com/DGXeon/DogeBot", matchedText: 'nopee', description: "", title: "What are you doing?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Usage : ${command} cmd and tag sticker`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("the sticker tag");
        }
        break;
	case 'upswtxt':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (args.length < 1) return reply('The text?')
                    teks = body.slice(10)
                    xeon.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Successful upload status:\n${teks}`)
                    break	
                    case 'upswlocation':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
  if (args.length < 1) return reply('The text?')
                    teks = body.slice(12)
                    xeon.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
                    reply(`Location upload success:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedSticker) return reply('Reply the sticker!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xeon.downloadMediaMessage(encmedia)
						xeon.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Successfully uploading stickers`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xeon.downloadMediaMessage(encmedia)
						xeon.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Audio upload success`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedAudio) return reply('Reply audio!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xeon.downloadMediaMessage(encmedia)
						xeon.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Voice upload success`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await xeon.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    xeon.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Successful video upload:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xeon.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    xeon.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Gif upload success:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xeon.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    xeon.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Image upload success:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
				return xeon.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Usage : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat fixed by xeon
case 'banchat':
if (!isGroup) return reply('this feature is only for groups')
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*This Order is Specially for owner @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`already banned`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Successful bot Ban on this group`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply('Only owner can use this feature')
if (!isBanchat) return reply(`Already at UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`The bot has been unbanned in this group`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await xeon.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
// add vn
case 'addvn':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
if (!isQuotedAudio) return reply('Reply to vn or audio')
nm = body.slice(7)
					if (!nm) return reply('Whats the vn name??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xeon.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					xeon.sendMessage(from, `Success, please check with *${prefix}vnlist*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Successfully delete vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply('error! maybe already deleted')
					}
					break
					case 'vnlist':
				case 'listvn':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_To retrieve vn please reply to this message with the caption vn name_`
					xeon.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
					// add sticker
					case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
					if (!isQuotedSticker) return reply('Reply to stiker')
					nm = body.slice(12)
					if (!nm) return reply('Whats the name of the sticker??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xeon.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					xeon.sendMessage(from, `Success, please check with *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
					case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Successfully removing the sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply('error! maybe already deleted')
					}
					break
					case 'stickerlist':
				case 'liststicker':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_To take a sticker, please reply to this message with the caption of the sticker name_`
					xeon.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					// add image
					case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
					if (!isQuotedImage) return reply('Reply to image')
					nm = body.slice(10)
					if (!nm) return reply('Whats the name of the image??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xeon.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					xeon.sendMessage(from, `Success, please check with *${prefix}imagelist*`, MessageType.text, { quoted: mek })
					break
					case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Successfully delete image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply('error! or maybe already deleted')
					}
					break
					case 'imagelist':
				case 'listimage':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_To take an image, please reply to this message with the caption image name_`
					xeon.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
					// add respond
					case 'addrespond':
			if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
				if (args.length < 1) return reply(`Use ${prefix}addrespond Hi|Hi too`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Already there`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Successful adding response ${argz[0]}`)
				break
				case 'delrespond':
			if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
				if (args.length < 1) return reply(`Use ${prefix}delrespond hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Not in the database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Successfully deleted response ${body.slice(11)}`)
				break
				case 'respondlist':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Ask:* ${commandsDB[i].pesan}\n`
teks += `❏ *Reply:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break 
// group link 
case 'linkgroup':
case 'linkgroup':
				case 'linkgc':
				case 'grouplink':
				case 'gruplink':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
				if (!isGrou…
