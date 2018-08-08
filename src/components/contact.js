import React from "react";

const contact = () => (
  <div>

    <img id="m" src="https://d5vf6134d8ffdnfp1qv4rv3l-wpengine.netdna-ssl.com/wp-content/themes/vandelay/assets/graphics/contact-us.png" />
    <h20> تواصل معنا </h20>
    <div>
      <p21>هل لديك فكرة رائعة للتعاون؟ تريد أن تكتب لنا؟ فقط اكتب الدردشة؟ لا تخجل</p21>
    </div>
    <form id="f" >
      <fieldset id="fil">
        <div id="example1">
          <div>
            <input id="text" placeholder="الاسم" />
          </div>

          <div>
            <input id="text1" placeholder="ادخل رسالتك هنا " />
          </div>
          <div>
            <input id="text2" placeholder="البريد الاكتروني" />
          </div>
          <div>
            <input id="contact_send" type="submit" value="Send Message" />
          </div>
        </div>

      </fieldset>
    </form>



  </div>
);

export default contact;
