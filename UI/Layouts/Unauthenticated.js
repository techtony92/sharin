import Link from "next/link";

const Unauthenticated = () => {
  return (
    <div className="unauthenticated">
      <div className="unauthenticated__Block">
        <h1 className="unauthenticatedBlockText">
          You must login to access this page.
        </h1>
        <Link passHref={true} href="/login">
          <h3>Login</h3>
        </Link>
      </div>
    </div>
  );
};

export default Unauthenticated;
