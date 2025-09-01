import { createColumnHelper } from '@tanstack/react-table'

export const helpColumns = (colNames) => {
  const columnHelper = createColumnHelper()

  const getTitle = (title) => `${title.charAt(0).toUpperCase()}${title.slice(1)}`

  const getContent = (content) => {
    let aux = `${content}`
    if (aux.length > 150) {
      return `${aux.substring(0, 150)}...`
    }
    return content
  }

  return colNames.map(col => (
    columnHelper.accessor(col, {
      header: () => getTitle(col), 
      cell: info => getContent(info.getValue())
    }))
  )
}