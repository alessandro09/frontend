import { Component, Input, OnInit } from '@angular/core'

import { DynamicTableModel } from './dynamic-table.model'

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() emptyMessage?: string

  @Input() columns: DynamicTableModel[] = []

  @Input() data?: any[] = []

  constructor() { }

  ngOnInit() { }

}
