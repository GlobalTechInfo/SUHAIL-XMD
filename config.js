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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_58_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNPSnJVUjlaOE5WYVNWY0hpOVBtSkM1T0FqSG1mT3AwVnhhNjdObGF5VTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlF3RW9XeUpMU2NhOWl2clFwM3FpZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDFiOGFiYmEtNGZiZi00MDIwLTkzYzgtMmYwNTVlODdjMDNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDIyMSxcbiAgICAgIDE4NSxcbiAgICAgIDE5MSxcbiAgICAgIDEwMixcbiAgICAgIDE4MixcbiAgICAgIDE4MyxcbiAgICAgIDEyMixcbiAgICAgIDcyLFxuICAgICAgMTY1LFxuICAgICAgMTg2LFxuICAgICAgMTksXG4gICAgICAxOTEsXG4gICAgICAxMzksXG4gICAgICAxNDMsXG4gICAgICAxNTIsXG4gICAgICAxNTQsXG4gICAgICAxNzksXG4gICAgICAxMzEsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAyMTEsXG4gICAgICAyMjQsXG4gICAgICA0OSxcbiAgICAgIDI0MSxcbiAgICAgIDE2NixcbiAgICAgIDIzNyxcbiAgICAgIDIxOSxcbiAgICAgIDE4NyxcbiAgICAgIDI0NixcbiAgICAgIDE3MCxcbiAgICAgIDUsXG4gICAgICA4OSxcbiAgICAgIDE1MCxcbiAgICAgIDIwMyxcbiAgICAgIDE1MixcbiAgICAgIDE4NixcbiAgICAgIDU2LFxuICAgICAgMjU0LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpaWk1EV0xYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU0NjUyNjMyNDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1Njc5MDYyMzcyNTI5OjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09UQXROOEdFSjN5OXJvR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2g1dnpaL1AyVlM5NVlJUUhFSDRBenl6RXZzaEpveVk2R1I4MnozRm5Hdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2bkc1THhyWHNndVdaZnRBZEovZUNmOHdXNHZHL1ZONjZ6alRPWEJ1clFnZHhQSDh0TnVhZWtYckhOMS9Memk0OGFxN21uVXdiaEc5Y1U5aXJQNHdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZS3pVR3NQOTVENWNnVTBtNWxnNHZIZDRUbmUyV3hFcjdLRHRZb24reGgvYWp2bnM3cU4veTJWN21MVlpnZkdQTU5LZisyTEs0NTlnK1dQb2FKU1NpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU0NjUyNjMyNDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MTk1NDg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
