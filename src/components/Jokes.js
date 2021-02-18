import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getJoke } from "../actions/index";

const Jokes = (props) => {
  const { joke, isFetching, error } = props;

  console.log(joke);

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
    <div classname="display-flex justify-items-center">
      <h2> Do you know Chuck?</h2>
      <h2>{joke}</h2>
      <button className="bg-blue-400" onClick={handleClick}>
        Get Some!
      </button>
    </div>
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
