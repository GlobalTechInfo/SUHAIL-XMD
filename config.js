const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_49_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIUGpneUdtTnhtZ1B2QmQvUEFkVFczYTNzQzZNRGt5dXFFaXRmc1RmdlZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2NTMyOTQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQzc3Mjg2QjY0NjQ5NzVBRTUzRjRBQkYyMDFFMDIwOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA5MDgxMzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM3pkaEowTTBSaldMb1ZjNzQ5M0xrd1wiLFxuICBcInBob25lSWRcIjogXCJkMGY2MDVkNy05ZGVkLTQ0MjYtOTM0MS0yZjlhNzAwNjk3YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMzksXG4gICAgICA1LFxuICAgICAgMTQxLFxuICAgICAgNTMsXG4gICAgICA5OCxcbiAgICAgIDI0OCxcbiAgICAgIDIyNyxcbiAgICAgIDU0LFxuICAgICAgMjAsXG4gICAgICAyMjksXG4gICAgICAyMzUsXG4gICAgICAxMTEsXG4gICAgICA2MSxcbiAgICAgIDIzOSxcbiAgICAgIDMyLFxuICAgICAgMTkxLFxuICAgICAgMjE0LFxuICAgICAgMjksXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAxNTIsXG4gICAgICAyNTUsXG4gICAgICAxMzEsXG4gICAgICAyMixcbiAgICAgIDE2NyxcbiAgICAgIDE0NCxcbiAgICAgIDEyMCxcbiAgICAgIDIzMixcbiAgICAgIDIxOSxcbiAgICAgIDEwOCxcbiAgICAgIDE2NyxcbiAgICAgIDE1NixcbiAgICAgIDE1NyxcbiAgICAgIDQxLFxuICAgICAgMTQ2LFxuICAgICAgNixcbiAgICAgIDE5MixcbiAgICAgIDE5MCxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBRTRCWERKRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzY1MzI5NDI6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MjA5NTUxNDM5ODkwMzo0NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV3cxcVVFRU9PZnJya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJQWU8rc1dwOHJ1b2x6TUp5UmNIdlIyRW1iQ2xucnJsS3lLUWhyRjkveWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibTgySTVJSmZ0ZUNmQmhzVkNHYW1sZXZZdzcyMzJFd3ZuT2VSMXB5TFpSandqenNWSm1JM3VJd0dBa3RCbEFkUkg2Q1VMK3Zmc21telZtaWovNjEyQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUGx3UFVtd1hyamtCWks5SHcxcFpOY2oycWcwWXEyNDAvdUdtb01ldjhMZ2J4d2RGTjFZalVwcVc5QjloRUJlaHRJTjN5TzRJYjgvN2p0OVhNTDZTQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzY1MzI5NDI6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5MDgxMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOVmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5WaC5qc29uIjogIntcImtleURhdGFcIjpcIjQyQ1k2ckJqaVEvdjZ0VnpIaDc1MGVKcTM1WHNnUE9XVVdURE5VN1VMRDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1Mjc1MTYzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwOTA4MTM4OTM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
