import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div
            className='text-center max-w-7xl mx-auto'>
            <Carousel>
                <div className='mt-16'>
                    <img
                        src="https://img.freepik.com/free-vector/girl-painter-art-studio-with-canvas-brushes_107791-8114.jpg?w=996&t=st=1686160753~exp=1686161353~hmac=69e2ce56b9cd0220ca104a8b19a85d9f254a4ab2e0cf2634ec5b6e6b722f74f0" />
                </div>

                <div>
                    <img
                        src="https://img.freepik.com/free-vector/diy-creative-workshop-with-people-painting_23-2148530094.jpg?w=826&t=st=1686161137~exp=1686161737~hmac=dfdc7b14c95692866ca8947f5f54041f11738833ac82ec4e3f9665c06221398c" />
                </div>

                <div>
                    <img
                        src="https://img.freepik.com/free-vector/professional-teacher-giving-art-master-class-man-woman-studio-cartoon-illustration_1284-65373.jpg?w=900&t=st=1686160331~exp=1686160931~hmac=d8b4c9c98b8776d3218dec396c5d37ac1e45cf2dc81abd4ccd8421f50a9ec128" />
                </div>

                <div>
                    <img
                        src="https://img.freepik.com/free-vector/modern-people-doing-cultural-activities_23-2148599167.jpg?w=826&t=st=1686161073~exp=1686161673~hmac=8c50e922ec92009943cf1cffd3691a95b29f099ed05fe145cd6041b736b8112f" />
                </div>

                <div>
                    <img
                        src="https://img.freepik.com/free-vector/artist-painting-his-thoughts-canvas_52683-38064.jpg?w=826&t=st=1686161017~exp=1686161617~hmac=c1fc66c8c34406c1212909203dee175b099c21f42f0481a6f330a0973845ba34" />
                </div>

                <div>
                    <img
                        src="https://img.freepik.com/free-vector/cartoon-mother-watching-daughter-drawing-easel-kid-painting-with-woman-flat-illustration_74855-20497.jpg?w=740&t=st=1686161045~exp=1686161645~hmac=f117d2284f230bf9c7970104d393cc95c9fe9b9244d67c8e19a39d2a34b06cbd" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;