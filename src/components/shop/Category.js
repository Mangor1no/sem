import { Disclosure, Transition } from '@headlessui/react';
import { categories } from 'data/constants';
import Link from 'next/link';
import React, { Fragment } from 'react';

const Category = ({ currentSubCategory, handleSelectCategory }) => {
  return (
    <div className="w-full">
      <p className="text-lg uppercase font-bold">Category</p>
      <div className="h-px w-[90px] bg-primary mt-2 mb-4" />
      {categories.map((category) => {
        return (
          <Disclosure
            as="div"
            className={`font-semibold ${category.id === 0 ? '' : 'mt-2'}`}
            key={category.id}
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center my-4">
                  {open ? (
                    <div className="w-[10px] h-px bg-bgPrimary" />
                  ) : (
                    <span className="w-[10px]">+</span>
                  )}
                  <span className="uppercase ml-4 text-base">{category.name}</span>
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
                  {category.subCategory.map((sub) => (
                    <Disclosure.Panel
                      className={`font-poppins w-full pl-[26px] pr-4 py-2 `}
                      key={sub.id}
                    >
                      <Link href={`/shop/${category.category}?type=${sub.slug}`} shallow>
                        <button
                          type="button"
                          className={`text-sm text-left ${
                            currentSubCategory === sub.name ? 'text-primary' : ''
                          }`}
                          onClick={() =>
                            handleSelectCategory(sub.name, sub.slug, category.category)
                          }
                        >
                          {sub.name}
                        </button>
                      </Link>
                    </Disclosure.Panel>
                  ))}
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default Category;
