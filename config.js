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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254115126197";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_47_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMjksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmZGhKWGdpZEI0bDlPNVcxR3pKS1BlYWlQMm4wcSt5K1VLZ0pSTnhEWkpZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExNTEyNjE5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTA5RjEzODJGMTc0RjA3MTRDRjkxQzVBMDI2MUVFMjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5OTcyMDM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTE1MTI2MTk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNTYxMjNFQkRDNzhBMEYyM0NENkI1OEVCMUI2QkY3NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk5NzIwNDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid28yUkRpckVSaWFwM0hiZllSeVZ6Z1wiLFxuICBcInBob25lSWRcIjogXCJiMmYwOWQ5ZC1mZmJhLTQ1ZTMtYTAzOC03MjdjMzlkYzY2MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyNDYsXG4gICAgICAxOCxcbiAgICAgIDU3LFxuICAgICAgMjIwLFxuICAgICAgNjEsXG4gICAgICAxOTMsXG4gICAgICA3OSxcbiAgICAgIDcsXG4gICAgICA0NSxcbiAgICAgIDE4NCxcbiAgICAgIDIxOCxcbiAgICAgIDM1LFxuICAgICAgMjU0LFxuICAgICAgMTczLFxuICAgICAgOTYsXG4gICAgICA5MixcbiAgICAgIDE2NixcbiAgICAgIDE3MixcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNDAsXG4gICAgICAyMzYsXG4gICAgICAxNDEsXG4gICAgICAyMTYsXG4gICAgICAyMzksXG4gICAgICAxMjYsXG4gICAgICAxNzksXG4gICAgICAxNTgsXG4gICAgICAzOCxcbiAgICAgIDIzMSxcbiAgICAgIDM4LFxuICAgICAgNTQsXG4gICAgICA4OCxcbiAgICAgIDU3LFxuICAgICAgMTY3LFxuICAgICAgMjQxLFxuICAgICAgMTE5LFxuICAgICAgMjM0LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVRIWUs4Q1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTEyNjE5NzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4MTg1OTU2Nzg2MjU4OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJldGlp8J+YnPCfmItcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSE5tNzBDRUwrTzliZ0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjF4NFc0elF4anI2WEdNekxiV1pKQTNaeS9Ud2hHbTRyVzArUEg5R3pEMGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSUpFN28zeTZRSzVscUJzd0ZqRUMyRmVYTENuVUg3VWppUzBReXhsczFMcFQ5SGE1UEJsTy9wVkFLRE1sN3Buam9kODhQT3l0cEpIckVHTVNnREZJQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkplU2E5UkxwOXZQT0NSWnljeHZpeWhvcFhDOUdNT1lRcUY1aWVXNHVBcm5YYUtWN2FWVXE2VTNaUzg0dkxSbWNVWG1DcllMYzlaU1VRMFR4YVVrQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MTI2MTk3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTk3MjAzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHNULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHE0Mjh6SDIyZkowVjU3Qkt3S2g0T1E1d3VzUldVOEFBdHV0Wk0rVDZnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjUyNDk1MDUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "retii",


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
