const _ = require('lodash');

/**
 * This is the Contact class
 */
class Contact {

    /**
     * The constructor
     *
     * @param {number} id : the identifier
     * @param {string} address : the address
     * @param {string} phone : the phone
     */
    constructor ( id, address, phone ){
        this.id = id;
        this.address = address;
        this.phone = phone;
    }

}

/**
 * This is Data Access Layer for contacts
 */
class ModuleData {

    /**
     * Default constructor
     */
    constructor (){
        this._contacts = [
            new Contact(1, "Nantes, France", "0000011111"),
            new Contact(2, "Paris, France",  "0000011112"),
            new Contact(3, "Rennes, France", "0000011113")
        ];
    }

    /**
     * Gets contacts list
     * @return {Array}
     */
    get contacts (){
        return this._contacts;
    }

    /**
     * Adds a contact
     * @param contact
     */
    addContact (contact){
        this._contacts.push(contact);
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById (id){
        return _(this._contacts).find( (contact) =>{
            return contact.id == id;
        });
    }

    /**
     * Deletes a contact
     * @param contact
     */
    deleteContact (contact){
        _.remove(this._contacts, function (_contact){
            return contact.id == _contact.id;
        });
    }
}

module.exports = Contact;
module.exports = ModuleData;