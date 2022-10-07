import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { MailComponent } from './mail/mail.component';
import { ContactComponent } from './contact/contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './user-list/user-list.component';

import { StoreModule, META_REDUCERS } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserService, UserEffect, reducer as userReducer } from "./store/user";
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { UserAddComponent } from './user-add/user-add.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MailComponent,
    ContactComponent,
    CalendarComponent,
    DialogBoxComponent,
    ChatComponent,
    UserListComponent,
    UserAddComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    StoreModule.forRoot(userReducer),  
    StoreModule.forFeature("user", userReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: [
    ChatService,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
