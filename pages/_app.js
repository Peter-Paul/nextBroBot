import '@/styles/globals.css'



import { useEffect, useState } from 'react';
import Preloader from '../components/PreLoader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the time as needed

  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;

