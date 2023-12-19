const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bulk').then(()=>{
    console.log("connected to the database");
});

const dataSchema = new mongoose.Schema({
 
},{strict:false});


const DataModel = mongoose.model('bulk', dataSchema);
module.exports = DataModel;
