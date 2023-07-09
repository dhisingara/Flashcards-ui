// ** Type import
import { VerticalNavItemsType } from "../../core/layouts/types";

const navigation = (): VerticalNavItemsType => {
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
