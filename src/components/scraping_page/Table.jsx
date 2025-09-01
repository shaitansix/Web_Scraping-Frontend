import { useState } from 'react'
import {
  flexRender, 
  getCoreRowModel, 
  getPaginationRowModel, 
  useReactTable
} from '@tanstack/react-table'
import { exportToJson, exportToCsv } from '@helpers/helpExport'
import { ArrowLeftIcon, ArrowRightIcon, CsvIcon, JsonIcon } from '@icons/Icons'
import './styles/Table.css'

const Table = ({ data, columns }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0, 
    pageSize: 10
  })

  const table = useReactTable({
    data, 
    columns, 
    getCoreRowModel: getCoreRowModel(), 
    getPaginationRowModel: getPaginationRowModel(), 
    onPaginationChange: setPagination, 
    state: {
      pagination
    }
  })

  return (
    <article className = 'table-wrapper'>
      <div className = 'table-options'>
        <Pagination table = {table} />

        <div className = 'options-btns'>
          <button className = 'export-btn' onClick = {() => exportToJson(data)}>
            <JsonIcon />
          </button>
          <button className = 'export-btn' onClick = {() => exportToCsv(data)}>
            <CsvIcon />
          </button>
        </div>
      </div>
      

      <table className = 'custom-table'>
        <thead className = 'custom-table_head'>
          { table.getHeaderGroups().map(headerGroup => (
            <tr key = {headerGroup.id}>
              { headerGroup.headers.map(header => (
                <th key = {header.id}>
                  { flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  ) }
                </th>
              )) }
            </tr>
          )) }
        </thead>

        <tbody className = 'custom-table_body'>
          { table.getRowModel().rows.map(row => (
            <tr key = {row.id}>
              { row.getVisibleCells().map(cell => (
                <td key = {cell.id}>
                  { flexRender(
                    cell.column.columnDef.cell, 
                    cell.getContext()
                  ) }
                </td>
              )) }
            </tr>
          )) }
        </tbody>
      </table>
    </article>
  )
}

const Pagination = ({ table }) => {
  return (
    <div className = 'pagination'>
      <button
        className = 'pagination-btn'
        onClick = {() => table.previousPage()}
        disabled = {!table.getCanPreviousPage()}>
          <ArrowLeftIcon className = 'pagination-icon' />
      </button>
      <button
        className = 'pagination-btn'
        onClick = {() => table.nextPage()}
        disabled = {!table.getCanNextPage()}>
          <ArrowRightIcon className = 'pagination-icon' />
      </button>
      <span className = 'pagination-text'>
        {`Pagina ${table.getState().pagination.pageIndex + 1} de ${table.getPageCount()}`}
      </span>
    </div>
  )
}

export default Table