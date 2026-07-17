import { useEffect, useState, useRef, useCallback } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { TbZoomScan } from "react-icons/tb";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const IMAGES_PER_BATCH = 20;

function ConferenceImagesPage() {
    const [selectedDay, setSelectedDay] = useState('day1');
    const [allDayImages, setAllDayImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [availableDays, setAvailableDays] = useState([]);

    const sentinelRef = useRef(null);
    const batchIndexRef = useRef(0);

    // Random size presets for collage effect
    const sizePresets = [
        "aspect-square",
        "aspect-[3/4]",
        "aspect-[4/3]",
        "aspect-[9/16]",
        "aspect-[2/3]",
        "aspect-[5/4]",
        "h-56",
        "h-72",
        "h-96",
        "h-[28rem]"
    ];

    // Assign a deterministic random size based on image name (so it doesn't change on re-render)
    const getSizeClass = useCallback((imageName) => {
        let hash = 0;
        for (let i = 0; i < imageName.length; i++) {
            const char = imageName.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return sizePresets[Math.abs(hash) % sizePresets.length];
    }, []);

    // Fetch manifest on mount
    useEffect(() => {
        const fetchManifest = async () => {
            try {
                const response = await fetch('/conferenceImages/manifest.json');
                const manifest = await response.json();
                const days = Object.keys(manifest).sort();
                setAvailableDays(days);
                
                // Load images for the initially selected day
                if (manifest[selectedDay]) {
                    const dayImages = manifest[selectedDay];
                    setAllDayImages(dayImages);
                    setVisibleImages(dayImages.slice(0, IMAGES_PER_BATCH));
                    setHasMore(dayImages.length > IMAGES_PER_BATCH);
                    batchIndexRef.current = 1;
                }
            } catch (error) {
                console.error('Failed to load manifest:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchManifest();
    }, []);

    // Handle day change
    useEffect(() => {
        const loadDay = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/conferenceImages/manifest.json');
                const manifest = await response.json();

                if (manifest[selectedDay]) {
                    const dayImages = manifest[selectedDay];
                    setAllDayImages(dayImages);
                    setVisibleImages(dayImages.slice(0, IMAGES_PER_BATCH));
                    setHasMore(dayImages.length > IMAGES_PER_BATCH);
                    batchIndexRef.current = 1;
                } else {
                    setAllDayImages([]);
                    setVisibleImages([]);
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Failed to load day images:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadDay();
    }, [selectedDay]);

    // Load more images
    const loadMore = useCallback(() => {
        if (isLoadingMore || !hasMore) return;

        setIsLoadingMore(true);
        const nextIndex = batchIndexRef.current;
        const start = nextIndex * IMAGES_PER_BATCH;
        const end = Math.min(start + IMAGES_PER_BATCH, allDayImages.length);

        if (start >= allDayImages.length) {
            setHasMore(false);
            setIsLoadingMore(false);
            return;
        }

        // Small delay to show the loading animation briefly
        setTimeout(() => {
            const newImages = allDayImages.slice(start, end);
            setVisibleImages(prev => [...prev, ...newImages]);
            batchIndexRef.current = nextIndex + 1;
            setHasMore(end < allDayImages.length);
            setIsLoadingMore(false);
        }, 200);
    }, [allDayImages, hasMore, isLoadingMore]);

    // Intersection Observer for infinite scroll
    useEffect(() => {
        if (!sentinelRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
                    loadMore();
                }
            },
            {
                rootMargin: '400px', // Start loading 400px before the sentinel is visible
                threshold: 0
            }
        );

        observer.observe(sentinelRef.current);

        return () => observer.disconnect();
    }, [loadMore, hasMore, isLoadingMore]);

    const handleDownload = (imageSrc, imageName) => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Get the global index of an image in allDayImages for lightbox navigation
    const getGlobalIndex = (visibleIndex) => {
        const imageName = visibleImages[visibleIndex]?.name;
        return allDayImages.findIndex(img => img.name === imageName);
    };

    return (
        <section
            id="conferenceImagesPage"
            className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center"
        >
            <div className="max-w-[1400px] w-full">
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
                                {availableDays.length > 0 ? (
                                    availableDays.map(day => (
                                        <option key={day} value={day}>
                                            {day.replace('day', 'Day ')}
                                        </option>
                                    ))
                                ) : (
                                    <>
                                        <option value="day1">Day 1</option>
                                        <option value="day2">Day 2</option>
                                        <option value="day3">Day 3</option>
                                    </>
                                )}
                            </select>
                        </div>

                        {/* Image count */}
                        {!isLoading && allDayImages.length > 0 && (
                            <p className="text-sm text-gray-500">
                                Showing {visibleImages.length} of {allDayImages.length} photos
                            </p>
                        )}

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="flex flex-col items-center justify-center w-full py-8">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                                <p className="mt-4 text-gray-600">Loading images...</p>
                            </div>
                        )}

                        {/* Image collage - infinite scroll */}
                        {!isLoading && (
                            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 w-full">
                                {visibleImages.map((image, index) => (
                                    <motion.div
                                        key={`${selectedDay}-${image.name}`}
                                        className="mb-4 break-inside-avoid relative group"
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Image - uses tiny thumbnail */}
                                        <div className={`w-full overflow-hidden rounded-xl ${getSizeClass(image.name)}`}>
                                            <img
                                                src={image.thumb}
                                                alt={image.name}
                                                loading="lazy"
                                                className="w-full h-full object-cover cursor-pointer bg-base-300
                                                           hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                                                onClick={() => {
                                                    setPhotoIndex(getGlobalIndex(index));
                                                    setIsOpen(true);
                                                }}
                                            />
                                        </div>

                                        {/* Overlay buttons */}
                                        <div className="absolute inset-0 flex items-end justify-end p-3
                                                        bg-gradient-to-t from-black/50 to-transparent
                                                        opacity-0 group-hover:opacity-100 transition-all">
                                            <div className="flex gap-2">
                                                <button
                                                    className="btn btn-sm bg-white/80 backdrop-blur"
                                                    onClick={() => {
                                                        setPhotoIndex(getGlobalIndex(index));
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

                        {/* Infinite scroll sentinel & loading more indicator */}
                        {!isLoading && hasMore && (
                            <div ref={sentinelRef} className="flex flex-col items-center justify-center w-full py-6">
                                {isLoadingMore && (
                                    <div className="flex items-center gap-3">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                        <p className="text-gray-500">Loading more photos...</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* End of images message */}
                        {!isLoading && !hasMore && visibleImages.length > 0 && (
                            <p className="text-sm text-gray-400 py-4">
                                You've seen all {allDayImages.length} photos ✨
                            </p>
                        )}

                        {/* Show message if no images found */}
                        {!isLoading && visibleImages.length === 0 && (
                            <div className="text-center text-gray-500 my-8">
                                No images found for {selectedDay.replace('day', 'Day ')}
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Lightbox for image preview - uses FULL-RES images */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={allDayImages.map(img => ({ src: img.src }))}
            />
        </section>
    );
}

export default ConferenceImagesPage;
