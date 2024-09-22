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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_47_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICA4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ0tpQjBVSWJFeTJoVENuOXRuczQ3R04rK2d4OXUybmRkUWVuSUJxOXFwZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MDk1NTE5ODA4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTQxNjBDMzNDOTI0RDlBOThCQTA0RTI2RkI4OEQyRjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTkxMjY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5NTUxOTgwODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVDNzkxQTEzN0Q4NEFBMEIxRkI3MDNGRDhEQTVFNjU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjk5MTI2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfZTByNkQyTlJIU18yYjdkbFlNNmNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2ZjdlOTZlLWZmY2QtNDNlMy05NWFjLTU0MjMwNTgxMmJmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICA3OCxcbiAgICAgIDEwNixcbiAgICAgIDE4NCxcbiAgICAgIDMwLFxuICAgICAgMTE0LFxuICAgICAgMTYzLFxuICAgICAgMTk4LFxuICAgICAgMTgwLFxuICAgICAgMTY5LFxuICAgICAgNixcbiAgICAgIDIxNyxcbiAgICAgIDIyMSxcbiAgICAgIDIzNixcbiAgICAgIDIxNCxcbiAgICAgIDIwMixcbiAgICAgIDEwMCxcbiAgICAgIDE1MCxcbiAgICAgIDg1LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgNzMsXG4gICAgICA1MSxcbiAgICAgIDE0LFxuICAgICAgMTQzLFxuICAgICAgMTcsXG4gICAgICA3MyxcbiAgICAgIDE4NixcbiAgICAgIDE3MyxcbiAgICAgIDIzNixcbiAgICAgIDI1LFxuICAgICAgMTQ0LFxuICAgICAgMjAwLFxuICAgICAgOTQsXG4gICAgICAxMTEsXG4gICAgICA0MCxcbiAgICAgIDY1LFxuICAgICAgMTIzLFxuICAgICAgMTA4LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVOQVhDVlZFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk1NTE5ODA4NToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwMjcwODQ2Mzc4MTM1OjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmqvwnZq08J2ar/CdmrTwnZCY8J2as/Cdmq/wnZCU8J2QkiDwnZq7w6jwnZq7IPCdkIvwnZqr8J2atCDwnZCG8J2QmMOo8J2au1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YaGpHWVFuWmUvdHdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicTlHeVhBUksrUEQ0NVZ1SUY5SzROSWtlVXBjRk1NOFpDa2tmWlVQQ2JYZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2MkdhNE9lZ1N5TlowUVdOZkNLcktqQTB1a1BiMzRGU1FnZXFaU1JGSFJXZitHMnpTOG9hY3hKbWx3bHlhOW02RU1tbFhjRGxLWHk2R3ZBYjh5OVZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqTm5hN2hPRFMxMzVySnZKNGF3NVZIMlVxb2JHdkloRWovK2JDVkYxQXArSUhqbnNDMGZybHBVbW05Ukg5bmtCdGpyYS95QWhHVjJGVldLeTJYS25CZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk1NTE5ODA4NToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY5OTEyNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFENnlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ2eS5qc29uIjogIntcImtleURhdGFcIjpcIlBlSDFFM1pnVjJGUysvaHRTdzZqYkRqalJpemFJM2hpZGFJUml6cnVQQkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE0MTE4NjI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY5OTEyNjYzNjBcIn0iCn0="  // PUT your SESSION_ID 


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
