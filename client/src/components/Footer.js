import React from "react";

function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="footer__title">
          <h2 className="footer__title-text">Get in touch with us</h2>
        </div>
        <div className="company">
          <div className="company__media">
            <h4 className="company__media-title">CONTACT US</h4>
            <div className="company__media-info">
              <div className="company__media-info-details">
                <h6 className="company__media-info-details-title">PHONE</h6>
                <p className="company__media-info-details-text">778-882-9159</p>
              </div>
              {/* end of phone details */}

              <div className="company__media-info-details">
                <h6 className="company__media-info-details-title">EMAIL</h6>
                <p className="company__media-info-details-text">
                  footprintsnursing@gmail.com
                </p>
                <p className="company__media-info-details-text">info@fnrc.ca</p>
              </div>
              {/* end of email details */}

              <div className="company__media-info-details">
                <h6 className="company__media-info-details-title">SOCIAL</h6>
                <a
                  href="https://m.facebook.com/footprintsnursingreviewcenter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook Page"
                  className="company__media-info-details-icon"
                >
                  <i className="fa fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="company__address">
            <h4 className="company__address-title">ADDRESS</h4>
            <a
              href="https://www.google.com/maps/place/379+Columbia+St,+New+Westminster,+BC+V3L+5T6/@49.2048622,-122.9073821,17z/data=!3m1!4b1!4m5!3m4!1s0x5485d872a07810df:0xa08e01d1d3ccdcaf!8m2!3d49.2048587!4d-122.9051934"
              target="_blank"
              rel="noopener noreferrer"
              className="company__address-text"
            >
              379 Columbia St., New Westminster, B.C., V3L 5T6
            </a>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=14WDZGYpl1yCRa9ba74a2w9PrmacDhp_E"
            className="map__frame"
          ></iframe>
        </div>
        <div className="copyright">
          <p className="copyright">&reg; {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
