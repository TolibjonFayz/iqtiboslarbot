const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  username: { type: String },
  userid: { type: Number, required: true, unique: true },
  chatting: { type: Boolean },
});

const User = model("IqtibosUser", UserSchema);
module.exports = User;
