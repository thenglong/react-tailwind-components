import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CheckBox({ className, label, name }) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <input
        id={name}
        type="checkbox"
        className={`h-5 w-5 checked:bg-blue-900 mr-2`}
        checked={isChecked}
        onChange={() => setIsChecked(isChecked => !isChecked)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
