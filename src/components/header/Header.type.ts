export const enum NavRoute {
  Home = "/",
  About = "/about",
  Menu = "/menu",
}

export const enum NavName {
  Home = "Home",
  About = "About",
  Menu = "Menu",
}

export interface NavItem {
  name: NavName;
  path: NavRoute;
  isActive: boolean;
}

export type NavItems = NavItem[];
