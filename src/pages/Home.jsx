import Navbar from "../components/Navbar";
import Filter from "../components/home/Filter";
import JobList from "../components/home/JobList";
import Search from "../components/home/Search";
import SideMenu from "../components/home/SideMenu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideMenu />
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
              <h1 className="lws-section-title">All Available Jobs</h1>
              <div className="flex gap-4">
                <Search />
                <Filter />
              </div>
            </div>

            <JobList />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
