import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Button({ size, label, variant, className, type, onClick }) {
  return (
    <button
      className={classnames(
        'px-2 py-0.5 min-w-max focus:outline-none select-none',
        {
          'bg-primary text-gray-100 focus:ring-2': variant === 'primary',
          'bg-secondary text-gray-800 focus:ring-2 focus:ring-secondary focus:ring-opacity-50':
            variant === 'secondary',
          'border-2 border-red-500 text-red-700 focus:ring-2 focus:ring-red-300':
            variant === 'outline',
        },
        {
          'text-xs px-3 rounded': size === 'sm',
          'text-base px-4 rounded-md': size === 'md',
          'text-lg px-4 rounded-lg': size === 'lg',
        },
        className
      )}
      type={type}
      onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  type: 'button',
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
