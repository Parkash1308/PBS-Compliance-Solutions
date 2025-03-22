export const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "About Us",
    // link: "/about-us",
    submenu: [
      { name: "About", link: "/about-us" },
      { name: "Our Team", link: "/about-us/our-team" },
      { name: "Our Values", link: "/about-us/our-values" },
      { name: "Our History", link: "/about-us/our-history" },
    ],
  },
  {
    name: "Guide & Resources",
    submenu: [
      {
        name: "DOB Service Updates",
        link: "/guide-resources/dob-service-updates",
      },
      {
        name: "History Of Local Laws",
        link: "/guide-resources/history-of-local-laws",
      },
      { name: "NYC DOB Codes", link: "/guide-resources/nyc-dob-codes" },
      { name: "NYC FDNY Codes", link: "/guide-resources/nyc-fdny-codes" },
    ],
  },
  { name: "OwnerRepresentative", link: "/OwnerRepresentative" },
  {
    name: "Services",
    link: "/services",
  },
  { name: "Contacts", link: "/contacts" },
  { name: "Blog", link: "/blog" },
];
