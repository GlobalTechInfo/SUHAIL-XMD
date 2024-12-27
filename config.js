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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_29_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWjZGU1FUekd3ck5wWkxsd3EzOTk4UmNNTWZ0VlR2WVp5SEFZZWNtOCtvWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMm5IUnZFZjRTUnVBV3FxbXFjWDFyd1wiLFxuICBcInBob25lSWRcIjogXCIxZjViMmE2NS00NWZkLTQ0MWQtOGY3Ny1kYWI0ZjNjNjhjODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDEwMyxcbiAgICAgIDIwOCxcbiAgICAgIDEwLFxuICAgICAgMjEzLFxuICAgICAgNzUsXG4gICAgICAxNCxcbiAgICAgIDEyNCxcbiAgICAgIDU4LFxuICAgICAgMjMyLFxuICAgICAgMTY3LFxuICAgICAgMTI1LFxuICAgICAgODEsXG4gICAgICA5MSxcbiAgICAgIDEyOCxcbiAgICAgIDE5NixcbiAgICAgIDI0NixcbiAgICAgIDE4OCxcbiAgICAgIDI3LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDM4LFxuICAgICAgMTgyLFxuICAgICAgMzYsXG4gICAgICA1MSxcbiAgICAgIDExNyxcbiAgICAgIDEyMCxcbiAgICAgIDIyNyxcbiAgICAgIDIzMSxcbiAgICAgIDI1LFxuICAgICAgNTAsXG4gICAgICA3NyxcbiAgICAgIDE2OCxcbiAgICAgIDg5LFxuICAgICAgODUsXG4gICAgICA2OCxcbiAgICAgIDE3MCxcbiAgICAgIDE5MCxcbiAgICAgIDIyMSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNQUo1WlBBSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDUwMDk4ODM5MTo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxNDA2OTg2NjkwODAyOjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Lc2tzTUZFTlh3dkxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVUl1L21ySkxRd05vYVNKYTlxeG0zVXMrNm5NUk1mKzFOczlxREp3TnRWUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtR3M1d21wUjVTWi85UUJmQWgyTno1L2gwbmtTTVpBMnYwd25aSUpDdW1BbUt5NVhWb1JxaXZZTjRBeEpyQlRNd2NGMmVyZGJ3OWQwVUlLK1dFYnJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhc3hXWjROaEthem5neVpwS3N4NmF4eHZ4c1g4bmNjT0gvTTBDRnpUUTNxWlU2Yk5PWnF5YjVlaW8xNUVIWjRoYlo1R3Q1aGY5ME51U1NwT3Mrc1JCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNTAwOTg4MzkxOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzQyMTY5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "♧",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ᵀᴹᴾ✦𝑑𝑎𝑟𝑘 𝐿𝑢𝑓𝑓𝑦✦",


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
