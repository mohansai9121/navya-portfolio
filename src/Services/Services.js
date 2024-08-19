import React from "react";
import services from "../assests/services";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="heading" id="services">
        <h2>My Services</h2>
        <p>These are the experiences I have...</p>
      </div>
      <div className="projects1">
        {services.map((service, index) => {
          return (
            <div key={index}>
              <div className="flip-box2">
                <div className="flip-box-inner2">
                  <div className="front-view">
                    <h3>
                      {service.title}
                      <br />
                      <span style={{ fontSize: "12px" }}>{service.period}</span>
                    </h3>
                    <h4>{service.company}</h4>
                    <p>{service.description}</p>
                  </div>
                  <div className="back-view">
                    <p style={{ fontWeight: "500" }}>{service.description2}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
