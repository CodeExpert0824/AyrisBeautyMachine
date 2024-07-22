import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [paddingHorizontal, setPaddingHorizontal] = useState<number>(0);
  const [paddingVertical, setPaddingVertical] = useState<number>(0);

  const updatePadding = () => {
    if (imgRef.current) {
      setPaddingHorizontal(imgRef.current.offsetWidth * 0.055);
      setPaddingVertical(imgRef.current.offsetHeight * 0.022);
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
          className="h-full -z-40"
          ref={imgRef}
        />
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
