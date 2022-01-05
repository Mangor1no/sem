import { IconSearch } from 'constants/Icons';
import React, { useCallback, useEffect, useState } from 'react';

const Filter = ({ handleFilter, blogs }) => {
  const [tagList, setTagList] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const tags = [...new Set(blogs.map((cat) => cat.category).flat())];
    setTagList(tags);
  }, [blogs]);

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
    handleFilter({ selectedTag, blogName: search });
  }, [selectedTag, search]);

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
      <div className="w-full border border-black-10 flex items-center order-first">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="focus:outline-none py-3 px-5  italic w-full"
          placeholder="Search here..."
        />
        <div className="px-3 flex-1 border-l border-black-10">
          <IconSearch />
        </div>
      </div>
    );
  }, [search]);

  return (
    <>
      {renderFilterName()}
      <div className="px-[30px] py-[25px] pb-[50px] border border-black-10">
        <p className="text-base capitalize font-neue inline-flex items-center space-x-3 mb-6">
          <div className="w-2 h-2 min-w-[8px] border border-blue-100 rounded-full" />{' '}
          <span>Popular tags</span>
        </p>
        {renderFilterTag()}
      </div>
    </>
  );
};

export default Filter;
