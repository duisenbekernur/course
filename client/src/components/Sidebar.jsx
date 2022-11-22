import React from "react";
import DialogsList from "./DialogsList";
import { Input } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <div>
      <Input placeholder="medium size" size="md" />
      <DialogsList />
    </div>
  );
};

export default Sidebar;
