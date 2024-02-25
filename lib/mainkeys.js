const { Markup } = require("telegraf");

const mainkeyboard = Markup.keyboard([
  [{ text: "💬 Admin bilan bog`lanish" }, { text: "🔎 Iqtibos izlash" }],
]).resize();

const adminback = Markup.keyboard([[{ text: "Ortga ⬅️" }]]).resize();

const quotes1 = Markup.keyboard([
  [
    { text: "Mubashshir Ahmad domla" },
    { text: "Rumiy" },
    { text: "Muhammad Qodir" },
  ],
  [
    { text: "Mehmet Yildiz" },
    { text: "Ikrom Sharif" },
    { text: "Imom G`azzoliy" },
  ],
  [
    { text: "Moviy daryo" },
    { text: "Abdukarim Mirzayev" },
    { text: "Imom al-Buxoriy" },
  ],
  [
    { text: "Ayman Yog`iy" },
    { text: "Inoyatillo Andijoniy" },
    { text: "MuhammadAli Eshonqulov" },
  ],
  [{ text: "2-varoq ➡️" }, { text: "⬅ Ortga" }],
]).resize();

const quotes2 = Markup.keyboard([
  [
    { text: "Ali Ibn Abu Tolib" },
    { text: "Yunus Emro" },
    { text: "Asmar Abdulhakim" },
  ],
  [
    { text: "Mehmet Yildiz" },
    { text: "Sardor Rahimxon" },
    { text: "Bintu Sodiq" },
  ],
  [{ text: "Sayyoh" }, { text: "Tunchiroq" }, { text: "Omar Halil" }],
  [
    { text: "Tundalik" },
    { text: "Adhamjon Abdurahmon" },
    { text: "Ibrohim Muhammadyor" },
  ],
  [{ text: "1-varoq ⬅️" }],
]).resize();

module.exports = {
  mainkeyboard,
  adminback,
  quotes1,
  quotes2,
};
