const _ = require('lodash');

/**
 * This is the Contact class
 */
class Contact {

    /**
     * The constructor
     *
     * @param {number} _id : the identifier
     * @param {string} _name : the name
     * @param {string} _address : the address
     * @param {string} _phone : the phone
     */

    constructor(_id, _name, _address, _phone) {
        this._id = _id;
        this._name = _name;
        this._address = _address;
        this._phone = _phone;
    }

}

/**
 * This is Data Access Layer for contacts
 */
class ModuleData {

    /**
     * Default constructor
     */
    constructor() {
        this._contacts = [
            new Contact(1, "Toto", "Nantes, France", "0000011111"),
            new Contact(2, "Toto", "Paris, France", "0000011112"),
            new Contact(3, "Toto", "Rennes, France", "0000011113")
        ];
    }

    /**
     * Gets contacts list
     * @return {Array}
     */
    get contacts() {
        return this._contacts;
    }

    /**
     * Adds a contact
     * @param contact
     */
    addContact(contact) {
        let contactBase = new Contact(
            this.contacts.length + 1,
            contact._name,
            contact._address,
            contact._phone
        );

        this._contacts.push(contactBase);
        
        return contactBase;
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById(id) {
        return _(this._contacts).find((contact) => {
            return contact.id == id;
        });
    }

    /**
     * Deletes a contact
     * @param contact
     */
    deleteContact(id) {
        _.remove(this._contacts, function (_contact) {
            return id == _contact.id;
        });
    }
}

module.exports = Contact;
module.exports = ModuleData;