import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "50%" }}
          />
          <p className="mt-3"> &copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
          <p className="m-4"> <i class="fa-brands fa-x-twitter"></i> &nbsp; &nbsp;
              <i class="fa-brands fa-facebook"></i> &nbsp; &nbsp;
              <i class="fa-brands fa-instagram"></i> &nbsp; &nbsp;
              <i class="fa-brands fa-linkedin"></i>
          </p>
          <hr></hr>
          <p className="m-4">
            <i class="fa-brands fa-youtube"></i>  &nbsp; &nbsp;
            <i class="fa-brands fa-whatsapp"></i>  &nbsp; &nbsp;
            <i class="fa-brands fa-telegram"></i>
          </p>
        </div>
        <div className="col footer mb-5">
          <h4 className="mb-3">Account</h4>
          <button className="link-btn-footer d-block"> Open demat account</button> <br />
          <button className="link-btn-footer d-block"> Minor demat account</button> <br />
          <button className="link-btn-footer d-block"> NRI demat account</button> <br />
          <button className="link-btn-footer d-block"> Commodity</button> <br />
          <button className="link-btn-footer d-block"> Dematerialisation</button> <br />
          <button className="link-btn-footer d-block"> Fund transfer</button> <br />
          <button className="link-btn-footer d-block"> MTF</button> <br />
          <button className="link-btn-footer d-block"> Referral program</button> <br />
        </div>
        <div className="col footer">
          <h4 className="mb-3">Support</h4>
          <button className="link-btn-footer d-block">Contact us</button> <br />
          <button className="link-btn-footer d-block">Support portal</button> <br />
          <button className="link-btn-footer d-block"> How to file a complaint?</button> <br />
          <button className="link-btn-footer d-block"> Status of your complaints</button> <br />
          <button className="link-btn-footer d-block"> Bulletin</button> <br />
          <button className="link-btn-footer d-block"> Circular</button> <br />
          <button className="link-btn-footer d-block"> Z-Connect blog</button> <br />
          <button className="link-btn-footer d-block"> Downloads</button> <br />
        </div>
        <div className="col footer">
          <h4 className="mb-3">Company</h4>
          <button className="link-btn-footer d-block">About</button> <br />
          <button className="link-btn-footer d-block">Philosophy</button> <br />
          <button className="link-btn-footer d-block"> Press & media</button> <br />
          <button className="link-btn-footer d-block"> Careers</button> <br />
          <button className="link-btn-footer d-block"> Zerodha Cares (CSR)</button> <br />
          <button className="link-btn-footer d-block"> Zerodha.tech</button> <br />
          <button className="link-btn-footer d-block"> Open source</button> <br />
        </div>
        <div className="col footer">
          <h4 className="mb-3">Quick links</h4>
          <button className="link-btn-footer d-block">Upcoming IPOs</button> <br />
          <button className="link-btn-footer d-block">Brokerage charges</button> <br />
          <button className="link-btn-footer d-block"> Market holidays</button> <br />
          <button className="link-btn-footer d-block"> Economic calendar</button> <br />
          <button className="link-btn-footer d-block"> Calculators</button> <br />
          <button className="link-btn-footer d-block"> Markets</button> <br />
          <button className="link-btn-footer d-block"> Sectors</button> <br />
        </div>
      </div>
      <div className="mt-2 text-muted" style={{fontSize:"12px"}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha
        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
        any complaints pertaining to securities broking please write to
        complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure
        you carefully read the Risk Disclosure Document as prescribed by SEBI |
        ICF
      </p>
      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>
      <button className="link-btn">
        Smart Online Dispute Resolution | Grievances Redressal Mechanism
      </button>
      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p>
        India's largest broker based on networth as per NSE. NSE broker
        factsheet
      </p>
      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
      </p>
      <p>
        *Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
        (Composite) License No CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products.
      </p>
      </div>

      <div className="mt-2 text-muted">
        <div className="last_footer">
        <p>NSE </p> 
        <p>BSE </p>
        <p>MCX  </p>
        <p>Terms & conditions  </p>
        <p>Policies & procedures  </p>
        <p>Privacy policy  </p>
        <p>Disclosure  </p>
        <p>For investor's attention </p>
        <p>Investor charter </p>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
