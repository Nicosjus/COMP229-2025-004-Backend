const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Service name is required',
            trim: true
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
        collection: "services"
    }
);  
module.exports = mongoose.model("Service", ServiceSchema);