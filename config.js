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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255697263789";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_47_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMGVvbXRGS3pKbGhwTEQzbHpiS3pEbXZHeUZ2bDVDRjk0VmNXNVhOREh6Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1RQQl9IYjRUSHl2WG9kaURmQ2Fsd1wiLFxuICBcInBob25lSWRcIjogXCJjYmMyODAyNC03MDBhLTRiYjUtOTliYy0wYmRmMWEzMzFiMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTU4LFxuICAgICAgMTUxLFxuICAgICAgMTA3LFxuICAgICAgNzcsXG4gICAgICAzOSxcbiAgICAgIDE1LFxuICAgICAgMjQ2LFxuICAgICAgMjI2LFxuICAgICAgMTI2LFxuICAgICAgNTYsXG4gICAgICAxNDEsXG4gICAgICA3OCxcbiAgICAgIDIyOCxcbiAgICAgIDE2LFxuICAgICAgNCxcbiAgICAgIDIwMSxcbiAgICAgIDE2MSxcbiAgICAgIDcsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDc4LFxuICAgICAgMjA4LFxuICAgICAgMjM0LFxuICAgICAgODAsXG4gICAgICAyMjAsXG4gICAgICAyMTgsXG4gICAgICAxOTgsXG4gICAgICAyMTIsXG4gICAgICAxNzUsXG4gICAgICA3NCxcbiAgICAgIDQ3LFxuICAgICAgMTM1LFxuICAgICAgMTE1LFxuICAgICAgMjUxLFxuICAgICAgMjM3LFxuICAgICAgODMsXG4gICAgICA1OCxcbiAgICAgIDEyNixcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01iUHA5WVBFTDZ5aExnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNllPenBSbU5NWlJ0SWxzRWU0ZXNDOFo4NzBaV0lsSFJqYy8yVjRuMzBudz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCZE5pcE0wNFlDckduSHAvRHRsMDlhdVVVU2xPVkZKbVI4aGJYWnBGVXE0L3NrN1FUa3ZoamVlNmJpRFlrM3c0ODlPaHZGWUpjNTEvMXlhVWtmRTJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5eUxjYnBNdU9KcXA4Nnd6Q1dxT0s5Zy9xMGE5ZXlDWDdJZHFHN1BaZFVIbzhCRCtNcGxHOFlUSlhSMWRwanhhOUU4VVpGNXpQbTdScHFxK2I3dlpBUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY5NzI2Mzc4OTo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNyaXNzIFZldm8g76O/XCIsXG4gICAgXCJsaWRcIjogXCI1MzM0Mzk0Njg1MDMxODo2OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY5NzI2Mzc4OTo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODEyNTI1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd2eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3Z5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTHNMT280ZWFZb0Zxd1NxcCsveFBiNnVxYzdiTkZUL0tETCtCSm1qQzZabz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MjA3NTM2MDcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgxMjUyNTQyNzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
