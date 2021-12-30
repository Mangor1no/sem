import Header from 'components/Header';
import { useMemo } from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  const renderHeader = useMemo(() => {
    return <Header />;
  }, []);

  const renderFooter = useMemo(() => {
    return <Footer />;
  }, []);

  return (
    <div className="md:h-screen flex flex-col">
      {renderHeader}
      <>{children}</>
      {renderFooter}
    </div>
  );
};

export default Layout;
