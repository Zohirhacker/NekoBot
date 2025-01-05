exports.default = {
   names: ['Info'],
   tags: ['feature'],
   command: ['feature'],
   start: async (m, {
      conn,
      Format
   }) => {
      const fitur = await Format.totalFitur();
      const caption = `Total feature ${setting.botName} currently is ${fitur} feature`;
      conn.adReply(m.chat, caption, cover, m);
   }
}