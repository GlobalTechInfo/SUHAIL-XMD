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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_35_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzdMdm9OZG1sTW9pM3NMTW13c3lCZWo5aGkrRVFUaDFiZWRmRGduQm5HRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDRsLVo4RHZScGFNRl85TW1CQ1lPUVwiLFxuICBcInBob25lSWRcIjogXCIzYmU0ZGNmMi1hMDIzLTQ0MjQtOGRmNC04ZjcwMGFhY2EwM2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA2MyxcbiAgICAgIDc1LFxuICAgICAgMTk5LFxuICAgICAgMjQyLFxuICAgICAgMTM4LFxuICAgICAgOTAsXG4gICAgICAzMixcbiAgICAgIDI0NSxcbiAgICAgIDIwNixcbiAgICAgIDk0LFxuICAgICAgOSxcbiAgICAgIDIxNSxcbiAgICAgIDEzNSxcbiAgICAgIDkxLFxuICAgICAgMTcyLFxuICAgICAgMjQxLFxuICAgICAgNDksXG4gICAgICAxNTgsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxNzcsXG4gICAgICAyNCxcbiAgICAgIDIzNSxcbiAgICAgIDIzLFxuICAgICAgMTI0LFxuICAgICAgMjE0LFxuICAgICAgODIsXG4gICAgICAyMzUsXG4gICAgICAxMzQsXG4gICAgICAxMjUsXG4gICAgICA4OSxcbiAgICAgIDI1MyxcbiAgICAgIDMzLFxuICAgICAgMjQ0LFxuICAgICAgMjksXG4gICAgICA0NixcbiAgICAgIDUsXG4gICAgICAxNTAsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODVFVFRGM0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzgzOTUwMTQ4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDA3Njg5MDA2MDgxNzI6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEhVajVVR0VPbWZ4N2tHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZmoydnVkYm9vY1oreTk3My9EcUtZSE9ac1NDV29XYWtqTVQ2L3FzU1hJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhxUUlFM3FCNWIvNWJTMCtoR2RWYVp0TFcxbmJRNW5xMGQxYUh1TlZIL2JKZGJBN0srWk5aTlF6VGEvSTZPNUdUclhaZ3NCdmNhRVdxVlgydGUwWkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5PNEVDR3RJWUx2Mk9FaGNZcVNkbWNZY0w4U2txVnN5K2JZUE42cVdnMDRXdTNvY05HQWg5NDhzWFRjWCs1ZzgzUFpKZGp0Zm45SW1oODhpTWZRVkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzgzOTUwMTQ4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTMxNzc0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU54cFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnhwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjdEUnZ3UVFKZCtheVVVODljSVZaQmlXRFRLQXg4MjZWbTM1Zk1ieEF0RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU0OTA5NDg5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTMxNjcxNDA2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
