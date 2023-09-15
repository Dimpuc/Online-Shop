import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

const HomePath = "/";
const ContactsPath = "contacts";
const AbouteUsPath = "aboute-us";
const СatalogPath = "сatalog";
const NotFoundPath = "*";

const paths = {
  HomePath,
  ContactsPath,
  AbouteUsPath,
  NotFoundPath,
  СatalogPath,
};

const routes = [
  {
    label: "Home",
    icon: <HomeIcon />,
    path: `${HomePath}`,
  },
  {
    label: "Сatalog",
    icon: <DashboardCustomizeIcon/>,
    path: `/${СatalogPath}`,
  },
  {
    label: "Contacts",
    icon: <ContactsIcon/>,
    path: `/${ContactsPath}`,
  },
  {
    label: "Aboute us",
    icon: <InfoIcon/>,
    path: `/${AbouteUsPath}`,
  },
];

export { routes, paths };
