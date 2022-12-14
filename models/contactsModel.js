//contacts model

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email can not be more than 50 characters']
    },
    favoriteColor: {
        type: String,
        required: [true, 'Please add a favorite color'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    birthday: {
        type: String,
        required: [true, 'Please add a birthday'],
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    }
})

const ContactModel = mongoose.model('Contact', contactSchema);
module.exports = {ContactModel};
