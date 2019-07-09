import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CreateContactPage } from '../create-contact/create-contact.page';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts = [];
  constructor(public rest: ContactsService, public actionSheet: ActionSheetController,
     public alertController: AlertController, public modalController: ModalController) { 
  
  }

  getPersons(){
    this.rest.getContacts().subscribe(res => {
      console.log(res)
      this.contacts = res.todasLasPersonas
    })
  }

  ngOnInit() {
    this.getPersons()
  }


  async Options(contact:any){
    const actionSheet = await this.actionSheet.create({
      header: 'Opciones para ' + contact.primer_nombre,
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log(contact._id);
        }
      },
       {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}
