import React from 'react'

function alert1(props) {
  return (
   props.alert1 && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert1.ty}</strong>:{props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert"
     aria-label="Close"></button>
  </div>
  )
}

export default alert1