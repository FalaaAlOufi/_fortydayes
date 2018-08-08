import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/prof">الملف الشخصي</Link>
        </li>
        <li>
          <Link to="/programs">البرامج</Link>
        </li>
        <li>
          <Link to="/addtask">ارسال مهمة</Link>
        </li>
        <li>
          <Link to="/contact">تواصل معنا</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
