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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+923030673336";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923030673336";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_49_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUklXQi9tWE4zbDFPNVhaL3J0Qk1xWXJkdEVBbnkxS1JjaXkvbFNPSzVTQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwienpoN3pjMFFUQlNTUUY1REVQOGFuUVwiLFxuICBcInBob25lSWRcIjogXCJlMGQ2ZmI2Yi05N2FlLTRkZjItYTY1ZS1jZDcyOGRmNWNiZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMTAsXG4gICAgICAyMTUsXG4gICAgICA2MSxcbiAgICAgIDYsXG4gICAgICAxNjQsXG4gICAgICA5MSxcbiAgICAgIDMxLFxuICAgICAgMjMwLFxuICAgICAgMTk2LFxuICAgICAgNzksXG4gICAgICAyMjcsXG4gICAgICAxMjMsXG4gICAgICAxNzksXG4gICAgICAyMjksXG4gICAgICAxOTUsXG4gICAgICAyMTcsXG4gICAgICAyMDcsXG4gICAgICAxMDEsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgOTIsXG4gICAgICA4MCxcbiAgICAgIDIxMSxcbiAgICAgIDIxMSxcbiAgICAgIDEwNSxcbiAgICAgIDIzMCxcbiAgICAgIDE4LFxuICAgICAgMjM5LFxuICAgICAgMTE2LFxuICAgICAgMTEwLFxuICAgICAgMjAsXG4gICAgICAyMjUsXG4gICAgICAxMTAsXG4gICAgICA4MSxcbiAgICAgIDE5LFxuICAgICAgODMsXG4gICAgICAyMzMsXG4gICAgICAxMjIsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1JHTFRSVjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzMDY3MzMzNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDI5NTQ2NTMwODE2ODM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbU80KzRIRUtmZmdib0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBoREFGVGIvTVU2N3p0ckxXS0YyOGpnR3AwZ3pKckF4bVE5dStmVFlHa0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRktmRFhFTHpScXRlNW9DU2Vtc29RU0lQSUJybHFibEpwbnYzWFhZNlRGajZjNDFSVmNDY0hvS1EyTjh6VjJIZTNFdEJYRU96VkdhYzlGYzkrZFNyRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNmlMMXRwWGVEc2o1U3NVZE0zaWE4Mi9rNm9tMVZXRmFYUlhDUTdENTZ1Y1BQWkhDUUNxQldPN3hPQTg3U2JEZmwyNmIwZjZFV0p5aDNWZEFPdlZYRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDMwNjczMzM2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI3NjEzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1sLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWF6QjVodXdvdy8xVlVqemp1WVU0SnlMT3pEVVdoejF5NGMybHVVTFAvST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTExMzU4NzI5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "M-MALIK-KHAN-MD'",
  ownername:process.env.OWNER_NAME|| "M-MALIK-KHAN",


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
