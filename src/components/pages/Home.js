import { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/pages/about/About";
import Educations from "../../components/pages/educations/Educations";
import Experiances from "../../components/pages/experiances/Experiances";
import Portfolios from "../../components/pages/portfolios/Portfolios";
import Profile from "../../components/pages/profile/Profile";
import Skills from "../../components/pages/skills/Skills";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m3">
              <Profile />
            </div>
            <div className="col s12 m9">
              <About />
              <Skills />
              <Experiances />
              <Educations />
              <Portfolios />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
