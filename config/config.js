require('dotenv').config()

module.exports = {
    "ATLASDB": process.env.MONGODB_URI,
    "JWT_SECRET": process.env.JWT_SECRET,
    "EXPIRES_IN": process.env.JWT_EXPIRES_IN
}