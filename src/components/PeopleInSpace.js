// Imports
import { useEffect, useState } from "react"

// Component
function PeopleInSpace() {
  let [data, setData] = useState(null) // Set initial state

  function fetchApiData() {
    setData("loading") // Update the state and rerender the component
    fetch("http://api.open-notify.org/astros.json")
      .then(function (res) {
        return res.json()
      })
      .then(function (info) {
        setData(info) // Update the state and rerender the component
      })
  }

  // As soon as this component is first rendered, call fetchApiData
  // - useEffect receives 2 parameters
  //     -> the first is a callback function
  //     -> the second is an array describing when to run the callback
  //
  // [] means only run the callback once on the first render

  useEffect(function () {
    fetchApiData() // Make the API request as soon as the component is rendered
  }, [])

  if (data === null) {
    return (
      <div>
        <h2>Who is in Space?</h2>
      </div>
    )
  }
  if (data === "loading") {
    return (
      <div>
        <h2>Who is in Space?</h2>
        <h3>Loading...</h3>
      </div>
    )
  }
  let peopleMarkup = data.people.map(function (person) {
    return (
      <li>
        {person.name} - {person.craft}
      </li>
    )
  })
  return (
    <div>
      <h2>Who is in Space?</h2>
      <ul>{peopleMarkup}</ul>
    </div>
  )
}

// Export
export default PeopleInSpace
