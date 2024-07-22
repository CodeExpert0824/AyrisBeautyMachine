import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [authBtnWidth, setAuthBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [squareBtnWidth, setSquareBtnWidth] = useState({ horizontal: 0, vertical: 0 });

  const updatePadding = () => {
    if (ref.current) {
      setAuthBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.02 });
      setSquareBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.042 });
    }
  };

  useEffect(() => {
    const handleResize = () => updatePadding();

    updatePadding();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const images = ref.current?.querySelectorAll("img");

    const handleImageLoad = () => {
      updatePadding();
    };

    images?.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images?.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <div className="relative" ref={ref}>
        <img
          src="/images/login.png"
          alt="background"
          className="h-full -z-40"
        />
        <Link
          className="absolute top-[18.2%] left-[4.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/home'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[18.35%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/register'
          style={{
            padding: `${authBtnWidth.vertical}px ${authBtnWidth.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[22.4%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/login'
          style={{
            padding: `${authBtnWidth.vertical}px ${authBtnWidth.horizontal}px`,
          }}
        />
      </div>
    </div>
  );
}
