import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from 'src/app/shared/event.model';

import { AuthService } from 'src/app/services/auth.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(
    public auth: AuthService,
    private voterService: VoteService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(this.sortByNameAsc)
        : this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  filterSessions(filter: any) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session: any) => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

  sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.abstract) return 1;
    else if (s1.name === s2.name) return 2;
    else return -1;
  }

  sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        session,
        this.auth.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        session,
        this.auth.currentUser.userName
      )
    }

    // if (this.sortBy === "votes")
    //   this.visibleSessions.sort(sortByVotesDesc);
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }

}
