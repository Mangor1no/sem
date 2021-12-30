import Comment from 'components/Comment';
import { categories } from 'data/constants';
import React, { useState, Fragment } from 'react';

const ProductMetadata = ({ type, metadata }) => {
  const [tab, setTab] = useState('desc');

  const formatFieldName = (field) => {
    return field.replace('_', ' ');
  };

  const renderMetadata = () => {
    switch (type) {
      case categories[0].category: {
        return (
          <>
            <div className="mb-4">
              <p className="uppercase text-base text-primary mb-2 font-bold">size</p>
              <div className="grid grid-cols-8 gap-x-5 font-poppins text-sm w-full">
                {Object.keys(metadata?.size).map((detail) => (
                  <Fragment key={detail}>
                    <p className="font-bold col-span-4 sm:col-span-2 capitalize">
                      {formatFieldName(detail)}:
                    </p>
                    <p className="col-span-4 sm:col-span-6">{metadata?.size?.[detail]}</p>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="uppercase text-base text-primary mb-2 font-bold">pOWER</p>
              <div className="grid grid-cols-8 gap-x-5 font-poppins text-sm">
                {Object.keys(metadata?.power).map((detail) => (
                  <Fragment key={detail}>
                    <p className="font-bold col-span-4 sm:col-span-2 capitalize">
                      {formatFieldName(detail)}:
                    </p>
                    <p className="col-span-4 sm:col-span-6">{metadata?.power?.[detail]}</p>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="uppercase text-base text-primary mb-2 font-bold">special</p>
              <div className="grid grid-cols-8 gap-x-5 font-poppins text-sm">
                {Object.keys(metadata?.special).map((detail) => (
                  <Fragment key={detail}>
                    <p className="font-bold col-span-4 sm:col-span-2 capitalize">
                      {formatFieldName(detail)}:
                    </p>
                    <p className="col-span-4 sm:col-span-6">{metadata?.special?.[detail]}</p>
                  </Fragment>
                ))}
              </div>
            </div>
          </>
        );
      }
      case categories[1].category: {
        return (
          <>
            <div className="mb-4">
              <p className="uppercase text-base text-primary mb-2 font-bold">Details</p>
              <div className="grid grid-cols-8 gap-x-5 font-poppins text-sm w-full">
                {Object.keys(metadata?.details).map((detail) => (
                  <Fragment key={detail}>
                    <p className="font-bold col-span-4 sm:col-span-2 capitalize">
                      {formatFieldName(detail)}:
                    </p>
                    <p className="col-span-4 sm:col-span-6">{metadata?.details?.[detail]}</p>
                  </Fragment>
                ))}
              </div>
            </div>
          </>
        );
      }
      case categories[2].category: {
        return (
          <>
            <div className="mb-4">
              <p className="uppercase text-base text-primary mb-2 font-bold">Details</p>
              <div className="grid grid-cols-8 gap-x-5 font-poppins text-sm w-full">
                {Object.keys(metadata?.details).map((detail) => (
                  <Fragment key={detail}>
                    <p className="font-bold col-span-4 sm:col-span-2 capitalize">
                      {formatFieldName(detail)}:
                    </p>
                    <p className="col-span-4 sm:col-span-6">{metadata?.details?.[detail]}</p>
                  </Fragment>
                ))}
              </div>
            </div>
          </>
        );
      }

      default:
        return null;
    }
  };

  if (!type || !metadata) return null;

  const renderTab = () => {
    if (tab === 'desc') {
      return renderMetadata();
    }
    if (tab === 'review') {
      return (
        <div className="md:w-1/2">
          <Comment />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="flex items-center justify-between mb-9 sm:w-1/2">
        <label
          className={`${
            tab === 'desc' ? 'border-b-2 font-bold' : ''
          } border-primary uppercase py-2 mr-2 cursor-pointer`}
          htmlFor="desc"
        >
          <input
            type="radio"
            name="tabs"
            id="desc"
            className="hidden"
            onChange={() => setTab('desc')}
          />
          description
        </label>
        <label
          className={`${
            tab === 'review' ? 'border-b-2 font-bold' : ''
          } border-primary uppercase py-2 mr-2 cursor-pointer`}
          htmlFor="review"
        >
          <input
            type="radio"
            name="tabs"
            id="review"
            className="hidden"
            onChange={() => setTab('review')}
          />
          review
        </label>

        <label
          className={`${
            tab === 'qna' ? 'border-b-2 font-bold' : ''
          } border-primary uppercase py-2 mr-2 cursor-pointer`}
          htmlFor="qna"
        >
          <input
            type="radio"
            name="tabs"
            id="qna"
            className="hidden"
            onChange={() => setTab('qna')}
          />
          Q&A
        </label>
      </div>
      {renderTab()}
    </>
  );
};

export default ProductMetadata;
