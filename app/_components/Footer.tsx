"use client";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-10 pb-5">
            <div className="container mx-auto px-4">
                {/* Newsletter Section */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <h3 className="text-xl md:text-2xl font-medium mb-8 text-white/90">
                        Subscribe for the daily updates
                    </h3>
                    <div className="w-full max-w-2xl bg-white rounded-md p-1.5 flex flex-col sm:flex-row shadow-lg">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 text-gray-800 outline-none placeholder:text-gray-400 text-sm"
                        />
                        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors text-sm uppercase tracking-wider">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-12 mb-16 px-4">
                    {/* Logo and Description */}
                    <div className="flex flex-col">
                        <div className="mb-6 flex flex-col">
                            <span className="text-4xl font-bold text-white tracking-tighter leading-none">emos</span>
                            <span className="text-xl font-light text-white uppercase tracking-widest mt-1">technology</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            We develop and manufacture precision visualization systems,
                            components, and endoscopic technologies in Germany for
                            medical, veterinary, and industrial applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="/development" className="hover:text-primary transition-colors">Development</Link></li>
                            <li><Link href="/spare-parts" className="hover:text-primary transition-colors">Components & Spare parts</Link></li>
                            <li><Link href="/repair" className="hover:text-primary transition-colors">Repair</Link></li>
                            <li><Link href="/company" className="hover:text-primary transition-colors">Company</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start">
                                <span>Tel.: +49 (0) 7558 / 938 278 – 0</span>
                            </li>
                            <li className="flex items-start">
                                <span>Fax: + 49 (0) 7558 / 938 278 – 55</span>
                            </li>
                            <li>+49 (0) 7558 / 938 278 – 0</li>
                            <li><a href="mailto:info@emostechnology.com" className="hover:text-primary transition-colors">info(at)emostechnology.com</a></li>
                        </ul>
                    </div>

                    {/* Translations */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Translations</h4>
                        <div className="flex items-center gap-4">
                            {/* German Flag */}
                            <svg className="w-8 h-6 shadow-sm cursor-pointer hover:opacity-80 transition-opacity" viewBox="0 0 5 3">
                                <rect width="5" height="3" y="0" fill="#000" />
                                <rect width="5" height="2" y="1" fill="#D00" />
                                <rect width="5" height="1" y="2" fill="#FFCE00" />
                            </svg>
                            {/* UK Flag */}
                            <svg className="w-8 h-6 shadow-sm cursor-pointer hover:opacity-80 transition-opacity" viewBox="0 0 60 30">
                                <rect width="60" height="30" fill="#012169" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
                                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#FFF" strokeWidth="10" />
                                <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white/60">
                    <p>Copyright © 2026 KAP Medical. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
