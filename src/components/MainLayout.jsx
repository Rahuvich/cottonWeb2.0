import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CottonHelmet from "../components/Helmet";

function MainLayout({ title, children, active }) {
  return (
    <div className="min-h-screen">
      <CottonHelmet />
      <div className="nav-content-footer min-h-screen">
        <Header active={active} />
        <main className="flex flex-row justify-center text-secondary-blue">
          <div className="max-w-screen-xl">
            <div className="flex flex-row">
              <div className="flex flex-col w-full border-b border-primary-blue text-primary-blue my-10">
                <h2 className="uppercase text-center">{title}</h2>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="m-5 text-justify text-2xl font-light">
                {children}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
