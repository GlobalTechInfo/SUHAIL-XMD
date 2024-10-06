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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349036310633";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_26_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIno5dnNMMm41TVJuSmcyemZxL1prU2hoQVYvS1FRR0gySHc1T0JDQkpZc3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRpQnRDT3VEUTlxTlRtR0NxNnl4Y0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzMwYjc0YzAtZjNkZC00NjA2LWJmN2UtZDFlNWVkZDMxOGViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDE1MSxcbiAgICAgIDE1OCxcbiAgICAgIDIxOCxcbiAgICAgIDE1NCxcbiAgICAgIDc4LFxuICAgICAgOSxcbiAgICAgIDIwOSxcbiAgICAgIDg0LFxuICAgICAgNTIsXG4gICAgICAzNCxcbiAgICAgIDc2LFxuICAgICAgMTEzLFxuICAgICAgMTk2LFxuICAgICAgMjU0LFxuICAgICAgOTEsXG4gICAgICA3NyxcbiAgICAgIDIyMCxcbiAgICAgIDIwLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICA4OSxcbiAgICAgIDIwNCxcbiAgICAgIDIwNixcbiAgICAgIDMwLFxuICAgICAgOCxcbiAgICAgIDIxNyxcbiAgICAgIDE2NixcbiAgICAgIDIzMixcbiAgICAgIDE5NyxcbiAgICAgIDEyMixcbiAgICAgIDE4MCxcbiAgICAgIDEwMSxcbiAgICAgIDI2LFxuICAgICAgMTUsXG4gICAgICAxMzksXG4gICAgICA0MSxcbiAgICAgIDE3OSxcbiAgICAgIDI0MyxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMczliY0ZFTEwzaUxnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibWN1Y3lCRHJqdFpiWkYraWFpMjA4UHdyQ1VGN1VydFBlSk9jZmx0RkZSdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoS0JVRXNINnFmVjVBQVRxVGd1elh4WG5HQ1hYUjhQa2ljL054RytzRXQ3ZmtJSzVlSm1qdXNZOFVhMjM3VGZtTHQ2NHl4N29Cank4T2hWQUFkM0NEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHaDgrcGhoSkhvOGdlSDNXYVNPbGk5Q2dqMVozdkQxSlV4aWMyQzFOM2thMGRLOVVqUkQxTGFUR0tvZGpidTlubjZ1WWhDbk5JV0Z0czUwODE4UUdodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzYzMTA2MzM6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NjIwNjYwMjg3MDg3OTo4OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzYzMTA2MzM6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxOTk2MDRcbn0iCn0="  // PUT your SESSION_ID 


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
