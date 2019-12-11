import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/buyRemove.js";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={props => removeItem(props)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(AddedFeature);
