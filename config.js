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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_32_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaUHpjaHpKQWQ0UEY0YndlaGg4UHB2Sy8xRC9lM3pTNExJSGRjckg0Z2ZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoV2RHcXNlX1NxYUFiUnZsLU5NemN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1YzZjNDJmLTkyNTYtNDJlZi1hNTZhLTlhZDc3NTlkN2YxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDE4LFxuICAgICAgMTQ4LFxuICAgICAgMTIwLFxuICAgICAgMTc0LFxuICAgICAgMTUxLFxuICAgICAgMTIwLFxuICAgICAgMTcsXG4gICAgICAxMzcsXG4gICAgICAyMTMsXG4gICAgICA4MCxcbiAgICAgIDE1NixcbiAgICAgIDEyNyxcbiAgICAgIDI0NCxcbiAgICAgIDE4MyxcbiAgICAgIDUzLFxuICAgICAgMjAwLFxuICAgICAgNzQsXG4gICAgICAyNCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDE5OSxcbiAgICAgIDY3LFxuICAgICAgNTAsXG4gICAgICAzNyxcbiAgICAgIDY2LFxuICAgICAgNzQsXG4gICAgICAxNzgsXG4gICAgICAyMjYsXG4gICAgICAxMDksXG4gICAgICAxNjQsXG4gICAgICAxNTgsXG4gICAgICAzNCxcbiAgICAgIDE4OCxcbiAgICAgIDIyLFxuICAgICAgMjQwLFxuICAgICAgNDQsXG4gICAgICA0MixcbiAgICAgIDIwMSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSV0xLNlRRUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzODcxMjQ4ODozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY1NjM5OTY5MjA2MzM2OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXNXJ2MENFSm5PeTdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSUUyVUwrZG9ZT05HRUhacnAvajY4R0ZJOE9YQVhBWW1EY1FWT2R4bGVWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzRU5abU5BdkVnTnk2YTREYkw2WTRQU1puVFlaK2xhWExwTm5qei9YdzZWc011Y1pYT3BsNTBSbEorak5yVXBNRnpHYWpCeWNzKzg3ZjJ1ckQreGFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEOVgwTmlkb21URGJSQUJsVEpwT3Btek5KSUZwR3R3eXRjNEMyOUgvUEp2amU1RWFPM04vcjJpSVUzR3plN1h1YkgveXlFV0Juallac2xCUU1iQkppZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM4NzEyNDg4OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU1ODM1MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNOGZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU04Zi5qc29uIjogIntcImtleURhdGFcIjpcImxET3pSYW1PcWR4dHBBWXAwOHZlMDJ5NnpQWE5Zc3ZKQWdjZkJKTk9Fbk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzk5Nzc1OTA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
