import React, { useState, useEffect } from "react";
import "./Main.css";

function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  console.log(activePunk);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "white" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.image_url} />
              <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                  {activePunk.asset_contract.address}
                </div>
                <div className="ownerHandle">@sirius-Lizz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
