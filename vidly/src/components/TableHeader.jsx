import React, { Component } from 'react'
class TableHeader extends Component {
  state = {}

  raiseSort = (column) => {
    const sortColumn = { ...this.props.sortColumn }
    if (sortColumn.name === column) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn.name = column
      sortColumn.order = 'asc'
    }
    this.props.onSort(sortColumn)
  }
  renderSortIcon = (column) => {
    const { sortColumn } = this.props
    if (column.name !== sortColumn.name) return null
    if (this.props.sortColumn.order === 'asc')
      return <i className="fa fa-sort-asc"></i>
    return <i className="fa fa-sort-desc"></i>
  }
  render() {
    const { columns } = this.props
    return (
      <thead>
        <tr>
          {columns.map((item) => (
            <th
              className="clickable"
              key={item.name || item.key}
              onClick={() => this.raiseSort(item.name)}
            >
              {item.label}
              {this.renderSortIcon(item)}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
