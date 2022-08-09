import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../store/actions";
import { supabase } from "supabaseClient";

class Logout extends Component {
  /**
   * Redirect to login
   */
  componentDidMount = async () => {
    // emit the event
    await supabase.auth.signOut();
    this.props.logoutUser(this.props.history);
  };

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

Logout.propTypes = {
  history: PropTypes.any,
  logoutUser: PropTypes.func,
};

export default withRouter(connect(null, { logoutUser })(Logout));