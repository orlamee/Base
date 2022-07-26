import React from "react";
// import { useForm, ValidationError } from '@formspree/react';
// import yes from "../img/yes.png";

function WaitList() {
  return (
    <div className="waitlist justify-content-center mt-5">
      <form className="form-inline launchlist-form" action="https://getlaunchlist.com/s/nTehE2" method="POST" target="_blank">
        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Your Email" required/></div>
        <div className="form-group"><button type="submit" className="btn btn-primary">Join the waitlist </button></div>
      </form>
    </div>
  );
}

export default WaitList;