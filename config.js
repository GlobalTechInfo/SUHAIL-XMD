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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348146031118";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_48_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidy9Wd0Q4Wm50YWgyUElVb3V1eVAvT2NXRzJRTTZscUwxQThGZUFqMGpRRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ2MDMxMTE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTIwNTk1MDBFMTk1RUIzOUE0QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk2ODA1MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid3RkS3ZpTktSUE8yc0hDblFVYVZkZ1wiLFxuICBcInBob25lSWRcIjogXCJlMTNjOTQ2ZC1jYWI1LTQwOTktOTBjYy0yNWQzYmY4MDUwZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTQsXG4gICAgICAxNjMsXG4gICAgICAyMDgsXG4gICAgICAxODQsXG4gICAgICAxMDEsXG4gICAgICA3LFxuICAgICAgOCxcbiAgICAgIDM0LFxuICAgICAgMTA2LFxuICAgICAgMjM5LFxuICAgICAgMjIxLFxuICAgICAgMjMzLFxuICAgICAgMTYwLFxuICAgICAgMjE3LFxuICAgICAgMTEsXG4gICAgICAyMzEsXG4gICAgICAxNzksXG4gICAgICAxOTAsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE1MSxcbiAgICAgIDU4LFxuICAgICAgMTUxLFxuICAgICAgMjUyLFxuICAgICAgNzcsXG4gICAgICAyMjYsXG4gICAgICA0NyxcbiAgICAgIDE5LFxuICAgICAgMjUzLFxuICAgICAgMTQ2LFxuICAgICAgMTkxLFxuICAgICAgMTUsXG4gICAgICA2OCxcbiAgICAgIDYxLFxuICAgICAgMTI4LFxuICAgICAgMjM1LFxuICAgICAgMTg4LFxuICAgICAgMjAxLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVRQV0sxMkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDYwMzExMTg6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTU2MjA2MTUzNzQ4Nzo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNejh3c2tMRUlHcDQ3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjd4QmhqQzRnbGhmMFE3VU5xTG9leEVMNHRnWHJHVDUzU1JiVXlFSWlTVTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmRpQzh1cmxhd25pcnkrNlBpanZKQ0xRK0xBRTcwUC9OVEtsODgzcmZ2eFBiVjN3cHRYQWhLOENDZkNwRVN6SlptditjNXI0SGpROFdXQWFkNlkyaUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHZKaEZUR1RhLzRLV1NjVnRZUWs0YzczYm9wd1drTFovM3VOUmxCZ01XdUgwN0c3SzBYQVBpdVdHNG5Tc0I3TXYzMGRCbnUvMmpjRzFJQTIxSkY0Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NjAzMTExODo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2ODA1MTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKbUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUptQy5qc29uIjogIntcImtleURhdGFcIjpcIkU3UkRYRFU2QlAyZTZuY3I3ekVPeitWUGF5Wjg3NXJmQlF2bjlWcEczNGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzEwNjk3OTQwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI5NjgwNTE4NjY5XCJ9Igp9"  // PUT your SESSION_ID 


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
