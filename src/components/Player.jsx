import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);

    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(evt) {
    setPlayerName(evt.target.value);
  }

  let editedPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editedPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editedPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
