import PropTypes from 'prop-types';
import classnames from 'classnames';

import { XIcon } from '../shared/svg';

export default function Search({
  size,
  className,
  placeholder,
  value,
  onChange,
  onClear,
}) {
  return (
    <div className={className}>
      <div className="relative w-full">
        <input
          className={classnames(
            'w-full border-gray-300 text-gray-900 bg-white py-1 pr-8 focus:outline-none focus:ring-1 placeholder:select-none',
            {
              'text-xs rounded': size === 'sm',
              'text-base rounded-md': size === 'md',
              'text-lg rounded-lg': size === 'lg',
            }
          )}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
        />
        <div className="absolute right-2 top-0 h-full flex items-center">
          <button
            className="h-4/6 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            type="button"
            onClick={onClear}>
            <XIcon className="h-full text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

Search.defaultProps = {
  size: 'md',
};

Search.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  className: PropTypes.string,
};
