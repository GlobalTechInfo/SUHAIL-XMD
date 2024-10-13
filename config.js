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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237695079053";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_58_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSXRweU51Zk0yQkQxL2NPeHpuMk42ZmV3Z3BaTkxreUVMT20rVXNnSVBaTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmhTQV85aDZUMmlrM2ZsQTJCanBUUVwiLFxuICBcInBob25lSWRcIjogXCJjNzYyOTllYy1kMmVhLTQzZGQtOTA0Mi0zMzBjMTJiYTU2YzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTE0LFxuICAgICAgMjE0LFxuICAgICAgOTEsXG4gICAgICAxOTAsXG4gICAgICAxNjAsXG4gICAgICA2MyxcbiAgICAgIDI1MixcbiAgICAgIDE0MyxcbiAgICAgIDEwNyxcbiAgICAgIDEwLFxuICAgICAgMTYwLFxuICAgICAgMjA3LFxuICAgICAgMTA2LFxuICAgICAgMTM3LFxuICAgICAgMTc3LFxuICAgICAgMjE5LFxuICAgICAgMTIzLFxuICAgICAgMTcsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICA0NixcbiAgICAgIDE0OSxcbiAgICAgIDIxOSxcbiAgICAgIDc5LFxuICAgICAgNDAsXG4gICAgICA2MyxcbiAgICAgIDYyLFxuICAgICAgMzMsXG4gICAgICAxMzQsXG4gICAgICA2NCxcbiAgICAgIDEzNCxcbiAgICAgIDE0MyxcbiAgICAgIDI2LFxuICAgICAgMjEzLFxuICAgICAgNzMsXG4gICAgICAxNjAsXG4gICAgICAxNjUsXG4gICAgICAxODYsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTk1XWEtaNTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5NTA3OTA1Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA0MjgxMzkyMzQwMjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05EZjU1Y0NFTkxQcnJnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRndVa2tjczk3cXNEUWllbGF5STkxRlIxUThJVXg0cUZWT0NlZWJpdTdUST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDeTFnazU5M2I1b3c2YndjRzh5WTJnYlZTalUrVWpETnVzakJsUEt3VENTNkNwYjdVcDBSVUJQdkMxcUlTa1BHd3V2eHlrNytOYisvZ3c5MHlwNnhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHVktlZXJHeklBM3pkazFvdlRDNTlaRkFRQ2ZJSmovbUplNmtadlh4Qk53OFJZMVVFRVJlenNEMWVINWJtU0oyaXNvY3B1MVo2VkJEbmVPV3lDajZnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTUwNzkwNTM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4ODE3MTEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUEvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
