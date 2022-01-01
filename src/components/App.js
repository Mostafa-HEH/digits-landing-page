import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./ui/theme";
import Header from "./ui/Header";
import Landing from "./ui/Landing";
import Footer from "./ui/Footer";

const Products = () => <div>products</div>;
const Company = () => <div>Company</div>;
const Pricing = () => <div>pricing</div>;
const Blog = () => <div>Blog</div>;

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          tabValue={tabValue}
          setTabValue={setTabValue}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
        <Routes>
          <Route exact path="/digits-landing-page/" element={<Landing />} />
          <Route
            exact
            path="/digits-landing-page/products"
            element={<Products />}
          />
          <Route
            exact
            path="/digits-landing-page/company"
            element={<Company />}
          />
          <Route
            exact
            path="/digits-landing-page/pricing"
            element={<Pricing />}
          />
          <Route exact path="/digits-landing-page/blog" element={<Blog />} />
        </Routes>
        <Footer
          tabValue={tabValue}
          setTabValue={setTabValue}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
