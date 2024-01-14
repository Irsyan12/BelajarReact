import {useRouteError} from "react-router-dom" 

const Error404Page = () => {
    const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-3xl">Oops!</h1>
        <p className="my-5 text-xl">Sorry unexpected error has occurred.</p>
        <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error404Page;
