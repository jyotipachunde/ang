import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { TabswitchComponent } from './tabswitch/tabswitch.component';
import { NgifComponent } from './ngif/ngif.component';
import { InputdComponent } from './inputd/inputd.component';
import { HttpClientModule } from '@angular/common/http';
import { InputwithmovieComponent } from './inputwithmovie/inputwithmovie.component';
import { MoviedashComponent } from './moviedash/moviedash.component';
import { MobileDashComponent } from './mobile-dash/mobile-dash.component';
import { MobileComponent } from './mobile/mobile.component';
import { CommonModule } from '@angular/common';
//import { GetConformComponent } from './get-conform/get-conform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoappComponent,
    StdcrudComponent,
    CardsComponent,
    GetConformComponent,
    TabsComponent,
    TabswitchComponent,
    NgifComponent,
    InputdComponent,
    InputwithmovieComponent,
    MoviedashComponent,
    MobileDashComponent,
    MobileComponent,
     ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  CommonModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
