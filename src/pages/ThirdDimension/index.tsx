import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ThirdDimension() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [btnSize, setBtnSize] = useState({ horizontal: 0, vertical: 0 });

  const updatePadding = () => {
    if (imgRef.current) {
      setBtnSize({ horizontal: imgRef.current.offsetWidth * 0.03, vertical: imgRef.current.offsetWidth * 0.011 })
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
      <div className="relative h-screen">
        <img
          src="/images/3d.png"
          alt="background"
          className="h-full -z-40"
          ref={imgRef}
        />
        <Link
          className="absolute top-[88.2%] left-[46.9%] bg-slate-400 opacity-10 hover:opacity-10"
          to="/home"
          style={{
            padding: `${btnSize.vertical}px ${btnSize.horizontal}px`,
          }}
        />
      </div>
    </div>

  )
}