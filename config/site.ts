import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "Gait Coffee",
  description:
    "Fresh Coffee, when you want coffee and stuff",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
}
