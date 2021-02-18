import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getJoke } from "../actions/index";

const Jokes = (props) => {
  const { isFetching, error } = props;

  const handleClick = () => {
    props.getJoke();
  };

  useEffect(() => {});

  if (error) {
    return <h2>We have an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Wait for it ya pansy!</h2>;
  }
  return (
    <>
      <h2>Do you know Chuck?</h2>
      <button onClick={handleClick}>Get Some!</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJoke })(Jokes);
