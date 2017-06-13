import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { MdSidenav, MdDialog, MdDialogConfig, MdSnackBar } from "@angular/material";
import { AngularFireAuth } from 'angularfire2/auth';

import { FormLoginComponent } from '../form/form-login/form-login.component';
import { FormEventComponent } from '../form/form-event/form-event.component';
import { FormWorkComponent } from '../form/form-work/form-work.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private login: boolean;

  constructor(
    public db: AngularFireDatabase,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    public afAuth: AngularFireAuth,
  ) { 

    afAuth.authState.subscribe(log => {
      if(log) {
        this.login=true;
      } else {
        this.login=false;
      }
    });
    
  }

  ngOnInit() {
  }

  goLogin() {
    const config = new MdDialogConfig();
    this.dialog.open(FormLoginComponent, config);
  }
  goLogout() {
    this.afAuth.auth.signOut();
    this.snackBar.open('SEE YOU LATER', '', {
      duration: 2000,
    });
  }
  goProd() {
    let config: MdDialogConfig = {
      disableClose: false,
      data: {
      }
    };
    this.dialog.open(FormWorkComponent, config);
  }
  goEven() {
    let config: MdDialogConfig = {
      disableClose: false,
      data: {
      }
    };
    this.dialog.open(FormEventComponent, config);
  }

}