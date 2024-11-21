/**
 * Represents a single menu item in the navigation.
 *
 * @interface MenuItem
 * @property {string} display - The text to be displayed for the menu item.
 * @property {string} href - The URL the menu item should link to.
 */
export interface MenuItem {
  display: string;
  href: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
}

export interface SiteInfo {
  logo?: string;
  name: string;
  phone: string;
  email: string;
  location?: string;
  menu: MenuItem[];
  socials?: SocialMedia[];
  description?: string;
}

export interface HeaderProps {
  siteInfo: SiteInfo;
  nameStyles?: string;
  menuItemStyles?: string;
  hasContactHeader?: boolean;
  contactHeaderStyles?: string;
  containerStyles?: string;
  hasSocialNav?: boolean;
}
