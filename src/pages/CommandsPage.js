import React from "react";
import "./CommandsPage.css";

function CommandsPage() {
  return (
    <div className="commands">
      <div class="commands_title">Commands:</div>
      <table className="commands_list">
        <tr class="commands_item_title">
          <th>Command</th>
          <th>Description</th>
          <th>Syntax</th>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#help</td>
          <td class="command_item_description">
            A general help command that displays syntax.
          </td>
          <td class="command_item_syntax">#help or #help [command]</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#champion</td>
          <td class="command_item_description">
            Displays a champion's win-rate, ban-rate, runes, etc. for the
            current patch.
          </td>
          <td class="command_item_syntax">#champion [championName] [role]</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#stats</td>
          <td class="command_item_description">
            Displays a champion's in depth statistics.
          </td>
          <td class="command_item_syntax">#stats [championName]</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#rotation</td>
          <td class="command_item_description">
            Displays the current Free Champion Rotation.
          </td>
          <td class="command_item_syntax">#rotation</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#tierlist</td>
          <td class="command_item_description">
            Displays the current tier list for a given role.
          </td>
          <td class="command_item_syntax">#tierlist [role]</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#rank</td>
          <td class="command_item_description">
            Displays a provided summoner's ranked statistics.
          </td>
          <td class="command_item_syntax">#stats [summonerName]</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#mastery</td>
          <td class="command_item_description">
            Displays the top three masteries for a given summoner.
          </td>
          <td class="command_item_syntax">#mastery [summonerName]</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#rchamp</td>
          <td class="command_item_description">
            Provides a random champion and a random role.
          </td>
          <td class="command_item_syntax">#rchamp</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#servercount</td>
          <td class="command_item_description">
            Displays the current number of servers ScuttleBot is in.
          </td>
          <td class="command_item_syntax">#servercount</td>
        </tr>
        <tr class="commands_item">
          <td class="command_item_command">#vote</td>
          <td class="command_item_description">
            Displays the top.gg vote link.
          </td>
          <td class="command_item_syntax">#vote</td>
        </tr>
      </table>
    </div>
  );
}

export default CommandsPage;
