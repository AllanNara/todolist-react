// Actividad N.2 de la Clase 04
import { useState } from "react"

const Filter = ({ filterDefault, children }) => {
  const [filterState, setFilterState] = useState(filterDefault)
  const handleFilterChange = (value) => setFilterState(value);

  return children(filterState, handleFilterChange)
}

export default Filter