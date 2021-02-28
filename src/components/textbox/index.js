import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function TextBox({
  size,
  className,
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
}) {
  return (
    <input
      className={classnames(
        'border-gray-300 text-gray-900 bg-white py-1 focus:outline-none focus:ring-1 placeholder:select-none',
        {
          'text-xs rounded': size === 'sm',
          'text-base rounded-md': size === 'md',
          'text-lg rounded-lg': size === 'lg',
        },
        className
      )}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
}

TextBox.defaultProps = {
  size: 'md',
  type: 'text',
};

TextBox.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
