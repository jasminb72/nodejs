import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from './../contacts.service';
import { Contact } from './../contact';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent implements OnInit {
  private newContactInfo = {
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
 * Adds a new contacts
 */
  public addContact() {

    // add, only if data are OK !
    if (this.newContactInfo._name != "" && this.newContactInfo._address != "" && this.newContactInfo._phone != "") {
      let contact1 = new Contact(0, this.newContactInfo._name, this.newContactInfo._address, this.newContactInfo._phone);

      //ajouter
      this.contactsService.addContact(contact1)
        .subscribe(data => {
          this.contacts.push(data);
        });

      // clean
      contact1 = undefined;
      this.newContactInfo = {
        _id: 0,
        _name: "",
        _address: "",
        _phone: ""
      };
    }
  }
}
