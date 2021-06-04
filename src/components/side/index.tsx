import React, { FC } from "react";

interface IMenu {
  name: string;
  icon: string;
}

const menu: IMenu[] = [
  {
    name: "DASHBOARD",
    icon: "a",
  },
  {
    name: "AGENT",
    icon: "a",
  },
  {
    name: "MY CRUISE",
    icon: "a",
  },
  {
    name: "HELP",
    icon: "a",
  },
];

const history = [
  "xxxxxxxxxxx/xxxxxxxxxxx",
  "xxxxxxxxxxx/xxxxxxxxxxx",
  "xxxxxxxxxxx/xxxxxxxxxxx",
  "xxxxxxxxxxx/xxxxxxxxxxx",
  "xxxxxxxxxxx/xxxxxxxxxxx",
  "xxxxxxxxxxx/xxxxxxxxxxx",
  "xxxxxxxxxxx/xxxxxxxxxxx/xxxxxxxxxxx/xxxxxxxxxxx",
];

const Side: FC = (props) => {
  return (
    <aside className="side">
      <ul className="side-menu">
        {menu.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
      <div className="side-history">
        <div>History</div>
        <ul>
          {history.map((item, index) => {
            return <li key={index} title={item}><div>{item}</div></li>;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Side;
