const { bot } = require("../core/bot");
const User = require("../db/User");
const { adminback, mainkeyboard } = require("../lib/mainkeys");

bot.hears("💬 Admin bilan bog`lanish", async (ctx) => {
  try {
    await User.updateOne({ userid: ctx.from.id }, { chatting: true });
  } catch (err) {
    console.log(err);
  }
  ctx.reply(
    "Savol, e`tiroz yoki taklifingiz bo`lsa yozib qoldiring. Tez orada javob beramiz 🙂.",
    adminback
  );
});

bot.hears("Ortga ⬅️", async (ctx) => {
  try {
    await User.updateOne({ userid: ctx.from.id }, { chatting: false });
  } catch (error) {
    console.log(error);
  }
  ctx.reply("Bo'limlardan birini tanlang 👇", mainkeyboard);
});

bot.on("text", async (ctx) => {
  if (ctx.message.text.startsWith("/elon")) {
    const elon = ctx.message.text.split("| ");
    const users = await User.find();
    for (const i of users) {
      await ctx.telegram.sendMessage(i.userid, elon[1]);
    }
  } else {
    const isUserChatting = await User.findOne({ userid: ctx.from.id });
    // Adminning userga javobi
    if (
      ctx.message.text.startsWith("/javob") &&
      ctx.from.id == process.env.ADMIN
    ) {
      const message = ctx.message.text.split(" | ");
      const userid = message[1];
      const text = message[2];
      await ctx.telegram.sendMessage(userid, text);
      ctx.reply("Javobingiz userga yetkazildi");
    } else if (isUserChatting.chatting) {
      // User adminga yozyapti
      const text = `${ctx.message.text} | ${ctx.from.id}`;
      await ctx.telegram.sendMessage(process.env.ADMIN, text);
      ctx.reply("Xabaringiz adminga yetkazildi 🙂");
    }
  }
});
