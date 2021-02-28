import PropTypes from 'prop-types';

import { CircleLoaderIcon } from '../shared/svg';

export default function SpinnerLoader() {
  return (
    <div className="">
      <CircleLoaderIcon />
    </div>
  );
}

SpinnerLoader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};
