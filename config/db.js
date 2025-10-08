const mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect('mongodb+srv://admin_db_user:awbVJ79DI7i64Scu@cluster003.oviumia.mongodb.net/');

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}