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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_39_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInp2aEt2K3BNc3pVR0R4ZE0rNnRveU5jY3Y5MzNES2p6NGNHNG1XQTB6QzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5xdjJZY3c0U0tlMXJCNjh1bllYbEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjFhNTQzMDEtNzRmMC00ZjdlLTlmYzctNGM2OWNhM2FlNzdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDExNyxcbiAgICAgIDIxMCxcbiAgICAgIDExMixcbiAgICAgIDczLFxuICAgICAgNjEsXG4gICAgICAxMTUsXG4gICAgICA0MSxcbiAgICAgIDIwOSxcbiAgICAgIDIxLFxuICAgICAgMjU1LFxuICAgICAgMjI4LFxuICAgICAgMjUwLFxuICAgICAgMzIsXG4gICAgICAxNzYsXG4gICAgICA2LFxuICAgICAgMjE4LFxuICAgICAgMjUsXG4gICAgICAxNzIsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxMzYsXG4gICAgICAyMjgsXG4gICAgICA5MyxcbiAgICAgIDE5NyxcbiAgICAgIDQ0LFxuICAgICAgMzMsXG4gICAgICAxNTMsXG4gICAgICAxODUsXG4gICAgICA2MCxcbiAgICAgIDI1MCxcbiAgICAgIDEzOCxcbiAgICAgIDQ5LFxuICAgICAgMTcyLFxuICAgICAgMTM5LFxuICAgICAgMTEwLFxuICAgICAgMTUzLFxuICAgICAgMTYsXG4gICAgICAyMTQsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVRDOTNKSjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE5MzU3MDc2OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSi5EXCIsXG4gICAgXCJsaWRcIjogXCIxNDI1MTk5ODM3MzA5Mjc6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlGMVFZUTRxMnF1Z1lZRnlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0MGVqSmlaTHM1Zmd4Zm1vaGdveDlpOFJJcCtKN2lZK3Z0cndPcFVaSDA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNiNUxZdWJtTEk4aUIwaGVtM3BoRm9JQjIzNEpyRDdoOXFMVmhpdFdYaGlVdHJmNEhoOEZPU2w2TThhRGZxVDljTHBFMnFDRjE5QnFpandQaitSN0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlKZnB1cSsxcmhueTRVeXlRYkQ3ZDJZN1VPRC9mMkVOZlhIenc3Y25tM2F5dFVLa1pPQjlFbnJaOEcwZFd1cVBObmJiYU0zbzVVakk4NHAxVVdYL2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE5MzU3MDc2OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTQxNTQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3NqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLc2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqcSszVkZYZGtnUm1ReEIrZjBiUXY4Mm95U0xNZHlia3ZhaHZKcWxRYXlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzOTc2MzEyLFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsMTcsMTVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
