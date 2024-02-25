const { bot } = require("../core/bot");
const { quotes1, quotes2, mainkeyboard } = require("../lib/mainkeys");

bot.hears("🔎 Iqtibos izlash", (ctx) => {
  ctx.reply("Kimga tegishli iqtibos izlayapsiz. \nTanlang 👇:", quotes1);
});

bot.hears("2-varoq ➡️", (ctx) => {
  ctx.reply("Tanlang 👇:", quotes2);
});

bot.hears("1-varoq ⬅️", (ctx) => {
  ctx.reply("Tanlang 👇:", quotes1);
});

bot.hears("⬅ Ortga", (ctx) => {
  ctx.reply("Bo'limlardan birini tanlang 👇", mainkeyboard);
});

bot.hears("Mubashshir Ahmad domla", (ctx) => {
  ctx.replyWithHTML(
    `<b>Mubashshir Ahmad domla</b>ning iqtiboslari:\n\n1. Agar yig‘i bo‘lmaganda, inson ichiga cho‘kib o‘lgan bo‘lardi.\n2. Tun kichik ozodlikdir. Uni buyuk ozodlikka aylantirish oʻz qoʻlimizda.\n3. Hatto yolgʻiz boʻlsang ham kurashni toʻxtatma!\n4. Sinov va qiyinchiliklar o‘tib ketishini kutayotgan paytimiz umrimiz o‘tayotgan bo‘ladi.\n5. Gohida hammadan yashirinib olishni xohlab qolasan. Aslida esa, seni topib oladigan odamga muhtoj bo‘lasan.\n6. Sen haqingda oʻylaganimdagi tabassumim ajri oʻzingga boʻlsin!\n7. Bergan jarohatlaringdan qonlar oqmoqda, ey gunoh...\n8. Eslaganda tabassum paydo qiladigan goʻzal narsa boʻlgin! ))\n9. Hislardan eng yoqimsizi - dunyo girdobidan chiqib, uyga qaytayotganingda, namozxonlarning xufton namozidan tarqalayotganlarini koʻrganingda boʻladi.\n10. Ikki marta oʻlmaslik uchun, bir marta tahqirlaganning oldiga qayta bormang!\n11. Qabrdagi birinchi tun..\nBu birovga siz hech qachon so‘zlab berolmaydigan.. va birov sizga hech qachon so‘zlab berolmaydigan hikoyadir.\n12. Sokin kunlar ham rizqdir.\n13. "Ularni faqat pastkash xorlaydi"\n14. - Menga jannat neʼmatlarini taʼriflab ber, - dedi. \n- Unda Rasululloh borlar..\n15. Gohida rizq, seni baxtiyor qilish uchun Alloh sen tomon yoʻllaydigan qalblar boʻladi.\n16. Ikki vaziyatdagi odamlarning holi kishini maʼyus qiladi:\n- Faqat janozadagina namozda turgan kishi.\n- Faqat kafanda oʻrangan ayol\n17. Vaziyat oʻzgarsa qilaman, deb yurgan hamma ishingizni, vaziyat oʻzgarganda ham qilmaysiz.`
  );
});

