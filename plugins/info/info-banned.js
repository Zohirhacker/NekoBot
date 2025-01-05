exports.default = {
   names: ['Info'],
   tags: ['listbanned', 'listban'],
   command: ['listbanned', 'listban'],
   start: async (m, {
      conn
   }) => {
      let users = Object.entries(db.users).filter(user => user[1].banned);
      let bannedUsers = users.map(([jid, user]) => {
         return {
            jid: jid,
            name: user.name,
            reason: user.bannedReason || 'No reason'
         };
      });
      let bannedList = bannedUsers.map(user => `Number: *${user.jid.split('@')[0]}*\nName: ${user.name || ''}\nReasons for Ban: ${user.reason}`).join('\n');
      let text = `The following is a list of banned users ${setting.botName}\n`;
      text += `Total : ${bannedUsers.length}\n`;
      text += `User: ${bannedList ? '\n' + bannedList : 'No banned users.'}`;
      conn.adReply(m.chat, text, cover, m);
   }
};