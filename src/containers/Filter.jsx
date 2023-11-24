// Actividad N.2 de la Clase 04
import { useState } from "react"

function Filter({ children }) {
  const [filterState, setFilterState] = useState("all")
  const handleFilterChange = (value) => setFilterState(value);

  return children(filterState, handleFilterChange)
}

export default Filter