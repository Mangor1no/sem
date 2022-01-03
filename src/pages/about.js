import Layout from 'components/Layout';
import React from 'react';
import Link from 'next/link';
import { IconBigPhone, IconHouse, IconMail, IconPhone, IconStar } from 'constants/Icons';
import HomeSale from 'components/home/HomeSale';
import Support from 'components/Support';

const About = () => {
  return (
    <Layout>
      <div className="h-[560px] min-h-[560px] w-full relative">
        <div className="absolute inset-0 w-full h-full bg-yellow-100 flex items-center px-6 md:px-32 xl:px-60 2xl:px-[370px]">
          <div className="z-10">
            <p className="text-2xl text-black-100 font-bold capitalize">About us</p>
            <p className="uppercase text-base font-neue">
              home // <span className="text-blue-100">about us</span>
            </p>
          </div>
          <img
            src="/images/products/banner.png"
            alt="banner"
            className="max-w-[723px] absolute bottom-0 right-32 hidden md:block"
          />
        </div>
      </div>
      <div className="py-16 px-6 lg:px-32 xl:px-60 3xl:px-[370px] bg-black-2">
        <div className="grid md:grid-cols-2 w-full items-center gap-x-5 gap-y-24">
          <img src="/images/about/1.png" alt="doggo-n-catto" />
          <div className="order-2">
            <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
              BEST PRODUCT
            </p>
            <p className="text-lg md:text-2xl font-bold mb-14">Best Pet Food</p>
            <p className="mb-5  text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate
            </p>
            <p className="mb-10 text-sm">
              Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
              non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error.
            </p>
            <Link href="/shop">
              <button
                type="button"
                className="btn-primary transition duration-150 ease-in-out w-[180px] h-12 text-base uppercase"
              >
                shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-16 pb-28 px-6 lg:px-32 xl:px-60 3xl:px-[370px] bg-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
            OUR TEAM
          </p>
          <p className="text-lg md:text-2xl font-bold mb-14">Team Member</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full items-center gap-x-7 gap-y-24">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/about/member-1.png" alt="member-1" className="mb-8" />
            <p className="text-lg font-bold">Dumonnn</p>
            <p className="text-base text-black-50">Team member</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/about/member-2.png" alt="member-2" className="mb-8" />
            <p className="text-lg font-bold">Toilaqhai</p>
            <p className="text-base text-black-50">Team member</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/about/member-3.png" alt="member-3" className="mb-8" />
            <p className="text-lg font-bold">Hungduy</p>
            <p className="text-base text-black-50">Team member</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/about/member-4.png" alt="member-4" className="mb-8" />
            <p className="text-lg font-bold">Minhthu</p>
            <p className="text-base text-black-50">Team member</p>
          </div>
        </div>
      </div>
      <div className="py-28 px-6 lg:px-32 xl:px-60 3xl:px-[370px] bg-black-2">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[16px] leading-[25px] tracking-[.3em] text-blue-100 uppercase text-neue">
            TESTIMONIAL
          </p>
          <p className="text-lg md:text-2xl font-bold mb-14">What Client Says</p>
          <div className="flex items-center justify-center flex-wrap gap-8">
            <div className="px-8 py-9 pb-[70px] bg-[#FFFFFF23] shadow-lg max-w-[370px] space-y-8">
              <div className="w-full flex items-center space-x-5">
                <img
                  src="/images/about/member-2.png"
                  alt="member-2"
                  className="w-[91px] h-[91px] rounded-full min-w-[91px]"
                />
                <div>
                  <p className="text-base text-black-50 mb-[2px]">Toilaqhai</p>
                  <p className="text-base text-black-50 mb-[6px]">Client</p>
                  <div className="w-full flex items-center">
                    {Array(5).fill(
                      <span className="mr-[5px]">
                        <IconStar size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetl adipisicing elit, aduvjp sed do eiusmod tempo
                incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
            <div className="px-8 py-9 pb-[70px] bg-[#FFFFFF23] shadow-lg max-w-[370px] space-y-8">
              <div className="w-full flex items-center space-x-5">
                <img
                  src="/images/about/member-1.png"
                  alt="member-1"
                  className="w-[91px] h-[91px] rounded-full min-w-[91px]"
                />
                <div>
                  <p className="text-base text-black-50 mb-[2px]">Toilaqhai</p>
                  <p className="text-base text-black-50 mb-[6px]">Client</p>
                  <div className="w-full flex items-center">
                    {Array(5).fill(
                      <span className="mr-[5px]">
                        <IconStar size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetl adipisicing elit, aduvjp sed do eiusmod tempo
                incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
            <div className="px-8 py-9 pb-[70px] bg-[#FFFFFF23] shadow-lg max-w-[370px] space-y-8">
              <div className="w-full flex items-center space-x-5">
                <img
                  src="/images/about/member-4.png"
                  alt="member-4"
                  className="w-[91px] h-[91px] rounded-full min-w-[91px]"
                />
                <div>
                  <p className="text-base text-black-50 mb-[2px]">Toilaqhai</p>
                  <p className="text-base text-black-50 mb-[6px]">Client</p>
                  <div className="w-full flex items-center">
                    {Array(5).fill(
                      <span className="mr-[5px]">
                        <IconStar size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetl adipisicing elit, aduvjp sed do eiusmod tempo
                incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-28 px-6 lg:px-32 xl:px-60 3xl:px-[370px]">
        <HomeSale />
      </div>
      <hr />
      <div className="py-14 px-6 lg:px-32 xl:px-60 3xl:px-[370px]">
        <Support />
      </div>
      <div className="py-14 px-6 lg:px-32 xl:px-60 3xl:px-[370px] flex flex-col lg:flex-row lg:justify-between gap-6 mb-72">
        <div className="lg:w-1/3">
          <p className="text-xl xl:text-5xl xl:leading-[72px] font-bold mb-14">
            We Are Here!
            <br />
            Please Contact Us.
          </p>
          <div className="flex flex-col space-y-14">
            <div className="flex items-center space-x-7">
              <div className="p-2 w-[36px] h-[36px] min-w-[36px] xl:w-[78px] xl:h-[78px] xl:min-w-[78px] rounded-full bg-blue-100 flex items-center justify-center">
                <IconHouse />
              </div>
              <div className="font-bold">
                <p className="text-lg">Address:</p>
                <p>110 Tran Phu - Ha Dong</p>
              </div>
            </div>
            <div className="flex items-center space-x-7">
              <div className="p-2 w-[36px] h-[36px] min-w-[36px] xl:w-[78px] xl:h-[78px] xl:min-w-[78px] rounded-full bg-blue-100 flex items-center justify-center">
                <IconBigPhone />
              </div>
              <div className="font-bold">
                <p className="text-lg">Phone:</p>
                <p>035 453 3950</p>
              </div>
            </div>
            <div className="flex items-center space-x-7">
              <div className="p-2 w-[36px] h-[36px] min-w-[36px] xl:w-[78px] xl:h-[78px] xl:min-w-[78px] rounded-full bg-blue-100 flex items-center justify-center">
                <IconMail />
              </div>
              <div className="font-bold">
                <p className="text-lg">Email:</p>
                <p>minhthu236632@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xl xl:text-5xl xl:leading-[72px] font-bold mb-12">Send A Quest</p>
          <div className="w-full gap-7 flex flex-col">
            <div className="flex items-center space-x-7">
              <input
                type="text"
                className="border border-[#C9C9C9] w-full px-4 py-3"
                placeholder="Name"
              />
              <input
                type="text"
                className="border border-[#C9C9C9] w-full px-4 py-3"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className="border border-[#C9C9C9] w-full px-4 py-3"
              placeholder="Subject (Optinal)"
            />
            <textarea
              className="border border-[#C9C9C9] w-full px-4 py-3"
              rows="15"
              placeholder="Message"
            />
            <button type="button" className="btn-primary uppercase w-max py-3 px-16">
              send
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
