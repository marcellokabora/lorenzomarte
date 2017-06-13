import { Component, Inject, ViewChild, TemplateRef, OnInit, HostListener } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MdSidenav, MdDialogRef, MdDialog, MdDialogConfig, MD_DIALOG_DATA } from "@angular/material";
import { environment } from '../../environments/environment';

import { FormEventComponent } from '../form/form-event/form-event.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imlogin: boolean;
  // homeslide:number = 0;
  gridlist: FirebaseListObservable<any>;
  // slidelist: FirebaseListObservable<any>;
  // slidenumb;
  gridh: '2:2';
  onmobile: boolean;
  baseurl = environment.baseurl;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public dialog: MdDialog, 
  ) {
        
      afAuth.authState.subscribe(log => {
        if(log) {
          this.imlogin=true;
        } else {
          this.imlogin=false;
        }
      });

    // this.slidelist = db.list('/event', {
    //   query: {
    //     orderByChild: 'what',
    //     equalTo: 'slide',
    //   }
    // })
    
    // this.slidelist.subscribe(snapshot => { this.slidenumb=snapshot});

    this.gridlist = db.list('/event');

  }
  
  ngOnInit() {
    if(window.innerWidth<800){
      this.onmobile=true;
    }else{
      this.onmobile=false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth<800){
      this.onmobile=true;
    }else{
      this.onmobile=false;
    }
  }


  goProduct() {
    // const config = new MdDialogConfig();
    // this.dialog.open(FormComponent, config);
  }

  prodSett(id){
    let config: MdDialogConfig = {
      disableClose: false,
      data: {
        id: id
      }
    };
    this.dialog.open(FormEventComponent, config);
  }


  // goSLide(val){
  //   if(this.homeslide+val==this.slidenumb.length){
  //     this.homeslide=0;
  //   }else if (this.homeslide+val==-1){
  //     this.homeslide=this.slidenumb.length-1;
  //   }else{
  //     this.homeslide=this.homeslide+val;
  //   }
  // }


}