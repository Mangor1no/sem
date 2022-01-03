import { IconSearch } from 'constants/Icons';
import { filterType } from 'data/constants';
import React, { useCallback, useEffect, useState } from 'react';
import { Range } from 'react-range';

const Filter = ({ handleFilter, products }) => {
  const [priceRange, setPriceRange] = useState([0, 99999]);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(99999);
  const [variationList, setVariationList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [selectedVariation, setSelectedVariation] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 99999]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const priceList = products.map((product) => product.price).sort((a, b) => a - b);
    setPriceRange([Math.floor(priceList[0]), Math.ceil(priceList[priceList.length - 1])]);
    setSelectedPriceRange([Math.floor(priceList[0]), Math.ceil(priceList[priceList.length - 1])]);
    setHighestPrice(Math.ceil(priceList[priceList.length - 1]));
    setLowestPrice(Math.floor(priceList[0]));
    const variations = [...new Set(products.map((cat) => cat.variations).flat())];
    const tags = [...new Set(products.map((cat) => cat.metadata.form).flat())];
    setTagList(tags);
    setVariationList(variations);
  }, [products]);

  const handleFilterVariation = (variation) => () => {
    let tempColor = [...selectedVariation];

    if (tempColor.includes(variation)) {
      tempColor = tempColor.filter((va) => {
        return va !== variation;
      });
    } else {
      tempColor.push(variation);
    }
    return setSelectedVariation(tempColor);
  };

  const handleFilterTag = (tag) => () => {
    let tempTag = [...selectedTag];

    if (tempTag.includes(tag)) {
      tempTag = tempTag.filter((br) => {
        return br !== tag;
      });
    } else {
      tempTag.push(tag);
    }
    return setSelectedTag(tempTag);
  };

  useEffect(() => {
    handleFilter({ selectedVariation, selectedPriceRange, selectedTag, productName: search });
  }, [selectedVariation, selectedPriceRange, selectedTag, search]);

  const renderFilterPrice = useCallback(() => {
    return (
      <div className="pl-3 pt-9">
        <Range
          step={10}
          min={lowestPrice}
          max={highestPrice}
          values={priceRange}
          onChange={(values) => {
            setPriceRange(values);
          }}
          onFinalChange={(values) => setSelectedPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '4px',
                width: '100%',
              }}
              className="bg-blue-100"
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div {...props} className="flex items-center justify-center">
              <p className="bg-white w-[14px] h-[14px] min-w-[14px] rounded-full border-2 border-blue-100" />
              <p className="absolute bottom-6 text-center text-black-50">${priceRange[index]}</p>
            </div>
          )}
        />
      </div>
    );
  }, [lowestPrice, highestPrice, priceRange]);

  const renderFilterVariation = useCallback(() => {
    return (
      <div className="w-full -my-2">
        <ul className="flex items-center">
          {variationList.map((variation, index) => (
            <li
              key={variation}
              className={`relative flex items-center justify-center ${
                index === variationList.length - 1 ? '' : 'mr-4'
              }`}
            >
              <input
                type="checkbox"
                id={variation}
                className="w-8 h-8 min-w-[32px] rounded-full appearance-none bg-[#ECECEF] border border-[#C9C9C9] ring-2 ring-white checked:ring-1 checked:ring-blue-100 checked:bg-blue-100 checked:ring-offset-2 cursor-pointer"
                onChange={handleFilterVariation(variation)}
                checked={selectedVariation?.includes(variation)}
              />
              <span
                className={`${
                  selectedVariation?.includes(variation) && 'text-white'
                } absolute inset-0 pointer-events-none flex items-center justify-center`}
              >
                {variation}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }, [variationList, selectedVariation]);

  const renderFilterTag = useCallback(() => {
    return (
      <div className="w-full -my-2">
        <div className="flex items-center w-full flex-wrap gap-3">
          {tagList.map((tag, index) => (
            <button
              type="button"
              id={tag}
              className={`cursor-pointer min-w-max w-max px-4 py-2 border ${
                selectedTag.includes(tag)
                  ? 'border-blue-100 text-blue-100'
                  : 'border-[#C9C9C9] text-black-50'
              }`}
              onClick={handleFilterTag(tag)}
              key={tag}
            >
              <span className="pointer-events-none flex items-center justify-center">{tag}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }, [tagList, selectedTag]);

  const renderFilterName = useCallback(() => {
    return (
      <div className="w-full bg-blue-100 text-white flex items-center order-first">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-blue-100 focus:outline-none py-3 px-5 placeholder-white italic w-full"
          placeholder="Search here..."
        />
        <div className="px-3 flex-1 border-l border-white">
          <IconSearch />
        </div>
      </div>
    );
  }, [search]);

  const renderFilter = (type) => {
    switch (type) {
      case filterType[0]: {
        return renderFilterPrice();
      }
      case filterType[1]: {
        return renderFilterVariation();
      }
      case filterType[2]: {
        return renderFilterTag();
      }
      default:
        return null;
    }
  };

  return (
    <>
      {renderFilterName()}
      <div className="px-[30px] py-[25px] pb-[50px] bg-black-2">
        <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-6">
          <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
          <span>Size</span>
        </p>
        {renderFilter('variation')}
      </div>
      <div className="px-[30px] py-[25px] pb-[50px] bg-black-2 order-first">
        <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-6">
          <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
          <span>Price</span>
        </p>
        {renderFilter('price')}
      </div>
      <div className="px-[30px] py-[25px] pb-[50px] bg-black-2">
        <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-6">
          <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
          <span>Tag</span>
        </p>
        {renderFilter('tag')}
      </div>
    </>
  );
};

export default Filter;
