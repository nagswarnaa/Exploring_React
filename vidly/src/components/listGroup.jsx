import React, { Component } from 'react'
import { getGenres } from '../services/fakeGenreService'
const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props

  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedItem
              ? 'list-group-item active'
              : 'list-group-item'
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  )
}
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}

export default ListGroup
