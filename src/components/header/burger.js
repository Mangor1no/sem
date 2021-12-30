/* eslint-disable max-lines */
import { Disclosure } from '@headlessui/react';
import { IconNavDropdown } from 'constants/Icons';
import { signOut } from 'data/actions/users';
import { isAuthSelector } from 'data/selectors/userSelector';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';

const BurgerButton = ({ navbarOpen }) => {
  const dispatch = useDispatch();

  const isAuth = useSelector(isAuthSelector);

  const router = useRouter();
  const handleSignOut = async () => {
    await dispatch(signOut());
    router.push('/');
  };

  const burgerStyles = {
    burgerContainer: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: 'white',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: 1,
      // transform: open ? 'translateX(8px)' : 'none',
    },
    lineBottom: {
      transform: 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };

  const burgerCloseStyles = {
    burgerContainer: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: '#2B2B35',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: 'rotate(45deg)',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: 0,
      // transform: open ? 'translateX(8px)' : 'none',
    },
    lineBottom: {
      transform: 'translateX(-1.5px) rotate(-45deg)',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };

  const styles = {
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmBurgerButton: {
      position: 'relative',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      top: '32px',
    },
    bmCross: {
      background: '#F2F2F2',
    },
    bmMenuWrap: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
    },
    bmMenu: {
      background: '#F2F2F2',
      padding: '48px 24px',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      padding: '16px 0',
    },
    bmItem: {
      color: '#2B2B35',
      display: 'flex',
      flexDirection: 'column',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
    },
  };

  return (
    <Menu
      right
      styles={styles}
      customBurgerIcon={
        <>
          <div style={{ ...burgerStyles.line, ...burgerStyles.lineTop }} />
          <div style={{ ...burgerStyles.line, ...burgerStyles.lineMiddle }} />
          <div style={{ ...burgerStyles.line, ...burgerStyles.lineBottom }} />
        </>
      }
      customCrossIcon={
        <>
          <div style={{ ...burgerCloseStyles.line, ...burgerCloseStyles.lineTop }} />
          <div style={{ ...burgerCloseStyles.line, ...burgerCloseStyles.lineMiddle }} />
          <div style={{ ...burgerCloseStyles.line, ...burgerCloseStyles.lineBottom }} />
        </>
      }
    >
      <div className={navbarOpen ? 'block' : 'hidden'}>
        <Disclosure>
          {({ open }) => (
            <div className={open ? 'mb-4' : ''}>
              <Disclosure.Button className="flex items-center w-full p-2 text-left">
                <span className="text-base uppercase mr-2 hover:text-primary">Shop</span>
                <IconNavDropdown color="#2B2B35" />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4">
                <div className="mb-3">
                  <p className="text-base mb-2">Top brand</p>
                  <div className="font-poppins text-sm flex flex-col justify-center">
                    <Link href="/shop/coffee-machine">
                      <a className="mb-[10px] hover:text-primary">Bialetti</a>
                    </Link>
                    <Link href="/shop/coffee-machine">
                      <a className="mb-[10px] hover:text-primary">Breville</a>
                    </Link>
                    <Link href="/shop/coffee-machine">
                      <a className="mb-[10px] hover:text-primary">Delonghi</a>
                    </Link>
                    <Link href="/shop/coffee-machine">
                      <a className="mb-[10px] hover:text-primary">Nespresso</a>
                    </Link>
                    <Link href="/shop/coffee-machine">
                      <a className="hover:text-primary">See More</a>
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-base mb-2">Coffee machine</p>
                  <div className="font-poppins text-sm flex flex-col justify-center">
                    <Link href="/shop/coffee-machine?type=coffee-grinder">
                      <a className="mb-[10px] hover:text-primary">Coffee Grinder</a>
                    </Link>
                    <Link href="/shop/coffee-machine?type=coffee-maker">
                      <a className="mb-[10px] hover:text-primary">Coffee Maker</a>
                    </Link>
                    <Link href="/shop/coffee-machine?type=coffee-roaster">
                      <a className="mb-[10px] hover:text-primary">Coffee Roaster</a>
                    </Link>
                    <Link href="/shop/coffee-machine?type=espresso-machine">
                      <a className="mb-[10px] hover:text-primary">Espresso Machine</a>
                    </Link>
                    <Link href="/shop/coffee-machine?type=fully-automatic">
                      <a className="hover:text-primary">Fully Automatic</a>
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-base mb-2">Barista tools</p>
                  <div className="font-poppins text-sm flex flex-col justify-center">
                    <Link href="/shop/barista-tools?type=cups-and-mugs">
                      <a className="mb-[10px] hover:text-primary">Cups & Mugs</a>
                    </Link>
                    <Link href="/shop/barista-tools?type=scales">
                      <a className="mb-[10px] hover:text-primary">Scales & Spoons</a>
                    </Link>
                    <Link href="/shop/barista-tools?type=servers">
                      <a className="mb-[10px] hover:text-primary">Servers & Storages</a>
                    </Link>
                    <Link href="/shop/barista-tools?type=tampers-and-mats">
                      <a className="mb-[10px] hover:text-primary">Tampers & Mats</a>
                    </Link>
                    <Link href="/shop/barista-tools?type=thermormeters">
                      <a className="hover:text-primary">Thermormeter</a>
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-base mb-2">Coffee beans</p>
                  <div className="font-poppins text-sm flex flex-col justify-center">
                    <Link href="/shop/coffee-beans?type=capsules">
                      <a className="mb-[10px] hover:text-primary">Capsules</a>
                    </Link>
                    <Link href="/shop/coffee-beans?type=ground">
                      <a className="mb-[10px] hover:text-primary">Ground</a>
                    </Link>
                    <Link href="/shop/coffee-beans?type=roasted">
                      <a className="mb-[10px] hover:text-primary">Roasted</a>
                    </Link>
                    <Link href="/shop/coffee-beans?type=whole-beans">
                      <a className="mb-[10px] hover:text-primary">Whole beans</a>
                    </Link>
                    <Link href="/shop/coffee-beans">
                      <a className="hover:text-primary">All beans</a>
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Link href="/blog">
          <p className="text-base uppercase p-2 hover:text-primary">blog</p>
        </Link>
        <Link href="/service">
          <p className="text-base uppercase p-2 hover:text-primary">service</p>
        </Link>
        <p className="text-base uppercase p-2 hover:text-primary">contact</p>
        <Disclosure>
          {({ open }) => (
            <div className={open ? 'mb-4' : ''}>
              <Disclosure.Button className="flex items-center w-full p-2 text-left">
                <span className="text-base uppercase mr-2 hover:text-primary">More</span>
                <IconNavDropdown color="#2B2B35" />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4">
                <div>
                  <div className="font-poppins text-sm flex flex-col justify-center">
                    <Link href="/">
                      <a className="mb-[10px] hover:text-primary">About us</a>
                    </Link>
                    <Link href="/">
                      <a className="mb-[10px] hover:text-primary">News</a>
                    </Link>
                    <Link href="/">
                      <a className="mb-[10px] hover:text-primary">Location</a>
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Link href="/cart">
          <a className="text-base uppercase p-2 hover:text-primary">cart</a>
        </Link>
        <Disclosure>
          {({ open }) => (
            <div className={open ? 'mb-4' : ''}>
              <Disclosure.Button className="flex items-center w-full p-2 text-left">
                <span className="text-base uppercase mr-2 hover:text-primary">Account</span>
                <IconNavDropdown color="#2B2B35" />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4">
                <div>
                  <div className="font-poppins text-sm flex flex-col justify-center">
                    {isAuth ? (
                      <>
                        <Link href="/profile">
                          <a className="mb-[10px] hover:text-primary">Account</a>
                        </Link>
                        <Link href="/profile">
                          <a className="mb-[10px] hover:text-primary">Wishlist</a>
                        </Link>
                        <button type="button" className="w-full" onClick={handleSignOut}>
                          <p className="hover:text-primary text-left">Sign out</p>
                        </button>
                      </>
                    ) : (
                      <Link href="/auth">
                        <a className="hover:text-primary min-w-max">Sign in</a>
                      </Link>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </Menu>
  );
};

export default BurgerButton;
