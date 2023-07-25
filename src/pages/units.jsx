import { useEffect, useState } from "react";
import { TableRow } from "../Components/TableRow";
import axiosInstance from "../axios";

export const Units = () => {
  const [units, setUnits] = useState([]);

  // const getData = () => {
  //   axiosInstance.get("/units").then((res) => {
  //     console.log(res.data);
  //     setUnits(res.data);
  //   });
  // };

  useEffect(() => {
    axiosInstance.get("/units").then((res) => {
      console.log(res.data);
      setUnits(res.data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-3/4 overflow-y-auto overflow-x-hidden">
      {/* <h1>Units</h1> */}
      <table className="table-fixed w-full border-collapse border-2 border-gray-300 p-3 shadow-md overflow-y-scroll">
        <thead className="sticky top-0 bg-white">
          <tr className="border-2 border-gray-300 bg-gray-200">
            <th className="p-3">Name</th>
            <th>Type</th>
            <th>Role</th>
            <th>Faction</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-[75vw]"
          style={{ height: "75vh" }}
        >
          {units?.map((unit) => (
            <TableRow unit={unit} key={unit?.code} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
