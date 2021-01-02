import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <div>
        <p>ScuttleBot</p>

        <div className="community_discord_link">
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
