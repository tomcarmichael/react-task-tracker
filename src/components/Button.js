import PropTypes from 'prop-types';

const Button = ({ colour, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: colour }} className="btn">{ text }</button>
  );
};

Button.defaulProps = {
  colour: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string,
  colour: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
