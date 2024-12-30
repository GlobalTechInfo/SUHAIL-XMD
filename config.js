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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163406148";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348163406148";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348163406148";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348163406148";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_08_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDMxLFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVkM3IyYkZQUWhtVWszaC9oRXZoY3RSaS85Z3F0ZnRWVzZzWVdVc0syc3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVaeHdmdFU1UmZhVTdxcGNVNkZBOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmQ4ZTE3ZjctZTcxYy00ZDQwLTkzNzItNWUxMWE4NTcyNzAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDE3MSxcbiAgICAgIDIzLFxuICAgICAgODEsXG4gICAgICA4MyxcbiAgICAgIDExMyxcbiAgICAgIDk1LFxuICAgICAgOTEsXG4gICAgICAxMyxcbiAgICAgIDU5LFxuICAgICAgMzEsXG4gICAgICAxNDYsXG4gICAgICAxODUsXG4gICAgICA4MixcbiAgICAgIDIwNyxcbiAgICAgIDE3OSxcbiAgICAgIDE4OCxcbiAgICAgIDI0MCxcbiAgICAgIDE5MyxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAyMDEsXG4gICAgICAxMTAsXG4gICAgICAyNTUsXG4gICAgICAxODgsXG4gICAgICAxNTgsXG4gICAgICAxMTAsXG4gICAgICAxMDAsXG4gICAgICAxNTksXG4gICAgICAxNzQsXG4gICAgICA3MyxcbiAgICAgIDM2LFxuICAgICAgMTAzLFxuICAgICAgNjIsXG4gICAgICAxMTUsXG4gICAgICAzNixcbiAgICAgIDE2NixcbiAgICAgIDE5MixcbiAgICAgIDEzMSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAxOEtONDJLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNDA2MTQ4OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi66eI7J207YG0XCIsXG4gICAgXCJsaWRcIjogXCIxNTA0NzA0MjExMzk0ODY6NTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRBbWZzRkVPYlB6THNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRcjVTR1UyYjZSdjl5MXN2aUxxYXVyVk9KdWh0ZWEwT1J2RE1vOGorNDBZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZ6UVIvczd0VGdaSnBhK0EwaEZtZjcwMC9hd0NWaXV1UEJ0SXY2M3NSL1FpVnVxNWU3NFVGcy93SDRmcnB1MkdoL3hoUVE0K2RrTWRuOGdXbkh4cUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJWZlRIMUhHdXBNMDIrQkcwOHFnNjY0TUpPUldIQlhGRWptL0VIaHFZMVJHM0RSd1p5VFdYMVpiOUkrbVg2U3Y5WGlaZGJzMW52bkg3UXJSRGZhdWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM0MDYxNDg6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2MDAxMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQamlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBqaS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "마이클",
  packname: process.env.PACK_NAME || "🌚💦",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "마이클🌚",


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
