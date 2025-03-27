import { Suspense } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Loading from "./Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className=" py-12">
        <Header />
        <Home />
        <About />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
