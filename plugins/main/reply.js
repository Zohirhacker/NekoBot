exports.default = {
   names: ['Main Menu'],
   tags: ['ya'],
   command: ['ya', 'y'],
   start: async (m, {
      conn,
      Format
   }) => {
      /**
       * example simple send message
       */
      //example reply message without advertisement
      conn.adReply(m.chat, 'Silahkan Ketik .menu', cover, m, {
         showAds: false,  // or true with advertisement
         manyForward: false //true with forwarded manytimes ads must be false
      })                
   }
};