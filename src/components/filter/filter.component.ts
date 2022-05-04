import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onConfirm = new EventEmitter<string>()

  filter: string = ""

  constructor() { }

  ngOnInit() {
  }

  handleConfirm() {
    this.onConfirm.emit(this.filter)
  }
}
