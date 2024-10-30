const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ODS TECHNOLOGIES" 


global.devs = "233596780685" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233596780685";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_47_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYQmdvYndSVUhqdjFoZUJUZG5uYXV2NGdGcHVvMENvSDQ3eDhqQWQvRU9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHNExjYWJWSFQ5YW1ZWmVJb1VPSUFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhMjg2ZGZhLTUzYTUtNDJmZS1iNWMxLWZlMmMxN2MxZmE3ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDY4LFxuICAgICAgODAsXG4gICAgICA5LFxuICAgICAgNjUsXG4gICAgICAyMixcbiAgICAgIDI0NyxcbiAgICAgIDE1LFxuICAgICAgMTk0LFxuICAgICAgMjMwLFxuICAgICAgNTIsXG4gICAgICAxODMsXG4gICAgICA3LFxuICAgICAgMTM5LFxuICAgICAgMzgsXG4gICAgICAxNDIsXG4gICAgICAxNDQsXG4gICAgICAxOTIsXG4gICAgICAxNjgsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgODMsXG4gICAgICAyMyxcbiAgICAgIDc5LFxuICAgICAgMTEzLFxuICAgICAgMzcsXG4gICAgICAxMjAsXG4gICAgICAxOTUsXG4gICAgICAyMjcsXG4gICAgICA3OCxcbiAgICAgIDU1LFxuICAgICAgMjEwLFxuICAgICAgMTE1LFxuICAgICAgMTY5LFxuICAgICAgMTgsXG4gICAgICAxMTgsXG4gICAgICA1NCxcbiAgICAgIDcwLFxuICAgICAgNTIsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjY3WjE1N05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5Njc4MDY4NTo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9kcyBUZWNobm9sb2dpZXNcIixcbiAgICBcImxpZFwiOiBcIjIyMjk5NjA0NDMwOTgwOjg5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IWDdNSUJFTnFhaXJrR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWjN1MXJ2WDBVUFdZQ1hheXhsNGtVYnRjaURwbG5VU1hyYmd3SlBjQ01pUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYYkd3VFZ4bkNkUklhSU1BNFNmSmFFY0RlQlVqcldGUllKbGVCeEo4Y3JENGs5RUdxekQvaUZnM2xJVTMzSmNpaWtRYzNjRGFxVEtRQUdpZ2tzZDVEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCb1RaRVRkQi81ejR4elZPQTdET2xpZW92R2JKbzhuZDdYM1ZtYnVaT0ZVaFlsSVBpUjFWdFlIWTE3cTlhVjRvZ2c0QmU3MkdyS3JmUDJ1Um1pTkJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTY3ODA2ODU6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzMTc2NjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
