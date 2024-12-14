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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/india";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+919474878724";




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
global.read_status = process.env.AUTO_READ_STATUS || "truee"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_40_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtbFBzbjRkU2NFOTNjQ2I2OEgxdHU4MEJoU1d5NzZ5S0VpVUNVOXRYVEN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIeWt4YWtMZ1JpU3hHdmszSGVKSUpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNhZmE2YjI4LWFjNDgtNDY0Ni1hZTg4LTMyYThhZWM4N2U2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDE1NixcbiAgICAgIDI0MCxcbiAgICAgIDY0LFxuICAgICAgNjYsXG4gICAgICAxNDQsXG4gICAgICAxMTEsXG4gICAgICA3NyxcbiAgICAgIDEzLFxuICAgICAgMTc4LFxuICAgICAgNDcsXG4gICAgICA5OCxcbiAgICAgIDE1LFxuICAgICAgMjQxLFxuICAgICAgMTUxLFxuICAgICAgNjIsXG4gICAgICA4LFxuICAgICAgMjEyLFxuICAgICAgODIsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAyMzksXG4gICAgICAxOSxcbiAgICAgIDEzNSxcbiAgICAgIDgwLFxuICAgICAgMTY5LFxuICAgICAgMTg3LFxuICAgICAgMTMwLFxuICAgICAgMTQyLFxuICAgICAgNzcsXG4gICAgICA5MyxcbiAgICAgIDI0NCxcbiAgICAgIDIxOSxcbiAgICAgIDE3NCxcbiAgICAgIDExNyxcbiAgICAgIDIzNixcbiAgICAgIDE4NSxcbiAgICAgIDE3NixcbiAgICAgIDEzNyxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRNRDFXWDJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk0NzQ4Nzg3MjQ6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIt2ZHZks2i4riZ8J2QkcmRzaLPu82h1p9q8J2bhsy98J2bhsy98J2bleGqsSDjgIbNjsuQzaLCu1xcblxcblxcblxcblxcblxcbvCThqktLfCdm5XhqrHwnZuGzL3JlcyExKYg8J2bleGqscSr1p/hjZ3KiMmRzaLGns2b8J2bhS0t8JOGqlxcblxcblxcblxcblxcblxcblxcbjrwk4apwrvwnZCK8J2blsaezZvigKLwk4aqXCIsXG4gICAgXCJsaWRcIjogXCI3MzU5NDgwMTU0OTM0NzoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVEV4SzhGRU1EVzhMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNldUc0Yk04TWpvNTR6VkZVMkIzejlteC9peGFrM25SclVjUkhQVGdKUzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmRYZmFFbFAyckZXQzFwVWVqdFBRR20wUVJuSlV0YVd2cVplandmRDdPRXlVZmlCVHh3ZmJ5a3FnYXcvbTlwTlFQZElwUUg2ZlRkdzhtdGRRUUl1RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1FWb2xheHdnUTFaRDNvcGxDNVZXVnVUSUI0bzNCUnVudlJFUnY5OGhQdmU4RGJrSlJhakR1UnQwbEZtOTJ5OHkzQ1I1T0VMT1N6cGUxeURJcVM0amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NDc0ODc4NzI0OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwOTM2MzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "-menu", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Ramjeet",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RAMJEET",
  ownername:process.env.OWNER_NAME|| "Ramjeet-x",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "RAMJEET"  ).toUpperCase(),



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
