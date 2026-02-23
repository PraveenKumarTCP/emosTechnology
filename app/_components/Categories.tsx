import Image from 'next/image';

const categories = [
    {
        title: "HUMAN",
        description: "Endoscopes MADE IN GERMANY for the various medical subjects.",
        buttonText: "Endoscopy Solutions",
        image: "/images/home/human.jpg"
    },
    {
        title: "VETERINARY",
        description: "Special products and services for veterinary procedures.",
        buttonText: "Endoscopy Solutions",
        image: "/images/home/veterinary.jpg"
    },
    {
        title: "INDUSTRY",
        description: "Endoscopes for inspection and analysis.",
        buttonText: "Endoscopy Solutions",
        image: "/images/home/industry.jpg"
    }
];

const Categories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-primary font-bold mb-2 text-sm">{cat.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">{cat.description}</p>
                            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-xs font-bold hover:bg-primary-dark transition-colors rounded-sm uppercase tracking-wider">
                                {cat.buttonText}
                                <span>›</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
