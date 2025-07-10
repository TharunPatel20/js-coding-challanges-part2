export default function Hello({ firstname, lastname }) {
  const username = `${firstname} ${lastname}`;
  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Hello firstname={"tharun"} lastname={"patel"}/>
    </div>
  )
}
