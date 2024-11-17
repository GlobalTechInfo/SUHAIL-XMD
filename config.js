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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_11_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvWTg2aHhuYjF0SEg5VDJHYktYNEg4bFpWNUtTbGRhNXhQR2x2dTloK2lJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIwNjMwNzQzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTUwOTdEOUIwMzM1MDI5NzI5MDhGOTQ4Nzk3OEQ2NTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxODM4Mjc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjA2MzA3NDMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyODQ1QTU5Q0VFODA1Mzg4RkU5QTBFNDhDREI3Q0FEM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE4MzgyNzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRmRQSGhMWXhRSzZKNEdFdjI3YXhMZ1wiLFxuICBcInBob25lSWRcIjogXCI1YzNkY2UwZS0xMTE3LTRhZTAtYTFmOS00Mzc3NmYzNTIzN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgODEsXG4gICAgICAyNDgsXG4gICAgICA5NyxcbiAgICAgIDg4LFxuICAgICAgMTY4LFxuICAgICAgMTIxLFxuICAgICAgODgsXG4gICAgICAxOTEsXG4gICAgICA4MCxcbiAgICAgIDI1NSxcbiAgICAgIDIyMyxcbiAgICAgIDc5LFxuICAgICAgMTkzLFxuICAgICAgMTY3LFxuICAgICAgMjM0LFxuICAgICAgMTI4LFxuICAgICAgNzEsXG4gICAgICAyMDEsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAzOCxcbiAgICAgIDE2NixcbiAgICAgIDYxLFxuICAgICAgMCxcbiAgICAgIDE1MixcbiAgICAgIDE0MCxcbiAgICAgIDI0MSxcbiAgICAgIDUsXG4gICAgICAxNzIsXG4gICAgICAxMTMsXG4gICAgICAxMDgsXG4gICAgICAxNDIsXG4gICAgICAyMCxcbiAgICAgIDk2LFxuICAgICAgMjA3LFxuICAgICAgMTg1LFxuICAgICAgMTMsXG4gICAgICAyMDcsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjZOWE5HRFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwNjMwNzQzMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTcwMjM5NTU3ODc4OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+ro1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5Z3JNZ0ZFTDJDNTdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVUE3VkwzN2piRUUzUkNXZGdTRElkejZUdHRYRzVSOFFZUmNMYmt4UUF5MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtZWdsSk1ZSURzWnl0ODIzOE53Y1l0TU5taGxNVjZOT0VJUXBHY3pCWWY1WTJtOUNFRU81NG55RVhQZG1BM005eHpiYVAwNDdVWW8xZ2JMdXN0bEFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrWklPZlFGa1p5eDdqOG81dllBeFh4aElZWkZIWkxwVFk3anpzb3lkYjQvUld6ekdLMUdMcURqano0bjVHMTZEalRtL1FUMjlPWUtwQ1Rsd3JzS1lBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMDYzMDc0MzE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODM4MjczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEJaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMQlouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzL0NaTlRpMEpqZmw1NksreUNvVitucllEUzBieFNwZEZRZFJHQ2ViUW44PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTM4OTcyNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTgzODI3NTUzMlwifSIKfQ=="  // PUT your SESSION_ID 


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