bot.hears("Rumiy", (ctx) => {
  ctx.replyWithHTML(
    `<b>Rumiy</b>ning iqtioblari:\n\n1. Har bir inson huzur bag‘ishlaydi..\n Kimdir kelganida bo‘lsa, yana kimdir ketganida..\n3. Tiliga hokim boʻlmagan insondan - doʻst, koʻziga hokim boʻlmagan insondan - yor chiqmas.\n2. Dindorlikning choʻqqisi nafsni nazorat qilishdir, boshqalarni emas.\n4. Kofi togʻi qadar buyuk boʻlsangda, kafanga sigʻadigan qadar kichiksan!\n5. Ey koʻngil, ibrat ol, boq har tushgan yaproqqa, u ham avval koʻkdan boqardi tuproqqa.\n6. Istaganim boʻlmayapti deb xavotir olma, yanada yaxshisi boʻladi. Balkim xayrlisi shudir.\n7. Ey doʻst, darding nima boʻlsa boʻlsin, umiding har zamon Alloh boʻlsin.\n8. Rumiy Hazratlari dinning asosini eʼtirof etarkan: "Hayotdagi eng katta festival - namoz", - deydi. Bir kunda besh mahal "festival" oʻtkazgan inson hech qachon baxtsiz va tushkun boʻlmaydi.\n9. Sizga uzatilgan hamma qoʻlni tutavermang, chunki inson niqobidagi necha shaytonlar bordir.\n10. Sevgida quyosh kabi boʻl. Doʻstlik va qarindoshlikda oqar suv kabi boʻl. Birovlarning xatolarini yopishda kecha kabi boʻl. Tavozeda tuproq kabi boʻl. Gʻazab onida oʻlik kabi boʻl. Xar ne boʻlsang boʻl - yo asling kabi koʻrin, yo koʻringaning kabi boʻl.\n11. Ichkaridagi kelib eshikni ochib bermasa, tashqaridagi oʻgʻri uyga kira olmaydi.\n12. Modomiki, hammaning gunohini berkitolmaysan, oʻz koʻzingni yumib qoʻya qol.\n13. Koʻngil bogʻ, koʻzlar bulutdir. Bulut yigʻlasa bogʻlar yashnagay\n14. Ey doʻst! Men Majnun emasman, ammo chaqirsang choʻli biyobonga borishga ham tayyorman.\n15. Goʻzal kunlar kelishini kutma. Unga tomon bormogʻingni unutma.\n16. Ming yil oʻqisamu, mendan "Nimani bilding" deb soʻrasalar "Haddimni bildim" deyman.\n17. Mehmon keladigan kabi uyingizni, ajal keladigan kabi qalbingizni toza tuting. \n18. Ey, yor! Biz ishq uzumining shingillari edikku! Boshqa shishalarga sharob boʻlibmiz, boshqa xayollarda sarob boʻlibmiz.\n19. Gulning goʻzalligi urugʻidan, insonning husni esa qalbdandir.\n20. Tilingdan oldin qalbingni tarbiya qil. Chunki soʻz qalbdan kelib, tilidan chiqadi.\n21. Har holni xayr, har kechani qadr, har kelganni Hizr bil.\n22. Oʻylaring soʻzlaringga, soʻzlaring feʼlingga, feʼling taqdiringga nuqs etadi. Goʻzal oʻyla, goʻzal yasha.\n23. Har holni xayr, har kechani qadr, har kelganni Hizr bil.\n24. Ishq namoz kabidir, niyat bilan kirishdingmi atrofga alanglash mumkin emas.\n25. Ishq azobi tortmagan yurak yo telbaning yo murdaning yuragidir.\n26. Tayoq bilan gilamga urishdan maqsad - gilamni kaltaklash emas, changini olishdir. Alloh senga dard - qiyinchilik berib kiringni olgay. Axir nega gʻam yemoqdasan?\n27. Inson tabassumi bilan tarbiyasini, nimaga kulgani bilan saviyasini namoyon qiladi.\n28. Aslida yoʻq boʻlgan bu dunyo bor kabi koʻrinmoqda. Aslida bor boʻlgan u dunyo, yashirinmoqda.\n29. Agar oyoqda tik turishga majoling boʻlmasada, tik turishga sababing boʻlsa, qoʻrqma yiqilmagaysan.\n30. Har qoʻlingni siqqan bilan doʻst, joningni siqqan bilan dushman boʻlma!\n31. Boshinnga eng qiyin kunlar tushib, sen bardosh bera olmaydigan nuqtaga kelganingda aslo sabringdan voz kechma. Ana shu nuqta taqdiringni oʻzgartiradigam nuqtadir.\n32. Modomiki, hammaning gunohini berkitolmaysan, oʻz koʻzingni yumib qoʻya qol.\n33. Achchiq suv ham, shirini ham suv. Aslo koʻrinishga aldanma. Chunki tashqaridan qaraganda, hamma ham insonga oʻxshaydi\n34. "Dunyo ishlari chala qoladi”- deb, Robbingni tark etma! Zero mozorlar, ishlari chala qolganlar bilan to\'ladir...`
  );
});

