import { useState } from "react"

const ClickCounter = () => {
  let [numClicks, setNumClicks] = useState(0)
  console.log(numClicks, setNumClicks)
  const handleButtonClick = () => {
    setNumClicks(numClicks + 1)
  }
  return (
    <div>
      <h2>You have clicked {numClicks} times</h2>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}

export default ClickCounter
