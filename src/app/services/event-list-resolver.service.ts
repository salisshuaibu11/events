import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs";
import { EventsService } from "./events.service";

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventsService) {}

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
