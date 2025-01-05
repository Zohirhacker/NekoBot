exports.default = {
   names: ['Tools'],
   tags: ['delete'],
   command: ['delete', 'del', 'd'],
   start: (m, {
      conn,
   }) => {
      conn.removeMessage(m)
   },
   premium: true
};
