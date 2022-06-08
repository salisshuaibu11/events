import { Directive, OnInit, ElementRef, Input } from "@angular/core";
import * as $ from "jquery";

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input("modal-trigger") modalId: string;
  private el: HTMLElement
  constructor(
    ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener("click", (e: any) => {
      //($(`"#${this.modalId}"`).show("slow") as any);
      console.log(($(`#${this.modalId}`) as any))
    })
  }
}
