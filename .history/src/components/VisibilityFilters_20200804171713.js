import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = () => {
    return (
        <div className="visibility-filters">
            
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
  };
  // export default VisibilityFilters;
export default connect(
mapStateToProps,
{ setFilter }
)(VisibilityFilters);
