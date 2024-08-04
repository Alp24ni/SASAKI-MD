//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9af78e47953a85bccfd76.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "237692566974";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JPOGlSV0VQdEtEYi9tY0FGVEFzSjRrekpRMmlGeVI3dE5EMkxyc2tXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEFvbjA5MTg1Y3FIZlFkSWpNb2M4aXpXOGc0T0FXR21DUytwRHlhR2NXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSkN1SDh4UG5mQU8ydzFVbkFSd3dWZkpaZnU5UVdFbFo5bGc4S0xzZkhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VHhLemVXZjdlTXlsUVZKU2l0OUJBQ3hYck9XajZvVFVxam9NRGQyS0RnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNY3ZuSENRU0dIVnhEOXkzbmpKQTVuMlpxT3pTMTR1WXF4ejZMZG9SR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRlajRsSVl4Y2ZVOVZMN01Mek8wdmNoYlY5Ump1S2tOaXZlbkJJaVBxREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01LLzlJZkZRRjhNY3A0S1FKNXJUaXI3aHE0L3E5Y1FrYnI2T1FqaHBuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnhuSTlCTmFOelN6MDdLaENBVWRKMW8xMCtwVkdMZStZcUY1Sm11YWdEST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9maUZIbVNYZnRxUHNibktnK1NLM3llU3A4U1IyVENkWmFQMzNpMlMvWld5aDNSeFcwd0dMeWR1Y3JCdmhkZHZVQUNKdysyeHpqSEh5a1J3MVcwOGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJNY0pCZGxvejQzRE4vQU52MjhZMjUwMlg3RXdkekNtV1g0aHZ3Ym12Tm53PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzTGNHV3AtRVNpU2UwUm80WFlCbGVnIiwicGhvbmVJZCI6ImQ5YmNlYTBhLTc2N2UtNGI1NC1iOTRhLWM0NjVjNDVmMTNiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySFVOaEY3SU5nNWNZSzkwdnE0ZXEwanlLYTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJOc2dhTWo0T3gvUVBLTkcxNHcrK2VoakxVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRDNEVDVzlIIiwibWUiOnsiaWQiOiIyMzc2NTY1MjA2NzQ6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDMweWFnQkVLZWZqYlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUG16L21neldCeG1SVTNsUmtpbW9Vbm00ZXVKUWN0enRKUFp1WkhRMVlTZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSFhXcVR5RnVhNml0dkdKRkR1NVhIYXlyVWxpWmZCbzJYbXg5VFJXc1FDWjZ1L1R5OVk4ajFTbjB2MUozN0hRaU05YXJ1SmZlMmRCSGhGeG1WZ20rQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJNMnJRWlhzZFRrVlluYjQ0WER5WlNnU0g2bUI2YVpCTU1EWkQ4d09WaWtpRWNyOFYrWmJBM3dnUUEvdGVkN1lBc0tXQlA1MnYwR0tFc1dRNGhhTmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjU2NTIwNjc0OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDVzLzVvTTFnY1prVk41VVpJcHFGSjV1SHJpVUhMYzdTVDJibVIwTldFbyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTc4ODAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUk2MiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝓚𝓮𝓻𝓶𝓑𝓸𝓽™`",
  author: process.env.PACK_AUTHER || "𝓚𝓮𝓻𝓶𝓑𝓸𝓽",
  packname: process.env.PACK_NAME || "𝓚𝓮𝓻𝓶",
  botname: process.env.BOT_NAME || "𝓚𝓮𝓻𝓶𝓑𝓸𝓽",
  ownername: process.env.OWNER_NAME || "𝓚𝓮𝓻𝓶",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
