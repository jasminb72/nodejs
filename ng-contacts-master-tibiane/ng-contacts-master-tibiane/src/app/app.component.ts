import { OnInit, Component } from '@angular/core';
import { Contact } from './contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private contacts = [];


  public constructor(private contactsService: ContactsService) {

  }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(
      listeContacts => {
        this.contacts = listeContacts;
      },
      err => {
        console.log(err);
      });
  }



}
