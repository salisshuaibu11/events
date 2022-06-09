import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService {

  constructor(
    private eventService: EventsService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
