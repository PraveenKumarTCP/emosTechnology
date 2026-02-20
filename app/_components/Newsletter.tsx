const Newsletter = () => {
    return (
        <section className="bg-dark text-white py-12 border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-white/90">
                        Subscribe for the daily updates
                    </h3>
                    <div className="flex w-full md:w-auto bg-white p-1 rounded-sm">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent text-gray-800 px-6 py-2 outline-none w-full md:w-80 text-sm italic"
                        />
                        <button className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-8 py-2 transition-all uppercase rounded-sm">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
