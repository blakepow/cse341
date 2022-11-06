"use strict";
//contacts model
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var contactSchema = new mongoose_1.default.Schema({
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
});
exports.ContactModel = mongoose_1.default.model('Contact', contactSchema);
