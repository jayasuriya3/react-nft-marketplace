import React from "react";
import CollectionCard from "./CollectionCard";
import './PunkList.css';

function PunkList({ punkListData, setSelectedPunk }) {
  console.log(punkListData);
  return (
    <div className="punkList">
      {punkListData.map((punk, idx) => (
        <div onClick={(punk)=> setSelectedPunk(idx)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
}

export default PunkList;
