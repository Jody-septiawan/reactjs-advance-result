// import PropTypes package
import PropTypes from "prop-types";

const DetailAbout = (props) => {
  return (
    <>
      <h1>title: {props.title}</h1>
      <p>summary: {props.summary}</p>
      <p>total guest: {props.total}</p>
    </>
  );
};

// define property type for this component
DetailAbout.propTypes = {
  title: PropTypes.string.isRequired, // required props
  summary: PropTypes.string,
  total: PropTypes.number,
};

export default DetailAbout;
