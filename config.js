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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347068041303";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_05_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVvOTM2YlhYQUo5d1ZLQXJHbnZzVDhOQlhKRFJTeTkvRGVRSHB1cCsxT009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9KZWhUQ1g4UVJlLS14dmVhVEl0bmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzE2OWI5NGQtYzBjZC00ZDQ1LWI0OWUtZTRhY2U0MzgzZDFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDMxLFxuICAgICAgMjAzLFxuICAgICAgMTczLFxuICAgICAgMzMsXG4gICAgICAyNTQsXG4gICAgICA4MCxcbiAgICAgIDIyNixcbiAgICAgIDU1LFxuICAgICAgMjMxLFxuICAgICAgNDEsXG4gICAgICAxNyxcbiAgICAgIDE1NSxcbiAgICAgIDExNixcbiAgICAgIDE0NCxcbiAgICAgIDIzNyxcbiAgICAgIDI4LFxuICAgICAgNTQsXG4gICAgICA4NixcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDMzLFxuICAgICAgMTcwLFxuICAgICAgNDQsXG4gICAgICA4MixcbiAgICAgIDI0NCxcbiAgICAgIDIyMSxcbiAgICAgIDc5LFxuICAgICAgNixcbiAgICAgIDIxMCxcbiAgICAgIDE5NixcbiAgICAgIDIzMCxcbiAgICAgIDE1LFxuICAgICAgMTEzLFxuICAgICAgODksXG4gICAgICA4MixcbiAgICAgIDIwNixcbiAgICAgIDE5NCxcbiAgICAgIDEwMixcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRMTVNNk5UNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2ODA0MTMwMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU4NzQwNTY5MDQ4Nzg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV2h2Yk1DRUpmMWw3Y0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlINTJyaUNwRVRmVVJ4N21CZ0EyZURBdVU2WWZjN3RFNllxaDNYendjbUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGtkYlRqSjRhOWVHV0hkck52dGZlU1lwY2I3Kzd0a0tpbzFDamlUTlhldmVDbEhNa1RBNWc1YXJuT3VEYkp4cGRLaFVmWWNITkVtSStnOFlsQmVtQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUU4xcDhxd2pZeVBLOFJxRVphNVQ3cGFNVExaMktoYVNSQ3ZMcjd4WUMvMFp1Q1p1dVp2VVIwYjhVQ1FESjhoOWJqME0zdTF5V3hzMDJVcGd6SFB1aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODA0MTMwMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYzNDc5MzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
