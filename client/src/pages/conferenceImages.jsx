import { useEffect, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { TbZoomScan } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";


function ConferenceImagesPage() {
    const [selectedDay, setSelectedDay] = useState('day1');
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const imagesPerPage = 50;

    // Dynamically import all images from the conferenceImages folder
    const imageModules = import.meta.glob('../pages/past/NGNDAI2025/assets/images/conferenceImages/**/*.{png,jpg,jpeg,gif,JPG,JPEG}', { eager: true });
    

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
                resolve(canvas.toDataURL('image/jpeg', 0.5));
            };
            img.src = originalUrl;
        });
    };

    useEffect(() => {
        const loadImages = async () => {
            setIsLoading(true);
            // Get all images for the selected day
            const allDayImages = [];
            for (const path in imageModules) {
                if (path.includes(`/${selectedDay}/`)) {
                    allDayImages.push({
                        src: imageModules[path].default,
                        name: path.split('/').pop()
                    });
                }
            }

            // Calculate total pages
            const calculatedTotalPages = Math.ceil(allDayImages.length / imagesPerPage);
            setTotalPages(calculatedTotalPages);

            // Reset to first page when day changes
            setCurrentPage(1);

            // Get current page's images
            const startIndex = 0;
            const endIndex = Math.min(imagesPerPage, allDayImages.length);
            const currentPageImages = allDayImages.slice(startIndex, endIndex);

            // Process thumbnails only for current page
            const loadedImages = await Promise.all(
                currentPageImages.map(async (image) => ({
                    ...image,
                    thumbnail: await createThumbnailUrl(image.src)
                }))
            );

            setImages(loadedImages);
            setIsLoading(false);
        };
        loadImages();
    }, [selectedDay]);

    useEffect(() => {
        const loadPageImages = async () => {
            setIsLoading(true);
            // Get all images for the selected day
            const allDayImages = [];
            for (const path in imageModules) {
                if (path.includes(`/${selectedDay}/`)) {
                    allDayImages.push({
                        src: imageModules[path].default,
                        name: path.split('/').pop()
                    });
                }
            }

            // Get current page's images
            const startIndex = (currentPage - 1) * imagesPerPage;
            const endIndex = Math.min(startIndex + imagesPerPage, allDayImages.length);
            const currentPageImages = allDayImages.slice(startIndex, endIndex);

            // Process thumbnails only for current page
            const loadedImages = await Promise.all(
                currentPageImages.map(async (image) => ({
                    ...image,
                    thumbnail: await createThumbnailUrl(image.src)
                }))
            );

            setImages(loadedImages);
            setIsLoading(false);
        };
        loadPageImages();
    }, [currentPage]);

    const handleDownload = (imageSrc, imageName) => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
                                disabled={isLoading}
                            >
                                <option value="day1">Day 1</option>
                                <option value="day2">Day 2</option>
                                <option value="day3">Day 3</option>
                            </select>
                        </div>

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="flex flex-col items-center justify-center w-full py-8">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                                <p className="mt-4 text-gray-600">Loading images...</p>
                            </div>
                        )}

                        {/* Image grid */}
                        {/* {!isLoading && (
                            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-1 w-full">
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
                        )} */}

                        {/* Image collage */}
                        {!isLoading && (
                            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 w-full">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="mb-4 break-inside-avoid relative group"
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Image */}
                                        <motion.img
                                            src={image.thumbnail || image.src}
                                            alt={image.name}
                                            loading="lazy"
                                            className="w-full rounded-xl cursor-pointer bg-base-300
                     hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                                            onClick={() => {
                                                setPhotoIndex(index);
                                                setIsOpen(true);
                                            }}
                                        />

                                        {/* Overlay buttons */}
                                        <div className="absolute inset-0 flex items-end justify-end p-3
                        bg-gradient-to-t from-black/50 to-transparent
                        opacity-0 group-hover:opacity-100 transition-all">

                                            <div className="flex gap-2">
                                                <button
                                                    className="btn btn-sm bg-white/80 backdrop-blur"
                                                    onClick={() => {
                                                        setPhotoIndex(index);
                                                        setIsOpen(true);
                                                    }}
                                                >
                                                    <TbZoomScan size={18} />
                                                </button>

                                                <button
                                                    className="btn btn-sm bg-white/80 backdrop-blur"
                                                    onClick={() => handleDownload(image.src, image.name)}
                                                >
                                                    <FaDownload />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}


                        {/* Pagination */}
                        {!isLoading && totalPages > 1 && (
                            <div className="flex justify-center gap-2 mt-4">
                                <button
                                    className={`btn btn-sm ${currentPage === 1 ? 'btn-disabled' : 'btn-primary'}`}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1 || isLoading}
                                >
                                    Previous
                                </button>
                                <span className="flex items-center px-4">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    className={`btn btn-sm ${currentPage === totalPages ? 'btn-disabled' : 'btn-primary'}`}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages || isLoading}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                
                        {/* Show message if no images found */}
                        {!isLoading && images.length === 0 && (
                            <div className="text-center text-gray-500 my-8">
                                No images found for {selectedDay}
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