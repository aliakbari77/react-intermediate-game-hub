import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h3>Oops</h3>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Unexpected error"}
      </p>
    </>
  );
};

export default ErrorPage;
