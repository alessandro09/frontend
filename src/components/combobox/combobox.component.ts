import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  @Input() options?: { description?: string, value: any }[]

  constructor() { }

  ngOnInit() {
  }

}