bot.hears("Muhammad Qodir", (ctx) => {
  ctx.replyWithHTML(
    `<b>Muhammad Qodir</b>ning iqtiboslari:\n\n 1. Bor kuchingni ularga yoqishga sarflaysan. Xo‘p, ular yoqdini bosishdi. Keyin nima bo‘ladi?\n2. Seni yaxshi ko‘radigan kishiga tushuntirishning hojati yo‘q. Seni yomon ko‘radigan kishiga tushuntirishning foydasi yo‘q!\n3. Qazoi qadarga bo‘lgan iymon "Qadaringni kutib uxlayver", demaydi! Balki "O‘rningdan turib, qadaringni kashf qil", deydi.\n4. Ishq yoqar... \nHalol bo‘lsa, bu dunyoda... \nHarom bo‘lsa, u dunyoda...\n5. Yomg‘irni juda ozchilik his qiladi. Qolganlar faqat ho‘l bo‘ladi xolos!\n6. Kim fitna va qiyinchilik ulkan bo‘lgan bu zamonda Alloh uchun xolis bo‘lsa, uning Alloh huzuridagi ajri ham ulkan bo‘ladi.\n7. Telefoning jiringlayotganin eshitsang, bilasanki,  sen bilan kimdir bog‘lanmoqchi.\n Xuddi shunday azonni eshitgan paytingda, bilginki, albatta Robbing seni u bilan bog‘lanishingni xohlamoqda.\n8. Baʼzi nematlar insonlar surʼatida bo‘ladi.\n9. Qalblar va manzillar to‘qnashganda...\n Gohida senga yomg‘irpo‘sh beradigan kishiga emas, sen bilan birga ho‘l bo‘ladigan kishiga muhtoj bo‘lasan. His qilish hududi ato qilish hududidan yuqorida turadi!\n10. Birovga osmonda 38301246569987 ta yulduz bor desangiz, u ishonadi. Lekin “Yangi boʻyalgan” degan yozuvni koʻrsa, u albatta barmogʻini tekkizib koʻradi)`
  );
});

bot.hears("Mehmet Yildiz", (ctx) => {
  ctx.replyWithHTML(
    `<b>Mehmet Yildiz</b>ning iqtiboslari:\n\n1. Umidsiz bo'lma.\nTur va duo qil.\n Qaysi gunohing Allohning rahmatidan katta?\n2. Sen bilan munosabati yaxshi boʻlgan insonlarga ehtiyojimiz bor, Allohim!\n3. Shubhasiz, eng katta xatoyimiz hammaning qalbi yaxshi ekanligiga ishonishimizdir.\n4. Amalga oshmagan har narsaning ortida Alloh murod qilgan bir xayr bordir.\n5. Balki sen Allohdan gul yaprogʻini istayotgandirsan, aslida Alloh sen uchun gulzorlarni tayyorlab qoʻygandir.\n6. Tavba "Menga yangi hayot kerak, eskisini rasvo qildim", demakdir.\n7. Tanimiz go‘zal bo‘lishi uchun, ruhimiz iymon haqiqatlari bilan go‘zal bo‘lishi kerak. Shunda ham maʼnan, ham jismonan go‘zal bo‘lamiz.\n8. Nimaga o‘limdan bunchalar qo‘rqamiz bilasizmi? Chunki hamma Jannatga loyiq emasligini biladi...\n9. Boshqalar haqida g’iybat qilingan davraga aslo o’tirma. Chunki u yerdan turganingda, navbatdagi mavzu sen bo’lasan.\n10. O‘lgandan keyin ikki ehtimol bor;\nYo bundan keyin boshqa dardlaringiz bo‘lmaydi,\nYoki dardlar siz uchun endi boshlanadi.\n`
  );
});

bot.hears("Ikrom Sharif", (ctx) => {
  ctx.replyWithHTML(
    `<b>Ikrom Sharif</b>ning iqtiboslari:\n\n1. Sen sababli biror kishi Dinga muhabbat qo‘ymadi. Xudo xayringni bersin, endi sen sababli birov dindan bezib ham qolmasin!\nAxloqni o‘rgan!\n2. Naqadar razil - bu nafs;\n  Haqsiz boʻlgan maqtovga quvonadiyu, haqli boʻlgan malomatdan xafa boʻladi.\n3. Alloh sari bir yoʻl tutginki, unda seni hech kim koʻrmasin...\n4. Sen dunyoning ichiga kir, ammo dunyo sening ichingga kirib olmasin...\n5. Baʼzi insonlar yomgʻirga oʻxshaydi. Qaqrab yotgan qalbingga yogʻib, uni bogʻ-u boʻstonga aylantiradi.`
  );
});

