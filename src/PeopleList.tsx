import PeopleCard from "./PeopleCard.tsx"

export default function PeopleList(props: any) {
    console.log("Props - ", props)
    console.log("People data - ", props.peopleData)
    return <>
        <label>
            Filter on:
            <input type="text" onChange={e => props.changeFilterText(e.target.value)} placeholder="Filter text" />
        </label>
        {props.peopleData
            .filter(person => person.name.toLowerCase().includes(props.filterText.toLowerCase()) || props.filterText.trim() == "")
            .map(person => <PeopleCard person={person} />)}
    </>
}
