import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent implements OnInit {
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible;
  }
}
