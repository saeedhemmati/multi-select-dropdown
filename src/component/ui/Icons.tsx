import React from 'react';
import { IconProps } from '../types';

export const CaretUpIcon = (props: IconProps) => {
  const { stroke, ...restProps } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <g id="Arrow / Caret_Up_MD">
        <path
          id="Vector"
          d="M8 14L12 10L16 14"
          stroke={stroke ?? '#000'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const CaretDownIcon = (props: IconProps) => {
  const { stroke, ...restProps } = props;

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <g id="Arrow / Caret_Down_MD">
        <path
          id="Vector"
          d="M16 10L12 14L8 10"
          stroke={stroke ?? '#000'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const TickIcon = (props: IconProps) => {
  const { fill, ...restProps } = props;
  return (
    <svg
      fill={fill ?? '#000'}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-49 -49 588.00 588.00"
      xmlSpace="preserve"
      transform="rotate(0)"
      {...restProps}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.9800000000000001"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />{' '}
      </g>
    </svg>
  );
};
