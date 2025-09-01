export const exportToJson = (data) => {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = 'data.json'
  link.click()
  
  URL.revokeObjectURL(url)
}

export const exportToCsv = (data) => {
  const headers = Object.keys(data[0])

  const csvContent = [
    headers.join(','), 
    ...data.map(row => headers.map(header => {
        const value = row[header]
        return `"${String(value).replace(/"/g, '""')}"`
      }).join(',')
    )
  ].join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = 'data.csv'
  link.click()
  
  URL.revokeObjectURL(url)
}