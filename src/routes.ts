import { Routes } from "@angular/router"

import { EventRouteActivator } from "./app/event-route-activator.service"

import { EventsListComponent } from "./app/events/events-list/events-list.component"
import { EventDetailsComponent } from "./app/event-details/event-details/event-details.component"
import { EventComponent } from "./app/create/event/event.component"
import { ErrorComponent } from "./app/errors/error/error.component"
import { EventListResolver } from "./app/services/event-list-resolver.service"

export const appRoutes: Routes = [
  { path: 'events/new', component: EventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {events: EventListResolver}
  },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./app/user/user.module')
      .then(importedModule => importedModule.UserModule)
  }
]
