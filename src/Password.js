import React from 'react';
function Password() {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input id="password" className="form-control py-4" type="password" maxLength="20" placeholder="Enter password"></input>
      </div>
    </>
  );
  
}

export default Password;
