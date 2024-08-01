import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import PdfViewer from "../../base_components/PdfViewer";
import Modal from "../../base_components/Modal";

export default function Help() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [btnSize, setBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [unfoldBtnSize, setUnfoldBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [muthologyBtnSize, setMuthologyBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [introRectSize, setIntroRectSize] = useState({ horizontal: 0, vertical: 0 });
  const [videoRectSize, setVideoRectSize] = useState({ horizontal: 0, vertical: 0 });

  const [showManifesto, setShowManifesto] = useState<boolean>(false);
  const [showMythology, setShowMythology] = useState<boolean>(false);

  const updatePadding = () => {
    if (imgRef.current) {
      setIntroRectSize({ horizontal: imgRef.current.offsetWidth * 0.79, vertical: imgRef.current.offsetHeight * 0.36 });
      setVideoRectSize({ horizontal: imgRef.current.offsetWidth * 0.79, vertical: imgRef.current.offsetHeight * 0.16 });
      setBtnSize({ horizontal: imgRef.current.offsetWidth * 0.072, vertical: imgRef.current.offsetHeight * 0.015 });
      setUnfoldBtnSize({ horizontal: imgRef.current.offsetWidth * 0.038, vertical: imgRef.current.offsetHeight * 0.014 });
      setMuthologyBtnSize({ horizontal: imgRef.current.offsetWidth * 0.088, vertical: imgRef.current.offsetHeight * 0.017 });
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
        <img src="/images/introduction.jpg" className="h-full min-h-screen" alt="logo" ref={imgRef} />
        <div
          className="absolute top-[14%] left-[11.5%] overflow-y-auto"
          style={{ width: `${introRectSize.horizontal}px`, height: `${introRectSize.vertical}px` }}>
          <span className="text-white">
            To tell you the truth we all own the economy, we all own all the smartphones and the asphalt roads and the cars and the sick sky and the dead ocean. And this world is just fraudulent individualism trying to sooth the lack of ECOLOGIC spirituality, quality and artisan and local reality and trade it for garbage and consuming more and more resources with industrial indifference, if it wastes as fast as possible the economy can grow.
            This is why the revenge of drama was written, we can't build fifty more years of skyscrapers and mansions and houses for the civil peoples, and all the stuff they need.
            The dumbasses have the planet that they want and want more and deliver and consume more entertainment and more despaired entertainment and more ironic and debilitating advertisements, it still grows.
            If we see the cars of 1920 and the volume of them and the volume of architecture we can see the structure is expanding.
            for this, it will lead, as the revenge of drama says, to two things, a total extinction, or an uprisal of underground movements like renaissance, medieval, cosplay, angels or Christian and roman, elves or art nouveau, punks, gothics and vampires or gothic features. SEE what this world is doing. LOOK at yourself, maybe you find your purpose then. But the mainstream find its purpose, it is caught in saying everything is subjective without anything profound to stuff into themselves.
            In effect we need a massive redrawal from nature, raise the suburbs, organize the melancholic and wise of the earth, propose all the proper ideas on an actual map, nothing of the mainstream is really useless to this purpose, we need artists, inventors, thinkers, philosophers, and the lack of background we see from mainstream leaders of these fields is bad enough, wait till you really delve in and see the conspiracy of this subjects culture.
            Hence we are building a new world, with a new economy, where you can propose ideas and form committees with the wisest and most skilled and brilliant people to gather and form a USEFULL government not rooted in hedonism and total childishness.
            For this we ask you that you support our programmers and designers for now, features will be up soon for investing and trading goods.
            IF we make it, which is very unlikely, then thank you. But likely the food stocks will collaps next summer, the economy might crash any minute. SO bear with us, and help us get up to speed!!!
            The underground is screaming and exploding, and practically standing still and stuck where it is, popular fiction has made movies about fantasy and horrors and philosophical problems and society being stuck, it is one whole dead end. Please read the manifest. THE REVENGE OF DRAMA, You can read the mythology to value spirituality and beauty and revalue your local surrounds and local economy ETHERITH THE END OF REALITY, A CARICATURE OF BEAUTY
          </span>
        </div>
        <div
          className="absolute top-[76%] left-[11.5%] flex flex-row gap-[10px] grow"
          style={{ width: `${videoRectSize.horizontal}px`, height: `${videoRectSize.vertical}px` }}>
          <div className="h-full flex-[28%]">
            <a href="https://www.youtube.com/watch?v=2zMN3dTvrwY" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/2zMN3dTvrwY/0.jpg"
                alt="Evening Lecture | Jeremy Jackson: Ocean Apocalypse"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="h-full flex-[36%]">
            <a href="https://www.youtube.com/watch?v=y_5XPN2ubyM&list=PL97065D8BCB008FF9" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/y_5XPN2ubyM/0.jpg"
                alt="poetry rot among fools part I"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="h-full flex-[26%]">
            <a href="https://www.youtube.com/watch?v=SIP0O1NJVZA" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/SIP0O1NJVZA/0.jpg"
                alt="Myth of Sustainability by Dr. McPherson"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
        <button
          className="absolute top-[55%] left-[45.5%] bg-transparent"
          style={{
            padding: `${unfoldBtnSize.vertical}px ${unfoldBtnSize.horizontal}px`,
          }}
          onClick={() => { setModalOpen(true) }}
        />
        <button
          className="absolute top-[65.3%] left-[10%] bg-transparent"
          style={{
            padding: `${btnSize.vertical}px ${btnSize.horizontal}px`,
          }}
          onClick={() => { setShowManifesto(true) }}
        />
        <button
          className="absolute top-[65.3%] left-[72.7%] bg-transparent"
          style={{
            padding: `${muthologyBtnSize.vertical}px ${muthologyBtnSize.horizontal}px`,
          }}
          onClick={() => { setShowMythology(true) }}
        />
        <Link
          className="absolute top-[92.5%] left-[42.9%] bg-transparent"
          to="/demo"
          style={{
            padding: `${btnSize.vertical}px ${btnSize.horizontal}px`,
          }}
        />
        <Modal isOpen={isModalOpen} onClose={() => { setModalOpen(false) }} />
        <PdfViewer fileURL="/public/pdfs/manifesto.pdf" isOpen={showManifesto} onClose={() => { setShowManifesto(false) }} />
        <PdfViewer fileURL="/public/pdfs/mythology.pdf" isOpen={showMythology} onClose={() => { setShowMythology(false) }} />
      </div>
    </div >
  )
}