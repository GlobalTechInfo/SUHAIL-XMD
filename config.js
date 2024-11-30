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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_51_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDcwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDMzLFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3NCtwVXRkUmZoc3RhWXVlRFA3Y2U3K0poYk04Z1NtUGpUYlJtVWQ4Y0swPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhNUNDQmVLSVFvTzlzSlU2NGJ6d3l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJkYTgwNDJkLWY2MDYtNDUwNi05MDRmLTU3M2M1NmRkMWUxOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDEsXG4gICAgICAyMSxcbiAgICAgIDIzMCxcbiAgICAgIDExOSxcbiAgICAgIDEyNSxcbiAgICAgIDIzNixcbiAgICAgIDQ4LFxuICAgICAgMTE5LFxuICAgICAgMTY4LFxuICAgICAgNDksXG4gICAgICAxODcsXG4gICAgICA5MixcbiAgICAgIDcwLFxuICAgICAgMTkxLFxuICAgICAgMTMsXG4gICAgICAxLFxuICAgICAgMjAyLFxuICAgICAgOTAsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDI0MCxcbiAgICAgIDY2LFxuICAgICAgMTY3LFxuICAgICAgOTEsXG4gICAgICAyNDMsXG4gICAgICAyMjMsXG4gICAgICAyMTMsXG4gICAgICAxNTIsXG4gICAgICA2OCxcbiAgICAgIDI1MyxcbiAgICAgIDIwNixcbiAgICAgIDIsXG4gICAgICAyNDAsXG4gICAgICAxODYsXG4gICAgICAyMzYsXG4gICAgICAyMTMsXG4gICAgICA5NSxcbiAgICAgIDE5NixcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCNDhENThDWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTkzNTcwNzY6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKLkRcIixcbiAgICBcImxpZFwiOiBcIjE0MjUxOTk4MzczMDkyNzo1NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaUYxUVlRcnJPcXVnWVlHQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjQwZWpKaVpMczVmZ3hmbW9oZ294OWk4UklwK0o3aVkrdnRyd09wVVpIMDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOGZDUkxaOEd5MEcvOUxJZndCOGZHTld3d3UzZmZPL2xDRkhLT2xTZ2FzNE93aXJtOHFReGVyWG5raG9Wd1l6cEFSMTZ5Q0l4dCtIMSthbVFhdFdGQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamdiWUNHdWVSbnJNZDR4TjIxN2Q3dFp4WWxESlZmVmZaNHg1SmEzYmJmYm40MlpTbjI2L2FDUFZHMlJjNG5xdnhrdFNvMEwvNyt3SUJtUDlMZlU0aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTkzNTcwNzY6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5NDIyNThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
