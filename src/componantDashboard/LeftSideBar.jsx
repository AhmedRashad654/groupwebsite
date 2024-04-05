import React from "react";
import style from "../styleDashboard/leftSideBar.module.css";
import imgAvatar from "../image/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRightFromBracket,
  faOutdent,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
export default function LeftSideBar() {
  return (
    <div className={style.LeftSideBar}>
      <div className={style.first}>
        <img src={imgAvatar} alt="Avatar" />
        <h6>admin</h6>
      </div>
      <div className={style.second}>
        <div className={style.secondFirst}>
          <NavLink to="/dashboard/supervisor">
            <FontAwesomeIcon icon={faUserGroup} />
            <p>المشرفون</p>
          </NavLink>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faArrowDown} />
              <p>البيانات المستلمة</p>
            </Link>
          </div>

          <div className={style.listSecondSecond}>
            <NavLink to="/dashboard/martyrs">شهداء</NavLink>
            <NavLink to="/dashboard/detaineesdash">معتقلين</NavLink>
            <NavLink to="/dashboard/missingdash">مفقودين</NavLink>
            <NavLink to="/dashboard/warcriminals">مجرمين حرب</NavLink>
            <NavLink to="/dashboard/traitors">خونة</NavLink>
            <NavLink to="/dashboard/honorcard">بطاقات تكريم</NavLink>
          </div>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faOutdent} />
              <p> ادخال البيانات</p>
            </Link>
          </div>

          <div className={style.listSecondSecond}>
            <NavLink to="/dashboard/lastnewsdash">اخر الاخبار</NavLink>
            <NavLink to="/dashboard/revolutionarchivedash">
              ارشيف الثورة
            </NavLink>
            <NavLink to="/dashboard/symbolsoftherevolution">
              رموز الثورة{" "}
            </NavLink>
            <NavLink to="/dashboard/blacklist"> القائمة السوداء</NavLink>
            <NavLink to="/dashboard/crimessystem"> جرائم النظام </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/dashboard/userdash">
              <FontAwesomeIcon icon={faUserGroup} />
              <p> المستخدمين</p>
            </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p> تسجيل الخروج</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