bot.hears("Imom G`azzoliy", (ctx) => {
  ctx.replyWithHTML(
    `<b>Imom G'azzoliy</b>ning iqtiboslari:\n\n1. Ilm hayo bilan kibr orasida yoʻq boʻlib ketadi.\n2. Qabrda yotganlar pushaymon qilayotgan ishlar ustida, tiriklar bir-biri bilan qirpichoq boʻlmoqdalar.\n3. Insonlarga, xususan, dunyo ahliga ahvolingdan shikoyat qilma. Keyin Alloh seni ularga tashlab qoʻyadi, xoru zor boʻlasan.\n4. mom G‘azzoliy nasihatlari\n• Sotgan narsangizni yoqtirmay, qaytarib olib kelishsa, qabul qiling;\n• Yolg‘on so‘zlashni tajriba qilmang va odatlanmang;\n• Chanqaganda, suv ichishdan oldin og‘zingizni chayqang;\n• Bozorda yurganda, hech kimga ozor bermang;\n• Egasining ruxsatini olmasdan, birovning narsasiga tegma‌ng;\n• Og‘zingizda luqma bilan gapirmang;\n• Gapirganda qo‘l, barmoqlar bilan ortiqcha ishorat qilmang.• So‘z berdingizmi, bajarishga qat’iylik bilan kirishing;\n• Faqat va faqat rost gapiring;\n• Har yerda maqbul so‘z ayting, chiroyli gapirishga harakat qiling;\n• Vujudingiz rohatini istasangiz, oz yeng va oz iching!\n• Tinglovchingiz bo‘lgandagina gapiring;\n• Bitta so‘zni qaytaraverishdan saqlaning;\n• Hech kimni aldamang, masxaralamang;\n• Boylar saxovati qoshida o‘zingizni zinho‌r kamsitilgandek his qilmang.\n• Yo‘l va ko‘chalarda to‘planishib turmang;\n• Suhbatlashish uchun do‘konlarni tanlamang;\n• Odobsiz, tarbiyasiz va badxulq kishilar b‌ilan tortishmang;\n• Fikr bildirganda: «Bu – mening qarashim», deb ayting;\n• Biror narsa yoki birortasini maqtaganda, oshirib yubormang;\n• Yig‘inlarda‌ o‘zingizgagina aloqador ishlar bilan mashg‘ul bo‘lmang;\n• Yaxshi gapga diqqat bilan quloq soling;\n• Xushbo‘y hidli narsalardan foydalanganda, me’yorni biling;\n• Ayrim orzular ro‘yobi uchun o‘zingizni o‘tga-cho‘qqa uravermang;\n• Sizga nisbatan muomala me’yorini buzganlarga ham vazmin bo‘ling.\n`
  );
});

bot.hears("Moviy daryo", (ctx) => {
  ctx.replyWithHTML(
    `<b>Moviy daryo</b>ning iqtiboslari:\n\n1. 🫀 Oshiq boʻlmoq - doʻst boʻlmoq, hamdard boʻlmoq, birgalikda kulmoq, birgalikda yigʻlamoqdir. Oshiq boʻlmoq - bir hayotni ikki kishi yashamoqdir.\n(Halol sevgi haqida gapirilmoqda)2. Ey Islom qizi!\nKitob oʻqi...\nBugun oʻzingni rivojlantirasan, ertaga farzandlaringni tarbiyalaysan. Jaholatning qoʻrqadigan yagona narsasi ayoldir. Chunki ayol oʻqisa, farzandlariga ham oʻrgatadi...\n3. Doʻst shodon kunlaringizda shar, nolon kunlaringizda qutqaruv chambaragi kabidir. Yaʼni baʼzida u bilan baxtiyor kunlar baham koʻrilsa, bazan esa gʻamgin kunlar dardlashiladi.\n4. Baʼzi insonlar duo kabidirlar. Koʻrinmaydi, ammo his qilasiz. Eshitilmaydi, ammo sizni tashlab ham qoʻyishmaydi.\n`
  );
});

bot.hears("Abdukarim Mirzayev", (ctx) => {
  ctx.replyWithHTML(
    `<b>Abdukarim Mirzayev</b>ning iqtiboslari:\n\n1. Musulmonning tashrif qogʻozi uning yashash tarzidir.\n2. Pok boʻling, pokizangiz boʻladi..\n3. Bugun hammamiz toshdek ishimizni tog’dek qilib ko’rsatayapmiz!.\n4. Koshki sen raqamlardan iborat ekaningni, har kun o‘tganida bir songa kamayib borishingni bilsang edi…\n5. O‘zimiz uchun nima qildik? \nDinimizni ozdirib, dunyomizni semirtirdik.\nAxloqimizni eskirtirib, buyum va liboslarimizni yangiladik…\n6. Odamlar xato ichida turib uyalmas ekan, siz haqning ichida turib nega uyalasiz?\n7. Pulni qalbga emas, choʻntakka solish kerak, chunki uni choʻntakdan chiqarish osonroq.\n8. Biz uchun yaralgan narsalar bilan ovvora bo‘lib, o‘zimiz nima uchun yaratilganimizni unutib qo‘ydik.\n9. Oʻlim hayotdagi eng katta musibat emas.\nEng katta musibat - oʻzing tirik boʻla turib, qalbingda Allohdan qoʻrqish hissi oʻlib qolishidir.\n10. Uch kunlik dunyoning ikkinchi kunidaman go‘yo. Na birinchi kunning havasi, na uchinchi kunning qoʻrquvi bor ichimda…`
  );
});

