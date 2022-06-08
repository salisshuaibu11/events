import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ISession } from 'src/app/shared/event.model';

import { AuthService } from 'src/app/services/auth.service';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter();
  public iconColor: string;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.vote.emit({});
  }

}
