import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <a href="/scuttlebot-web" className="header__name">
          ScuttleBot
        </a>
      </div>
      <div class="header_right">
        <div href="/scuttlebot-web/about" className="header_about">
          <a href="/scuttlebot-web/about" className="header__about">
            ABOUT
          </a>
        </div>
        <div href="/scuttlebot-web/commands" className="header_commands">
          <a href="/scuttlebot-web/commands" className="header__commands">
            COMMANDS
          </a>
        </div>
        <div
          href="https://top.gg/bot/791336194230845490/invite"
          className="header_getbot"
        >
          <a
            href="https://top.gg/bot/791336194230845490/invite"
            className="header__getbot"
          >
            GET SCUTTLEBOT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
