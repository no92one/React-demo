export default function PeopleCard({ person }: { person: any }) {
    const { name, age, hobby }: { name: string, age: number, hobby: string } = person
    console.log(`person - `, person);
    return <>
        <h1>{name} - {age}</h1>
        <p>Jag gillar {hobby} </p>
    </>
}
