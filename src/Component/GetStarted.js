import React from "react";
// import { useForm, ValidationError } from '@formspree/react';
// import yes from "../img/yes.png";

function GetStarted() {
  return (
    <div className="waitlist justify-content-center mt-4 mb-2">
      <a
        className="form-inline launchlist-form"
        href="https://www.app.trybase.co/register"
      >
        <button type="submit" className="btn btn-primary">
          Get Started
        </button>
      </a>
    </div>
  );
}

export default GetStarted;
