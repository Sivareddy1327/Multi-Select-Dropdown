import React, { useState } from "react";
import Select from "react-select";

const Multidropdown = (props) => {
  const techStack = [
    { id: 1, tech: "HTML" },
    { id: 2, tech: "CSS" },
    { id: 3, tech: "JAVASCRIPT" },
    { id: 4, tech: "REACT" },
    { id: 5, tech: "REDUX" },
    { id: 6, tech: "ANGULAR" },
  ];
  const [selectdata, setSelectData] = useState("");

  const selectoption = techStack.map((ele) => {
    return { value: ele.tech, label: ele.tech };
  });

  const handleChangeselectdata = (selectdata) => {
    setSelectData(selectdata);
  };

  return (
    <div>
      <h1 style={{ color: "blue", marginLeft: "20%" }}>
        Multi Select Dropdown
      </h1>
      <Select
        style={{ backgroundColor: "green", color: "blue" }}
        isMulti
        options={selectoption}
        value={selectdata}
        onChange={handleChangeselectdata}
      ></Select>
      {selectdata.length != 0 && (
        <>
          <h1 style={{ color: "green" }}>Select Items</h1>
          <ul>
            {selectdata.map((ele, i) => {
              return (
                <li
                  style={{ listStyleType: "none", color: "GrayText" }}
                  key={i}
                >
                  {ele.value}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Multidropdown;
