import React from "react";

const Second = () => {
  const img = [
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/6d5591df-e8b3-4421-bd6a-5a7dd8fe8df01644301352215-Flat-1000_01.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/7/6a65db9c-07a5-440b-a050-675e732cca8e1644237812929-Myntra-Unique-Styles.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/7/eebc68b8-f6df-4003-8c6d-16b343ce3c061644237891453-Tops---Tees.jpg",
    "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/7/bf608b27-b469-4834-8374-717ebdf8ad0c1644238036503-Bedsheets.jpg"
  ];

  const Cards = img.map((list) => {
    return (
      <>
        <div className="col-md-3" style={{}}>
          <center>
            <img
              style={{ display: "flex", boxShadow: "9px 7px 1px #dcdcdc" }}
              className="img-thumbnail"
              src={list}
            />
          </center>
        </div>
      </>
    );
  });
  return (
    <>
      <div style={{ padding: "20px",textAlign: 'start' }}>
        <h1 >DEALS OF THE DAY</h1>
        <div className="row my-3" style={{ padding: "5px" }}>
          {Cards}
        </div>
      </div>
    </>
  );
};

export default Second;
