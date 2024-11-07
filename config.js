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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50943504463";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true 43504463";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "" ;
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50943504463"

";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_53_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiWGhwUEJ0Q1hnb1l0TVRFa1RjNjIwTW9mR0l6STlTVFl6bnFsOVJwM2JRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1bkhuUmpPQ1RHMkhtWEFRdzc2eHZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0ZDlkYzNlLTIyM2EtNDgxOC05ZmFkLTM1NTFlZDliYjUzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDE5OCxcbiAgICAgIDc1LFxuICAgICAgMjUyLFxuICAgICAgMTQ4LFxuICAgICAgMjM0LFxuICAgICAgMjksXG4gICAgICA1OCxcbiAgICAgIDIwMSxcbiAgICAgIDYxLFxuICAgICAgMTE2LFxuICAgICAgMjM1LFxuICAgICAgMjIsXG4gICAgICAwLFxuICAgICAgMTg1LFxuICAgICAgMjQ4LFxuICAgICAgNDgsXG4gICAgICAxNyxcbiAgICAgIDEzNixcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE4NCxcbiAgICAgIDExLFxuICAgICAgMzQsXG4gICAgICAxMTksXG4gICAgICA4MSxcbiAgICAgIDYwLFxuICAgICAgMjI5LFxuICAgICAgMjQ0LFxuICAgICAgMzEsXG4gICAgICAyMDcsXG4gICAgICAyMzUsXG4gICAgICA0MSxcbiAgICAgIDE5NixcbiAgICAgIDEzOSxcbiAgICAgIDc4LFxuICAgICAgMTEyLFxuICAgICAgMTg2LFxuICAgICAgODYsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkJYSDNUUVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQzNTA0NDYzOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTVIgQVNTQVNTSU4g8JajmCDwnZC38J2br/Cdm6XwnZGH8J2bqPCSiJLwk4S/zZ7Nn82ezZ/gvJJcIixcbiAgICBcImxpZFwiOiBcIjEyNDU1ODg2NjY3Mzg5ODo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVEZyT3NIRU1QdHRMa0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNmNzdqZTlCelZ2OXEvT3hzd1F2c1hpZmRES1lYMk9JdGo0cW9FYkkySGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUkrZWZoRmpYdXpYSGtZQVdaME5QMHdpeE9wb0xSTmhoZGxNSjlJK1NGQjB3eXA3M1hPbmw4eG9sU1hNcnRUTkIwQ3hKRDA1WFp3TjZSVEtQZkFWQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQUtvSnhqTWFTa3NJci9GWWtpOFhMSGtieXpYN2tJWGMvbThIVkZpZ3cxcFJwcnJkWmNxMm02WXAxVHVFMWl0WlhXZDVTWGljdXgvTDFHaDQzQXFFRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDM1MDQ0NjM6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAxNjM5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
