import React from 'react';
import image1 from '../../assests/photo_2024-04-03_23-07-55.jpg';
import './Header.css'; 
<<<<<<< HEAD

export default function Header() {
  return (
    <>
      <div className=' perantHeader  header-container overflow-hidden '>
        <div className=' perantparhead '>
          <p>
            أهلا بك في موقعنا الرسمي ، حيث ستجد هنا كل ما تريد معرفته عن سوريا بداية
             من آخر الأخبار والتغطية المستمرة ، كما نحرص جاهدين أن يكون موقعنا بمثابة ملف توثيق لكل الأحداث والجرائم
              التي حدثت ولا زالت تحدث ويتم حذفها من وسائل التواصل والمنصات 
              المختلفة ..<br />
              هنا لتوثيق الحدث ، كن شريكا معنا وسجل الآن لتحصل على ميزة التوثيق</p>
          <button className='head-btn'>أدخل بيانات </button>
        </div>
        <img src={image1} alt="mainpicture" className='head-img col-md-12 '  />
      </div>
    </>
  )
=======
import { useUser } from '../../context/Context';
import EnterInformUser from '../EnterInformUser/EnterInformUser';
import SuccessAddInform from '../SuccessAddInform/SuccessAddInform';
export default function Header() {
  const{openInform,openAuth} = useUser()
  return (
    <>
      <div className="header-container overflow-hidden perantHeader">
        <div className=" perantparhead">
          <p className=" perantpar">
            أهلا بك في موقعنا الرسمي ، حيث ستجد هنا كل ما تريد معرفته عن سوريا
            بداية من آخر الأخبار والتغطية المستمرة ، كما نحرص جاهدين أن يكون
            موقعنا بمثابة ملف توثيق لكل الأحداث والجرائم التي حدثت ولا زالت تحدث
            ويتم حذفها من وسائل التواصل والمنصات المختلفة ..
            <br />
            هنا لتوثيق الحدث ، كن شريكا معنا وسجل الآن لتحصل على ميزة التوثيق
          </p>
          <button className="head-btn" onClick={openInform}>
            أدخل بيانات{" "}
          </button>
        </div>
        <img src={image1} alt="mainpicture" className="head-img" />
      </div>
      {openAuth === "enterinform" && <EnterInformUser />}
      {openAuth ==="successaddinform" && <SuccessAddInform/>}
    </>
  );
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
}
