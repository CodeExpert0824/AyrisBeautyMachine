import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Muthology() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [btnSize, setBtnSize] = useState({ horizontal: 0, vertical: 0 });

  const updatePadding = () => {
    if (imgRef.current) {
      setBtnSize({ horizontal: imgRef.current.offsetWidth * 0.072, vertical: imgRef.current.offsetWidth * 0.014 })
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
          src="/images/muthology.png"
          alt="background"
          className="h-full -z-40"
          ref={imgRef}
        />
        <Link
          className="absolute top-[88.9%] left-[43.6%] bg-slate-400 opacity-10 hover:opacity-10"
          to="/home"
          style={{
            padding: `${btnSize.vertical}px ${btnSize.horizontal}px`,
          }}
        />
      </div>
    </div>

  )
}