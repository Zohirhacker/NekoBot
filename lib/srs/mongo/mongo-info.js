/** 
 * Jika Kamu Ingin Memakai Monggo DB sebagai Backup Penyimpanan Dan Bisa Merestore Lagi
 * https://www.mongodb.com
 * pas daftar di suruh bikin cluster pilih geser yang paling kanan yang free
 **/

/* nama file path database kamu default nya */
const file_restore = './database.json'
/* contoh password database monggo ganti disitu */
const password = 'DRjtqP6UF3reRwKG'
/* contoh url database yang di berikan monggo ganti disitu*/
const url = `mongodb+srv://mydata:${password}@cluster0.s8mff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const { backup, restore } = require('mongo-client-db');
async function Backup(data) {
   const response = await backup(url, data);
   console.log(response)
   return response
}

async function Restore() {
   const response = await restore(url, file_restore);
   console.log(response.log)
   return response
}
module.exports = { Backup, Restore }

/* iauto_backup_db nyalain .on autobackup matiion off autobackup, kalo error kamu salah masukin info password dan url nya matiin ajh sampe masukinya bener bener bener ga ada info error dari monggo nya */
const { auto_backup_db } = require('utils-mf');
if (!auto_backup) {
  return //console.log('Autobackup Disable');
} else if (auto_backup) {
   const alert = true
   const alert_info = 'Backed Up √'
   auto_backup_db(url, file_restore, backup, restore, { alert, alert_info });
}

/** TUTORIAL **/
/**
 * password database monggo
 * gimana cara menemukan nya? kalian pergi ke Project
 * di Security click Database Access 
 * jika masih kosong buat saja klik create
 * jika sudah ada klik Edit => Edit Password => klik AutoGenerate  Secure Password (terus salin!) => terus paling bawah klik tombol ijo Update User
 * generate and dan salin dan tempel ke yang di const password itu
 * Next 
 * cara mencari url monggo db kamu
 * di bagian Deployment click connect
 * lalu click Driver
 * dan kamu akan melihat url monggo kamu seperti contoh di atas lalu salin
 * ganti <dbpassword> dengan password ${password} contohnya di atas
 * terakhir kamu harus setting ip address kamu di mongo db nya 
 * di bagian Security (Network Access) dan setel ip panel atau vps kalian disitu
 * kalo g tau ipnya gimana bang ?
 * nah di bot kalian ketik .myip atau .ip 
 * setelah itu muncul langsu copy dan masukan
 * ke klik +add ip address lalu masukan ip nya ke Access List Entry
 * bagian Comment nya isi apa ajh misalnya ip panel ku  
 * dan jika sudah selesai semua kalian bisa jalankan fitur .backup untuk backup database.json nya ke monggo db dan .restore untuk ambil database yang telah di backup
 * hasil backup bisa kalian lihat di Deployment klik Database => Browse Collections => klik datas => dan lihat Query Results: 1-1 of 1 => klik _id => ubah tanda panahnya ke bawah 🔽 dan taraaaa itu database nya.. sekian
 **/