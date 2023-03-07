// import { getSession } from 'next-auth/client';

export default function Home() {
  return (
    <div>
        <a>Welcome</a>
      {/* <p>Access Token: {props.accessToken}</p> */}
      {/* props */}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: {
//       accessToken: session?.accessToken ?? null,
//     }
//   };
// }
