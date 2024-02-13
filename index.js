/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */

const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

require('dotenv').config()

{
  "embeds": [
    { 
      "id": 908415980,
      "description": "**اذا كنت حاب ان تكون من ضمن** [**الاعضاء الرسميين**](https://discord.com/channels/1203956999168200816/1203956999671259141) **يمكنك** [**الضغط هنا**](https://discord.com/channels/1203956999168200816/1203968389232726016)",
      "fields": [],
      "title": "مرحباً بك في سيرفر فيتك <:vitk:1204356461032120330> الرسمي!",
      "color": 14268515,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1203981520214302730/1204386432165351536/vitk.png?ex=65d48b45&is=65c21645&hm=711fc3d80039a2876a283bbafdf2c823ab9143706d801be245eea5522cdcd12d&"
      }
    },
    {
      "id": 380745150,
      "description": "**نعم ! يمكنك الان المحادثة مع\n اخوياك في الشات العام!**",
      "fields": [],
      "title": "الشات العام:",
      "url": "https://discord.com/channels/1203956999168200816/1203957000246005772",
      "color": 14071666,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1203981520214302730/1205249699682983947/InShot_20240129_190346162.png?ex=65d7af40&is=65c53a40&hm=9c3626c146344e6371bf434e5174991f4049adc40a874ec7dd7973b54e6129c4&"
      }
    },
    {
      "id": 116977604,
      "description": "**نعم ! يمكنك الان مشاهدة مقاطعنا!**\n**في حساباتنا هذي**\n[**يوتيوب**](https://discord.com/channels/1203956999168200816/1203977795714420736) و [**تيك توك**](https://discord.com/channels/1203956999168200816/1203977841931198524)",
      "fields": [],
      "title": "مقاطعنا:",
      "color": 15191675,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1203981520214302730/1205249700400205886/InShot_20240129_182103508.png?ex=65d7af41&is=65c53a41&hm=e6a2f82f3112a555d96ef4be1cec91818c2e0b40afc339f194c24895f0cf5dba&"
      }
    },
    {
      "id": 282501782,
      "description": "**نعم ! يمكنك الآن مراقبتنا اول باول !**\n** في [تيك توك](https://discord.com/channels/1203956999168200816/1203979539059970048) و [يوتيوب](https://discord.com/channels/1203956999168200816/1203979575529312286) و [تغريداتنا](https://discord.com/channels/1203956999168200816/1203980896236208168) و [اخبارنا](https://discord.com/channels/1203956999168200816/1203980513895776296) و [بثوثنا](https://discord.com/channels/1203956999168200816/1203979095055011860) الان**!",
      "fields": [],
      "color": 15587741,
      "title": "الاشعارات :",
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1203981520214302730/1205249698064240720/InShot_20240129_211639460.png?ex=65d7af40&is=65c53a40&hm=3036f21217ee0f0348c79a965f771401e6894fd18ac963ca4a56ca0f5a8df7fc&"
      }
    },
    {
      "id": 756179420,
      "description": "**يجب اولاً ان توافق على** [**قوانيننا**](https://discord.com/channels/992463180859187211/1032981671726825522)",
      "fields": [],
      "title": "ليتم فتح غرفنا الي فوق ☆",
      "color": 14532981,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1203981520214302730/1205249698798239804/InShot_20240129_193118584.png?ex=65d7af40&is=65c53a40&hm=4090eeffda5406c25226c8892f9f966ed61a044b82a0c14257b47c149963d308&"
      }
    },
    {
      "id": 528347783,
      "description": "",
      "fields": [],
      "title": "• بعد قرائتها اذا وافقت عليها - فعليك بالنقر على ✅",
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/1203981520214302730/1205249701281136691/InShot_20240129_180237710.png?ex=65d7af41&is=65c53a41&hm=02cded66da1bc572378f50bfe2964b6b6cad46b273a52e0e271c453ca26a0905&"
      },
      "color": 1
    }
  ],
  "components": [
    {
      "id": 502093008,
      "type": 1,
      "components": [
        {
          "id": 810308532,
          "type": 2,
          "style": 3,
          "label": "الموافقة",
          "action_set_id": "562210035",
          "disabled": false,
          "url": "",
          "emoji": {
            "id": "1206774856818098227",
            "name": "emoji_15",
            "animated": true
          }
        }
      ]
    }
  ],
  "actions": {
    "562210035": {
      "actions": [
        {
          "type": 3,
          "id": 12436902,
          "target_id": "1203956999214211078",
          "public": false,
          "disable_default_response": false
        },
        {
          "type": 4,
          "id": 984264518,
          "target_id": "1203956999168200818",
          "public": false,
          "disable_default_response": true
        },
        {
          "type": 1,
          "id": 959332850,
          "text": "# <a:emoji_15:1206774856818098227> تظهر الرومات لديك الان",
          "public": false
        }
      ]
    }
  }
}

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
  });

  
  const textChannel = client.channels.cache.get(1206773756987576300 );

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */
