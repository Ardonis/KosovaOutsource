import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "./Employs.css";

const emplosyes = [
  {
    data: "3.3.0(14/5/2018)",
    icon: <BsFillPersonFill />,
    name: "Kevin Joe",
    text: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-desing and optimization",
  },
  {
    data: "3.1.0(20/5/2015)",
    icon: <BsFillPersonFill />,
    name: "Kevin Joe",
    text: "Introducting Host Cloud Drive - virtual drive functionality New Share options and management New, more user frindly design Sync optimazations Various perfoemance imporvements and bug fixes",
  },
  {
    data: "3.3.0(14/5/2018)",
    icon: <BsFillPersonFill />,
    name: "Kevin Joe",
    text: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
    data: "3.3.0(14/5/2018)",
    icon: <BsFillPersonFill />,
    name: "Kevin Joe",
    text: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-desing and optimization",
  },
  {
    data: "3.1.0(20/5/2015)",
    icon: <BsFillPersonFill />,
    name: "Kevin Joe",
    text: "Introducting Host Cloud Drive - virtual drive functionality New Share options and management New, more user frindly design Sync optimazations Various perfoemance imporvements and bug fixes",
  },
  {
    data: "3.3.0(14/5/2018)",
    icon: <BsFillPersonFill />,
    name: "Kevin Joe",
    text: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  },
];
function Employe() {
  return emplosyes.map((employe) => (
    <div className="employe">
      <div className="date">{employe.data}</div>
      <div>
        {employe.icon}
        {employe.name}
      </div>
      <div className="">{employe.text}</div>
      <div>
        <button className="btn">Download</button>
      </div>
    </div>
  ));
}

export default Employe;