bot.hears("Imom al-Buxoriy", (ctx) => {
  ctx.replyWithHTML(
    `<b>Imom al-Buxoriy</b>ning iqtiboslari:\n\n1. Dunyoda ilmdan boshqa najot yo’q va bo’lmagay.\n2. Ibodat o'n qismdir. Uning to'qqiz qismi halol rizq qidirishdir.\n`
  );
});

bot.hears("Ayman Yog`iy", (ctx) => {
  ctx.replyWithHTML(
    `<b>Ayman Yog'iy</b>ning iqtiboslari:\n\n1. Haq ekanini doim taʼkidlayveradigan kishi qaysar hisoblanadi. Xatosini eʼtirof qilgan esa oqil bo‘ladi. O‘zi haq bo‘la turib, xato qilganini tan oladigan kishi esa uylangan bo‘ladi))\n2. Biz ruhimiz jasadimizdan ajralganda o‘lmaymiz. Bundan oldin kunlarimiz bir-biriga o‘xshaganda, o‘zgarishdan to‘xtaganimizda, umrimiz va vaznimizdan o‘zgasi ziyoda bo‘lmaganda o‘lamiz!\n3. Dardingizni odamlarga dasturxon qilmang. Ularning yarmiga buning qizig‘i bo‘lmasa, qolgan yarmini dardmanligingiz mamnun etadi.\n4. Agar xotining hamma erkaklar ablah bo‘ladi! degan bo‘lsa, u aynan seni nazarda tutgan, boshqa erkaklarni emas\n5. Dunyo va oxirat baxtiga erishishni istasangiz Parvardigoringizdan qochib yurmay, uning oʻziga qochib keting...\n6. Baʼzilar gunohga quvvati yoki puli qolmagandagina taqvodorga aylanadi.\n7. Haqiqiy erkak xotini ishlata oladiganidan koʻproq topadigan erkakdir. ))\n8. Kezi kelganda kimdir oʻsha gaplar bilan sizga qarshi qurollanmasligi uchun ham, har kimga dardingizni sochavermang.\n9. Toʻgri siz haromga aldanish oson zamonda yashayapsiz. Lekin bilingki, Allohdan qoʻrqqanga katta savob beriladigan zamonda ham yashayapsiz.\n10. Xor boʻlmaslik qoidasi:\n"Agar soʻrasang. Allohdan soʻra!"\n11. Barcha ayollar ham oyoq kiyim toʻla javonni orzu qilishmaydi.......)\tP.s: Yaʼni, oʻylaganingizdek kitob javonini orzu qiladiganlar ham bor.)`
  );
});

bot.hears("Inoyatillo Andijoniy", (ctx) => {
  ctx.replyWithHTML(
    `<b>Inoyatillo Andijoniy</b>ning iqtiboslari:\n\n1. Bir kun kelib 'Ochilmaydi' degan gullaring ochiladi. 'Ketmaydi'' degan dardlaring ariydi. Tuganmas deb hisoblangan vaqtlarini tugaydi. Hayot shunday bir sirki, avval shukr, keyin sabr, soʻngra ishonchdir!\n2. Dunyoga undan chiqib bir boqing, aslida sinovlari bilan goʻzal, toʻkisligi bilan emas...\n3. Bilib-bilmay bir gunoh qilsang-u,tavba aylasang va vaqtlar oʻtib, koʻnglinda yana oʻsha gunohga ragʻbat uygʻonsa, - bu - tavbang qabul etilmagani alomatidir...\n4. Yutuq - millionlab odamlar ichidan Alloh sizni tanlab olib, oʻzi sevgan amalni bajartirib qoʻyishidir...\n5. Bir kuni tepadan tirnogʻingga qadar oʻralasan. Hijobga kirgan ilk kuning, yer yuzidagi oxirgi kuning boʻlmasin!\n6. Ey koʻngil ovozingni chiqarma! Kut! Sabr qil! Alloh xohlasa boʻladi de, Allohga qoʻyib ber.\n7. Baʼzi insonlar duoga oʻxshaydilar. Koʻrinmaydi, ammo seziladi.\nEshitilmaydi, ammo tashlab ham qoʻymaydi...`
  );
});

