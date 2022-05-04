import { Component, HostBinding, OnInit } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @HostBinding('attr.tabindex') tabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
