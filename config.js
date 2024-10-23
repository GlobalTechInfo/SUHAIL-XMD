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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923198603898";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_48_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmdZcDFnVDZJenRtL1MxZGp2c2pqQlNwOUJCa1RnNXJ6b3J2N1ZDeFhqVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmxPWmszdDdRSEcxU2cwZnhBLXZFQVwiLFxuICBcInBob25lSWRcIjogXCIyZGM2NWI0OC05NmE2LTRjMTAtYjkxNC04M2UwY2IyNjY2NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTAxLFxuICAgICAgMTM5LFxuICAgICAgMTAxLFxuICAgICAgNzIsXG4gICAgICAxNDYsXG4gICAgICAxODEsXG4gICAgICAyNDYsXG4gICAgICA5NixcbiAgICAgIDE1LFxuICAgICAgMTUxLFxuICAgICAgMjA4LFxuICAgICAgNDYsXG4gICAgICAxNjAsXG4gICAgICAxODEsXG4gICAgICAxMDQsXG4gICAgICAyMCxcbiAgICAgIDEyOSxcbiAgICAgIDksXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjE5LFxuICAgICAgMjMyLFxuICAgICAgMTQwLFxuICAgICAgODEsXG4gICAgICAxNjAsXG4gICAgICAyMTksXG4gICAgICAxNzIsXG4gICAgICAyNTQsXG4gICAgICAzNixcbiAgICAgIDY0LFxuICAgICAgNjUsXG4gICAgICA2MSxcbiAgICAgIDE2OSxcbiAgICAgIDIwOSxcbiAgICAgIDE0NixcbiAgICAgIDkyLFxuICAgICAgMTY1LFxuICAgICAgMTM4LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVGMjVWNFRaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTg2MDM4OTg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hc29vbSBBbGlcIixcbiAgICBcImxpZFwiOiBcIjYxNzM2NDQ3MTYwNTc1OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pFMHBzRkVORHc0cmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwbXhFQ1J5ZWJ2d2NuR3U0bUM3V1NGOFQrTmp5MncweUN5MkRvWTZtN25jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9Kakh0aVdBRlhtai9IS1VORlBTaVF0ZUdmb1dxREpPVzZXREw3dTRLUkdDYUNJZ29DZ1VtYjVLWlZCaWdWWVprci9EM3RxeVRsRTcwOWNXOEpSdUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhWUWYzVnNkYW9Bc01DMm4zNTRkTzFDekxTZTBYa0xWNCtwYVo3Y0RVRnJsWlhwNjlzR0VhVzJyWEliSXpBQmp6b2xnMVJDckZLeW9sM0djU2N3RWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5ODYwMzg5ODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2NzMzMDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDS0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNLRy5qc29uIjogIntcImtleURhdGFcIjpcIkQzTW9qeXp2OVNxaStzNVB6QlI0OVpWZW5nb3BGRThDRjg2bWVsWitCMnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwMDE1MjY3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY2ODg1NTU5NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ALI HUSSAIN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-74456ab3-2ecc-490a-bc16-76a2ef2b98ff",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "ali9090",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ALI"  ).toUpperCase(),



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
