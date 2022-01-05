import React from "react";
// import SocialMedia from "../../layout/HomePage/socialMedia";
import Header from "../Header";
import Footer from "../Footer";
import Modals from "../../layout/HomePage/modals";
import icons from "../../layout/HomePage/picture.png";
// import TeamCard from "../../layout/TeamCard";
// import Team from "../../layout/HomePage/Team";
// import Card from "../../layout/HomePage/cards";

function Projects({ children }) {
  
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            marginTop: "7rem",
            width: "80%",
            marginLeft: "14px",
            borderRadius: "10px"
          }}
        >
          <h4>Projects</h4>
        </div>
        <div className="row mt-5 mb-5 ">
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://www.bluerange.io/images/top5healthcare.png"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Helmet detection</h5>

                <Modals
                  title="Helmet detection"
                  content="A customized project which detects traffic rules violation by
                  tracking & checking that a helmet is worn by every two-wheeler
                  rider."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://www.bluerange.io/images/top5healthcare.png"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Tracking hospital beds</h5>
                <Modals
                  title="Tracking hospital beds"
                  content="  A customized android & web application using Maps to track the
                nearby hospitals which & provide information about the
                availability of beds and facilities in that particular hospital."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_md_75/public/news-story/cover-images/3Pune_DESs_SNFL_college_onli.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Educational App</h5>
                {/* <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p> */}

                <Modals
                  title="Educational App"
                  content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_md_75/public/news-story/cover-images/3Pune_DESs_SNFL_college_onli.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Educational App</h5>
                {/* <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p> */}

                <Modals
                  title="Educational App"
                  content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_md_75/public/news-story/cover-images/3Pune_DESs_SNFL_college_onli.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Educational App</h5>
                {/* <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p> */}

                <Modals
                  title="Educational App"
                  content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_md_75/public/news-story/cover-images/3Pune_DESs_SNFL_college_onli.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Educational App</h5>
                {/* <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p> */}

                <Modals
                  title="Educational App"
                  content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 ">
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
