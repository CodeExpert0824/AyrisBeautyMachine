import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

export default function Demo() {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [statusTextRectSize, setStautsTextRectSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });
    const [linkTextSize, setLinkTextSize] = useState(0);

    const updatePadding = () => {
        if (imgRef.current) {
            setStautsTextRectSize({ horizontal: imgRef.current.offsetWidth * 0.18, vertical: imgRef.current.offsetHeight * 0.055, fontSize: imgRef.current.offsetWidth * 0.02 });
            setLinkTextSize(imgRef.current.offsetWidth * 0.025);
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
                    src="/images/demo.jpg"
                    alt="background"
                    className="h-full -z-40"
                    ref={imgRef}
                />
                <div
                    className="absolute top-[8.2%] left-[41.2%] flex justify-center items-center"
                    style={{ width: `${statusTextRectSize.horizontal}px`, height: `${statusTextRectSize.vertical}px` }}>
                    <span className="text-[#d5d4bb]" style={{ fontSize: `${statusTextRectSize.fontSize}px` }}>AyrisBeautyMachine</span>
                </div>
                <Link
                    className="absolute top-[50%] left-[20%]"
                    to="/home">
                    <span className="text-white" style={{ fontSize: `${linkTextSize}px` }}>First Design</span>
                </Link>
                <Link
                    className="absolute top-[50%] left-[46.5%]"
                    to="/home">
                    <span className="text-white" style={{ fontSize: `${linkTextSize}px` }}>Donation</span>
                </Link>
                <Link
                    className="absolute top-[50%] left-[75%]"
                    to="/home">
                    <span className="text-white" style={{ fontSize: `${linkTextSize}px` }}>Demo</span>
                </Link>
            </div>
        </div>
    )
}