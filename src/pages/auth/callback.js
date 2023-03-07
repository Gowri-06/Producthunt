// pages/auth/callback.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Callback() {

    // return  (
    //     <>
    //     <p>Welcome pages</p>
    //     </>
    // )
  const router = useRouter();

  useEffect(() => {
    // Get the authorization code from the query parameters
    const code = router.query.code;

    // Do something with the authorization code, such as exchanging it for an access token
    console.log('Authorization code:', code);
  }, []);

  return (
  <div>Processing authorization...</div>
  );
}
