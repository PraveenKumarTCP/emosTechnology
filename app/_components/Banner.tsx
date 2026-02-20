import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative h-[93vh] w-full bg-[#fcfcfc] flex flex-col justify-end overflow-hidden">
            {/* Main Product Image - Full Width */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/bg-passion.jpg"
                    alt="EMOS Precision Instrument"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Typography Overlay - Left Aligned */}
            <div className="container mx-auto relative z-10 pb-20 px-4 md:px-8">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-[0.9] tracking-tighter">
                        Pure passion & <br /> attention to detail
                    </h2>
                </div>
            </div>

            {/* Subtle Gradient Bottom to ensure text pop */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/60 via-white/20 to-transparent pointer-events-none z-[1]"></div>
        </section>
    );
};

export default Banner;
