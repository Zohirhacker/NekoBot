exports.default = {
   names: ['Info'],
   tags: ['user', 'totaluser'],
   command: ['user', 'totaluser'],
   start: (m, {
      conn
   }) => {
      const user = Object.keys(db.users).length;
      const caption = `Total user ${setting.botName}\n currently is${user} users`
      conn.adReply(m.chat, caption, cover, m);
   }
}