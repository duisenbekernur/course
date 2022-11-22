const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    rememberMe: {
        type: Boolean
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', UserSchema);