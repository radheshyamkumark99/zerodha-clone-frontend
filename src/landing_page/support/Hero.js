import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h5 style={{marginLeft:"100px"}}>Support Portal</h5>
        <button className="link-btn" style={{marginRight:"100px", color:"white"}}>Track Tickets</button>
      </div>
      <div className="row p-5">
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <h1 className="fs-3">
            Search for an answer or browse helps topics to create a ticket
          </h1>
          <input placeholder="Eg.How do I activate F&O, why is my order getting rejected..."></input>
          <br />
          <button className="link-btn" style={{color:"white"}}>Track Account Opening</button> &nbsp;&nbsp;
          <button className="link-btn" style={{color:"white"}}>Track Segment Activation</button> &nbsp;&nbsp;
          <button className="link-btn" style={{color:"white"}}>Intraday Margins</button> &nbsp;&nbsp;
          <button className="link-btn" style={{color:"white"}}>Kite User manual</button>
        </div>
        <div className="col-5 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <button className="link-btn" style={{color:"white"}}>Current Takeovers and Delisting - january 2024</button>
            </li>
            <li>
              <button className="link-btn" style={{color:"white"}}>Latest Intraday leverage MIS & CO className="fs-3"</button>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
