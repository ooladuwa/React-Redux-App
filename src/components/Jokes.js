import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getJoke } from "../actions/index";

const Jokes = (props) => {
  const { joke, isFetching, error } = props;

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
    <div className="flex justify-center bg-hero-image bg-gray-400 ">
      <br />
      <h1>{joke}</h1>
      <br />
      <button
        className="bg-blue-400 border-blue-800 m-4 p-2 rounded-md shadow-2xl hover:bg-red-500"
        onClick={handleClick}
      >
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
