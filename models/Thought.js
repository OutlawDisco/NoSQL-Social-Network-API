const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

//Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughttext: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    reactions: [reactionSchema],
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
