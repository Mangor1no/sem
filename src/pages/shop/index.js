import { useRouter } from 'next/router';

const Shop = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/shop/food', undefined, { shallow: true });
  }
  return null;
};

export default Shop;
