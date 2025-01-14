interface NavItem {
  id: number;
  name: string;
  link: string;
}

const navItem: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Product",
    link: "#product",
  },
  {
    id: 3,
    name: "Services",
    link: "#services",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];


const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar