const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://kavya_047:kavya_047@cluster0.vrril.mongodb.net/Purplle_Database")
}