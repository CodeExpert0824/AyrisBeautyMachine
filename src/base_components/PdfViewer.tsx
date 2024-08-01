import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PdfViewer = ({ fileURL, isOpen, onClose }: {
    fileURL: string,
    isOpen: boolean,
    onClose: () => void
}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button
                        className="absolute top-3 right-5 text-white z-20"
                        onClick={onClose}
                    >
                        &#x2715;
                    </button>
                    <div className="relative bg-white w-[90%] h-[90%]">
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                            <Viewer fileUrl={fileURL} plugins={[defaultLayoutPluginInstance]} />
                        </Worker>
                    </div>
                </div>
            )}
        </>
    )
}

export default PdfViewer;