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
      this.contactsService.modContact(contact1)
        .subscribe(data => {
          this.contacts.push(data);
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
