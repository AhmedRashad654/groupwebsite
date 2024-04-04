import React from 'react';
import image1 from '../../assests/photo_2024-04-03_23-07-55.jpg';
import './Header.css'; 

export default function Header() {
  return (
    <>
      <div className='header-container overflow-hidden'>
        <div className='content-container overflow-hidden'>
          <p className='head-par'>
            أهلا بك في موقعنا الرسمي ، حيث ستجد هنا كل ما تريد معرفته عن سوريا بداية
             من آخر الأخبار والتغطية المستمرة ، كما نحرص جاهدين أن يكون موقعنا بمثابة ملف توثيق لكل الأحداث والجرائم
              التي حدثت ولا زالت تحدث ويتم حذفها من وسائل التواصل والمنصات 
              المختلفة ..<br />
              هنا لتوثيق الحدث ، كن شريكا معنا وسجل الآن لتحصل على ميزة التوثيق</p>
          <button className='head-btn'>أدخل بيانات </button>
        </div>
        <img src={image1} alt="mainpicture" className='head-img' />
      </div>
    </>
  )
}
