const express = require('express');
const router = express.Router();

const ModuleService = require('./module-service');
const mService = new ModuleService();

router.get('/contacts', (req, res) => {
    let contacts = mService.getContacts();
    res.json(contacts);
});

router.get('/contacts/:id', (req, res) => {
    let contact = mService.findContactById(req.params.id);
    res.json(contact);
});

router.post('/contacts', (req, res) => {
    let contactBase = mService.addContact(req.body);
    res.json(contactBase);
});

router.put('/contacts', (req, res) => {
    let contactBase = mService.modifierContact(req.body);
    res.json({ok:"ok"});
});

router.delete('/contacts', (req, res) => {
    mService.deleteContact(req.body);
    //res.status(200).end();
    res.json({ok:"ok"});
});


module.exports = router;