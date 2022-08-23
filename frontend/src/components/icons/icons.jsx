import React from "react";
import {
  IconHome,
  IconList,
  IconMedium,
  IconNotification,
  IconStory,
  IconWrite,
  IconSave,
} from ".";
import IconCart from "./cart";

const icons = ({ name, fill, cursor }) => {
  switch (name) {
    case "Medium":
      return <IconMedium fill={fill} />;
    case "Home":
      return <IconHome fill={fill} />;
    case "Notification":
      return <IconNotification fill={fill} />;
    case "List":
      return <IconList fill={fill} />;
    case "Story":
      return <IconStory fill={fill} />;
    case "Write":
      return <IconWrite fill={fill} />;
    case "Cart":
      return <IconCart cursor={cursor} />;
    case "Save":
      return <IconSave fill={fill} cursor={cursor} />;
    default:
      return <IconHome fill={fill} />;
  }
};

export default icons;
