import PeopleCard from "./PeopleCard.tsx"
import type Person from "./Person.ts"

type PeopleListProps = {
    peopleData: Person[],
    changeFilterText: Function,
    filterText: string
}

export default function PeopleList(props: PeopleListProps) {
    console.log("Props - ", props)

    const { peopleData, changeFilterText, filterText } = props
    console.log("People data - ", peopleData)

    return <>
        <label>
            Filter on:
            <input type="text" onChange={e => changeFilterText(e.target.value)} placeholder="Filter text" />
        </label>
        {peopleData
            .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()) || filterText.trim() == "")
            .map(person => <PeopleCard person={person} />)}
    </>
}