bot.hears("MuhammadAli Eshonqulov", (ctx) => {
  ctx.replyWithHTML(
    `<b>MuhammadAli Eshonqulov</b>ning iqtiboslari:\n\n1. Energiya faqat uyqu va ovqatdan olinmaydi.\n2. Ilm boylikdan ustun turadi\nEy ilm talabida yurgan Aziz Inson! \nYodingizda bo'lsin, aql-u farosat bilan boylikni topsa bo'ladi. Lekin boylik orqali aql, farosat topish mushkul. Qadringizni biling, va himmatingizni baland tuting.\n' Hozir ilmga sarflayotgan sarmoyangiz kun kelib eng yuqori foizlarda daromad keltiradi. \n3. Xech qachon mahzun bo’lmang!\nAgar hayotda bir narsani yo’qotgan bo\'lsangiz, tushkunlikka tushmang - hali ko’p narsani yo’qotganingiz yo’q.\nAgar hayotda ko’p narsani yo’qotgan bo’lsangiz, tushkunlikka tushmang - hali hamma narsani yo’qotganingiz yo’q.\nAgar hayotda hamma narsani yo’qotgan bo’lsangiz, tushkunlikka tushmang - endi yo’qotadigan narsangiz yo’q. 😅\n`
  );
});

bot.hears("Ali Ibn Abu Tolib", (ctx) => {
  ctx.replyWithHTML(
    `<b>Ali Ibn Abu Tolib</b>ning iqtiboslari:\n\n1. Bugunlarda ilmdan soʻzlaguvchular qanchalar koʻp, ammo unga amal qiluvchilar qanchalar oz. \n2. Ilm mol-dunyodan koʻra yaxshiroq. Chunki, ilming seni asraydi, mol-dunyoni esa sen asrashing kerak boʻladi. Mol-dunyo sarf qilinsa kamayadi, ilm esa oʻzgalarga oʻrgatish bilan yanada ziyoda boʻlaveradi.\n3. Oʻqishni bilsangiz, har bir inson bir kitobdir.\n4. Bizning eng katta xatoyimiz, boshqalarning xatosiga boʻlgan qiziqishimizdir.\n5. Yomon xotin misoli goʻzal kiyingan chayonning oʻzidir.6. Gʻazab vaqtidagi ozgina sabr, keladigan minglab afsuslarni oldini oladi.\n7. Muhtojga yordam berishni ertaga qoldirmang. Zero, sizga yoki unga ertaga nima boʻlishini bilmaysiz.\n8. Bizning eng katta xatoyimiz boshqalarning xatosiga boʻlgan qiziqishimizdir.\n9. Odamlar uyqudalar. O'lganlarida uyg'onadilar.\n`
  );
});

bot.hears("Yunus Emro", (ctx) => {
  ctx.replyWithHTML(
    `<b>Yunus Emro</b>ning iqtiboslari:\n\n1. Kichik insonlar tengini, buyuklar esa "oʻzligin" izlar.\n2. Hech qanday xato qilmagan odam, hech nima qilmagan odamdir. Bu hayotdagi eng katta xato: oʻzingni xatosiz hisoblamoqdir.\n`
  );
});

bot.hears("Asmar Abdulhakim", (ctx) => {
  ctx.replyWithHTML(
    `<b>Asmar Abdulhakim</b>ning iqtiboslari:\n\n1. Eslatma!\nHijob avratni oʻrash uchun kiyiladi!\nYigitlarni oʻrash uchun emas!\n...\n2. Namozingni oʻqishmasidan avval,namozingni oʻqi!\n3. Zinoning zoʻr *sinonimi bor, eshitganmisiz?\nToʻydan oldingi muhabbat!\n4. Qabrda chirib ketadigan chiroyingiz bilan kibrlanmang.`
  );
});

bot.hears("Mehmet Yildiz", (ctx) => {
  ctx.replyWithHTML(
    `<b>Mehmet Yildiz</b>ning iqtiboslari:\n\n1. Umidsiz bo'lma.\nTur va duo qil.\n Qaysi gunohing Allohning rahmatidan katta?\n2. Sen bilan munosabati yaxshi boʻlgan insonlarga ehtiyojimiz bor, Allohim!\n3. Shubhasiz, eng katta xatoyimiz hammaning qalbi yaxshi ekanligiga ishonishimizdir.\n4. Amalga oshmagan har narsaning ortida Alloh murod qilgan bir xayr bordir.\n5. Balki sen Allohdan gul yaprogʻini istayotgandirsan, aslida Alloh sen uchun gulzorlarni tayyorlab qoʻygandir.\n6. Tavba "Menga yangi hayot kerak, eskisini rasvo qildim", demakdir.\n7. Tanimiz go‘zal bo‘lishi uchun, ruhimiz iymon haqiqatlari bilan go‘zal bo‘lishi kerak. Shunda ham maʼnan, ham jismonan go‘zal bo‘lamiz.\n8. Nimaga o‘limdan bunchalar qo‘rqamiz bilasizmi? Chunki hamma Jannatga loyiq emasligini biladi...\n9. Boshqalar haqida g’iybat qilingan davraga aslo o’tirma. Chunki u yerdan turganingda, navbatdagi mavzu sen bo’lasan.\n10. O‘lgandan keyin ikki ehtimol bor;\nYo bundan keyin boshqa dardlaringiz bo‘lmaydi,\nYoki dardlar siz uchun endi boshlanadi.\n`
  );
});

