const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutUsSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
      trim: true
    },
    bio: {
      type: String,
      required: 'Bio is required',
      trim: true
    },
    profile_image: {
      type: String,
      trim: true
    },
    resume_url: {
      type: String,
      trim: true
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
    collection: 'about_us'
  }
);

module.exports = mongoose.model('AboutUs', AboutUsSchema);
