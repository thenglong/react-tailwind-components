import PropTypes from 'prop-types';

export default function Button({ size, label, variant, onClick, className }) {
  let styles = '';

  switch (variant) {
    case 'primary':
      styles += 'bg-primary text-gray-100 focus:ring-2';
      break;
    case 'secondary':
      styles +=
        'bg-secondary text-gray-800 focus:ring-2 focus:ring-secondary focus:ring-opacity-50';
      break;
    case 'outline':
      styles +=
        'border-2 border-red-500 text-red-700 focus:ring-2 focus:ring-red-300';
      break;
    default:
      break;
  }

  switch (size) {
    case 'sm':
      styles += ' text-xs px-3 rounded';
      break;
    case 'md':
      styles += ' text-base px-4 rounded-md';
      break;
    case 'lg':
      styles += ' text-lg px-4 rounded-lg';
      break;
    default:
      break;
  }

  return (
    <button
      className={`${styles} px-2 py-0.5 min-w-max focus:outline-none select-none ${className}`}
      onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
};
