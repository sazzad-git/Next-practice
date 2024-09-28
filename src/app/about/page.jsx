"use client";

import { useMyContext as UseMyContext } from "@/store/myContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";

function page() {
  const { info, subscriber, setSubscriber } = UseMyContext();

  const handleIncrease = () => {
    setSubscriber(subscriber + 1000);
  };

  // aos animation react
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="3000">
        {" "}
        This aos animation
      </div>
      <h2>This is about page</h2>
      <br />
      <h2>{info}</h2>
      <h2>{subscriber}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <br /> <br />
      <FaFacebook className="facebook" />
    </div>
  );
}

export default page;
