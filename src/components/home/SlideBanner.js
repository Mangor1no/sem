import * as React from 'react';

export const SlideBanner = ({ banner }) => {
  return (
    <div className="w-full h-full relative" key={banner.id}>
      <img
        src={banner.image}
        alt="banner"
        className="w-auto h-full object-cover z-0 max-h-[760px] min-h-[760px]"
      />
    </div>
  );
};
