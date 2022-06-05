import { Routes } from "@angular/router"

import { EventsListComponent } from "./app/events/events-list/events-list.component"
import { EventDetailsComponent } from "./app/event-details/event-details/event-details.component"

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
