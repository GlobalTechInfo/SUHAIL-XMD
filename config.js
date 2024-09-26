const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="oyaremiobawole4@gmail.com"
global.location="ibadan,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/FLAg7L0QGTvE6Wqbn35PVl";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FLAg7L0QGTvE6Wqbn35PVl";
global.website=process.env.GURL || "https://chat.whatsapp.com/FLAg7L0QGTvE6Wqbn35PVl" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© icecoder" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013100204";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
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
global.scan = "https://chat.whatsapp.com/FLAg7L0QGTvE6Wqbn35PVl"
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_39_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiek9mOGNoLzdXRndBOUhGeGNGaWdLYThnR2dnK1JKMzlnR25KL1VvTHdsVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibkxESVVuSkxUbUdBSk5LMGZCM1NGUVwiLFxuICBcInBob25lSWRcIjogXCIxMmM5ZTZmNi1iOTA0LTRiY2MtYWM3OS00YTE2YjBhMjAwYTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTM3LFxuICAgICAgMTAsXG4gICAgICAxNDgsXG4gICAgICAxMSxcbiAgICAgIDI1NSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NSxcbiAgICAgIDIwMCxcbiAgICAgIDIwNCxcbiAgICAgIDkyLFxuICAgICAgMjA2LFxuICAgICAgNTQsXG4gICAgICA2NyxcbiAgICAgIDgsXG4gICAgICA3LFxuICAgICAgMTMwLFxuICAgICAgMjM2LFxuICAgICAgMjA0LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMjExLFxuICAgICAgMTY2LFxuICAgICAgMjEsXG4gICAgICAxMDksXG4gICAgICA5NCxcbiAgICAgIDE3OSxcbiAgICAgIDExOCxcbiAgICAgIDcyLFxuICAgICAgMTA2LFxuICAgICAgNzUsXG4gICAgICA2MixcbiAgICAgIDE0NyxcbiAgICAgIDQ3LFxuICAgICAgMTk5LFxuICAgICAgMjQ0LFxuICAgICAgMTksXG4gICAgICAxMDAsXG4gICAgICAyNDQsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEUxTDZUMVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTMxMDAyMDQ6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MjYzOTQ0MDk2NTg3NjozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU2JzYzBERUwrQTFyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFHTjlwbURGdk5JU1hTUmNmbDJtcGhkMWpqaGs4K2hyOGNoTjNYeUxDMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiek1tNDhmdlAzTjBLeFAvZFNuZHNZaDlyck9tVzNRSVJ5dkhsMDBjMTk1T1lVSjdzbmtYc2JIV3VnSUJTaHJJMHQ4YmF4VmFZclc2KzVsVC9iT2d1Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaWs0cEFESGJwZE1GY2g3SDMyZU9DUHJZblA4bE1yWFFDOXM4YUJhYUp5cUY0YVVENjdVdUJCNWtxM092TmVMV3lWR054a3JEUmlxWm1TT29MZHoyQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzEwMDIwNDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzM2NTE4N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "iceklcoder",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "icecoderfc-md",
  ownername:process.env.OWNER_NAME|| "icecoder",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ICEKINGfc"  ).toUpperCase(),



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
