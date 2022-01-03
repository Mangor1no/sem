import Comment from 'components/Comment';
import { categories } from 'data/constants';
import React, { useState, Fragment } from 'react';

const ProductMetadata = ({ type, metadata, product }) => {
  const [tab, setTab] = useState('desc');

  const formatFieldName = (field) => {
    return field.replace('_', ' ');
  };

  const renderMetadata = () => {
    return product.description;
  };

  if (!type || !metadata) return null;

  const renderTab = () => {
    if (tab === 'desc') {
      return renderMetadata();
    }
    if (tab === 'review') {
      return <Comment />;
    }
    return null;
  };

  return (
    <>
      <div className="flex items-center space-x-8 mb-9 w-full border-b">
        <label
          className={`${
            tab === 'desc' ? 'border-b-2 text-blue-100' : ''
          } border-blue-100 capitalize font-bold py-2 mr-2 cursor-pointer`}
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
            tab === 'review' ? 'border-b-2 text-blue-100' : ''
          } border-blue-100 capitalize font-bold py-2 mr-2 cursor-pointer`}
          htmlFor="review"
        >
          <input
            type="radio"
            name="tabs"
            id="review"
            className="hidden"
            onChange={() => setTab('review')}
          />
          review (02)
        </label>
      </div>
      {renderTab()}
    </>
  );
};

export default ProductMetadata;
