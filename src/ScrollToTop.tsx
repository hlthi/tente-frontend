import React, { useEffect } from 'react';
import { useRouter } from './hooks/router-hook';

interface IProps {}

const ScrollToTop: React.FC<IProps> = props => {
  const router = useRouter();
  useEffect(() => {
    const unlisten = router.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [router.history]);

  return null;
};

export default ScrollToTop;
