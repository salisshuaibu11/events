import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';

import { ISession } from 'src/app/shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: any) => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);

    this.eventService.updateEvent(this.event);

    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
