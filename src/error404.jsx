import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-gray-200 flex flex-col items-center justify-center w-full h-screen">
      <h1>Ups!</h1>
      <p>Lo lamentamos, la página a la que intentas acceder no existe.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
