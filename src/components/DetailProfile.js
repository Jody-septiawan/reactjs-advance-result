import PropTypes from "prop-types";

function DetailProfile(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.summary}</p>
      <p>{props.total}</p>
    </>
  );
}

DetailProfile.propTypes = {
  title: PropTypes.string.isRequired, // required props
  description: PropTypes.string,
  summary: PropTypes.string,
  total: PropTypes.number,
};
export default DetailProfile;
