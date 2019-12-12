import React from "react";
import { addItem } from "../actions/buyRemove.js";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        //Unique ID corresponding to name of feature
        //gets passed into addItem action creator
        onClick={() => props.addItem(props)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { addItem })(AdditionalFeature);
