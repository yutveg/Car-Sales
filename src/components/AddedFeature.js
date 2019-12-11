import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/buyRemove.js";

const AddedFeature = props => {
  return (
    <li>
      {/* Added unique ID attribute to be able to pull later when needing to remove specific item*/}
      <button className="button" onClick={() => props.removeItem(props)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { removeItem })(AddedFeature);
