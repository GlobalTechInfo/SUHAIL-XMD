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
global.caption = process.env.CAPTION || global.caption || "©™ MAX LE MAGICIEN DU MAL ABRAKADABRA 🎩🇭🇹" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50931284315";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_37_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3MUFLSTB6Y1BQWU5tVW0zMWN2dlBvMlR0UTl3UW1IbnRYTFBOV1I4NE5vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEZzI5REZadVIyS0VDUXUwVEE5Z25RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxMjJhZTM2LTJlYjYtNGI1NC1iMzg1LWU5ZDcyY2JkMDk2M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMSxcbiAgICAgIDE0MyxcbiAgICAgIDI0NCxcbiAgICAgIDIwMixcbiAgICAgIDM5LFxuICAgICAgNzAsXG4gICAgICAxMzMsXG4gICAgICAxNzYsXG4gICAgICA0NSxcbiAgICAgIDIxNCxcbiAgICAgIDk5LFxuICAgICAgNjYsXG4gICAgICAxMDgsXG4gICAgICAxMTMsXG4gICAgICA1NixcbiAgICAgIDE0MixcbiAgICAgIDg4LFxuICAgICAgMTMyLFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMjgsXG4gICAgICAzMCxcbiAgICAgIDE3MCxcbiAgICAgIDk3LFxuICAgICAgMTI4LFxuICAgICAgMTE2LFxuICAgICAgMCxcbiAgICAgIDI5LFxuICAgICAgMTQ1LFxuICAgICAgMjM5LFxuICAgICAgMjUsXG4gICAgICAyMjMsXG4gICAgICAxMTQsXG4gICAgICAzOCxcbiAgICAgIDU1LFxuICAgICAgMTk0LFxuICAgICAgMjYsXG4gICAgICAxMTksXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJORERRNVlEU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzEyODQzMTU6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxMDQxOTQ0OTk3OTY2OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BENThjUUhFTjI1K2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ3VHYW9TMnQ4amtuWGIzOWtCekRyaWlnaWt3SUlmbzhBMGRUcjNqRXlRUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2RzdVNEUxZ2VoRnNtbmUrTjEwOTBSUlV3a0YrVGI4YlUvcjN2SGY5Q2xibndpSzdaZXNJdktiT25nUFIyVVNKNGRCazNkaHpjdDhsUGJqNTBVeFVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3eXFrVHY3K0lVV2k4cXBtMGxmK2FOeTVHejN6UVZqZmoxd1pwUjd5Y1Q2a3JNYlQ4THhDd29kODIzNmdiVE1acVdYQUpTTXVvcXM4Uzc5bWUxdmxEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzMTI4NDMxNToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDIzNzQxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBXZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFdkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK3NzTnpCdSt3dzZBTEVWYzJXYVRldzlBbWZ0NUVPcTVYR2JxT0l2d3hFWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIzNTIxNTE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0MjM0ODQ3MzMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ABRAKADABRA 🎩🇭🇹",
  ownername:process.env.OWNER_NAME|| "꧁☬☆𝐊𝐈𝐋𝐋𝐄𝐑♣️🐈‍⬛𝐋𝐔𝐂𝐈𝐋𝐅𝐄𝐑•♟️⚰️",


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
