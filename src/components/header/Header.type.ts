export const enum NavRoute {
  Home = "/",
  About = "/about",
}

export const enum NavName {
  Home = "Home",
  About = "About",
}

export interface NavItem {
  name: NavName;
  path: NavRoute;
  isActive: boolean;
}

export type NavItems = NavItem[];
