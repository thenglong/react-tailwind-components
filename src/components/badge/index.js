import PropTypes from 'prop-types';

export default function Badge({ variant, text, size, className }) {
  let styles = '';

  switch (variant) {
    case 'positive':
      styles += 'bg-green-300 text-green-900';
      break;
    case 'negative':
      styles += 'bg-red-300 text-red-900';
      break;
    case 'pending':
      styles += 'bg-yellow-300 text-yellow-900';
      break;
    default:
      break;
  }

  switch (size) {
    case 'sm':
      styles += ' text-xs px-3';
      break;
    case 'md':
      styles += ' text-base px-4';
      break;
    case 'lg':
      styles += ' text-lg px-4';
      break;
    default:
      break;
  }

  return <div className={`${styles} rounded-full py-0.5 ${className}`}>{text}</div>;
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
