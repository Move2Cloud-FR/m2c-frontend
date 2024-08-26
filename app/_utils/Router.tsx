const AppRoutes = {
  Home: "/",
  Services: "/services",
  Contact: "/contact-us",
  About: "/about-us",
  Carriers: "/carriers",
  Consultants: "/consultants",
  CarrierDetails: "/carriers/details",
  ConsultantDetails: "/consultants/details",
};

const { CarrierDetails, ConsultantDetails, ...IndexedRoutes } = AppRoutes;
export { AppRoutes, IndexedRoutes };
