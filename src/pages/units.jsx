import { useEffect, useState } from "react";
import { TableRow } from "../Components/TableRow";
import { axiosInstance } from "../axios";

const unit = {
  id: "archer_01",
  code: 10101,
  name: "Archer",
  description: "Fragile unit with a long-range attack.",
  ability: {
    name: "Fire Arrows",
    description: "Fires a burning arrow that deals periodic damage.",
  },
  imageUrl: "https://test.cdn.indusgame.com/units/archer_01.png",
  type: "Minion",
  role: "DPS",
  faction: "Medieval",
  quality: "Common",
  health: 50,
  attack: 40,
  attackType: "Magic",
  attackRangeType: "MediumRanged",
  attackTargetType: "All",
  maxTargetCount: 1,
  movementType: "Ground",
  movementSpeedType: "Medium",
  spawnCost: 175,
  spawnCooldownInSeconds: 3.5,
};

export const Units = () => {
  const [units, setUnits] = useState([]);

  const getData = () => {
    console.log(localStorage.getItem("access_token"));
    axiosInstance.get("/units").then((res) => {
      console.log(res.data);
      setUnits(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center w-3/4 h-screen">
      {/* <h1>Units</h1> */}
      <table className="table-fixed w-full border-collapse border-2 border-gray-300 p-3">
        <thead>
          <tr className="border-2 border-gray-300">
            <th className="p-3">Name</th>
            <th>Type</th>
            <th>Role</th>
            <th>Faction</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody className="w-full">
          {units?.map((unit) => (
            <TableRow unit={unit} key={unit?.code} />
          ))}
          {/* <TableRow unit={unit} /> */}
        </tbody>
      </table>
    </div>
  );
};
