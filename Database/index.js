const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_db:admin123@cluster0.biw9v.mongodb.net/fCamara?retryWrites=true&w=majority',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;