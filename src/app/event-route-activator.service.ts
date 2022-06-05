
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import {  Injectable } from "@angular/core";
import { EventsService } from "./services/events.service";
import { Observable } from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(
    private eventService: EventsService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists)
      this.router.navigate(['/404'])
    return eventExists;
  }
}
