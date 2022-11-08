import React from "react";
import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
export default function Widget({ type }: { type: string }) {
  
  let data = {
    title: "USERS",
    isMoney: false,
    link: "See all users",
    icon: (
      <PersonOutlineOutlinedIcon
        className="icon"
        style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }}
      />
    ),
  };
  const amount = "4.6k";
  const number = 100
  const diff = 20;

  switch (type) {
    case "user":
      data = data;
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See all users",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget shadow">
      <section className="up">
        <h2>{data.title}</h2>
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
      </section>
      <span className="counter">
        {data.isMoney ? `$${amount}` : number}
      </span>
      <section className="down">
        <span className="link">{data.link}</span>
        {data.icon}
      </section>
    </div>
  );
}
