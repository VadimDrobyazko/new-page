import React from 'react';

function Button({ text, variant = 'black', children }) {
  let variantClass = '';

  switch (variant) {
    case 'black':
      variantClass = 'button-black bg-[#2D2D2D] text-[#F7F7F7] md:pl-[107px] md:pr-[117px]';
      break;
    case 'gray':
      variantClass = 'button-gray text-[#2E2E2E] bg-[#E6E8EC] flex items-center justify-center gap-[10px] px-[18px] md:px-[62px]';
      break;
    case 'connect':
      variantClass = 'button-black bg-[#303030] font-konnect text-white px-[14px] py-[9px] rounded-[100px] min-h-[40px] md:px-[14px] md:min-h-[31px] md:text-[11px]';
      break;
    default:
      variantClass = '';
  }

  return (
    <button className={`button font-button text-capitalize ${variantClass}`}>
      {children || text}
      {variant === 'gray' && <i className="icon-right text-[11px] md:hidden"></i>}
    </button>
  );
}

export default Button;
