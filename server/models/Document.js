const { model, Schema } = require("mongoose");

const documentSchema = new Schema({
  _id: String,
  data: Object,
});

const Document = model("Document", documentSchema);

module.exports = Document;
