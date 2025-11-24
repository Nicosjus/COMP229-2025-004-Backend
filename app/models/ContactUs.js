const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactUsSchema = new Schema(
    {
        first_name: {
            type: String,
            required: 'First name is required',
            trim: true
        },
        last_name: {
            type: String,
            required: 'Last name is required',
            trim: true
        },
        message: {
            type: String,
            required: 'Message is required',
            trim: true
        },
        phone_number: {
            type: String,
            unique: true,
            trim: true
        },
        subject: {
            type: String,
            required: 'Subject is required',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
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
        collection: "contact_us"    
    }
);
module.exports = mongoose.model("ContactUs", ContactUsSchema);