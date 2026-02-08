import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row "
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        <div className="col-1"></div>
        <div className="col-5 p-5 text-center mb-5">
          <img
            src="media/images/nithinkamath.jpg" alt="nithin"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-5 p-5 mb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="https://nithinkamath.me/" style={{textDecoration:"none"}}>Homepage</a> &nbsp;
            <a href="https://tradingqna.com/u/nithin/summary" style={{textDecoration:"none"}}>TradingQnA</a> &nbsp;
            <a href="https://x.com/Nithin0dha" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-4 text-center mt-5 text-muted mb-5">
            <img src="media/images/Nikhil.jpg" alt="nithin"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Nikhil Kamath</h4>
            <h6>Co-founder & CFO</h6>
        </div>
        <div className="col-4 text-center mt-5 text-muted mb-5">
            <img src="media/images/Kailash.jpg" alt="team"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Dr. Kailash Nadh</h4>
            <h6>CTO</h6>
        </div>
        <div className="col-4 text-center mt-5 text-muted mb-5">
            <img src="media/images/Venu.jpg" alt="team"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Venu Madhav</h4>
            <h6>COO</h6>
        </div>
        <div className="col-4 text-center mt-5 text-muted mb-5">
            <img src="media/images/Hanan.jpg" alt="team"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Hanan Delvi</h4>
            <h6>CCO</h6>
        </div>
        <div className="col-4 text-center mt-5 text-muted mb-5">
            <img src="media/images/Seema.jpg" alt="team"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Seema Patil</h4>
            <h6>Director</h6>
        </div>
        <div className="col-4 text-center mt-5 text-muted mb-5">
            <img src="media/images/Karthik.jpg" alt="team"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Karthik Rangappa</h4>
            <h6>Chief of Education</h6>
        </div>

         <div className="col-4 text-center mt-5 text-muted">
            <img src="media/images/Austin.jpg" alt="team"  style={{ borderRadius: "100%", width: "60%" }}/>
            <h4 className="mt-3">Austin Prakesh</h4>
            <h6>Director Strategy</h6>
        </div>
        
      </div>
    </div>
  );
}

export default Team;
