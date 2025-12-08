import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2 ">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 pt-5 mx-auto grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">left navbar</aside>
        <section className="col-span-6"> main content</section>
        <aside  className="col-span-3">right navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
