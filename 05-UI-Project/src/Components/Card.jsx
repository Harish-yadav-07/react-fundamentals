import React from "react";

const Card = () => {
    return (
        <div className="flex shrink-0 mx-3">
            <div className="h-105 w-[320px] bg-[#C3FF3D] my-6 rounded-3xl flex flex-col justify-between overflow-hidden">

                {/* Content Padding */}
                <div className="p-5 flex flex-col gap-3">

                    {/* Top Tags */}
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <h3 className="bg-white w-fit rounded-2xl px-2 font-bold text-sm">
                                5-12 Years
                            </h3>
                            <h3 className="bg-white w-fit rounded-2xl px-2 font-bold text-sm">
                                for Kids
                            </h3>
                        </div>
                        <div>
                            <h3 className="bg-[#111111] text-white px-2 rounded-full text-sm">
                                H
                            </h3>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-5xl font-bold tracking-tight leading-[0.9]">
                        <h1>
                            Junior <br /> Programs
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="text-sm font-semibold leading-[1.3]">
                        <p>
                            For kids aged 5-12. Focus on <br />
                            fundamentals and fun.
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="h-full w-full overflow-hidden rounded-2xl">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=60"
                        alt="img"
                    />
                </div>

            </div>
        </div>
    );
};

export default Card;
