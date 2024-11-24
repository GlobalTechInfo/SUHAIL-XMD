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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22898505591";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_25_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZzQUI5Q20yQWszQXQwSkkxSFk4aHp2NlJKVjl6a0tNUVczcTNWdDI3NUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI4OTg1MDU1OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4MTI5MzAyMzE1NTM2MUIyNEI0NDZBNjBDNjA4MEY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQ3Mjc0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyODk4NTA1NTkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOTlENUVFRjk3NTM1MTY5REI0RThFMjI0MUVDNEY0RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI0NzI3NDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFBraXlPX0pTM3F3NlFyZGRmSG1Nd1wiLFxuICBcInBob25lSWRcIjogXCJjMmYxYzhkNS03MWQyLTQ5ODItYjU3Zi0yMDk5YWMxYzU3Y2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgNjIsXG4gICAgICAyLFxuICAgICAgMzEsXG4gICAgICA3MCxcbiAgICAgIDIyOSxcbiAgICAgIDkzLFxuICAgICAgMTAzLFxuICAgICAgMTI0LFxuICAgICAgMTE0LFxuICAgICAgMTcsXG4gICAgICA0OCxcbiAgICAgIDM1LFxuICAgICAgMTExLFxuICAgICAgMTU0LFxuICAgICAgMTA0LFxuICAgICAgMTExLFxuICAgICAgMTA1LFxuICAgICAgMTkwLFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDEyNSxcbiAgICAgIDQ4LFxuICAgICAgMTAyLFxuICAgICAgMTUzLFxuICAgICAgOSxcbiAgICAgIDIwNixcbiAgICAgIDM1LFxuICAgICAgMTU1LFxuICAgICAgMTIyLFxuICAgICAgMjA5LFxuICAgICAgMTgsXG4gICAgICA3NSxcbiAgICAgIDI0NSxcbiAgICAgIDY0LFxuICAgICAgMTY2LFxuICAgICAgNzUsXG4gICAgICA4OSxcbiAgICAgIDI0NixcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSTFpHTUUyUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTg1MDU1OTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkvFk3VydGggR29qb1wiLFxuICAgIFwibGlkXCI6IFwiMTUxMTE4NjU5MjI3NzUwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUwrajk4QkVLRGZqYm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQdnZwZ3lTR3E1aWo1RGxLVmxUdEtWR3A1c05qc3ZmYldLbUFtRGhtMkNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjREUWN5dDVocmplcXZRSXJQa25FOGlTcmlESW4rZ1VEWE1vYnNJZ3RMUTUyUVNMYmtWYTV2bDJvSi9BbzJPdFVZRDVlUThLZmtGeFpHdkRjZHlKYUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5HaUR5SW1YaGtIK21sVnp1eWs4bFNpTFMvOGRNa05jSFBjV2JldENDWmdHZHpIYS81MHNZdDdpN3orb0NxSE5WYnRkOEl2QjJiNWQybmNjVHdlT0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODk4NTA1NTkxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0NzI3NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLU3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtTcy5qc29uIjogIntcImtleURhdGFcIjpcIjFGdFVkTHowOXhrMnZObWpoUlU2ckJjQzRNVHlic1lWazVIb2FjTjh5THM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY3OTI2Nzg1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
