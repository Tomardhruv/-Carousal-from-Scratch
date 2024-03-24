import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu";
import Header from "./Header";




const AppLayout = () => {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
