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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_46_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiajJseWFXSWh0b3dBVlkxUStsc2Jqc1RVMEVsdmtlcExhNEdmZWk2NklnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU1NDA3MjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGREUxQ0MwQzI2RjZBQkFEQjcyRjY4NUIzNTQyMzlFM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2Mjg3OTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1NTQwNzIxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzZDRTVGOUMzNTIwQjg4NTcwNUVEOUFCMTI2RTVCQTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNjI4Nzk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInEyNG9TUnFHUUNpMGhJeEJDMnF2RmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjVlZGRhN2EtOTcwNi00YmZkLWJjYjctNjNkMTM4YzhlNjJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDE4MSxcbiAgICAgIDUxLFxuICAgICAgNjQsXG4gICAgICAxMzEsXG4gICAgICA4LFxuICAgICAgNDMsXG4gICAgICA3NixcbiAgICAgIDE1NCxcbiAgICAgIDE0OSxcbiAgICAgIDI0MyxcbiAgICAgIDk5LFxuICAgICAgMzcsXG4gICAgICAxNDEsXG4gICAgICAyMjAsXG4gICAgICAyMTMsXG4gICAgICA4OSxcbiAgICAgIDI0OCxcbiAgICAgIDI2LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDQsXG4gICAgICAxMjUsXG4gICAgICAxODcsXG4gICAgICAxOTYsXG4gICAgICAxOTgsXG4gICAgICA4NixcbiAgICAgIDE3NSxcbiAgICAgIDE4MixcbiAgICAgIDQyLFxuICAgICAgNjgsXG4gICAgICAxNjksXG4gICAgICAxNDksXG4gICAgICAyNTQsXG4gICAgICAxMjksXG4gICAgICA3OCxcbiAgICAgIDE5LFxuICAgICAgMjI4LFxuICAgICAgNDAsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlY2OUQxWUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU1NDA3MjExOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvKTJquG0jeG0nFwiLFxuICAgIFwibGlkXCI6IFwiMTg5NzAwNjE4ODk5NjQwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlFa2JzRkVMS2lsN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3eXk0Ym0wT0ZtQXVrNXlwVklNbDVWajF1TXF2S0txS3pQK0plenM2MWlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJDMlFMN25JaURkaTVNMUp2dThvR0pEUUtoRWlrbXNEZmJIR2Qralo3L1lMR0hGWWIweXBXN3hldDJ1ZDV0UWdPcDlhbVlzTi83MkNNWHhBSVJndkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhuUU1NMHQ4T3VuMWNKYlZ4Nmx6OFNMTGV3VEF3ZEYzN3BHZmx4d1VoNTBWYlJjMGlpTnBDRWVvaXc0d1BselZ0ejd0blRDTGRxUWVTRVVIRkkzSEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU1NDA3MjExOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI2Mjg3OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKOXpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo5ei5qc29uIjogIntcImtleURhdGFcIjpcImREbEZ5c0krTFZMRW82WU4wYkZCS0xBdEovL1YwU2toZjMreVFMOTYxZnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2NjE4ODQwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNjI4Nzk0NjgzXCJ9Igp9"  // PUT your SESSION_ID 


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
