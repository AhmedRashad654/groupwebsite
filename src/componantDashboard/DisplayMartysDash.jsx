import React from "react";
import styles from "../styleDashboard/DisplayMartysDash.module.css";
export default function DisplayMartysDash() {
  return (
    <div className={styles.DisplayMartysDash}>
      {" "}
      <div className={`headDashboard`}>
        <p>البيانات المستلمة / شهداء / بيانات الشهيد</p>
      </div>
      <div className={styles.details}>
        <div className={styles.allDetailseRight}>
          <div className={styles.detailsright}>
            <h6>اسم المستخدم : </h6>
            <p> احمد محمد </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الشهيد : </h6>
            <p> ناصر علي محمد</p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الاب : </h6>
            <p>احمد محمد </p>
          </div>
          <div className={styles.detailsright}>
            <h6>اسم الام : </h6>
            <p> علي محمد علي</p>
          </div>
          <div className={styles.detailsright}>
            <h6>كنية الشيهد : </h6>
            <p>احمد محمد</p>
          </div>
          <div className={styles.detailsright}>
            <h6>مكان الحدث : </h6>
            <p>احمد محمد</p>
          </div>
          <div className={styles.detailsright}>
            <h6>المواليد : </h6>
            <p>احمد محمد</p>
          </div>
          <div className={styles.detailsright}>
            <h6>الجهة المسؤؤلة : </h6>
            <p>احمد محمد</p>
          </div>
          <div className={styles.detailsright}>
            <h6> الوثائق و الملفات : </h6>
            <p>احمد محمد</p>
          </div>
        </div>
        <div className={styles.detailsLeft}>
          <h6>شرح مفصل : </h6>
<<<<<<< HEAD
          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
          الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
=======
          <p >
            الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
            الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
            الخبر الخبر الخبر الخبر الخبر الخبر الخبر الخبر
          </p>
>>>>>>> 99896543be0d4cc1521fbfdaf7fade5447260f32
        </div>
      </div>
      <div className={styles.btnbottom}>
        <button className="btn btn-success">قبول</button>
        <button className="btn btn-danger">رفض</button>
      </div>
    </div>
  );
}
