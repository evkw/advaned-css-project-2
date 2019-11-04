import React from 'react';
import icons from '../sprite.svg';

export const Icon = props => {

return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="search__icon"><use xlinkHref={`${icons}#${props.icon}`}></use></svg>
}

export default Icon;