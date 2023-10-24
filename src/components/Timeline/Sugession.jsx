import React from "react";
import "./Sugession.css";
import { Avatar } from "@mui/material";
export default function Sugession() {
  return (
    <div className="h-[100vh] pl-16 fixed">
      <div className="mt-9 overflow-y-visible flex-col">Sugession</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="user__info">

            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}
