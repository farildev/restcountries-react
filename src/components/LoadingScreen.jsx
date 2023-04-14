import React from 'react'
import "../assets/styles/spinner.css"

function LoadingScreen() {
  return (
    <>
      <div className="bg-primary d-flex justify-content-center align-items-center h-full w-full  position-fixed top-0 start-0 end-0 bottom-0">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}

export default LoadingScreen