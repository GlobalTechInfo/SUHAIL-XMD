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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_03_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVkpzU1JYaUJOSnNraUttT2VjYXNpRXlwd2hMMjRWS2YzakhnNG96djk2Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOXE1YkJUSzlTQnl0UDM3YkVLWHVOUVwiLFxuICBcInBob25lSWRcIjogXCIyYjViYzA5NC1mN2U5LTQ2MWQtYjljZi1hYWM4YzZmM2M2NzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMjQsXG4gICAgICAyNixcbiAgICAgIDE4NCxcbiAgICAgIDYwLFxuICAgICAgMTc3LFxuICAgICAgMTU3LFxuICAgICAgMTIwLFxuICAgICAgMjE5LFxuICAgICAgMTQ1LFxuICAgICAgMTg3LFxuICAgICAgNzksXG4gICAgICAzNyxcbiAgICAgIDI0NyxcbiAgICAgIDUzLFxuICAgICAgMTI3LFxuICAgICAgMTMyLFxuICAgICAgMjA0LFxuICAgICAgMTIzLFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDEyNCxcbiAgICAgIDIwNixcbiAgICAgIDIwNixcbiAgICAgIDkwLFxuICAgICAgNjIsXG4gICAgICAxNixcbiAgICAgIDI0MCxcbiAgICAgIDU5LFxuICAgICAgNixcbiAgICAgIDE1MSxcbiAgICAgIDIxOSxcbiAgICAgIDEzNSxcbiAgICAgIDEyNixcbiAgICAgIDE4LFxuICAgICAgMTg0LFxuICAgICAgNjYsXG4gICAgICA1NyxcbiAgICAgIDMyLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks1N0FRWTlSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTY4NTY4MjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNoYXdudHlcIixcbiAgICBcImxpZFwiOiBcIjE5MTE4OTc5OTMzNDQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNlJoZEFHRU02b29yb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImEyZGFnb1d4RFFXTWhGSmpvaURSSG1nNld4NjNlMlVHU0MyQllOeVc5SDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDZnaDJJekxsdTM3OHhRTms3REtuREF3eEszWC9qbXZjczMzYmV0Rk1MbmZSbGw3ajRHQVZsbkV1dk1YbHBqN0pxQlprOExqbUZhN0pYWjBVWkdsRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRlFwZC83bHNqcDliZ0JzOXYyNHZCUGliU3pmdGppclZpUjdjYWI1NkhUUThDNW51SkJkc0FVS0xybnBiaWxHRDA1VDlEK2ZnTEk5Z0RvenU3RHZUQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU2ODU2ODI1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjgwOTgxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURZR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFlHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTBCdVdRa1hpd216Z0J5cGpHSDZwa2Eyd3JBWEQ1cFp2MUNBWTRsWnRBaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc4NDY5MDIxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyODA5NDYwNzMxXCJ9Igp9"  // PUT your SESSION_ID 


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
import OpenAI from "openai";
const openai = new OpenAI();
const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {"role": "user", "content": "write a haiku about ai"}
    ]
});
