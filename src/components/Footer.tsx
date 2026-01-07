import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white border-t border-white/10 pt-16 pb-8">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo-text.png"
                                alt="Toga Fashion Logo"
                                width={180}
                                height={48}
                                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Sastrería de autor y cuidado textil premium.
                        </p>
                        <div className="flex gap-4 mt-4">
                            {/* Social Icons (Placeholders) */}
                            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-colors">
                                <span className="text-xs">IG</span>
                            </Link>
                            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-colors">
                                <span className="text-xs">FB</span>
                            </Link>
                            <Link href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-colors">
                                <span className="text-xs">LI</span>
                            </Link>
                        </div>
                    </div>
                    {/* Links Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Explorar</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Nuestra Historia</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Servicios de Sastrería</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Dry Cleaning</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Coffee Collection</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Gift Cards</Link></li>
                        </ul>
                    </div>
                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Contacto</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                                <span>Calle Suecia y Av. de los Shyris,<br />Quito, Ecuador</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">call</span>
                                <span>+593 98 740 7430</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                <span>concierge@togafashion.ec</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                <span>Lun - Sáb: 9:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>
                    {/* Map Column */}
                    <div className="h-full min-h-[200px] w-full rounded-sm overflow-hidden border border-white/10 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7987244136784!2d-78.48282522497611!3d-0.17957429981865575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a8148353481%3A0xcbdbbe5701524784!2sToga%20Fashion%20-%20Venta%2C%20Lavado%2C%20Arreglo%20o%20Confeccion%20de%20ternos%2C%20camisas%2C%20etc!5e0!3m2!1sen!2sec!4v1767761769620!5m2!1sen!2sec"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-gray-600 text-xs">© 2026 Toga Fashion. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs">Privacidad</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs">Términos</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}
