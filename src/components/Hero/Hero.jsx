import React from 'react';

const Hero = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative max-h-[800px] w-full">
                <img
                    src="https://assets.goal.com/images/v3/blte62064c5a296f201/EPL%20Player%20Of%20The%20Year.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative max-h-[800px] w-full">
                <img
                    src="https://static01.nyt.com/athletic/uploads/wp/2019/12/24072307/GettyImages-1190014616.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative max-h-[800px] w-full">
                <img
                    src="https://resources.premierleague.pulselive.com/premierleague/photo/2024/11/15/49ded85a-a5ad-4390-bf2a-9dcb6604c236/Player-of-the-season-LEAD.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative max-h-[800px] w-full">
                <img
                    src="https://assets.goal.com/images/v3/blt6dd367c6e4303f45/EPL_Best_Players.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;