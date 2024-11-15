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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923457247991";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_33_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0c2hPWUx1Zmo2YTlCNm1mSWNXT3l1MmJKV05WQkZVWXRQY096VjNkV1dBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzb0JiS3FoZVI5MjNHOGE2RUdDT05nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmYmEyZWM5LTNiNDctNDhkMi1hNTQyLTZkNGM0ZGViZWY3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNTcsXG4gICAgICAyNTUsXG4gICAgICAxMjUsXG4gICAgICAyMjMsXG4gICAgICA3NyxcbiAgICAgIDUyLFxuICAgICAgOTAsXG4gICAgICAxMjgsXG4gICAgICAxOCxcbiAgICAgIDExNyxcbiAgICAgIDExMCxcbiAgICAgIDc1LFxuICAgICAgMTIsXG4gICAgICAyMzEsXG4gICAgICA5MSxcbiAgICAgIDEwNCxcbiAgICAgIDI0MCxcbiAgICAgIDk4LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxNjIsXG4gICAgICAxMTQsXG4gICAgICAxMTgsXG4gICAgICAxNjUsXG4gICAgICAyNDQsXG4gICAgICA1NixcbiAgICAgIDIxNSxcbiAgICAgIDI1MSxcbiAgICAgIDU3LFxuICAgICAgMjMyLFxuICAgICAgMTU5LFxuICAgICAgMTI3LFxuICAgICAgMCxcbiAgICAgIDIyNCxcbiAgICAgIDE0NCxcbiAgICAgIDE5LFxuICAgICAgMTc2LFxuICAgICAgMjUwLFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpBNUY2VldKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NTcyNDc5OTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMzNjU1NTU3MDc0OTg3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJ6Z3RBQ0VQYkczTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0RFo3TG1PMVA4Y1BpYnovTCtlMit6NVVKajVTYzhIQTJoSnRpTUp4U1NNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRjd3NrR0NjYjJPSFpZZDl1VWQ3bFFwU3QrMm5ISi9BU3BnQWgyWmxpZzNBSzgwU0xncXU5ZWhJNzZVOU5qS0FrZzhIWlRRTSt6REFKZzA4TjFHbEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpKTTNNNlBoK01EM3JCNVVlb2U4RG5wT1R6NGI4VUI4RnByeUJCSDl1TGQwSVI1L3JuRXhrQUJVM09CeitBZVJtdVlnc1FYMWFCdVZQSmFYTDFRdEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ1NzI0Nzk5MTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY2NjgxMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
