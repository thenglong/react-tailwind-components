import PropTypes from 'prop-types';

export default function TextBox({
  type,
  className,
  placeholder,
  size,
  value,
  onChange,
}) {
  let styles = '';

  switch (size) {
    case 'sm':
      styles += 'h-6';
      break;
    case 'md':
      styles += 'h-8';
      break;
    case 'lg':
      styles += 'h-10';
      break;
    default:
      break;
  }

  return (
    <input
      className={`${styles} bg-gray-300 px-2 rounded-md placeholder:select-none ${className}`}
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
