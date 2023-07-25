/* eslint-disable react/prop-types */
import { useState } from "react";

export const TableRow = ({ unit }) => {
  const [isActive, setIsActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [health, setHealth] = useState(unit?.health);

  const getPill = (text) => {
    let color = "green";
    console.log(text);
    if (text === "Common") color = "blue";
    if (text === "Rare") color = "purple";
    if (text === "Epic") color = "orange";
    console.log(color);
    return (
      <span
        className={`bg-${color}-100 text-${color}-800 text-md font-medium mr-2 px-3 py-1 rounded-full`}
      >
        {text}
      </span>
    );
  };
  return (
    <>
      <tr
        onClick={() => {
          setEdit(false);
          setIsActive(!isActive);
        }}
        className="cursor-pointer w-full text-center hover:bg-gray-200"
      >
        <td className="p-3">{unit?.name}</td>
        <td>{unit?.type}</td>
        <td>{unit?.role}</td>
        <td>{unit?.faction}</td>
        {/* <td>+</td> */}
      </tr>
      {isActive && (
        <>
          <table className="border-separate border-spacing-3 border-gray-300 table-fixed w-[73vw]">
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  className="p-3 bg-gray-200 rounded-lg border-gray-300 border"
                >
                  <img
                    src={unit?.imageUrl}
                    alt={unit?.name}
                    className="w-32 h-32 mx-auto"
                  />
                  <p>{unit?.description}</p>
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border" rowSpan={2}>
                  <h1 className="text-lg font-bold ">Ability</h1>
                  <p>{unit?.ability?.name}</p>
                  <p>{unit?.ability?.description}</p>
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Quality</h1>
                  {edit ? (
                    <select className="px-3 py-2 border-gray-300 border-2 rounded-lg w-full">
                      <option value="Common">Common</option>
                      <option value="Rare">Rare</option>
                      <option value="Epic">Epic</option>
                    </select>
                  ) : (
                    <p>{getPill(unit?.quality)}</p>
                  )}
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Health</h1>
                  {edit ? (
                    <input
                      type="text"
                      className="px-3 py-1 border-gray-300 border-2 rounded-lg w-full"
                      placeholder="Enter health"
                      value={health}
                      // onChange={(e) => setHealth(e.target.value)}
                      pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
                    />
                  ) : (
                    <p>{health}</p>
                  )}
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Attack</h1>
                  {edit ? (
                    <input
                      type="text"
                      className="px-3 py-1 border-gray-300 border-2 rounded-lg w-full"
                      placeholder="Enter attack"
                      // value={unit?.attack}
                      // onChange={(e) => setHealth(e.target.value)}
                      pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
                    />
                  ) : (
                    <p>{unit?.attack}</p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Attack Type</h1>
                  <p>{unit?.attackType}</p>
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Attack Range</h1>
                  <p>{unit?.attackRangeType}</p>
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Target Type</h1>
                  <p>{unit?.attackTargetType}</p>
                </td>
              </tr>
              <tr>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Movement Type</h1>
                  <p>{unit?.movementType}</p>
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Movement Speed</h1>
                  <p>{unit?.movementSpeedType}</p>
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Max Target Count</h1>
                  {edit ? (
                    <input
                      type="text"
                      className="px-3 py-1 border-gray-300 border-2 rounded-lg w-full"
                      placeholder="Enter max target count"
                      // value={unit?.attack}
                      // onChange={(e) => setHealth(e.target.value)}
                      pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
                    />
                  ) : (
                    <p>{unit?.maxTargetCount}</p>
                  )}
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Spawn Cost</h1>
                  {edit ? (
                    <input
                      type="text"
                      className="px-3 py-1 border-gray-300 border-2 rounded-lg w-full"
                      placeholder="Enter spawn cost"
                      // value={unit?.attack}
                      // onChange={(e) => setHealth(e.target.value)}
                      pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
                    />
                  ) : (
                    <p>{unit?.spawnCost}</p>
                  )}
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Spawn Cooldown</h1>
                  {edit ? (
                    <input
                      type="text"
                      className="px-3 py-1 border-gray-300 border-2 rounded-lg w-full"
                      placeholder="Enter spawn cooldown"
                      // value={unit?.attack}
                      // onChange={(e) => setHealth(e.target.value)}
                      pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
                    />
                  ) : (
                    <p>{unit?.spawnCooldownInSeconds}</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end w-[73vw] gap-3 p-3">
            <button
              className={`${
                edit
                  ? "bg-red-500 hover:bg-red-700"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white font-bold py-2 px-4 rounded`}
              onClick={() => setEdit(!edit)}
            >
              {edit ? "Cancel" : "Edit"}
            </button>
            {edit && (
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};
