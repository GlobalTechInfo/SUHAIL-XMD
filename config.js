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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_07_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSko4SXRDdWpNMGpEVHcvdFovM0NRSHY5NUNTS3hQNzlhNktwV0lMT1lSRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMUp3Wm5mTldROWFtcFN2dUk5SFMyd1wiLFxuICBcInBob25lSWRcIjogXCI4MzUyZWVkMS01YmEyLTQ0MmUtYTU2Mi1mMTIyOWJhMzBmYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICA1NSxcbiAgICAgIDYxLFxuICAgICAgNTIsXG4gICAgICAzOCxcbiAgICAgIDI1MyxcbiAgICAgIDEwNSxcbiAgICAgIDI1MyxcbiAgICAgIDM3LFxuICAgICAgMjA2LFxuICAgICAgMjUyLFxuICAgICAgMjA5LFxuICAgICAgMjIwLFxuICAgICAgMjEyLFxuICAgICAgNDUsXG4gICAgICAxODksXG4gICAgICA5NCxcbiAgICAgIDgzLFxuICAgICAgMTksXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA2NSxcbiAgICAgIDI0MSxcbiAgICAgIDY1LFxuICAgICAgNjEsXG4gICAgICAyNDEsXG4gICAgICAxMDEsXG4gICAgICAxMSxcbiAgICAgIDExNyxcbiAgICAgIDE4NixcbiAgICAgIDEyNSxcbiAgICAgIDEwLFxuICAgICAgMTY2LFxuICAgICAgMTY2LFxuICAgICAgMTY0LFxuICAgICAgMTAzLFxuICAgICAgMTM4LFxuICAgICAgOTIsXG4gICAgICAxNTgsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzExUTNTU0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzQzOTM1MzY2Mjo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1SIERBUktORVNTIEJPVFwiLFxuICAgIFwibGlkXCI6IFwiMjM1NTIzNjQxNzQxMzIxOjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUbzFib0ZFSVg0N0xrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWktGdUZ2U0k2K1AyTTRPMlozbWlRV003b3NKZHRObnlGRnVQcDVEcllFaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRVklFVmF4WDBnTS9BSlBLMlQvVWF2QUNuYTVHcUsxYXUyOE8vWEY5NlM2N1JyZWo4MzZzS1BTdGN2SjVxeFNtYVdjRlFudC9hSU1GckdiNjhRd1hBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZTXpmazQ5SWFMdnpDTkJMVklHK1NheVN4cWFMbS9EendCT002SFA4U0VZdjlXcDZlZU00QXZqaTQ2NjdLeWZpSTZDMC9Oc01LT3lrVjgvUm9LcWVEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc0MzkzNTM2NjI6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTkzNTI0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp3c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSndzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDYxenMrRWFwQ0dsVktUTWRzdlk0K0pxaXZlU3Nvd0dzY1JTbEdJK2RXUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDY1MjE4MDUxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
