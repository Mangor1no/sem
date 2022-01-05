import Layout from 'components/Layout';
import { addToCart } from 'data/actions/cart';
import { currentProfileSelector, isAuthSelector } from 'data/selectors/userSelector';
import { wishlistSelector } from 'data/selectors/wishlistSelector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(wishlistSelector);
  const currentProfile = useSelector(currentProfileSelector);
  const isAuth = useSelector(isAuthSelector);

  const handleAddToCart = async (product) => {
    const finalData = {
      productId: product?.id,
      productCategory: product?.category,
      quantity: 1,
      variations: product.variations[0],
    };
    if (!isAuth) {
      // guestId = 0
      finalData.userId = 0;
    } else {
      finalData.userId = currentProfile.id;
    }
    const result = await dispatch(addToCart(finalData));
    if (result) {
      return toast('Add to cart successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    }
    return toast.error('Add to cart failed, please try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };

  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10 mt-24">
            <p className="text-2xl text-black-100 font-bold capitalize">Wishlist</p>
            <p className="uppercase text-base font-neue">
              HOME <span className="text-blue-100">// WISHLIST</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[370px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col overflow-x-auto mb-8 w-full text-black-50">
            <table>
              <tbody>
                <tr>
                  <td className="p-4 text-black-100">
                    <div className="mx-auto w-[68px] max-w-[68px] min-w-[68px]">&nbsp;</div>
                  </td>
                  <td className="p-4 text-black-100">
                    <div className="mx-auto">&nbsp;</div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[250px] max-w-[520px] min-w-[250px]">
                      PRODUCT NAME
                    </div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[130px] max-w-[130px] min-w-[130px]">UNIT PRICE</div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[163px] max-w-[163px] min-w-[163px]">
                      STOCK STATUS
                    </div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[140px] max-w-[140px] min-w-[140px]" />
                  </td>
                </tr>
                {wishlist.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td />
                      <td>
                        <div className="w-[94px] h-[94px] min-w-[94px] overflow-hidden mx-auto p-3">
                          <img
                            src={item.image[0]}
                            alt=""
                            className="w-full h-full object-cover z-10 transition duration-500 ease-in-out hover:scale-110"
                          />
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <p className="col-span-2 text-center text-blue-100">
                          {item.stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          className="py-[14px] px-[26px] border border-black-10"
                        >
                          Add to Cart
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
