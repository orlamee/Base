import React from "react";
import { useForm, ValidationError } from '@formspree/react';
// import yes from "../img/yes.png";

function WaitList() {
  const [state, handleSubmit] = useForm("meqnynll");
  if (state.succeeded) {
    return <h6 className="mt-4 fs-5" style={{color: "green"}}>
      You have successfully joined our waitlist
    </h6>;
  }
  return (
    <div className="waitlist justify-content-center mt-5">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group"><input className="form-control" id="email" type="email" name="email" placeholder="Your Email"/></div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <div className="form-group"><button type="submit" disabled={state.submitting} className="btn btn-primary" id="my-form-button">Join the waitlist </button></div>
        <p id="my-form-status"></p>
      </form>
    </div>
  );
}

export default WaitList;