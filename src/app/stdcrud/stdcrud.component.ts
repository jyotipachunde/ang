import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './sts';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConformComponent } from '../get-conform/get-conform.component';

@Component({
  selector: 'app-stdcrud',
  templateUrl: './stdcrud.component.html',
  styleUrls: ['./stdcrud.component.css']
})
export class StdcrudComponent implements OnInit {
  @ViewChild('fname') fname!:ElementRef;
  @ViewChild('lname') lname!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('contact') contact!:ElementRef;
  isEditMode: boolean = false;
  trackById(index: number, item: Istd): number {
    return item.id;
  }
  eid: string = '';

  stdarr: Array<Istd> = [
    {id:1, fname:'John', lname:'Doe', email:'john.doe@example.com', contact:1234567890},
    {id:2, fname:'Jane', lname:'Smith', email:'jane.smith@example.com', contact:9876543210}
  ];

  constructor(
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addstd(){
    let ob:Istd={
      id:this.stdarr.length+1,
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value
    };
    this.stdarr.push(ob);
    console.log(this.stdarr);
    this.fname.nativeElement.value='';
    this.lname.nativeElement.value='';
    this.email.nativeElement.value='';
    this.contact.nativeElement.value='';

    this._snackBar.open('Student Added Successfully','close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:2000,
    });

  }

  updatestd(){
    let ob={
      id:parseInt(this.eid),
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value
    };
    let geti=this.stdarr.findIndex(std => std.id === ob.id);
      this.stdarr[geti]=ob;
      
      this._snackBar.open('Student updated  Successfully','close',{
      horizontalPosition:'right',
      verticalPosition:'top',
      duration:2000,
    });
    this.isEditMode=false;
    this.fname.nativeElement.value='';
    this.lname.nativeElement.value='';
    this.email.nativeElement.value='';
    this.contact.nativeElement.value='';
    }
  

  onedit(std:Istd){
    this.isEditMode=true;
    this.eid=std.id.toString();
    this.fname.nativeElement.value=std.fname;
    this.lname.nativeElement.value=std.lname;
    this.email.nativeElement.value=std.email;
    this.contact.nativeElement.value=std.contact;

  }
  deletestd(id:number){
    let matcon=new MatDialogConfig();
    matcon.disableClose=true;
    matcon.autoFocus=true;
    matcon.width="30%";
    let dialogref=this. _matDialog.open(GetConformComponent,matcon);
    dialogref.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
      if(result){
        let geti=this.stdarr.findIndex(std => std.id === id);
        let std=this.stdarr.splice(geti, 1);
      
        this._snackBar.open('Student deleted  Successfully','close',{
        horizontalPosition:'right',
        verticalPosition:'top',
        duration:2000,
      });
      }   
  });
  }

}
