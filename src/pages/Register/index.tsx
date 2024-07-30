import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [paddingHorizontal, setPaddingHorizontal] = useState<number>(0);
  const [paddingVertical, setPaddingVertical] = useState<number>(0);
  const [userNameInputSize, setUserNameInputSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });
  const [commonInputSize, setCommonInputSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });
  const [registerBtnSize, setRegisterBtnSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [email2, setEmail2] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  const updatePadding = () => {
    if (imgRef.current) {
      setPaddingHorizontal(imgRef.current.offsetWidth * 0.055);
      setPaddingVertical(imgRef.current.offsetHeight * 0.022);
      setUserNameInputSize({
        horizontal: imgRef.current.offsetWidth * 0.102,
        vertical: imgRef.current.offsetHeight * 0.069,
        fontSize: imgRef.current.offsetWidth * 0.015
      });
      setCommonInputSize({
        horizontal: imgRef.current.offsetWidth * 0.108,
        vertical: imgRef.current.offsetHeight * 0.029,
        fontSize: imgRef.current.offsetWidth * 0.016
      });
      setRegisterBtnSize({
        horizontal: imgRef.current.offsetWidth * 0.12,
        vertical: imgRef.current.offsetHeight * 0.04,
        fontSize: imgRef.current.offsetWidth * 0.02
      });
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
        <img
          src="/images/register.png"
          alt="background"
          className="h-full -z-40 min-h-screen"
          ref={imgRef}
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
          className="absolute top-[35.7%] left-[45.7%] bg-transparent text-center placeholder-red-500 text-red-500 outline-none"
          style={{ width: `${userNameInputSize.horizontal}px`, height: `${userNameInputSize.vertical}px`, fontSize: `${userNameInputSize.fontSize}px` }}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          className="absolute top-[66.2%] left-[22.2%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
          style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
        />
        <input
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          placeholder="Repeat E-Mail"
          className="absolute top-[71.2%] left-[22.2%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
          style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="absolute top-[66.2%] left-[69.4%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
          style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
        />
        <input
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Repeat Password"
          className="absolute top-[71.2%] left-[69.4%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
          style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
        />
        <div className="absolute top-[68.2%] left-[44.7%] flex justify-center items-center cursor-pointer"
          style={{ width: `${registerBtnSize.horizontal}px`, height: `${registerBtnSize.vertical}px` }}>
          <span className="text-red-600" style={{ fontSize: `${registerBtnSize.fontSize}px` }}>Register</span>
        </div>
        <Link
          className="absolute top-[88.6%] left-[45.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to="/home"
          style={{
            padding: `${paddingVertical}px ${paddingHorizontal}px`,
          }}
        />
      </div>
    </div>
  );
}
