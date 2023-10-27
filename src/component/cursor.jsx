
import { CircleCursor } from 'react-cursors'
export default function cursor() {
  return (
    <div>
      <CircleCursor 
        safeBoundaryX="1000"
        safeBoundaryY="700"
        initial={{
                dotSize:"2rem",
                circleSize:"5rem",
                borderStyle:"dotted",
                color:"white",
                borderWidth:"3px",
                circleDay:"0.1s",
                dotDelay:"0.05s"
        }}

        hover={{
                dotSize:"0rem",
                circleSize:"10rem",
                borderStyle:"dotted",
                color:"white",
                borderWidth:"3px",
                circleDay:"0.1s",
                dotDelay:"0.05s"
        }}
/>
    </div>
  )
}
