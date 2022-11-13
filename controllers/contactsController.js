const { ContactModel } = require('../models/contactsModel')

const getAllContacts = async (req, res) => {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
}

const getContactById = async (req, res) => {
    const contact = await ContactModel.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);
}

const createContact = async (req, res) => {
    const contactExists = await ContactModel.findOne({email: req.body.email});

    if (contactExists) {
        return res.status(400).send('Contact already exists');
    }

    const contact = new ContactModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    })
    await contact.save()
    res.send(contact)
}

const editContact = async (req, res) => {
    const contact = await ContactModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);
}

const deleteContact = async (req, res) => {
    const contact = await ContactModel.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    await contact.remove();
    res.send('Contact removed');

}

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    editContact,
    deleteContact
}
