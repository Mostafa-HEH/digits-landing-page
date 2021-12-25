import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./ui/theme";
import Header from "./ui/Header";

const Home = () => <div>home</div>;
const Products = () => <div>products</div>;
const Company = () => <div>Company</div>;
const Pricing = () => <div>pricing</div>;
const Blog = () => <div>Blog</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
