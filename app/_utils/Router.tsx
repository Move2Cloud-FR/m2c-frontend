const AppRoutes = {
  Home: "/",
  Services: "/services",
  Contact: "/contact-us",
  About: "/about-us",
  Carriers: "/carriers",
  CarrierDetails: "/carriers/details",
};

const { CarrierDetails, ...IndexedRoutes } = AppRoutes;
export { AppRoutes, IndexedRoutes };
