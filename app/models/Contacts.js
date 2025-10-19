const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: 'First name is required',
            trim: true
        },
        lastName: {
            type: String,
            required: 'Last name is required',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
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
        collection: "contacts"
    }
);
module.exports = mongoose.model("Contact", ContactSchema);