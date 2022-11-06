//contacts model

import mongoose from 'mongoose'

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
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
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

export const ContactModel = mongoose.model('Contact', contactSchema)
