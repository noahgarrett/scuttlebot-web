import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <div>
        <h1 className="title">ScuttleBot</h1>
        <div className="images">
          <div className="topgg">
            <h3 className='h_topgg'>Verified on Top.gg</h3>
            <a href="https://top.gg/bot/791336194230845490" className='link'>
              Visit the ScuttleBot page
            </a>
          </div>
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

          <p>Champion Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404225385365564/champion.png"
            alt="Analytics Command"
          ></img>

          <p>Mastery Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404240980312074/mastery.png"
            alt="Mastery Command"
          ></img>

          <p>Random Champion Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404245967339520/random.png"
            alt="Random Champion Command"
          ></img>

          <p>Free Rotation Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404230868238397/free2play.png"
            alt="Free Rotation Command"
          ></img>

          <p>Tier List Command</p>
          <img
            src="https://cdn.discordapp.com/attachments/787493493927968790/798404215507648533/tierlist.png"
            alt="Tier List Command"
          ></img>
        </div>
        <h3 className='info'>Website still in development...</h3>

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
