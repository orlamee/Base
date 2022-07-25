import React from "react";

function WaitList() {
  return (
    <div className="waitlist justify-content-center mt-5">
      <form className="form-inline " method="post">
        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Your Email"/></div>
        <div className="form-group"><button className="btn btn-primary" type="button">Join the waitlist </button></div>
      </form>
    </div>
  )
}

export default WaitList;