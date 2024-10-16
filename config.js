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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923010405688";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_35_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjNvWHZUQ3hwOHlBV3VDT2VKakNUWjh6MzJhZXRMbXdOaWwrSnJxN0xUdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTA0MDU2ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGODI5RDI1QUQ3NTEwQzUyQkY0NUIzNjA5NUU3REUzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTA4NTczMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMDQwNTY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODE5QkYwMjc1MUQyNDUyRUMyMURBM0RCQTZCQzM2OERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MDg1NzMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEwNDA1Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNTUwNjJBMTdDRDQ5NjlCQjcxMTgwQ0FFN0M3Q0ZCQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkwODU3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTA0MDU2ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxRTY1NTQ4NEUwMjNENTg5QTRDOUZCRDY3QzZCMjhFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTA4NTczNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJSFBTVEowZ1JoeWNOV2UtMW13TGlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiYzVjY2UxLTNhMmUtNDBkMC1hMTMzLWEzZWUyNWYzNWY0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDUzLFxuICAgICAgMjQzLFxuICAgICAgODIsXG4gICAgICAyMjEsXG4gICAgICAyMjUsXG4gICAgICA2OCxcbiAgICAgIDIxMixcbiAgICAgIDg3LFxuICAgICAgMTY5LFxuICAgICAgMTM0LFxuICAgICAgMTQxLFxuICAgICAgMTI3LFxuICAgICAgOTAsXG4gICAgICAxNjAsXG4gICAgICA3MCxcbiAgICAgIDM2LFxuICAgICAgMTk3LFxuICAgICAgMTMxLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMTg4LFxuICAgICAgNjgsXG4gICAgICAyOCxcbiAgICAgIDEsXG4gICAgICAyNTIsXG4gICAgICAxMjYsXG4gICAgICAyMTgsXG4gICAgICAyMDgsXG4gICAgICA4MCxcbiAgICAgIDk0LFxuICAgICAgMTAxLFxuICAgICAgMTc5LFxuICAgICAgMTk4LFxuICAgICAgMTA4LFxuICAgICAgMjgsXG4gICAgICAzNixcbiAgICAgIDE0NyxcbiAgICAgIDY5LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllOSDNCQkxEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTA0MDU2ODg6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5NTM1NjI2OTg1NDk5OjY0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNVTk5ZIE1BTElLIPCfpI1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbUIzK01IRUo2Q3Y3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhLbHFCZG1Tc1Z6dTJPRHVnSVMyak8vMVJPVDJNSzZPYzI3UXpTWnh0Rnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTnBZdDN5WUpFeXg2aEk4emZSNzMzeFlwKzA1cml6dHpyMll5SnBiQkI5M3RadzNNeXdVcGxBNkwwRmltUFZ2bWx6R2g0NmdqSjhwVVloTjB6dW5NQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHY5SDJvNGsvUkdnNlVBOGlzUGFvaGZWamZxaUhoakludStpVVR1cmlNLytCeWNZS3BublpKU1RQZ0VmdFlsNG9sS1dmTG84Z0RVYWJVL0N0VkVSQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDEwNDA1Njg4OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTA4NTczMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ3WFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQndYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUngxK1FzMUMvK0J5MllHSm1zTTBRS3JwKzdqTnVOV1B2MW5DYXlwR3M2VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDg4MjIyOTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjkwODU3MzE4NzhcIn0iCn0="  // PUT your SESSION_ID 


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
