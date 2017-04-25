import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {ContactsService} from './contacts.service';
import { ListerTousContactsComponent } from './lister-tous-contacts/lister-tous-contacts.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerTousContactsComponent,
    AjouterContactComponent,
    ModifierContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
