import { useRouteError, Link, useNavigate } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <Link onClick={() => navigate(-1)}>&larr; Go back</Link>
    </div>
  );
}

export default Error;