bot.hears("Sardor Rahimxon", (ctx) => {
  ctx.replyWithHTML(
    `<b>Sardor Rahimxon</b>ning iqtiboslari:\n\n1. Dunyodagi ishlar uchun xafa bo'lmang! Biz bu yerda uzoq qolmaymiz..\n2. Allohga eltuvchi yoʻl uzundir. Bu yoʻlning oxiriga yetishing muhim emas, umring shu yoʻlda yakun topishi muhim.\n3. Sukut - javob berishning imkoni yoʻq degani emas. Sukutning ikki maʼnosi bor: Mayda-chuyda narsalarga eʼtibor bermaslik. Gapirishdan foyda yoʻq ekanini his qilish.\n`
  );
});

bot.hears("Bintu Sodiq", (ctx) => {
  ctx.replyWithHTML(
    `<b>Bintu Sodiq</b>ning iqtiboslari:\n\n1. Og'riqni his etish uchun kishi o'z tanasida dard chekishi shart emas. Insofli, oqil kishi o'zini dard chekkan kishining o'rniga qo'yishni biladi.\n2. Namoz - banda va Robbi oʻrtasidagi munojot, soʻzlashuvdir.\n3. SABR - Allohning rejasini amalga oshishini kutishdir!\n4. Qalb ham bir idishga oʻxshaydi. Bir narsa bilan toʻlsa boshqa narsani sigʻdira olmaydi. Dunyo muhabbati bilan limmo-lim qalb, oʻzida Allohning muhabbatini, Uning azamati va buyukligini his qila olmaydi.\n5. Shunday yashaginki, hech kim sendan Allohga shikoyat qilmasin. Hamma seni Allohga omonat qilsin!\n6. Bandaning bandadan yordam soʻrashi, choʻkayotganning choʻkayotgandan yordam soʻrashiga oʻxshaydi!\n7. Oxiratda yeganlarimiz emas, yedirganlarimiz, kiyganlarimiz emas, kiydirganlarimiz bizga foyda beradi.\n8. Sevging seni jannatga olib bormasa, unday sevgi nima kerak?\n9. 'Erta, erta'', demang! Chunki siz Allohga qachon qaytishingizni bilmaysiz-ku!`
  );
});

bot.hears("Sayyoh", (ctx) => {
  ctx.replyWithHTML(
    `<b>Sayyoh</b> akaning iqtiboslari:\n\n1. “Mayli, qizlar qanaqa kiyinsa - kiyinsin! Harom deb boqmaydigan erkaklar kerak” - degan jumlani o’qib qoldim…\n2. Hayolingizga sig’dira olmagan narsangizni - hayotingizga sig’dira olaman deb urunmang!\n3. Intizom bu - qilishing kerak bo’lgan ishni, qilging kelmagan vaqtda bajarishingdir!\n4. Yoki koʻringaning kabi boʻl, yoki jiiim oʻtir... Asling odamni asabini buzmoqda 😅\n5. Kimdur hayollarini tushida ko’rish uchun ko’proq uhlaydi, kimdur esa hayollarini hayotda ko’rmoq uchun kamroq uhlaydi)))\n6. Maqsadlarida nuqsoni borlar nogiron ekan, tanasida emas!\n7. Oʻziga suyangan odam, har doim qaddi tik yuradi!\n8. Har kuni oʻzini taftish qilmayotgan inson - yashamayotgan insondir!\n9. Yoʻlimiz uzun! Lekin qachondir oxirgi xabarni oʻqiymiz.\n10. Odamlarning sen haqingdagi fikri poyezd vagonlariga oʻxshaydi gavjum yoki boʻm-boʻsh. Istagan vagoningga chiqasan va ularga qoʻshilib ketaverasan yoki eʼtibor bermasang eshiklar yopiladi va yoʻllarida davom etib ketaveradilar)`
  );
});

