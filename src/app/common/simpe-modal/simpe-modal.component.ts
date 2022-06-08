import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simpe-modal',
  templateUrl: './simpe-modal.component.html',
  styleUrls: ['./simpe-modal.component.css']
})
export class SimpeModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
