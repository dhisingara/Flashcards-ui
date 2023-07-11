// ** Type import
import { HorizontalNavItemsType } from "../../core/layouts/types";

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: "Practice",
      icon: "tabler:brand-tabler",
      path: "/practice",
    },
    {
      title: "Words",
      icon: "tabler:file",
      path: "/words",
    },
  ];
};

export default navigation;
