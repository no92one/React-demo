import PeopleCard from "./PeopleCard.tsx"
import type Person from "../interfaces/Person.ts"
import { useContext } from "react"
import { GlobalContext } from "../GlobalContext.tsx"

type PeopleListProps = {
    peopleData: Person[],
}

export default function PeopleList(props: PeopleListProps) {
    console.log("Props - ", props)

    const { peopleData } = props
    console.log("People data - ", peopleData)

    const { filterText }: { filterText: string } = useContext(GlobalContext)

    return <>
        {peopleData
            .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()) || filterText.trim() == "")
            .map(person => <PeopleCard person={person} />)}
    </>
}
