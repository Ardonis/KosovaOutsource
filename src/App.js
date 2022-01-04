import React, { useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { AiTwotoneSound } from "react-icons/ai";
import { FiPercent } from "react-icons/fi";
import { FiType } from "react-icons/fi";
import { GiTeamIdea } from "react-icons/gi";
import { MdSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import Employe from "./components/Employe";

const infos = [
  {
    icon: <MdSignalWifiStatusbarConnectedNoInternet4 />,
    title: "The TDL",
    description:
      "Does the domain extension math the language of the domain name?",
  },

  {
    icon: <CgSearchLoading />,

    title: "Domain Length",
    description: "Is the domain short enought to remember?",
  },

  {
    icon: <GiWorld />,

    title: "Language",
    description: "How complex is the astuall domain name?",
  },

  {
    icon: <FaMedal />,

    title: "International recognition",
    description: "Can the domain name be used on an international scale?",
  },

  {
    icon: <CgSearchLoading />,

    title: "Search engine",
    description: "Does the domain follow search engine guidelines?",
  },
  {
    icon: <AiTwotoneSound />,

    title: "Advertising Potential",
    description: "Could the domain be used for advertising comapings?",
  },

  {
    icon: <FiPercent />,

    title: "Sales Opportunities",
    description: "Can the domian name be used on an intenational scale?",
  },

  {
    icon: <FiType />,

    title: "Typo susceptibility",
    description: "How high is the risk of mistyping the domain name?",
  },

  {
    icon: <GiTeamIdea />,

    title: "Business potential",
    description: "Can the domain be used as your company address?",
  },
];

function App() {
  return (
    <div className="App">
      {infos.map((info) => (
        <div className="info">
          <div className="icon">{info.icon}</div>
          <div className="title">
            <h3>{info.title}</h3>
            <div className="description">
              <h4>{info.description}</h4>
            </div>
          </div>
        </div>
      ))}
      <div className="employes">
        <Employe></Employe>
      </div>
    </div>
  );
}

export default App;
