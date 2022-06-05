import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  isDirty: boolean = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
