const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      trim: true
    },
    description: {
      type: String,
      required: 'Description is required',
      trim: true
    },
    button_text: {
      type: String,
      trim: true,
      default: null
    },
    button_action_route: {
      type: String,
      trim: true,
      default: null
    },
    created_at: {
      type: Date,
      default: Date.now,
      immutable: true
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'home'
  }
);

module.exports = mongoose.model('Home', HomeSchema);
