import React from "react";
import "./Home.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import Particles from "../../components/Particles/Particles";
import ParticleField from "../../components/Particles/ParticleField";
import WaterWave from "../../components/Waterwave/Waterwave";
import Orbit from "../../components/Orbit/Orbit";

class Home extends React.Component {
  state = {
    toolbarOpen: false,
    effect: "snow"
  };

  toggleToolbar = () => {
    this.setState({ toolbarOpen: !this.state.toolbarOpen });
  };

  click(e) {
    console.log("_onMouseMove");
  }

  changeEffect = effect => {
    this.setState({ effect: effect });
  };

  render() {
    let effect = null;

    if (this.state.effect === "snow") {
      effect = <ParticleField snow />;
    }

    if (this.state.effect === "web") {
      effect = <Particles web />;
    }
    if (this.state.effect === "bubbles") {
      effect = <Particles bubbles />;
    }
    if (this.state.effect === "triangles") {
      effect = <ParticleField triangles />;
    }
    if (this.state.effect === "waterwave") {
      return (
        <WaterWave>
          <div style={{ width: "100%", height: "100vh" }} />
        </WaterWave>
      );
    }
    return (
      <main>
        <div className="Home">
          {effect}
          {/* <Orbit onClick={this.click} /> */}
          {/* <div class="p-5 orbit">
            <div class="row  justify-content-center align-items-center">
              <div className="col-12">
                <Orbit onClick={this.click} />
              </div>
            </div>
          </div> */}

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "auto",
              height: "auto",
              zIndex: 999
            }}
          >
            <div className="menu" onClick={this.toggleToolbar}>
              <i
                className="fas fa-bars fa-3x text-white"
                style={{ color: "white" }}
              />
            </div>
            <Toolbar open={this.state.toolbarOpen} close={this.toggleToolbar} />

            {/*  render <Route> and <NavTabs /> here */}
          </div>
          <div className="landing-intro  p-5">
            <h1 className="text-white">Landing Page</h1>
            <h3 className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h3>
            <br />
            <div className="text-center">
              <button
                className="btn btn-default m-5 "
                onClick={() => this.changeEffect("snow")}
              >
                Snow
              </button>
              <button
                className="btn btn-default m-5"
                onClick={() => this.changeEffect("web")}
              >
                Web Particles
              </button>
              <button
                className="btn btn-default m-5"
                onClick={() => this.changeEffect("bubbles")}
              >
                Bubbles
              </button>
              <button
                className="btn btn-default m-5"
                onClick={() => this.changeEffect("triangles")}
              >
                Triangles
              </button>
              <button
                className="btn btn-default m-5"
                onClick={() => this.changeEffect("waterwave")}
              >
                Water Wave
              </button>
            </div>
          </div>
        </div>
        {/* <div className="section container-fluid p-0 bg-secondary  p-5">
          <div className="overview p-2">
            <h1>Some heading text</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div> */}
      </main>
    );
  }
}

export default Home;
