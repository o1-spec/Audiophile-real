import { useRouteError, Link, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  return (
    <div
      style={{
        widows:"100vw",
        height:"100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.6rem",
        textAlign:"center",
        gap:"1rem"
      }}
    >
      <h1 style={{fontSize: "2.6rem"}}>Something went wrong 😢</h1>
      <p style={{fontSize: "1.7rem"}}>{error.data || error.message}</p>

      <Link style={{color: "#000", textDecoration:"none", fontSize:"1.6rem"}} onClick={() => navigate(-1)}>&larr; Go back</Link>
    </div>
  );
}

export default Error;
