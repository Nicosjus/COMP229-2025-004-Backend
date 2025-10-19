const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Title is required',
            trim: true
        },
        completion:{
            type:Date,
            required: 'Completion date is required'
        },
        description: {
            type: String,
            required: 'Description is required',
            trim: true
        },
        created: {
            type: Date,
            default: Date.now,
            immutable: true
        },
        updated: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "projects"
    }
);
module.exports = mongoose.model("Project", ProjectSchema);