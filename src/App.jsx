import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Expertise from "./Expertise";
import Experience from "./Experience";
import Education from "./Education";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>

      <div className="flex flex-col min-h-screen">
        <LandingPage isLoggedIn={true} username="Dhaivat Desai"></LandingPage>
      </div>

      <div>
        <Expertise></Expertise>
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Education />
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;