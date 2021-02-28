import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function CheckBox({
  size,
  label,
  className,
  name,
  id,
  onChange,
  value,
}) {
  return (
    <div className={className}>
      <div className="inline-flex items-center">
        <input
          className={classnames(
            'mr-2 checked:bg-primary focus:ring-1 focus:ring-offset-green-200 focus:ring-offset-1',
            {
              'h-4 w-4 rounded-sm': size === 'sm',
              'h-5 w-5 rounded': size === 'md',
              'h-6 w-6 rounded-md': size === 'lg',
            }
          )}
          id={id}
          name={name}
          type="checkbox"
          checked={value}
          onChange={() => onChange(checked => !checked)}
        />
        <label
          className={classnames('px-0 select-none', {
            'text-xs': size === 'sm',
            'text-base': size === 'md',
            'text-lg': size === 'lg',
          })}
          htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

CheckBox.defaultProps = {
  size: 'md',
};

CheckBox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
