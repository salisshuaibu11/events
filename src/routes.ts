import { Routes } from "@angular/router"

import {
  CreateComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventComponent,
  ErrorComponent,
  EventResolverService,
} from "./app/index";


import { EventListResolver } from "./app/services/event-list-resolver.service"

export const appRoutes: Routes = [
  { path: 'events/new', component: EventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {events: EventListResolver}
  },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService} },
  { path: 'events/session/new', component: CreateComponent },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./app/user/user.module')
      .then(importedModule => importedModule.UserModule)
  }
]
