import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
            <img src="media/images/education.svg" alt="education"  style={{width:"70%"}}/>
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2"> Free and open market education</h1>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <button className="link-btn" style={{textDecorationLine: "none"}}>
            Varsity <i class="fa fa-long-arrow-right"></i>{" "}
          </button>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <button className="link-btn" style={{textDecorationLine: "none"}}>
            TradingQ&A  <i class="fa fa-long-arrow-right"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Education;
