const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "python"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Nairobi";
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_19_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVUEkyTnlMVUFDNU1hTHIvUzhiTnFOUGhSamN1Qkd4Z0g0SEtJSUx2YkhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1Njg1NjgyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEQ3OEM3MDhBQjE3RTc1MTM3OUVGNkI4QUI2OUEzMTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDY1MTk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdJSk9UdW94VEsyVWdyaEV2ekFCU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzM4Y2VmZTYtYjM3ZC00ZjQ3LTk4ZWYtZWFhMGJiMzQwMWViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICA2OSxcbiAgICAgIDE5NSxcbiAgICAgIDI2LFxuICAgICAgMTksXG4gICAgICA0NSxcbiAgICAgIDUzLFxuICAgICAgMTc0LFxuICAgICAgMixcbiAgICAgIDg1LFxuICAgICAgOTAsXG4gICAgICA1LFxuICAgICAgMjMwLFxuICAgICAgMjA0LFxuICAgICAgMTMyLFxuICAgICAgMTYxLFxuICAgICAgMjQ0LFxuICAgICAgMTE2LFxuICAgICAgMTYsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAyMDUsXG4gICAgICAxODAsXG4gICAgICAxNTAsXG4gICAgICA0MCxcbiAgICAgIDIwMCxcbiAgICAgIDY0LFxuICAgICAgMTAxLFxuICAgICAgMTcxLFxuICAgICAgOCxcbiAgICAgIDY3LFxuICAgICAgMzEsXG4gICAgICA0MSxcbiAgICAgIDc2LFxuICAgICAgNTUsXG4gICAgICA3NSxcbiAgICAgIDIzNyxcbiAgICAgIDIyNSxcbiAgICAgIDI0NSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1TTNOTFlEV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU2ODU2ODI1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTaGF3bnR5XCIsXG4gICAgXCJsaWRcIjogXCIxOTExODk3OTkzMzQ0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnlSaGRBR0VLR2tqYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhMmRhZ29XeERRV01oRkpqb2lEUkhtZzZXeDYzZTJVR1NDMkJZTnlXOUgwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjQvc0FLQWFibGpyT2hNMi96ZmltOG1Gc0t1d0ZuWWo5UGxnTENUaXV1M2ZZQzdNUnQ2RFJaTFpaK3lZa3R0VlVhV244V3ZvZUdmcjF2citGK2piUUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlmemFyRXFmbE95L1M1ZmIzR2pRemNLMzN2RDcxdHloZTFkM29pZWljZGV6R1p0c3F4QVluZG1WeEgyYlBoc25hdHAzeC9PYzZta3dxYnM2YldEOUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1Njg1NjgyNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0NjUxODlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Shawn",
  packname: process.env.PACK_NAME || "Shawn",
  botname : process.env.BOT_NAME  || "Shawnty23 MD",
  ownername:process.env.OWNER_NAME|| "Shawn.A.",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
