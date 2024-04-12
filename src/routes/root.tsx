import Headerslider from "../components/headerslider/Headerslider";
import logo from "../assets/logo/tv.png";
import { getAllData } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const Root = () => {
  const { data } = useQuery({
    queryKey: ["getmovies"],
    queryFn: () => getAllData("movie"),
    retry: 0,
  });

  const firstItem = data?.data?.docs[0];
  console.log(firstItem);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="relative z-50 mx-10">
          <div className="flex justify-between">
            <a href="" className="flex items-center gap-2">
              <img src={logo} alt="" />
              <span>MovieHub</span>
            </a>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <Headerslider />
      </div>
      <h1>{firstItem.name}</h1>
      <img src={firstItem.poster.url} alt="" />
    </>
  );
};
export default Root;
