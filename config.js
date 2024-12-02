const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nairobi/Kenya";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0756856825";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
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

global.api_smd = "wss://api.openai.com/v1/realtime" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_52_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyWTE1NStzRy9CRkZKeXNEQ0ROSU51eVNzaVdtNTJ4TFU0MnY1L2E3dWxjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1Njg1NjgyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTQ0RjVCMUVFREFFMEZBNzIyRkY4NjdGN0FCOEIzNDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyOTg5MTU3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJUYWxBTHNqUXhDQWJ4Nko4WWVCaHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmM3ZGM2ZmYtOGE1Ny00ODM4LTliMDYtZDVlZTA0Nzc5MTIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDI0NixcbiAgICAgIDkyLFxuICAgICAgMTUsXG4gICAgICAxMjUsXG4gICAgICAyNDAsXG4gICAgICAzNyxcbiAgICAgIDE2MSxcbiAgICAgIDY5LFxuICAgICAgMTQ1LFxuICAgICAgMTY1LFxuICAgICAgNjAsXG4gICAgICA5NSxcbiAgICAgIDE1NSxcbiAgICAgIDI1MCxcbiAgICAgIDE0NyxcbiAgICAgIDIyOSxcbiAgICAgIDEzOCxcbiAgICAgIDE0MCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAxNzcsXG4gICAgICAxMTYsXG4gICAgICAxMTQsXG4gICAgICAxOTAsXG4gICAgICAyMTMsXG4gICAgICAxNTYsXG4gICAgICAxNzMsXG4gICAgICA0NSxcbiAgICAgIDIxLFxuICAgICAgMTEzLFxuICAgICAgMjQzLFxuICAgICAgMTIsXG4gICAgICAyMjQsXG4gICAgICAxMTcsXG4gICAgICA2MCxcbiAgICAgIDQyLFxuICAgICAgMTcsXG4gICAgICA4OCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlSRzRHMkhaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTY4NTY4MjU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoYXdudHlcIixcbiAgICBcImxpZFwiOiBcIjE5MTE4OTc5OTMzNDQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNlJoZEFHRU4yaHJib0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEyZGFnb1d4RFFXTWhGSmpvaURSSG1nNld4NjNlMlVHU0MyQllOeVc5SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1QzazM0R05nRnBlQXF5Q1M2NkFUUGNYZTJmbWNwV2FiQjNPcldQcmR0US9OdGFLbTBJcUNBM1NKRjAvSzR6QnRoVnJ5ZGEram8yMkl3S244MVBvQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0Y5SkFXT2hZbTgramFsTVVvdm93cGZkWU1CZDhtTXpLK2h5YWFncm45Z0RkL1hwY0d4WnBMRWtPZ2JXblA4YU92UFM4eDIrcWpyMUNsbHp2UlB2aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU2ODU2ODI1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjk4OTE1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURZR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFlHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTBCdVdRa1hpd216Z0J5cGpHSDZwa2Eyd3JBWEQ1cFp2MUNBWTRsWnRBaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc4NDY5MDIxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyODA5NDYwNzMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Shawnty23 MD",
  ownername:process.env.OWNER_NAME|| "Shawn.A.",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "wss://api.openai.com/v1/realtime",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SHAWN"  ).toUpperCase(),



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
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "wss://api.openai.com/v1/realtime",
