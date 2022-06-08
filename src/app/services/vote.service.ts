import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter((voter: any) => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some((voter: any) => voter === voterName);
  }
}
