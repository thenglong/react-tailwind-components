import PropTypes from 'prop-types';

export default function TextBox({
  type,
  className,
  placeholder,
  size,
  value,
  onChange,
}) {
  return (
    <input
      className={`${size} bg-gray-300 text-gray-800 px-2 py-1 rounded-md placeholder:select-none focus:outline-none focus:ring-2 ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
}

TextBox.defaultProps = {
  type: 'text',
};

TextBox.propTypes = {
  type: PropTypes.oneOf(['email', 'text', 'password']),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
