exports.default = {
   names: ['Owner'],
   tags: ['setwelcome', 'setbye'],
   command: ['setwelcome', 'setbye'],
   start: (m, {
      conn,
      text,
      prefix,
      command,
      groupName        
   }) => {
      if (/setwelcome/.test(command)) {
         if (!text) return m.reply(`Enter the Welcome Text! \n\nExample:\n${prefix+command} Hey Welcome Babi %user\nIn Group %subject \nRead the Description Well \n\n%subject is the Group Name \n%user is the tag to the member number`)
         db.chats[m.chat].welcomeCaption = text
         m.reply(`Welcome Caption Successfully Changed in Group ${groupName}`);
      } else if (/setbye/.test(command)) {
         if (!text) return m.reply(`Enter the text Bye! \n\nExample:\n${prefix+command} Group Load %user\nHas Left %subject \nHopefully ... \n\n%subject is the Group Name \n%user is the tag to the member number`)
         db.chats[m.chat].byeCaption = text
         m.reply(`Caption Bye Successfully Changed in Group ${groupName}`);
      }
   },
   admin: true,
   group: true
}
