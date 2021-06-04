import React, { FC } from "react";
import { useHistory,useLocation } from "react-router-dom";

interface IMenu {
  name: string;
  icon: string;
  url: string;
}

const menu: IMenu[] = [
  {
    name: "DASHBOARD",
    icon: "icon-dashboard",
    url: "/dashboard",
  },
  {
    name: "AGENT",
    icon: "icon-sitemap",
    url: "/agent",
  },
  {
    name: "MY CRUISE",
    icon: "icon-boat",
    url: "/my-cruise",
  },
  {
    name: "HELP",
    icon: "icon-life-bouy",
    url: "/help",
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
  const his = useHistory();
  const {pathname} = useLocation()
  
  const go = (url: string) => {
    his.push(url);
  };
  return (
    <aside className="side">
      <ul className="side-menu">
        {menu.map((item) => {
          return (
            <li key={item.name} className={pathname === item.url ? 'active' : ''} onClick={() => go(item.url)}>
              <i className={item.icon}></i><span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="side-history">
        <div>History</div>
        <ul>
          {history.map((item, index) => {
            return (
              <li key={index} title={item}>
                <div>{item}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Side;
