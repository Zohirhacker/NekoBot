module.exports = {
  command: "kuronime",
  alias: [],
  category: ["anime"],
  settigs: {
    limit: true,
  },
  description: "Cek Anime terbaru di Kuronime",
  async run(m, { sock, Scraper, text, Func, config }) {
    let latest = await Scraper.kuronime.latest();
    let cap = `*– 乂 Cara penggunaan*
> Masukan query untuk mencari anime
> Masukan link untuk mendapatkan data anime

*– 乂 Contoh - penggunaan*
> ${m.prefix + m.command} Toradora
> ${m.prefix + m.command} https://kuronime.biz/anime/toradora

*– 乂 Berikut ${latest.length} anime yang rilis hari ini*

${latest
  .map((a) =>
    Object.entries(a)
      .map(([b, c]) => `> *- ${b.capitalize()} :* ${c}`)
      .join("\n"),
  )
  .join("\n\n")}`;
    if (!text) throw cap;

    if (Func.isUrl(text) && /kuronime./.test(text)) {
      if (/anime\//.test(text)) {
        let data = await Scraper.kuronime.detail(text);
        let cap = `*– 乂 Kuronime - Detail*\n`;
        cap += Object.entries(data.metadata)
          .map(([a, b]) => `> *- ${a} :* ${b}`)
          .join("\n");
        cap += "\n\n*– 乂 List - Episode*\n";
        cap += data.episode
          .map((a, i) => `*${i + 1}.* ${a.title}\n> ${a.url}`)
          .join("\n\n");
        m.reply({
          image: {
            url: data.metadata.thumbnail,
          },
          caption: cap,
        });
      }
    } else {
      let data = await Scraper.kuronime.search(text);
      if (data.length === 0) throw "> Anime tidak ditemukan";
      let cap = "*– 乂 Kuronime - Search*\n";
      cap += data
        .map((a) =>
          Object.entries(a)
            .map(([b, c]) => `> *- ${b.capitalize()} :* ${c}`)
            .join("\n"),
        )
        .join("\n\n");
      m.reply({
        image: {
          url: data[0].thumbnail,
        },
        caption: cap,
      });
    }
  },
};
