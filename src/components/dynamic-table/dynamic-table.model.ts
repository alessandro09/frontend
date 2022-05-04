interface MainModel<T> {
  property: keyof T

  headerAlign?: 'left' | 'center' | 'right'

  title: string

  castValue?: (value: any) => string
}

interface NoFilterFilterModel { }

export interface FilterModelInput<T> extends MainModel<T> {
  filter: 'input' | 'number'
  filterProperty: string
}

export interface FilterModelCombobox<T> extends MainModel<T> {
  filter: 'combobox'
  options: { description?: string, value: any }[]
  filterProperty: string
}

export type DynamicTableModelFiltered<T> = FilterModelInput<T> | FilterModelCombobox<T>

export type DynamicTableColumnModel<T> = (NoFilterFilterModel | DynamicTableModelFiltered<T>) & MainModel<T>

export type DynamicTableModel<T> = {
  columns: DynamicTableColumnModel<T>[]

  paginated?: boolean

  onFilter?: (filters: any) => void
}