import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SearchOnSubmitField({
  placeholder,
  size,
  onSubmit,
  onClear,
  className,
}) {
  const [value, setValue] = useState('');

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
    <div className={`${styles} ${className}`}>
      <div className="w-4/6 h-full relative inline-block">
        <input
          className="w-full h-full bg-gray-300 px-2 rounded-sm placeholder:select-none"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <button className="absolute top-0 right-0 bg-red-300 h-5/6">clear</button>
      </div>
      <button className="h-full bg-red-400">Search</button>
    </div>
  );
}

SearchOnSubmitField.defaultProps = {
  size: 'md',
};

SearchOnSubmitField.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  className: PropTypes.string,
};
