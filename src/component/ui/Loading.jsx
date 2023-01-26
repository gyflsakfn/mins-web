import './loading.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = () => {
  return (
    <div className="loading">
      <ClimbingBoxLoader
        color="#f5ee26"
        size={40}
        speedMultiplier={1}
      />
    </div>
  )
}

export default Loading