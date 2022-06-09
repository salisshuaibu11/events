import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: any;
  constructor(
    private router: Router,
    private eventService: EventsService
  ) { }

  ngOnInit(): void {
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues)
      .subscribe(() => {
        this.isDirty = false;
        this.router.navigate(['events'])
      })
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
