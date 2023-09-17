import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home-page";
import { AbouteUsPage } from "./pages/aboute-us-page";
import { ContactsPage } from "./pages/contacts-page";
import { NotFoundPage } from "./pages/not-found-page";
import { paths } from "./service/route-service/paths";
import { CatalogPage } from "./pages/catalog-page";
import { LoaderWithBackdrop } from "./components/loader/loader-with-backdrop";

function App() {
  const { HomePath, ContactsPath, AbouteUsPath, NotFoundPath, CatalogPath } =
    paths;

  return (
    <>
      <Routes>
        <Route path={HomePath} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={AbouteUsPath} element={<AbouteUsPage />} />
          <Route path={CatalogPath} element={<CatalogPage />} />
          <Route path={ContactsPath} element={<ContactsPage />} />
          <Route path={NotFoundPath} element={<NotFoundPage />} />
        </Route>
      </Routes>
      <LoaderWithBackdrop />
    </>
  );
}

export default App;
