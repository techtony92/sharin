import {
  signIn,
  signOut,
  useSession,
  getCsrfToken,
  getProviders,
} from "next-auth/react";

const login = ({ authProviders }) => {
  return (
    <div className="div">
      {Object.values(authProviders).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps(context) {
  const authProviders = await getProviders();
  return {
    props: { authProviders },
  };
}
