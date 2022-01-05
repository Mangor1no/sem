import Layout from 'components/Layout';
import { IconClose } from 'constants/Icons';
import { food } from 'data/constants';
import React from 'react';

const Order = () => {
  let subTotal = 0;
  return (
    <Layout>
      <div className="h-[600px] min-h-[600px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10 mt-24">
            <p className="text-2xl text-black-100 font-bold capitalize">My last orders</p>
            <p className="uppercase text-base font-neue">Aug 22, 2018</p>
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
                    <div className="mx-auto w-[250px] max-w-[520px] min-w-[250px]">product</div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[130px] max-w-[130px] min-w-[130px]">price</div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[163px] max-w-[163px] min-w-[163px]">quantity</div>
                  </td>
                  <td className="p-4 text-black-100 uppercase font-bold">
                    <div className="mx-auto w-[140px] max-w-[140px] min-w-[140px]">total</div>
                  </td>
                </tr>
                {food.slice(0, 4).map((item, index) => {
                  subTotal += item.price * (index + 1);
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
                        <p className="col-span-2 text-center">x{index + 1}</p>
                      </td>
                      <td>${item.price * (index + 1)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F5F5F568] p-8">
            <p className="text-base font-bold mb-5">SHIPPING TRACKING</p>
            <ul className="space-y-[5px] list-disc mx-8 font-neue text-black-50">
              <li>Aug 23 2021: Received your order successfully</li>
              <li>Aug 23 2021: Delivery your order to TicTicShip</li>
              <li>Aug 22 2021: Payment success</li>
            </ul>
          </div>
          <div className="bg-[#F5F5F568] p-8">
            <p className="text-base font-bold border-b border-black-10 pb-[14px]">TOTALS</p>
            <div className="divide-y divide-black-10 text-black-50 font-neue">
              <div className="flex justify-between py-4">
                <p>SUBTOTAL</p>
                <p className="text-black-100 font-bold font-nunito">${subTotal}</p>
              </div>
              <div className="flex justify-between py-4">
                <p>SHIPPING</p>
                <div className="text-right">
                  <p className="text-sm">Flat rate: $2</p>
                </div>
              </div>
              <div className="flex justify-between py-4">
                <p>TOTAL</p>
                <p className="text-black-100 font-bold font-nunito">${subTotal + 2}</p>
              </div>
              <div className="flex justify-between py-4">
                <p>PAYMENT METHOD:</p>
                <p className="text-sm">Cash On Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
