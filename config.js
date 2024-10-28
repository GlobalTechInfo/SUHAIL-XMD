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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_36_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3T0cvMkVSc2ltVnBaWXlXNzFEYjFXc2ZyQlBDbjJ4aVQ5c2djejJzVVNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqN1d0UmRrVFRQbVpEV1JCaUJXdGtnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2MjM1M2UzLTliZGItNGNlZC05NWJkLWU4OWJjNTc2NzFjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDE4LFxuICAgICAgMTEwLFxuICAgICAgMjgsXG4gICAgICAyNDMsXG4gICAgICA1NyxcbiAgICAgIDkxLFxuICAgICAgMjQ4LFxuICAgICAgOSxcbiAgICAgIDU2LFxuICAgICAgMTYzLFxuICAgICAgMTM1LFxuICAgICAgMTcsXG4gICAgICAxMjksXG4gICAgICAxNTYsXG4gICAgICAyNTIsXG4gICAgICAyNDYsXG4gICAgICAyMzgsXG4gICAgICAxNzksXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICA2OCxcbiAgICAgIDIwNSxcbiAgICAgIDE4NCxcbiAgICAgIDIwNyxcbiAgICAgIDM3LFxuICAgICAgMTY0LFxuICAgICAgMTc1LFxuICAgICAgMjUxLFxuICAgICAgMTMzLFxuICAgICAgMjM5LFxuICAgICAgMjMwLFxuICAgICAgOTcsXG4gICAgICA2MSxcbiAgICAgIDU0LFxuICAgICAgMTg2LFxuICAgICAgMjM5LFxuICAgICAgMTA3LFxuICAgICAgMTIyLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxGN1pWRlBIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwNTAwOTg4MzkxOjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODE0MDY5ODY2OTA4MDI6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVdVNDdnRUVNbWpnTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmZnludzlSTTZSNVkxV2tDZ1R4SW5sdUI3S3BoZGw0aW1VbFBDNEcrSG4wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJqS2huamR5N2trZks5OTNXaWxQeDFyQXVnYzZaazI3MU1RY3RDL2p1RE44dTdwcXgwS2sycjF6SWxCQStyWVRJNERTcUVHQURBVmZMOXJwb0hlVERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhvQ1RGbXBOdFVCSjdiOE9HU1NCOENBM0t5dnJ3eUErV3dHV0xRRGswUFdpZDhSbWxYZnU2TlFlcXczc0hXQ29FUEZvcUdHWGxwM2c2OHpqL21rOUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA1MDA5ODgzOTE6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAxNTQ5NTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
