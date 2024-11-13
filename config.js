deconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "true" 
global.blockJids= process.env.BLOCK_JID || "true"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "242044304490";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || ""
  
  

";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "" ;
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "242044304490"

";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.c
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_55_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2Tk9qT21zbkpSWi9vTHdFdkRjWEFFZXlPem9lWXJmekF6YjBzZDRJbGRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqRjJUWWVVNFFiNnZ1WGNOaTY0b0VnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMwYjA3NDUyLThiNzktNGU2NS04Njg3LTRkODI0NGMyMGU2YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyMTYsXG4gICAgICA0OSxcbiAgICAgIDE3MyxcbiAgICAgIDE2MixcbiAgICAgIDczLFxuICAgICAgNzAsXG4gICAgICAxNDgsXG4gICAgICAzOCxcbiAgICAgIDI0NixcbiAgICAgIDIwNSxcbiAgICAgIDIzMCxcbiAgICAgIDIzMixcbiAgICAgIDEzLFxuICAgICAgOTYsXG4gICAgICAxMDcsXG4gICAgICAxOTUsXG4gICAgICAxMDcsXG4gICAgICA3MyxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDAsXG4gICAgICAyMzQsXG4gICAgICAyMDgsXG4gICAgICAxMzIsXG4gICAgICA4OCxcbiAgICAgIDE0NixcbiAgICAgIDEwNCxcbiAgICAgIDE5MCxcbiAgICAgIDE1LFxuICAgICAgMTY3LFxuICAgICAgMTk0LFxuICAgICAgMTQsXG4gICAgICAyMDIsXG4gICAgICAyNTUsXG4gICAgICAxOTAsXG4gICAgICAxNTAsXG4gICAgICAxMTUsXG4gICAgICAyMjYsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFgyQzgyTU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MjA0NDMwNDQ5MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTU4ODYzOTE3MDU3NzM6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOM2dwQ2NRa3FyUXVRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR4WHRtdHF5eTM3Z21pcU9GanQyUG5DR2huaGI3eWdGdXRIa0R6Zk1PMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYW9ObTM3emNrM3Y3a1owd3NVV2szZGpJaHJqdjVjTVpkdUl3YzhtK3lJR1hsVjVpSEZSMzA1MzVZUUo1dXhRLzgzby9FNkZmMncyeWg4R1VIV3RGQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOVVYczQ3a2I2dmJJTnNDcWdxUm56UENQWmQ0MVJHYjZqK2syOXMzRzlvSEJXOVVHbzlKalZBOGZRQmVWT1NMbGpVSHBQQzZQOHZ1OVdPVE5IRmNqaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDQ0MzA0NDkwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDY2NTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWJDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFYkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTN0x1Sk95UkNLcXovSXFhT0xzSUZneWt0VFlTbXRSeGYwNmVxUXM0YWg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyMzkxMTMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNDY2NDE4NjQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "assassin-X",


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
