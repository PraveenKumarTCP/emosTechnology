import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        High quality endoscopes for medicine & industry
                    </h2>
                    <div className="w-40 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-gray-500 font-medium">OEM | Development projects</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">With passion and attention to the detail</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            We already set the course for an efficient and reliable process during the product development phase! This process
                            from the customer's vision to the first prototype is crucial and decisive for the product's success. Together with our
                            customers we develop a target-oriented concept. This basis for a precise and serialization production.
                        </p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            The journey from an idea to the first prototype is crucial and decisive for the product's success. At EMOS Technology
                            flexible we work closely with our customers to develop target-oriented concepts that go beyond basic functionality.
                            Implementing the most suitable preparation processes facilitates improving. This approach is base the foundation
                            for reliable, process-safe series production techniques.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative h-[400px] w-full rounded-lg overflow-hidden border-8 border-white shadow-xl">
                            <Image
                                src="/images/home/endoscopes.jpg"
                                alt="Product detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
