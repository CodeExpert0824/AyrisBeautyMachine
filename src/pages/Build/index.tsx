import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import useAuthStore from "../../store";

export default function Build() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [authBtnSize, setAuthBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [buildBtnSize, setBuildBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [squareBtnWidth, setSquareBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [introBtn, setIntroBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [commonBtn, setCommonBtn] = useState({ horizontal: 0, vertical: 0 });
  const [mediumBtn, setMediumBtn] = useState({ horizontal: 0, vertical: 0 });
  const [smallBtn, setSmallBtn] = useState({ horizontal: 0, vertical: 0 });

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const updatePadding = () => {
    if (imgRef.current) {
      setAuthBtnSize({ horizontal: imgRef.current.offsetWidth * 0.031, vertical: imgRef.current.offsetHeight * 0.021 });
      setBuildBtnSize({ horizontal: imgRef.current.offsetWidth * 0.052, vertical: imgRef.current.offsetHeight * 0.02 });
      setSquareBtnWidth({ horizontal: imgRef.current.offsetWidth * 0.031, vertical: imgRef.current.offsetHeight * 0.044 });
      setIntroBtnWidth({ horizontal: imgRef.current.offsetWidth * 0.023, vertical: imgRef.current.offsetHeight * 0.03 });
      setCommonBtn({ horizontal: imgRef.current.offsetWidth * 0.0385, vertical: imgRef.current.offsetHeight * 0.016 });
      setMediumBtn({ horizontal: imgRef.current.offsetWidth * 0.048, vertical: imgRef.current.offsetHeight * 0.019 });
      setSmallBtn({ horizontal: imgRef.current.offsetWidth * 0.032, vertical: imgRef.current.offsetHeight * 0.016 });
    }
  }

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleResize = () => {
      updatePadding();
    };

    window.addEventListener('resize', handleResize);

    if (imgElement) {
      imgElement.addEventListener('load', updatePadding);
    }

    updatePadding();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (imgElement) {
        imgElement.removeEventListener('load', updatePadding);
      }
    };
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <div className="relative">
        {isAuthenticated ? <img
          src="/images/build.png"
          alt="background"
          className="h-full -z-40"
          ref={imgRef}
        /> : <img
          src="/images/build_2.png"
          alt="background"
          className="h-full -z-40"
          ref={imgRef}
        />}
        <Link
          className="absolute top-[18%] left-[4.2%] bg-slate-400 opacity-10 hover:opacity-10"
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
            className="absolute top-[18%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
            to='/account'
            style={{
              padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
            }}
          />
        </> : (
          <>
            <Link
              className="absolute top-[18%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
              to='/register'
              style={{
                padding: `${authBtnSize.vertical}px ${authBtnSize.horizontal}px`,
              }}
            />
            <Link
              className="absolute top-[22.5%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
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
      </div>
    </div>

  )
}