import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdcrudComponent } from './stdcrud/stdcrud.component';
import { CardsComponent } from './cards/cards.component';
import { GetConformComponent } from './get-conform/get-conform.component';
import { TabsComponent } from './tabs/tabs.component';
//import { GetConformComponent } from './get-conform/get-conform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoappComponent,
    StdcrudComponent,
    CardsComponent,
    GetConformComponent,
    TabsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
