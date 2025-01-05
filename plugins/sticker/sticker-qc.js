const axios = require('axios');
exports.default = {
   names: ['Maker'],
   tags: ['qc'],
   command: ['qc'],
   start: async (m, {
      conn,
      prefix,
      text,
      command
   }) => {
      let pack = setting.botName
      let own = setting.footer
      if (!text) return m.reply(`Kirim perintah ${prefix+command} teksnya`)
      let randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffa500'];
      let apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
      let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => setting.thumbnail)
      let nama = await m.pushName
      let obj = {
         "type": "quote",
         "format": "png",
         "backgroundColor": apiColor,
         "width": 512,
         "height": 768,
         "scale": 2,
         "messages": [{
            "entities": [],
            "avatar": true,
            "from": {
               "id": 1,
               "name": nama,
               "photo": {
                  "url": pp
               }
            },
            "text": text,
            "replyMessage": {}
         }]
      }
      let json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
         headers: {
            'Content-Type': 'application/json'
         }
      })
      let buffer = await Buffer.from(json.data.result.image, 'base64')
      conn.adReply(m.chat, loading, cover, m).then(() => {
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: pack,
            author: own
         })
      })
   },
   limit: 3,
   premium: false
};
