import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.page.html',
  styleUrls: ['./create-contact.page.scss'],
})
export class CreateContactPage implements OnInit {
  personas = [];
  constructor(public contacts: ContactsService) { }

  ngOnInit() {
    this.contacts.getContacts().subscribe(res => {
      this.personas = res.todasLasPersonas
    })
  }

}
