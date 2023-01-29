const mongoose = require('mongoose')
const { ContactSchema } = require('../models/crmModel')

const Contact = mongoose.model('Contact', ContactSchema);

const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

const getContacts = (req, res) => {
	try {
		Contact.find({}, (err, contact) => {
			if (err) {
				res.send(err)
			}
			res.json(contact)
		})

	} catch(err) {
		res.status(400).json({error: err.message})
	}
}

const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}

module.exports = {
    updateContact,
    deleteContact,
    getContactWithID,
    getContacts,
    addNewContact
}