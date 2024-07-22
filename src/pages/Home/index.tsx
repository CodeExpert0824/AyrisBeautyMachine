import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [authBtnWidth, setAuthBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [buildBtnSize, setBuildBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [squareBtnWidth, setSquareBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [introBtn, setIntroBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [commonBtn, setCommonBtn] = useState({ horizontal: 0, vertical: 0 });

  const updatePadding = () => {
    if (ref.current) {
      setAuthBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.0058 });
      setBuildBtnSize({ horizontal: ref.current.offsetWidth * 0.052, vertical: ref.current.offsetHeight * 0.006 });
      setSquareBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.012 });
      setIntroBtnWidth({ horizontal: ref.current.offsetWidth * 0.023, vertical: ref.current.offsetHeight * 0.0085 });
      setCommonBtn({ horizontal: ref.current.offsetWidth * 0.0385, vertical: ref.current.offsetHeight * 0.0043 });
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
    <div className="flex flex-col items-center relative" ref={ref}>
      <img src="/images/home-page.jpg" alt="background" />
      <img src="/images/counter.png" alt="counter" />
      <img src="/images/counts.png" alt="counter" />
      <Link
        className="absolute top-[4.95%] left-[4.2%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/home'
        style={{
          padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[4.8%] left-[25.2%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/build'
        style={{
          padding: `${buildBtnSize.vertical}px ${buildBtnSize.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[4.8%] left-[64.8%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/search'
        style={{
          padding: `${buildBtnSize.vertical}px ${buildBtnSize.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[4.95%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/register'
        style={{
          padding: `${authBtnWidth.vertical}px ${authBtnWidth.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[6.1%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/login'
        style={{
          padding: `${authBtnWidth.vertical}px ${authBtnWidth.horizontal}px`,
        }}
      />
      {/* <Link
        className="absolute top-[29.7%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/dear'
        style={{
          padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
        }}
      /> */}
      <Link
        className="absolute top-[10.1%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/year'
        style={{
          padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[11.1%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/era-style'
        style={{
          padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[12%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/location'
        style={{
          padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[14.8%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/muthology'
        style={{
          padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[23.6%] left-[47.8%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/intro'
        style={{
          padding: `${introBtn.vertical}px ${introBtn.horizontal}px`,
        }}
      />
    </div>
  );
}
