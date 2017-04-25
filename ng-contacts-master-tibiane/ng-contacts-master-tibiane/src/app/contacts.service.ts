import { Injectable } from '@angular/core';
import { Contact } from './contact';

//import Observable
import { Http, Response, Headers, RequestOptions, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// // Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactsService {
  private url;
  constructor(private http: Http) {

  }

  getContacts(): Observable<Contact[]> {
    //avant accès à l'API
    // let contacts=[];
    // contacts.push(new Contact(1, "Tidiane SIDIBE", "Nantes, France", "06000001"));
    // contacts.push(new Contact(2, "Jean-Brice BOUTIN", "Nantes, France", "06000002"));
    // contacts.push(new Contact(3, "Marianne POURRE", "Rennes, France", "06000003"));

    this.url = 'http://localhost:9484/api/contacts';
    //ou chemin relatif this.url = '/api/contacts';
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  addContact(contact: Contact): Observable<Contact[]> {
    //avant accès à l'API
    // let contacts=[];
    // contacts.push(new Contact(1, "Tidiane SIDIBE", "Nantes, France", "06000001"));
    // contacts.push(new Contact(2, "Jean-Brice BOUTIN", "Nantes, France", "06000002"));
    // contacts.push(new Contact(3, "Marianne POURRE", "Rennes, France", "06000003"));

    this.url = 'http://localhost:9484/api/contacts';
    //ou chemin relatif this.url = '/api/contacts';

    let bodyString = JSON.stringify(contact); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.url, bodyString, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  deleteContact(id: number): Observable<Contact[]> {

    this.url = 'http://localhost:9484/api/contacts';
    //ou chemin relatif this.url = '/api/contacts';

    //appelle HTTP Delete, avec la variable id dans le body
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let obj={
      id : id
    }
    let bodyString=JSON.stringify(obj);        
    return this.http.delete(this.url, new RequestOptions({
      headers: headers      
      ,body: bodyString
    }))
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
