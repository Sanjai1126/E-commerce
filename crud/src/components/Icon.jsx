import React from "react";

import { Carousel } from "react-bootstrap";

const First = () => {
  return (
    <>
      <div style={{ display: "flex", padding: "20px", marginTop: "70px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ display: "flex" }}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg"
              className="d-block w-100"
              alt="..."
              // style={{ boxShadow: "1px 3px 1px #dcdcdc" }}
            />
            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ display: "flex" }}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/14/a0f0827a-e431-4585-a450-54b750ae1ae41644849164565-H-N_Desk_Banner.jpg"
              className="d-block w-100"
              alt="..."
              // style={{ boxShadow: "1px 3px 1px #dcdcdc" }}
            />

            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ display: "flex" }}
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/3/fd2ec981-19c5-4fb8-af87-155ce3d5eb351643900805737-Desktop-banner_sale-live.jpg"
              className="d-block w-100"
              alt="..."
              // style={{ boxShadow: "1px 3px 1px #dcdcdc" }}
            />

            {/* <Carousel.Caption></Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default First;
