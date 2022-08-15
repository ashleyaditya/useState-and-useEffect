// import all necessary dependencies
import { createRoot } from "react-dom/client"
import ClickCounter from "./components/ClickCounter"
import PeopleInSpace from "./components/PeopleInSpace"

//Create my App component
function App({ name }) {
  console.log(name)
  return (
    <div>
      <h1>{name}</h1>
      <PeopleInSpace />
    </div>
  )
}

// Render the App component
const domNode = document.querySelector("#app")
const reactApp = createRoot(domNode)
reactApp.render(<App name="useState and useEffect" />)
