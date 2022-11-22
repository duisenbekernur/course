import React from "react";
import DialogsList from "./DialogsList";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <InputGroup w={270} style={{ margin: "0 0 15px 0" }}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="@"
        />
        <Input placeholder="Enter name" />
      </InputGroup>
      <DialogsList />
      <DialogsList />
      <DialogsList />
    </div>
  );
};

export default Sidebar;
