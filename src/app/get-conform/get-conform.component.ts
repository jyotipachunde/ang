import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-conform',
  templateUrl: './get-conform.component.html',
  styleUrls: ['./get-conform.component.css']
})
export class GetConformComponent implements OnInit {

  constructor(
    private _matDialogRef: MatDialogRef<GetConformComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(flag:boolean){
    this._matDialogRef.close(flag);
  }

}
