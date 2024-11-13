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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+50937692342";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_50_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRmNHVUQnlZaTFjaGlnVkZuM1liVnRHbkhQWUQxTHRUK2JkbDVhZitJcjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5Mzc2OTIzNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBN0YwNjNEMEJCNTVCMzZGN0Q1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQ3NzAwN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXTW1xZGE2ZlFacVRxbW1IVHAwYWh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwMTgxNWVmLTUxZmItNDk0YS04YmYxLTIzZWUxNzE0MWY0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICA4LFxuICAgICAgMjU0LFxuICAgICAgMjM5LFxuICAgICAgMTEzLFxuICAgICAgMTc4LFxuICAgICAgMTI3LFxuICAgICAgMTI1LFxuICAgICAgMTU1LFxuICAgICAgNzMsXG4gICAgICAyMzUsXG4gICAgICA5MixcbiAgICAgIDEzOSxcbiAgICAgIDE1MSxcbiAgICAgIDE3NCxcbiAgICAgIDk0LFxuICAgICAgNzEsXG4gICAgICA4LFxuICAgICAgMTIsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA1MSxcbiAgICAgIDY5LFxuICAgICAgMjQ3LFxuICAgICAgMjA3LFxuICAgICAgMjM5LFxuICAgICAgMTg2LFxuICAgICAgNCxcbiAgICAgIDEwNyxcbiAgICAgIDkwLFxuICAgICAgMjQzLFxuICAgICAgMTY3LFxuICAgICAgMTcxLFxuICAgICAgMjIsXG4gICAgICA0MCxcbiAgICAgIDMwLFxuICAgICAgMTYwLFxuICAgICAgMTM1LFxuICAgICAgMzcsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjkzMzdQOFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM3NjkyMzQyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLCt+KAovCdkJLLo/Cdn5LwnZ+S8J2QmfCdkIjwnZCE4Ly64oCgXCIsXG4gICAgXCJsaWRcIjogXCI3MzU3Njk4NDQ1NTU0OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9pcWFzR0VJbjgwTGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsd0h1M2F1T1FRMUc0S1BzMmxEYUc3OWR1bmdDcnZSYVdwQnlGTzF3TGswPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkkyNWpPVUVIeWl1V1hhVnNnYWIyMVJ0VUxjcWpSWit6bnBUdUwvalN3U0tIZENEendLWS8yekhqaUpjSHB0cUZlQTNuQ3MvUWU4aTFIOUljaS96T0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZaNVlnV2VsZmx3bXVDeXd6a1Q0Wi9ucmdXdmQ5ckd0Z0J3Z0VVM2ZTd2RQOWJ4Y2c3dUwzckRjNHRPbHNocnlDSlRtZkR0NmNENlBLeHJ5S3g3TkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM3NjkyMzQyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0NzcwMDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJaFFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUloUS5qc29uIjogIntcImtleURhdGFcIjpcIlFNcjZZaUo0RWo1WHJxdWNpUlRLaFQrazhPTG5NY2JVTnZFK2l5UVd4OWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwMTQ3NDU3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNDcxOTA0MzA0XCJ9Igp9"  // PUT your SESSION_ID 


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
