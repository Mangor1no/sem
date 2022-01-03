import { useRouter } from 'next/router';

const Auth = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/auth/login', undefined, { shallow: true });
  }
  return null;
};

export default Auth;
