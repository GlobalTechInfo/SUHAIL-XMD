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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347068041303";2347068041303
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




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

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_57_09_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkMzRHR4WWhyeXFrTmdncnJMd2x4UjI2WnV4ZjlFa3A3WlZmOWVZMVd5ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmdWRWtkRjRSLS1UaUhfRU9icmFfUVwiLFxuICBcInBob25lSWRcIjogXCIyYWRkODRiZC04NzFjLTQ3NzQtOTZmMi1iMmQ0MjNmNjQ2ZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE0MSxcbiAgICAgIDE0MSxcbiAgICAgIDczLFxuICAgICAgMTY4LFxuICAgICAgMTUxLFxuICAgICAgMTAsXG4gICAgICAxNTgsXG4gICAgICAyMzgsXG4gICAgICA0NCxcbiAgICAgIDEzNyxcbiAgICAgIDI0NSxcbiAgICAgIDIzNixcbiAgICAgIDE1NixcbiAgICAgIDIxMyxcbiAgICAgIDE1OSxcbiAgICAgIDE5NSxcbiAgICAgIDE2OSxcbiAgICAgIDIzNixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDcxLFxuICAgICAgMTQ2LFxuICAgICAgNSxcbiAgICAgIDUzLFxuICAgICAgMjM3LFxuICAgICAgMTc1LFxuICAgICAgMjA5LFxuICAgICAgMTI0LFxuICAgICAgOTIsXG4gICAgICAxNDIsXG4gICAgICA1OCxcbiAgICAgIDIzMyxcbiAgICAgIDMwLFxuICAgICAgMjQ5LFxuICAgICAgMjM3LFxuICAgICAgMTg5LFxuICAgICAgNzcsXG4gICAgICAzNCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxTE4yM05COFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MjE1NjE4ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjg3MzczNTg1MzY4MTE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNmFxQm9ROU9XZnR3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm51OVFpM0dNcDZWMjN6TXIzZ1E5MzF3SUYxV0RQZitJR2xpZkxKTzFqMkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnhkcUxwQVNMTFhwVk90VUlWZDFUN1VZekRnRjhLdHRLKzRoai9hQWRhUDZlQ1RKL3BKY3JuNm5lNFRuMHdRRzFUYWxnNG1yMUVvVTVjL0hhbGxPREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTVLandBeDExWUh4R2Nab21URU9DN3BzaUhTQWJodjFSR29MR2h3d2JoUGJHM1JrVGdlQVl2ZXZQTHI3VFNla25WcEdUWjlkRDUrWFh2SENEUmpaaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MjE1NjE4ODo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY0NzcwNDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "kay",
  botname : process.env.BOT_NAME  || "kay",
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
