import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <div>
        <h1 className="title">ScuttleBot</h1>
        <div className="images">
          <p>Help Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404235845828618/help.png"
            alt="Help Command"
          ></img>

          <p>Analytics Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404219644280842/analytics.png"
            alt="Analytics Command"
          ></img>

          <p>Analytics Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404219644280842/analytics.png"
            alt="Analytics Command"
          ></img>
        </div>

        {/* <div className="community_discord_link">
          <a
            className="community_link"
            href="https://discord.gg/Crmnp3fkX7"
            target="_blank"
          >
            <img
              href="https://discord.gg/Crmnp3fkX7"
              src="https://discordapp.com/api/guilds/273194843117977612/widget.png?style=banner2"
              class="community_discord_server_img"
            ></img>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
