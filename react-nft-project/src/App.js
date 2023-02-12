import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(2);

  useEffect(() => {
    getMyNfts();
  }, []);

  const getMyNfts = async () => {
    const openSeaData = await axios.get(
      "https://testnets-api.opensea.io/assets?asset_contract_address=0x8f6fEda4F48Fdf6c7c2B012781F2E60A2E9ad9Ed&order_direction=asc"
    );
    console.log(openSeaData.data.assets);
    setPunkListData(openSeaData.data.assets);
  };

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      )}
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
