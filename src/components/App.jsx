import { Suspense, lazy } from "react";
const About = lazy(() => import("./About"));
const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));
const Home = lazy(() => import("./Home"));
const Loading = lazy(() => import("./Loading"));

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
