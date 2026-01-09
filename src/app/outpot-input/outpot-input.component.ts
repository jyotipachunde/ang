import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Itodo } from '../terface/mobile';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConformComponent } from '../get-conform/get-conform.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-outpot-input',
  templateUrl: './outpot-input.component.html',
  styleUrls: ['./outpot-input.component.css']
})
export class OutpotInputComponent implements OnInit {
@Input() todoarr!:Array<Itodo>;
@Output() editemmit: EventEmitter<Itodo> = new EventEmitter<Itodo>();
 

  constructor(
      private _snackBar: MatSnackBar,
        private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ondelete(todo:Itodo){
     let matcon=new MatDialogConfig();
        matcon.disableClose=true;
        //matcon.autoFocus=true;
        matcon.width="30%";
        let dialogref=this. _matDialog.open(GetConformComponent,matcon);
        dialogref.afterClosed().subscribe((result: any) => {
          console.log("Dialog result:", result);
          if(result){
            let geti=this.todoarr.findIndex(std => std.id === todo.id);
            let std=this.todoarr.splice(geti, 1);
          
            this._snackBar.open('item deleted  Successfully','close',{
            horizontalPosition:'right',
            verticalPosition:'top',
            duration:2000,
          });
          }   
      });


  }

  onedit(todo:Itodo){
   this.editemmit.emit(todo);
   console.log(todo);
  }

}
