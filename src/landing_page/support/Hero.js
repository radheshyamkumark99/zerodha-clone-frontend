import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h5 style={{marginLeft:"100px"}}>Support Portal</h5>
        <a href="#" style={{marginRight:"100px"}}>Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <h1 className="fs-3">
            Search for an answer or browse helps topics to create a ticket
          </h1>
          <input placeholder="Eg.How do I activate F&O, why is my order getting rejected..."></input>
          <br />
          <a href="#">Track Account Opening</a> &nbsp;&nbsp;
          <a href="#">Track Segment Activation</a> &nbsp;&nbsp;
          <a href="#">Intraday Margins</a> &nbsp;&nbsp;
          <a href="#">Kite User manual</a>
        </div>
        <div className="col-5 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - january 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverage MIS & CO className="fs-3"</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
