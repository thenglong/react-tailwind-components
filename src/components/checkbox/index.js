import PropTypes from 'prop-types';

export default function CheckBox({
  className,
  label,
  name,
  onChange,
  checked,
  size,
}) {
  let checkBoxStyles = '';
  let labelStyles = '';
  switch (size) {
    case 'sm':
      checkBoxStyles += 'h-4 w-4';
      labelStyles += 'text-sm';
      break;
    case 'md':
      checkBoxStyles += 'h-5 w-5';
      labelStyles += 'text-base';
      break;
    case 'lg':
      checkBoxStyles += 'h-6 w-6';
      labelStyles += 'text-lg';
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      <div className={`inline-flex items-center`}>
        <input
          id={name}
          type="checkbox"
          className={`${checkBoxStyles} checked:bg-blue-900 mr-2`}
          checked={checked}
          onChange={() => onChange(checked => !checked)}
        />
        <label htmlFor={name} className={`${labelStyles} select-none`}>
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
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
