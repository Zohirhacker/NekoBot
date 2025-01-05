exports.default = {
   names: ['Owner'],
   tags: [ 'revoke'],
   command: ['resetlink', 'revoke'],
   start: async (m, {
      conn
   }) => {
      await conn.groupRevokeInvite(m.chat)
      m.reply(`done`)
   },
   group: true,
   admin: true
};
