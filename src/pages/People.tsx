import PeopleList from "../components/PeopleList.tsx"

export default function People() {

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

  return <>
    <PeopleList peopleData={people} />
  </>
}
