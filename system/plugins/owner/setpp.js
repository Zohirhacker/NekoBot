const jimp_1 = require("jimp");

class Command {
  constructor() {
    this.command = "setppbot";
    this.alias = ["setpp", "setppbotwa"];
    this.category = ["owner"];
    this.settings = {
      owner: true,
    };
    this.description = "Mengubah Poto profile bot";
    this.loading = true;
  }
  run = async (m, { sock, Func, Scraper, config, store }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (/image/g.test(mime) && !/webp/g.test(mime)) {
      let media = await q.download();
      let { img } = await pepe(media);
      await sock.updateProfilePicture(sock.decodeJid(sock.user.id), img);
      m.reply(`> Berhasil mengubah profile picture bot !`);
    } else {
      m.reply("> Balas/Kirim gambar yang ingin dijadikan profile picture bot");
    }
  };
}
async function pepe(media) {
  const jimp = await jimp_1.read(media);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG),
  };
}
module.exports = new Command();
