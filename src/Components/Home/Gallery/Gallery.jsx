import GalleryImg from "./GalleryImg";

const Gallery = () => {
    return (
        <div
            className="max-w-7xl mx-auto">
            <h2
                className="text-center text-5xl my-5 font-extrabold">
                Our Gallery Section
            </h2>
            <p
                className="text-center text-xl my-4 font-bold">
                Meet Our Popular Arts
            </p>
            {/* GalleryImg section components */}
                <GalleryImg/>
        </div>
    );
};

export default Gallery;