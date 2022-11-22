import React from "react";
import { Icon } from "@chakra-ui/react";

const DialogsList = () => {
  return (
    <div className="dialog-list">
      <img src={require("../assets/user.png")} alt="user" />
      <div className="dialog__text">
        <div className="dialog__text-top">
          <h3>Jack the Ripper</h3>
          <h4>Сейчас</h4>
        </div>
        <div className="dialog__text-bottom">
          <p>Я ща стрепсилс тебе купл...</p>
          <Icon viewBox="0 0 200 200" color="red.500">
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default DialogsList;
