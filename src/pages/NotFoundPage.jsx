import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundPage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center h-96">
      <FaExclamationTriangle className="mb-4 text-6xl text-yellow-400"/>
        <h1 className="mb-4 text-6xl font-bold">404 Not Found</h1>
        <p className="mb-5 text-xl">This page does not exist</p>
        <Link
          to="/"
          class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};
export default NotFoundPage;
