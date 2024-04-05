<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
import style from "../styleDashboard/leftSideBar.module.css";
import imgAvatar from "../image/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRightFromBracket,
  faOutdent,
<<<<<<< HEAD
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
export default function LeftSideBar() {
  return (
    <div className={style.LeftSideBar}>
      <div className={style.first}>
        <img src={imgAvatar} alt="Avatar" />
        <h6>admin</h6>
=======
  faReceipt,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
export default function LeftSideBar() {
  const [ isMobile, setIsMobile ] = useState( false );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950); 
    };

 
    handleResize();


    window.addEventListener("resize", handleResize);


    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={style.LeftSideBar}>
      <div className={style.first}>
       {!isMobile? <img src={imgAvatar} alt="Avatar" />:''}
        <p>admin</p>
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
      </div>
      <div className={style.second}>
        <div className={style.secondFirst}>
          <NavLink to="/dashboard/supervisor">
            <FontAwesomeIcon icon={faUserGroup} />
<<<<<<< HEAD
            <p>المشرفون</p>
=======
            {!isMobile ? <p>المشرفون</p> : ""}
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
          </NavLink>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faArrowDown} />
<<<<<<< HEAD
              <p>البيانات المستلمة</p>
=======

              {!isMobile ? <p>البيانات المستلمة</p> : ""}
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
            </Link>
          </div>

          <div className={style.listSecondSecond}>
<<<<<<< HEAD
            <NavLink to="/dashboard/martyrs">شهداء</NavLink>
            <NavLink to="/dashboard/detaineesdash">معتقلين</NavLink>
            <NavLink to="/dashboard/missingdash">مفقودين</NavLink>
            <NavLink to="/dashboard/warcriminals">مجرمين حرب</NavLink>
            <NavLink to="/dashboard/traitors">خونة</NavLink>
            <NavLink to="/dashboard/honorcard">بطاقات تكريم</NavLink>
=======
            <NavLink to="/dashboard/martyrs">{isMobile ? "ش" :" شهداء"}</NavLink>
            <NavLink to="/dashboard/detaineesdash">{ isMobile?"م":"معتقلين"}</NavLink>
            <NavLink to="/dashboard/missingdash">{ isMobile?"مف":"مفقودين"}</NavLink>
            <NavLink to="/dashboard/warcriminals"> { isMobile?"مح":"مجرمين حرب"}</NavLink>
            <NavLink to="/dashboard/traitors">{isMobile?"خ":"خونة" }</NavLink>
            <NavLink to="/dashboard/honorcard"> {isMobile?"بط":"بطاقات تكريم" }</NavLink>
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
          </div>
        </div>
        <div className={style.secondsecond}>
          <div className={style.headsecondsecond}>
            <Link>
              <FontAwesomeIcon icon={faOutdent} />
<<<<<<< HEAD
              <p> ادخال البيانات</p>
=======
            {!isMobile?  <p> ادخال البيانات</p>:''}
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
            </Link>
          </div>

          <div className={style.listSecondSecond}>
<<<<<<< HEAD
            <NavLink to="/dashboard/lastnewsdash">اخر الاخبار</NavLink>
            <NavLink to="/dashboard/revolutionarchivedash">
              ارشيف الثورة
            </NavLink>
            <NavLink to="/dashboard/symbolsoftherevolution">
              رموز الثورة{" "}
            </NavLink>
            <NavLink to="/dashboard/blacklist"> القائمة السوداء</NavLink>
            <NavLink to="/dashboard/crimessystem"> جرائم النظام </NavLink>
=======
            <NavLink to="/dashboard/lastnewsdash"> { isMobile?'اخر':"اخر الاخبار"}</NavLink>
            <NavLink to="/dashboard/revolutionarchivedash">
             {isMobile?'اش':'ارشيف الثورة'}
            </NavLink>
            <NavLink to="/dashboard/symbolsoftherevolution">
             {isMobile?'رم':'رموز الثورة'}
            </NavLink>
            <NavLink to="/dashboard/blacklist">  {isMobile?'سو':'القائمة السوداء' }</NavLink>
            <NavLink to="/dashboard/crimessystem">  {isMobile?'جر':'جرائم النظام'} </NavLink>
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/dashboard/userdash">
              <FontAwesomeIcon icon={faUserGroup} />
<<<<<<< HEAD
              <p> المستخدمين</p>
=======
         {!isMobile?     <p> المستخدمين</p>:''}
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
            </NavLink>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
<<<<<<< HEAD
            <NavLink to="/">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p> تسجيل الخروج</p>
=======
            <Link>
              <FontAwesomeIcon icon={faReceipt} />
           {!isMobile?   <p> البيانات المعروضة بالموقع</p>:''}
            </Link>
          </div>
        </div>
        <div className={style.secondFourth}>
          <div className={style.headsecondsecond}>
            <NavLink to="/">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
           {!isMobile?   <p> تسجيل الخروج</p>:''}
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
