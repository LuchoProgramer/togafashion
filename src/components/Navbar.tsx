import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-md">
            <div className="px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between max-w-[1400px] mx-auto">
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo-mark.png"
                        alt="Toga Fashion Mark"
                        width={40}
                        height={40}
                        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <Image
                        src="/logo-text.png"
                        alt="Toga Fashion Text"
                        width={120}
                        height={24}
                        className="hidden sm:block h-8 w-auto object-contain mt-1"
                    />
                </Link>
                <div className="hidden lg:flex items-center gap-10">
                    <Link href="#servicios" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Servicios</Link>
                    <Link href="#experiencia" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Experiencia</Link>
                    <Link href="#testimonios" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">Testimonios</Link>
                </div>
                <button className="hidden sm:flex items-center justify-center rounded-none bg-primary hover:bg-yellow-600 transition-colors h-10 px-6 text-background-dark text-sm font-bold uppercase tracking-wider">
                    Agendar Cita
                </button>
                {/* Mobile Menu Icon */}
                <button className="lg:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
}
