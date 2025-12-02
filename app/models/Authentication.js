const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const AuthenticationSchema = new Schema(
    {
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
        timestamps: true
    }
);

// Hash password before saving
AuthenticationSchema.pre('save', async function (next) {
    try {
        // Only hash if password is modified
        if (!this.isModified('password')) {
            return next();
        }
      // Hash the password with a salt round of 10
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (err) {
        return next(err);
    }
});
module.exports = mongoose.model("Authentication", AuthenticationSchema);    
 