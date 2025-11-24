const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email: {
            type: String,
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
        },
        phone_number: {
            type: String,
            unique: true,
            trim: true
        },

        role: {
            type: String,
            enum: ['admin', 'user', 'guest'],
            default: 'user'
        },
         password: {
            type: String,
            required: 'Password is required'
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
        collection: "users"
    }
);

module.exports = mongoose.model("User", UserSchema);