interface MainModel<T> {
  property: keyof T

  headerAlign?: 'left' | 'center' | 'right'

  title: string

  castValue?: (value: any) => string
}

interface NoFilterFilterModel { }

export interface FilterModelInput {
  filter: 'input' | 'number'
}

export interface FilterModelCombobox {
  filter: 'combobox'
  options: { description?: string, value: any }[]
}

export type DynamicTableModelFiltered = FilterModelInput | FilterModelCombobox

export type DynamicTableColumnModel<T> = (NoFilterFilterModel | DynamicTableModelFiltered) & MainModel<T>

export type DynamicTableModel<T> = {
  columns: DynamicTableColumnModel<T>[]

  paginated?: boolean

  onFilter?: (filters: any) => void
}