const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Title is required',
            trim: true
        },
        completion_at:{
            type:Date,
            required: 'Completion date is required'
        },
        description: {
            type: String,
            required: 'Description is required',
            trim: true
        },
        image_url: {
            type: String,
             trim: true
        },
        project_url: {
            type: String,
             trim: true
        },
        role_played: {
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
        collection: "projects"
    }
);
module.exports = mongoose.model("Project", ProjectSchema);