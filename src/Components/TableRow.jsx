/* eslint-disable react/prop-types */
import { useState } from "react";
import axiosInstance from "../axios";
import axios from "axios";

export const TableRow = ({ unit }) => {
  const [isActive, setIsActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [unitObj, setUnitObj] = useState(unit);

  const [tempUnit, setTempUnit] = useState(unit);

  const getPill = (text) => {
    let bgcolor = "#dcfce7";
    let textcolor = "#3f6212";

    if (text === "Common" || text === "Interceptor") {
      bgcolor = "#dbeafe";
      textcolor = "#1e40af";
    }
    if (text === "Rare" || text === "Tank") {
      bgcolor = "#f3e8ff";
      textcolor = "#6b21a8]";
    }
    if (text === "Epic" || text === "DPS") {
      bgcolor = "#fed7aa";
      textcolor = "#9a3412";
    }

    return (
      <span
        className={`text-md font-medium mr-2 px-3 py-1 rounded-full`}
        style={{ backgroundColor: bgcolor, color: textcolor }}
      >
        {text}
      </span>
    );
  };

  const handleUpdate = () => {
    axiosInstance
      .patch(`/units/${unitObj?.id}`, tempUnit)
      .then((res) => {
        console.log(res.data);
        setUnitObj(res.data);
        console.log(unitObj);
        setEdit(!edit);
      })
      .catch(() => {
        console.log("refreshing token");
        axios
          .post("https://test.indusgame.com/auths", {
            refreshToken: localStorage.getItem("refresh_token"),
          })
          .then((res) => {
            console.log("success");
            if (res.status == 200) {
              localStorage.setItem("access_token", res.data.accessToken);
              localStorage.setItem("refresh_token", res.data.refreshToken);
              window.location.href = "/";
            }
          })
          .catch((e) => {
            console.log("error", e);
            // localStorage.removeItem("access_token");
            // localStorage.removeItem("refresh_token");
            window.location.href = "/login";
          });
      });
  };

  const handleCancel = () => {
    setTempUnit(unitObj);
    setEdit(!edit);
  };

  return (
    <>
      <tr
        onClick={() => {
          setEdit(false);
          setIsActive(!isActive);
        }}
        className="flex cursor-pointer text-center w-full hover:bg-gray-200 border-2 border-gray-200 "
      >
        <td className="p-3 w-1/4">{unit?.name}</td>
        <td className="p-3 w-1/4">{unit?.type}</td>
        <td className="p-3 w-1/4">{getPill(unit?.role)}</td>
        <td className="p-3 w-1/4">{unit?.faction}</td>
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
                    <select
                      className="px-3 py-2 border-gray-300 border-2 rounded-lg w-full"
                      value={tempUnit?.quality}
                      onChange={(e) =>
                        setTempUnit({ ...tempUnit, quality: e.target.value })
                      }
                    >
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
                      value={tempUnit?.health}
                      onChange={(e) =>
                        setTempUnit({ ...tempUnit, health: e.target.value })
                      }
                      pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
                    />
                  ) : (
                    <p>{unitObj?.health}</p>
                  )}
                </td>
                <td className="p-3 bg-gray-200 rounded-lg border">
                  <h1 className="text-lg font-bold ">Attack</h1>
                  {edit ? (
                    <input
                      type="text"
                      className="px-3 py-1 border-gray-300 border-2 rounded-lg w-full"
                      placeholder="Enter attack"
                      value={tempUnit?.attack}
                      onChange={(e) => {
                        setTempUnit({ ...tempUnit, attack: e.target.value });
                      }}
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
                      value={tempUnit?.maxTargetCount}
                      onChange={(e) =>
                        setTempUnit({
                          ...tempUnit,
                          maxTargetCount: e.target.value,
                        })
                      }
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
                      value={tempUnit?.spawnCost}
                      onChange={(e) => {
                        setTempUnit({ ...tempUnit, spawnCost: e.target.value });
                      }}
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
                      value={tempUnit?.spawnCooldownInSeconds}
                      onChange={(e) =>
                        setTempUnit({
                          ...tempUnit,
                          spawnCooldownInSeconds: e.target.value,
                        })
                      }
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
            {!edit && (
              <button
                className="bg-blue-500 hover:bg-blue-700
              text-white font-bold py-2 px-4 rounded"
                onClick={() => setEdit(!edit)}
              >
                Edit
              </button>
            )}
            {edit && (
              <>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};
