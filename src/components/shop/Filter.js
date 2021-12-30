import { Disclosure, Transition } from '@headlessui/react';
import { IconCheckboxCheck, IconPriceRange } from 'constants/Icons';
import { filterType } from 'data/constants';
import React, { useCallback, useEffect, useState } from 'react';
import { Range } from 'react-range';

const Filter = ({ handleFilter, products }) => {
  const [priceRange, setPriceRange] = useState([0, 99999]);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(99999);
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 99999]);

  useEffect(() => {
    const priceList = products.map((product) => product.price).sort((a, b) => a - b);
    setPriceRange([Math.floor(priceList[0]), Math.ceil(priceList[priceList.length - 1])]);
    setSelectedPriceRange([Math.floor(priceList[0]), Math.ceil(priceList[priceList.length - 1])]);
    setHighestPrice(Math.ceil(priceList[priceList.length - 1]));
    setLowestPrice(Math.floor(priceList[0]));
    const brands = [...new Set(products.map((cat) => cat.brand))];
    const colors = [...new Set(products.map((cat) => cat.variations).flat())];
    setBrandList(brands);
    setColorList(colors);
  }, [products]);

  const handleFilterColor = (color) => () => {
    let tempColor = [...selectedColor];

    if (tempColor.includes(color)) {
      tempColor = tempColor.filter((col) => {
        return col !== color;
      });
    } else {
      tempColor.push(color);
    }
    return setSelectedColor(tempColor);
  };

  const handleFilterBrand = (brand) => () => {
    let tempBrand = [...selectedBrand];

    if (tempBrand.includes(brand)) {
      tempBrand = tempBrand.filter((br) => {
        return br !== brand;
      });
    } else {
      tempBrand.push(brand);
    }
    return setSelectedBrand(tempBrand);
  };

  useEffect(() => {
    handleFilter({ selectedColor, selectedBrand, selectedPriceRange });
  }, [selectedColor, selectedBrand, selectedPriceRange]);

  const renderFilterPrice = useCallback(() => {
    return (
      <div className="pl-3 pb-9">
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
              className="bg-primary"
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div {...props} className="flex items-center justify-center">
              <div className="bg-white">
                <IconPriceRange />
              </div>
              <p className="absolute top-8 text-center font-oswald">${priceRange[index]}</p>
            </div>
          )}
        />
      </div>
    );
  }, [lowestPrice, highestPrice, priceRange]);

  const renderFilterBrand = useCallback(() => {
    return (
      <div className="w-full">
        <ul className="max-h-48 overflow-y-auto overflow-x-hidden">
          {brandList.map((brand, index) => (
            <li
              key={brand}
              className={`flex items-center ${index === brandList.length - 1 ? '' : 'mb-4'}`}
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  id={brand}
                  className="appearance-none w-4 h-4 min-w-4 border border-bgPrimary checked:border-primary checked:bg-primary mr-2 cursor-pointer rounded-[4px]"
                  onChange={handleFilterBrand(brand)}
                  checked={selectedBrand?.includes(brand)}
                />
                <div className="absolute left-[3px]">
                  <IconCheckboxCheck />
                </div>
              </div>
              <label htmlFor={brand} className="cursor-pointer w-full text-sm">
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }, [brandList, selectedBrand]);

  const renderFilterColor = useCallback(() => {
    return (
      <div className="w-full -my-2">
        <ul className="flex items-center">
          {colorList.map((color, index) => (
            <li
              key={color}
              className={`flex items-center ${index === colorList.length - 1 ? '' : 'mr-4'}`}
            >
              <input
                type="checkbox"
                id={color}
                className="w-6 h-6 min-w-6 rounded-full appearance-none checked:ring-2 checked:ring-primary checked:ring-offset-2 cursor-pointer"
                style={{ backgroundColor: color }}
                onChange={handleFilterColor(color)}
                checked={selectedColor?.includes(color)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }, [colorList, selectedColor]);

  const renderFilter = (type) => {
    switch (type) {
      case filterType[0]: {
        return renderFilterBrand();
      }
      case filterType[1]: {
        return renderFilterPrice();
      }
      case filterType[2]: {
        return renderFilterColor();
      }
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <p className="text-lg uppercase font-bold">Filter</p>
      <div className="h-px w-[90px] bg-primary mt-2 mb-4" />
      {filterType.map((filter, index) => {
        return (
          <Disclosure as="div" className={`font-semibold ${index === 0 ? '' : 'mt-2'}`} key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center my-4">
                  {open ? (
                    <div className="w-[10px] h-px bg-bgPrimary" />
                  ) : (
                    <span className="w-[10px]">+</span>
                  )}
                  <span className="uppercase ml-4 text-base">{filter}</span>
                </Disclosure.Button>
                <Transition
                  as="div"
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-2"
                >
                  <Disclosure.Panel className="w-full pl-[26px] pr-4 py-2 font-poppins">
                    {renderFilter(filter)}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default Filter;
