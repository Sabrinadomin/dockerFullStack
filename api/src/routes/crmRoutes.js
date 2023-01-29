const { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact 
} = require('../controllers/crmController')

const express = require('express')
const router = express.Router()

router.get('/contact', getContacts)
router.post('/newContact', addNewContact)
router.get('/contact/:contactId', getContactWithID)
router.put('/updateContact/:contactId', updateContact)
router.delete('/deleteContact/:contactId', deleteContact)


module.exports = router
