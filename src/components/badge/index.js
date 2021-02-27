import PropTypes from 'prop-types';

export default function Badge({ variant, text, size, className }) {
  return <div className={`${size} ${variant} px-0.5 ${className}`}>{text}</div>;
}

Badge.defaultProps = {
  variant: 'positive',
  size: 'md',
  className: 'w-max',
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['positive', 'negative', 'pending']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
