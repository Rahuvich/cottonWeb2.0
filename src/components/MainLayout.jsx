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
        <main className="flex flex-row justify-center text-secondary-blue bg-decorated bg-no-repeat bg-contain bg-right-bottom">
          <div className="max-w-screen-xl">
            <div className="flex flex-row">
              <div className="flex flex-col w-full border-b border-primary-blue text-primary-blue m-10">
                <h2 className="uppercase text-center">{title}</h2>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mx-5 sm:mx-10 md:mx-20 mb-10 text-justify text-lg md:text-2xl font-light">
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
