import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from './../contacts.service';
import { Contact } from './../contact';
//
//
//
//Important: cette fonctionnalité n'est pas finie!!!!!!!!!!!!!!!!!!!!!!!!!
//
//
//
//
//
@Component({
  selector: 'app-modifier-contact',
  templateUrl: './modifier-contact.component.html',
  styleUrls: ['./modifier-contact.component.css']
})
export class ModifierContactComponent implements OnInit {
  private modContactInfo = {
    _id: 0,
    _name: "",
    _address: "",
    _phone: ""
  };
  @Input() contacts: any;

  constructor(private contactsService: ContactsService) {
  }


  ngOnInit() {
  }

  /**
 * Adds a mod contacts
 */
  public modifierContact() {

    // mod, only if data are OK !
    if (this.modContactInfo._name != "" && this.modContactInfo._address != "" && this.modContactInfo._phone != "") {
      let contact1 = new Contact(0, this.modContactInfo._name, this.modContactInfo._address, this.modContactInfo._phone);

      //modifier
      this.contactsService.modifierContact(contact1)
        .subscribe(data => {
          for (let contact2 of this.contacts) {
            if (contact2.id == contact1.id) {
              //toutes les propriétés de l'objet modifié(celui à l'écran) remplace celui en base
              for (let prop in contact2) {
                contact2[prop] = contact1[prop];
              }
            }
          }
        });

      // clean
      contact1 = undefined;
      this.modContactInfo = {
        _id: 0,
        _name: "",
        _address: "",
        _phone: ""
      };
    }
  }
}
