import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from './../contacts.service';

@Component({
  selector: 'app-lister-tous-contacts',
  templateUrl: './lister-tous-contacts.component.html',
  styleUrls: ['./lister-tous-contacts.component.css']
})
export class ListerTousContactsComponent implements OnInit {


  @Input() contacts: any;

  constructor(private contactsService: ContactsService) {

  }

  ngOnInit() {

  }

  public deleteContact(id: number) {
    //**delete du contact en base**
    this.contactsService.deleteContact(id).subscribe(data => {
      let numIndex = 0;
      //puis delete dans le modèle data (qui sera répercuté automatiquement dans la vue, 
      //comme this.contacts est dans une directive ngFor)
      for (let contact1 of this.contacts) {
        if (id == contact1._id) {
          this.contacts.splice(numIndex, 1);
          break;
        }
        numIndex++;
      }
    });
  }
}
