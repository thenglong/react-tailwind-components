import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Badge({ variant, size, text, className }) {
  return (
    <div
      className={classnames(
        'px-0.5 w-max',
        {
          'bg-green-300 text-green-900': variant === 'positive',
          'bg-red-300 text-red-900': variant === 'negative',
          'bg-yellow-300 text-yellow-900': variant === 'warning',
        },
        {
          'text-xs px-3 rounded leading-3': size === 'sm',
          'text-base px-4 rounded-md leading-4': size === 'md',
          'text-lg px-4 rounded-lg leading-5': size === 'lg',
        },
        className
      )}>
      {text}
    </div>
  );
}

Badge.defaultProps = {
  variant: 'positive',
  size: 'md',
  className: 'w-max',
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['positive', 'negative', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
