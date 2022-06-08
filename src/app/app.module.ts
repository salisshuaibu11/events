import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventComponent,
  EventDetailsComponent,
  NavbarComponent,
  EventThumbnailComponent,
  EventsListComponent,
  CreateComponent,
  ErrorComponent,
  DurationPipe,
  ModalTriggerDirective,
  LocationValidator
} from "./index";

import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';

import { EventListResolver } from './services/event-list-resolver.service';
import { EventRouteActivator } from './event-route-activator.service';
import { SessionListComponent } from './session-list/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { SimpeModalComponent } from './common/simpe-modal/simpe-modal.component';
import { UpvoteComponent } from './upvote/upvote/upvote.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventComponent,
    ErrorComponent,
    CreateComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpeModalComponent,
    LocationValidator,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
