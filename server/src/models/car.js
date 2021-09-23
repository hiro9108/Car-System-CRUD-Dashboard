const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const carStatusSchema = new mongoose.Schema(
  {
    _id: Number,
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      minlength: 4,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false, timestamps: true }
);
carStatusSchema.plugin(AutoIncrement);
module.exports = mongoose.model("Car", carStatusSchema);
