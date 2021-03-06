import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IEvent } from 'src/app/shared/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventsService: EventsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.events = [];
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName, 'Toasr fun!');
  }

}
