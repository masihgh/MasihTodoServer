const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  isBookmark: {
    type: Boolean,
    required: false,
    default: false,
  },
  isDone: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
