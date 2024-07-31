import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import useAuthStore from "../../store";

export default function Home() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const [authBtnWidth, setAuthBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [buildBtnSize, setBuildBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [squareBtnWidth, setSquareBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [introBtn, setIntroBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [commonBtn, setCommonBtn] = useState({ horizontal: 0, vertical: 0 });
  const [mediumBtn, setMediumBtn] = useState({ horizontal: 0, vertical: 0 });
  const [smallBtn, setSmallBtn] = useState({ horizontal: 0, vertical: 0 });
  const [authBtnSize, setAuthBtnSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const updatePadding = () => {
    if (ref.current) {
      setAuthBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.0058 });
      setBuildBtnSize({ horizontal: ref.current.offsetWidth * 0.052, vertical: ref.current.offsetHeight * 0.006 });
      setSquareBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.012 });
      setIntroBtnWidth({ horizontal: ref.current.offsetWidth * 0.023, vertical: ref.current.offsetHeight * 0.0085 });
      setCommonBtn({ horizontal: ref.current.offsetWidth * 0.0385, vertical: ref.current.offsetHeight * 0.0043 });
      setMediumBtn({ horizontal: ref.current.offsetWidth * 0.048, vertical: ref.current.offsetHeight * 0.0046 });
      setSmallBtn({ horizontal: ref.current.offsetWidth * 0.032, vertical: ref.current.offsetHeight * 0.0043 });
      setAuthBtnSize({ horizontal: ref.current.offsetWidth * 0.061, vertical: ref.current.offsetHeight * 0.011, fontSize: ref.current.offsetHeight * 0.006 })
    }
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      toast.success("User logout successfully");
      localStorage.removeItem('auth-storage');
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

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
      <div className="relative">
        {isAuthenticated ? <img src="/images/home-page_2.jpg" alt="background" /> : <img src="/images/home-page.jpg" alt="background" />}
        <img src="/images/home.gif" alt="gif" className="absolute top-[30%] left-[18%]" width="63%" height="63%" />
      </div>
      <img src="/images/counter.png" alt="counter" />
      <img src="/images/counts.png" alt="counts" />
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
      {isAuthenticated ? <>
        <Link
          className="absolute top-[5.05%] left-[90%] text-center"
          to='/account'
          style={{
            width: `${authBtnSize.horizontal}px`,
            height: `${authBtnSize.vertical}px`
          }}
        >
          <span className="text-red-600" style={{ fontSize: `${authBtnSize.fontSize}px` }}>Account</span>
        </Link>
        <button
          className="absolute top-[6.1%] left-[90%] text-center"
          style={{
            width: `${authBtnSize.horizontal}px`,
            height: `${authBtnSize.vertical}px`
          }}
          onClick={handleLogout}
        >
          <span className="text-red-600" style={{ fontSize: `${authBtnSize.fontSize}px` }}>Log out</span>
        </button>
      </> : (
        <>
          <Link
            className="absolute top-[5%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
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
        </>
      )}
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
        className="absolute top-[13.9%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/philosphies'
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
        className="absolute top-[21.4%] left-[4.3%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/manifesto'
        style={{
          padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[23.9%] left-[20.3%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/edit-profile'
        style={{
          padding: `${mediumBtn.vertical}px ${mediumBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[23.6%] left-[47.8%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/intro'
        style={{
          padding: `${introBtn.vertical}px ${introBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[24%] left-[63%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/home'
        style={{
          padding: `${smallBtn.vertical}px ${smallBtn.horizontal}px`,
        }}
      />
      <Link
        className="absolute top-[21.4%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
        to='/third-dimension'
        style={{
          padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
        }}
      />
    </div>
  );
}
