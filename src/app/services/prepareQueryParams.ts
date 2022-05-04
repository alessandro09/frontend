export const prepareQueryParams = (value: any) => value ? (
  `?${Object.keys(value)
    .map(key => `${key}=${value[key]}`)
    .join('&')}`
) : ''
