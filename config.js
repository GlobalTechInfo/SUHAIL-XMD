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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_42_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2ZjFWdlIrSTJ0bTRPd3ZwUnVmcmlhWlhBYStKcGlHMlNiVHdyaDU4aFowPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY3MjgyODc3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjhCRDQ0QjNGRjE1N0NEMkM2MTA3OUM1M0UyNzNFRjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMjkyOTY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjcyODI4NzcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQ0NDNjUxRENGNDBEQ0U1M0YyQTQ3NDQ0MTVDN0YxMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEyOTI5NjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NzI4Mjg3NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRDRTM0QjVDMkNCMzAxNjA3NzcxQTk2Q0UzQUI0RUQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTI5Mjk3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY3MjgyODc3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjlDMURDOThFOTY0NjFFQ0VFNTM3N0U1OEQ3N0JBMzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMjkyOTcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJNdURnREd6VHdhUDYwV3k4UExTZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzJiMzU4NjYtNWZiMS00ZTZiLWE1OWItYzhmY2M0Y2FkMDc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDEwNSxcbiAgICAgIDU2LFxuICAgICAgNDksXG4gICAgICA5OCxcbiAgICAgIDQyLFxuICAgICAgMTgyLFxuICAgICAgMjQsXG4gICAgICAzNyxcbiAgICAgIDc2LFxuICAgICAgMzUsXG4gICAgICAzLFxuICAgICAgODYsXG4gICAgICAyMTMsXG4gICAgICAxMzcsXG4gICAgICAxMzAsXG4gICAgICAxMzcsXG4gICAgICAyNTMsXG4gICAgICAxNCxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAyMjIsXG4gICAgICAyMDYsXG4gICAgICA5OCxcbiAgICAgIDMxLFxuICAgICAgMjI1LFxuICAgICAgMjA3LFxuICAgICAgMTE4LFxuICAgICAgMjM5LFxuICAgICAgMTQ3LFxuICAgICAgMTAzLFxuICAgICAgMTM5LFxuICAgICAgOTksXG4gICAgICA4MixcbiAgICAgIDI3LFxuICAgICAgMTg4LFxuICAgICAgMjMxLFxuICAgICAgMjEyLFxuICAgICAgMjE4LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNSMjJDNTFMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NzI4Mjg3NzI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYWNraW5nMDg0NVwiLFxuICAgIFwibGlkXCI6IFwiMTEyNjc5MTA0NTc3NzcwOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2MWlzNERFS1BleGJrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzR0Yit0aDJwTXdUeGVrOVJlQms5NjBRRXF6a3NwVGpsZzBrdjA4bmF5az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyc05PWFloRVV2RDIwUTY5UUFVQTdSeTM4cExoaExoUUkzSFIwNE9COGVxZXpPV0J4SFh3NXY5dzBlREpuMENWK0R4WHhRdHliayt6SkR0RXdUWVRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMWm55RXZZbnZGanZWNStRYUVFLzNRbEkrRTdjWnp1TWNpZzBPU0VzUmFFR0U0OFhCTWhGN0RGOHFWdVMrNTR1RkFEK3NrL2NKY3BMNmFTZWwwbnRpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzI4Mjg3NzI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjkyOTY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2UzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzbTJ5MFlwWXFTOTJnckg2S3BVNUVsWmdIZDJtT2g0QXZmQUk5RWJZZTNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2OTA2MzA2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
