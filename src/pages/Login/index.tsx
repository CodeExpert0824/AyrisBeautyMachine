import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store";

export default function Login() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [authBtnSize, setAuthBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [buildBtnSize, setBuildBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [squareBtnWidth, setSquareBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [introBtn, setIntroBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [commonBtn, setCommonBtn] = useState({ horizontal: 0, vertical: 0 });
  const [mediumBtn, setMediumBtn] = useState({ horizontal: 0, vertical: 0 });
  const [smallBtn, setSmallBtn] = useState({ horizontal: 0, vertical: 0 });
  const [actionBtnSize, setActionBtnSize] = useState({ horizontal: 0, vertical: 0 });

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);

  const updatePadding = () => {
    if (ref.current) {
      setAuthBtnSize({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.021 });
      setBuildBtnSize({ horizontal: ref.current.offsetWidth * 0.052, vertical: ref.current.offsetHeight * 0.02 });
      setSquareBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.044 });
      setIntroBtnWidth({ horizontal: ref.current.offsetWidth * 0.023, vertical: ref.current.offsetHeight * 0.03 });
      setCommonBtn({ horizontal: ref.current.offsetWidth * 0.0385, vertical: ref.current.offsetHeight * 0.016 });
      setMediumBtn({ horizontal: ref.current.offsetWidth * 0.048, vertical: ref.current.offsetHeight * 0.019 });
      setSmallBtn({ horizontal: ref.current.offsetWidth * 0.032, vertical: ref.current.offsetHeight * 0.016 });
      setActionBtnSize({ horizontal: ref.current.offsetWidth * 0.04, vertical: ref.current.offsetHeight * 0.015 });
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
        {isAuthenticated ? <img
          src="/images/login_2.png"
          alt="background"
          className="h-full -z-40 min-h-screen"
        /> : <img
          src="/images/login.png"
          alt="background"
          className="h-full -z-40 min-h-screen"
        />}
        <Link
          className="absolute top-[18.2%] left-[4.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/home'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[17.8%] left-[25.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/build'
          style={{
            padding: `${buildBtnSize.vertical}px ${buildBtnSize.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[17.8%] left-[64.8%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/search'
          style={{
            padding: `${buildBtnSize.vertical}px ${buildBtnSize.horizontal}px`,
          }}
        />
        {isAuthenticated ? <>
          <Link
            className="absolute top-[18.35%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
            to='/account'
            style={{
              padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
            }}
          />
        </> : (
          <>
            <Link
              className="absolute top-[18.35%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
              to='/register'
              style={{
                padding: `${authBtnSize.vertical}px ${authBtnSize.horizontal}px`,
              }}
            />
            <Link
              className="absolute top-[22.4%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
              to='/login'
              style={{
                padding: `${authBtnSize.vertical}px ${authBtnSize.horizontal}px`,
              }}
            />
          </>
        )}
        <Link
          className="absolute top-[37%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/year'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[40.3%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/era-style'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[43.8%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/location'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[51%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/philosphies'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[54.3%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/muthology'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[78.4%] left-[4.3%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/manifesto'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[87.4%] left-[20.3%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/edit-profile'
          style={{
            padding: `${mediumBtn.vertical}px ${mediumBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[86.4%] left-[47.8%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/intro'
          style={{
            padding: `${introBtn.vertical}px ${introBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[87.5%] left-[63%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/home'
          style={{
            padding: `${smallBtn.vertical}px ${smallBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[78.4%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/third-dimension'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <div
          className="absolute top-[67.5%] left-[35.4%] bg-slate-400 opacity-10 hover:opacity-10 cursor-pointer"
          style={{
            padding: `${actionBtnSize.vertical}px ${actionBtnSize.horizontal}px`,
          }}
          onClick={() => { login() }} />
      </div>
    </div>
  );
}
