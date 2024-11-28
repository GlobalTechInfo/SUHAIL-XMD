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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08039760662";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "08039760662";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "08039760662";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "08039760662";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_30_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImIveTArYzdJNFpGSXFsclBuSldKZGMwSDZEYnUrbi9PMWpubGh0M2N5aXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9UdTFUNFJFVGwtLUJ3aXA4eFJSRVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODhjMjE0YWMtMTNmNC00OGFlLTk0ZGMtM2Y3NTI5ZTg5MjU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDE2MSxcbiAgICAgIDEwNyxcbiAgICAgIDEyNixcbiAgICAgIDYwLFxuICAgICAgODYsXG4gICAgICAxNDUsXG4gICAgICA2LFxuICAgICAgMTkzLFxuICAgICAgMTA4LFxuICAgICAgMzgsXG4gICAgICAyMDEsXG4gICAgICA4MixcbiAgICAgIDE0NCxcbiAgICAgIDIxMyxcbiAgICAgIDQ5LFxuICAgICAgMzMsXG4gICAgICAxMDgsXG4gICAgICAyMzAsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTQwLFxuICAgICAgNyxcbiAgICAgIDIwMixcbiAgICAgIDEzMSxcbiAgICAgIDEyNSxcbiAgICAgIDE4MSxcbiAgICAgIDQsXG4gICAgICAyNTIsXG4gICAgICAxNDUsXG4gICAgICAxMTIsXG4gICAgICA3OSxcbiAgICAgIDg2LFxuICAgICAgNDYsXG4gICAgICA0MyxcbiAgICAgIDIzOSxcbiAgICAgIDcwLFxuICAgICAgMTE4LFxuICAgICAgMjIsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFZUVkxOQkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzk3NjA2NjI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTg4MTcwMDYzMDc0NDoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYUJ1dW9DRUluWG5yb0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZRaG1JN0l5ck4zdWZWcjJvYytVcitVWUtSeGhVeW1QMmxNcU1BL0E2dzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmZ2N1NRSWFBWmdQaW1yTGpqMWZpTlMzUkVFWHd5dGlQc0plclVJOXl0NG9XdHorNGR6bmVIV3lPbWR6QzVwM0x0UDgvUjFrMDlMd0x4cnNDaFpkQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaEF1MEgweUZNK1Z5QnQ0ejB6aW95dTdnMHVHbkw3anJURjg4UDB6V1MrTXJCbllXMHI0OWtTM0RHS3RYQlB1bnRVczBGelpnSjFkTXZhQVU2NmtDanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzOTc2MDY2MjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3NTAyMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMUVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxRWC5qc29uIjogIntcImtleURhdGFcIjpcIm5JbnI3Mm9WS1FCOEVPUEtyeUdDSlRJcmJoZjlBUFM0WWNvcFE3RWk5OW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzYwMTE5NTQyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzMyNzUwMjIxNDc4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TAN",
  ownername:process.env.OWNER_NAME|| "MRTAN",


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
