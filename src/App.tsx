import { useState } from "react"
import PeopleList from "./PeopleList.tsx"

export default function App() {
  const [filterText, setFilterText] = useState("")

  const people = [
    {
      "name": "Kalle",
      "hobby": "Bandy",
      "age": 30,
    },
    {
      "name": "Ivan",
      "hobby": "Rida",
      "age": 36,
    },
    {
      "name": "Anna",
      "hobby": "Skytte",
      "age": 28,
    }
  ]

  function changeFilterText(text: string) {
    if (text.trim().length > 0) {
      setFilterText(text.trim())
    } else {
      setFilterText("")
    }
  }

  return <>
    <PeopleList peopleData={people} changeFilterText={changeFilterText} filterText={filterText} />
  </>
}
