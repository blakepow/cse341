import {Request, Response} from 'express';

import {ContactModel} from '../models/contactsModel';

export const getAllContacts = async (req: Request, res: Response) => {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
}

export const getContactById = async (req: Request, res: Response) => {
    const contact = await ContactModel.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);
}

export const createContact = async (req: Request, res: Response) => {
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

export const deleteContact = async (req: Request, res: Response) => {
    const contact = await ContactModel.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    await contact.remove();
    res.send('Contact removed');

}
