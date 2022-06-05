import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import {
  EventComponent,
  EventDetailsComponent,
  NavbarComponent,
  EventThumbnailComponent,
  EventsListComponent
} from "./index";

import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';


import { ErrorComponent } from './errors/error/error.component';

import { EventListResolver } from './services/event-list-resolver.service';
import { EventRouteActivator } from './event-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: EventComponent) {
  if (component.isDirty)
   return window.confirm("You have not saved this event, do you really want to cancel?")
  return true;
}
