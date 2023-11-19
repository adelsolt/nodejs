const mongoose = require('mongoose');

customerSchema = new mongoose.Schema({
     name: String,
     industry: String
});

mongoose.model('Customer', customerSchema);