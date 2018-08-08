import React from "react";

const Home = () => (
  <div>
    <table>
      <tr>
        <td>
          <img id="logo" src="https://d.top4top.net/p_949mxyo91.png" />
        </td>
      </tr>
      <tr>
        <td>
          <p id="pro1">
            <br />
            متخصّصين في تقديم البرامج التدريبيّة سواءً المكثّفة أو الغير مكثّفة،
            المدفوعة أو المجّانيّة
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <a id="new" href="/programs">
            تعرّف على البرامج هنا
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <input id="login" type="submit" value="تسجيل جديد " />
        </td>
      </tr>
      <tr>
        <td>
          <input id="signin" type="submit" value="تسجيل دخول " />
        </td>
      </tr>
    </table>
  </div>
);

export default Home;
