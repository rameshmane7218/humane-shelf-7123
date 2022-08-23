import React from "react";
import {
  IconHome,
  IconList,
  IconMedium,
  IconNotification,
  IconStory,
  IconWrite,
  IconSave,
  IconFacebook,
  IconTwitter,
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
    case "Twitter":
      return <IconTwitter fill={fill} />;
    case "Story":
      return <IconStory fill={fill} />;
    case "Facebook":
      return <IconFacebook fill={fill} />;
    case "Cart":
      return <IconCart cursor={cursor} />;
    case "Save":
      return <IconSave fill={fill} cursor={cursor} />;
    default:
      return <IconHome fill={fill} />;
  }
};

export default icons;
