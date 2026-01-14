import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { TbZoomScan } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";

function ConferenceImagesPage() {
    const [selectedDay, setSelectedDay] = useState('day1');
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    // Dynamically import all images from the conferenceImages folder
    const imageModules = import.meta.glob('../assets/images/conferenceImages/**/*.{png,jpg,jpeg,gif,JPG,JPEG}', { eager: true });

    // Function to create a thumbnail URL from the original image
    const createThumbnailUrl = (originalUrl) => {
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        return new Promise((resolve) => {
            img.onload = () => {
                // Set thumbnail size (adjust these values as needed)
                const maxWidth = 300;
                const maxHeight = 200;

                let width = img.width;
                let height = img.height;

                // Calculate new dimensions maintaining aspect ratio
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                // Draw and compress image
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.5)); // Adjust quality (0.5 = 50%)
            };
            img.src = originalUrl;
        });
    };

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];
            for (const path in imageModules) {
                if (path.includes(`/${selectedDay}/`)) {
                    const originalSrc = imageModules[path].default;
                    const thumbnailSrc = await createThumbnailUrl(originalSrc);
                    loadedImages.push({
                        src: originalSrc,
                        thumbnail: thumbnailSrc,
                        name: path.split('/').pop()
                    });
                }
            }
            setImages(loadedImages);
        };
        loadImages();
    }, [selectedDay]);

    const handleDownload = (imageSrc, imageName) => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="conferenceImagesPage"
            className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center"
        >
            <div className="max-w-[1400px]">
                <h1 className="mb-4 text-5xl font-bold text-primary font-playfair py-8 text-center">
                    Conference Images
                </h1>
                <div className="flex justify-center align-middle flex-col">
                    <div className="border-dotted border-black rounded-lg p-6 text-center shadow-md flex flex-col items-center gap-6 hover:shadow-lg origin-center transition-all bg-base-100 w-full">
                        {/* Day selector */}
                        <div className="w-full max-w-xs mb-4">
                            <select
                                value={selectedDay}
                                onChange={(e) => setSelectedDay(e.target.value)}
                                className="select select-primary w-full"
                            >
                                <option value="day1">Day 1</option>
                                <option value="day2">Day 2</option>
                                <option value="day3">Day 3</option>
                            </select>
                        </div>

                        {/* Image grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-1 w-full">
                            {images.map((image, index) => (
                                <div key={index} className="card relative">
                                    <figure className="p-1">
                                        <img
                                            src={image.thumbnail}
                                            alt={image.name}
                                            loading="lazy"
                                            className="rounded-lg h-48 w-full object-cover cursor-pointer hover:shadow-xl hover:scale-[101%] transition-all duration-[.1s]"
                                            onClick={() => {
                                                setPhotoIndex(index);
                                                setIsOpen(true);
                                            }}
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center absolute bottom-0 right-2 p-2 px-4">
                                        <div className="card-actions justify-center">
                                            <button
                                                className="btn p-2 btn-sm bg-white bg-opacity-75 flex justify-center items-center content-center text-center"
                                                onClick={() => {
                                                    setPhotoIndex(index);
                                                    setIsOpen(true);
                                                }}
                                            >
                                                <TbZoomScan size="24"/>
                                            </button>
                                            <button
                                                className="btn p-2 btn-sm bg-white bg-opacity-75 flex justify-center items-center content-center text-center"
                                                onClick={() => handleDownload(image.src, image.name)}
                                            >
                                                <FaDownload/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show message if no images found */}
                        {images.length === 0 && (
                            <div className="text-center text-gray-500 my-8">
                                Loading images for {selectedDay}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox for image preview */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={images.map(img => ({ src: img.src }))}
            />
        </section>
    );
}

export default ConferenceImagesPage;