import React from "react";
import { Icon, createIcon } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <div>
            <img src={require("../assets/community.png")} alt="" />
            <p>Список диалогов</p>
          </div>
          <div>
            <img src={require("../assets/chat.png")} alt="" />
          </div>
        </div>
        <div className="header__right">
          <div></div>
          <div className="header__name">
            <p>Гай Юлий Цезарь</p>
            <div>
              <Icon viewBox="0 0 200 200" color="green.500">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <p>online</p>
            </div>
          </div>
          <div className="settings"><img src={require("../assets/dot.png")} alt="" /></div>
        </div>
      </div>
      <hr className="hr"/>
    </>
  );
};

export default Header;
