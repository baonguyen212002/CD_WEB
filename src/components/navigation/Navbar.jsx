import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import MenuIcon from "@mui/icons-material/Menu";
import NoAvatar from "./images/no_avatar.jpg"; // Nhập đường dẫn đến hình ảnh hồ sơ của bạn

import "./Navbar.css";

function Navbar() {
  return (
    <div className="sidenav">
      <div className="sidenav__logo">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          width="120px"
          alt="Logo"
        />
      </div>
      <div className="sidenav__button">
        <div className="h-761">
          <div className="sidenav__item">
            <a href="#">
              <div>
                <HomeIcon /> <span className="sidebar__title">Trang chủ</span>
              </div>
            </a>
          </div>
          <div className="sidenav__item">
            <a href="#">
              <div>
                <SearchIcon /> <span className="sidebar__title">Tìm kiếm</span>
              </div>
            </a>
          </div>
          <div className="sidenav__item">
            <a href="#">
              <div>
                <MapsUgcIcon /> <span className="sidebar__title">Tin nhắn</span>
              </div>
            </a>
          </div>
          <div className="sidenav__item">
            <a href="#">
              <div>
                <FavoriteBorderIcon />{" "}
                <span className="sidebar__title">Thông báo</span>
              </div>
            </a>
          </div>
          <div className="sidenav__item">
            <a href="#">
              <div>
                <AddBoxIcon />{" "}
                <span className="sidebar__title">Tạo bài viết</span>
              </div>
            </a>
          </div>
          <div className="sidenav__item">
            <a href="#">
              <div className="flex">
                <img
                  className="profile_img"
                  src={NoAvatar}
                  alt="Hồ sơ"
                  width="24px"
                  height="24px"
                />
                <span className="sidebar__title">Profile</span>
              </div>
            </a>
          </div>
        </div>
        <div className="sidenav__menu">
          <div style={{ alignSelf: "flex-start" }}>
            <a href="#">
              <div>
                <MenuIcon /> <span className="sidebar__title">Menu</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