bot.hears("Tunchiroq", (ctx) => {
  ctx.replyWithHTML(
    `<b>Tunchiroq</b>ning iqtiboslari:\n\n1. Bu zamonning jihodi ro‘za tutishdir, faqat ko‘zing bilan!\n2. Kelajagingizni duolaringizga omonat qiling!\n3. Namoz shunday bir olovki, olov qanday temirga, oynaga shakl bersa, namoz ham insonga shakl, nizom, huzur, goʻzallik beradi.\n4. Insonlar sen haqingda nimani o‘ylayotganiga diqqatingni qaratsang, Allohning sendan nima xohlaganini unutasan.\n5. -Agar inson fabrika boʻlganida, nima ishlab chiqargan boʻlardi?\n- Bahona...\n6. Sevmoq isbot talab qiladi.\nKechalari qoim boʻlmay turib, Allohni yaxshi koʻraman deyish oson.\n7. Oʻtgan yillari uyimizdan chiqa olmayotgan edik. Endi esa uylarimizga kira olmayapmiz. \nDemak, na koʻchalar bizga tegishli, na uylar...\nHammamiz ham bu dunyoda musofirmiz...\n`
  );
});

bot.hears("Omar Halil", (ctx) => {
  ctx.replyWithHTML(
    `<b>Omar Halil</b>ning iqtiboslari:\n\n1. Ey yigit! Gar nafsingni poklamas ekansan, sen uchun ayolning satri ham fitna boʻlib koʻrinaveradi. Dushmanni tashqaridan emas, ichkaridan qidir. Fitna, Allohga xiyonatdan kelib chiqadi, xiyonat esa doim ichkaridan chiqqan.\n2. - Meni nega yaxshi koʻrasiz oʻzi, Begim?\n- Jinniliging uchun )))\n- Agar jinni boʻlmaganimdachi? ((\n- Jinni qilib olardim 😂\n- Jinni qilolmasangizchi 😛\n- Unda oʻzimni aldayman\n- Qanday qilib?\n- U rostan jinni deb 😝❤️\n`
  );
});

bot.hears("Tundalik", (ctx) => {
  ctx.replyWithHTML(
    `<b>Tundalik</b>ning iqtiboslari:\n\n1. Sevgi, mehr-shavqat, Qur'on, Sunnat, Islom axloqi yuklangan bir ona, marvaridlarga to'la dunyodan ham qadrlidir...\n2. Ularning badani, bizning esa qalbimiz vayronalar ostida qoldi...`
  );
});

bot.hears("Adhamjon Abdurahmon", (ctx) => {
  ctx.replyWithHTML(
    `<b>Adhamjon Abdurahmon</b>ning iqtiboslari:\n\n1. Muhabbatsiz kishilar erta uxlashadi.\n2. Eng soʻnggi ochadigan eshigimiz jannat boʻlsin! 🤲\n3. 1+1 = 3.   Oilada baraka bor)\n4. Muhabbatning tarjimasi - uylanishdir)\n5. Qabr yotoqqa, tuproq yopinchiqqa aylanar bir kun...\n6. Yaqinlaringga zinoni ravo koʻrmas ekansan, nega boshqalarga ravo koʻrasan?\n7. Arzon odamlarni qimmat kiyimlarda koʻp koʻraman.\n8. Xato qilsam jim turmang.Shunda doʻst boʻlamiz!\n9.  - Xotin senga kitoblarni tokchada chang bosib yotishi uchun olib berdimmi🤨?\n- Yoʻq dadasi hozir artib qoʻyaman🌝\n10. Seni borligingcha qabul qilaman..   (-Xurmat bilan sening qabring)\n11. Savol tugasa, umr ham tugaydi!\n12. Hayot zavqini buyumdan qidirgan insonlar naqadar baxtsiz.`
  );
});

bot.hears("Ibrohim Muhammadyor", (ctx) => {
  ctx.replyWithHTML(
    `<b>Ibrohim Muhammadyor</b>ning iqtiboslari:1. Qismatdan qocha olmaysan, qochishing ham qismatdir...\n2. Odamlardan hech narsa soʻrama, shunda ular seni yaxshi koʻradilar. Xudodan har narsani soʻra, shunda U seni yaxshi koʻradi.\n3. - Ozgina sabr qiling.\n- Qachongacha ?\n- Jannatgacha...\n🌷\n4. 🧕Ayol kishi oʻqisa, turmushga chiqsa, muhabbat qoʻyib, erining xizmatini xolis ado etsa, homilador boʻlsa, koʻzi yorisa, emizsa, tarbiya qilsa, ishlasa, tashvishlar va xavf-xatarni boʻyniga olsayu, yana oxirida aqli yarim sanalsa...\nAgar aqli toʻliq boʻlganida nimalar boʻlardiyu va yana nimalarni amalga oshirardi-ya!!!\n5. Sen qalbing talpingan yerdasan..\nTanang mavjud yerda emas..!`
  );
});
