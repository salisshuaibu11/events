import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[]

  constructor(
    private eventsService: EventsService,
    private toastr: ToastrService
  ) {
    this.events = [];
  }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName, 'Toasr fun!');
  }

}
