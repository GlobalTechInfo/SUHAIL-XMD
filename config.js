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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_17_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicy80NEJ5UTY3TUdRR241cndXQTV5REtUa1dkbHJTY1NXd2ZJNnB2aWs0UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGFibFEzdzBTWkdlSVFRV0VwdFVPd1wiLFxuICBcInBob25lSWRcIjogXCJjYWM1NWQxMS03Nzc5LTQzNmQtYTRjOC1mNTgyODAyYmUzZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyNDMsXG4gICAgICA4NyxcbiAgICAgIDIwMSxcbiAgICAgIDIxMCxcbiAgICAgIDEyNyxcbiAgICAgIDY5LFxuICAgICAgMTc0LFxuICAgICAgODYsXG4gICAgICA1MixcbiAgICAgIDEyMCxcbiAgICAgIDIxNSxcbiAgICAgIDQzLFxuICAgICAgMjAsXG4gICAgICAxOTIsXG4gICAgICA4NyxcbiAgICAgIDQyLFxuICAgICAgMTEzLFxuICAgICAgMTM2LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTQ4LFxuICAgICAgMTAwLFxuICAgICAgOSxcbiAgICAgIDEyNixcbiAgICAgIDM1LFxuICAgICAgMTkxLFxuICAgICAgMTA0LFxuICAgICAgMjQ4LFxuICAgICAgMTkxLFxuICAgICAgMTM1LFxuICAgICAgMTk5LFxuICAgICAgMTM5LFxuICAgICAgMjE1LFxuICAgICAgMTUwLFxuICAgICAgMTIyLFxuICAgICAgMTYyLFxuICAgICAgMjIzLFxuICAgICAgMjQwLFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkZBQ1RYM0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzcxNjM4NjA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAu35IZW56eSBGeH7igLtcIixcbiAgICBcImxpZFwiOiBcIjExMDIwMDc0MDY3MTU2NDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPSDBjVUNFTFNvaTdnR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibCs0ZEhGc2Y3aDg2UlRHaGwvazJ4NDRHQ0pWUzU2NGZoMDBjY1dYUzJIcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjeVVxRGlJZUFFbE1CWEFIVWZBdklnUzVldVhoOStFVzMyTVdneW5qUUF6RENwa2UxaFFBU25Gbk4xVytUcG5sRHlCRmZXcTJTbkpqdUxFTG1TUzVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxR1Y5aytYc2JRQjhTbWhhZmhYU0djOXA4YkZGWk5kbWhBVlg3RnNLK2xLTFR5c3RrUHgzVktrWk1Ob0poYlMyWUxqYkpPamNoeGdNWk9ocmhxQmlBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3MTYzODYwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MjM4NjQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
