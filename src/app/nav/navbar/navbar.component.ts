import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ISession } from 'src/app/shared/event.model';

import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px }
    @media (max-width: 1200px) {
      #searchForm {display: none;}
    }
    li > a.active { color: #F97924; }
  `]
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  foundSessions: ISession[];

  auth: any;
  constructor(
    private authService: AuthService,
    private eventService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  isAuthenticated() {
    !this.auth.isAuthenticated()
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm)
      .subscribe((sessions: any) => {
        this.foundSessions = sessions;
      })
  }

}
