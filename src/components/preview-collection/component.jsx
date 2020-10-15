import React from "react";
import CollectionItem from "../collection-item/component";
import "./styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* filter only 4 items */}
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItem }) => (
            <CollectionItem key={id} {...otherItem} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
