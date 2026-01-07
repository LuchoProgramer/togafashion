import React from 'react';
import Link from 'next/link';

export default function ServicesGrid() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-background-dark relative" id="servicios">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Nuestros Servicios</h2>
                        <h3 className="text-white text-4xl md:text-5xl font-display font-medium">Cuidado Integral para el Caballero Moderno</h3>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm leading-relaxed text-right md:text-left hidden md:block">
                        Un ecosistema de servicios diseñado para elevar su estilo de vida y cuidar de su imagen con los más altos estándares.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Service 1 */}
                    <div className="group relative flex flex-col p-8 md:p-10 border border-white/5 bg-[#16191e] hover:border-primary/50 transition-colors duration-300">
                        <div className="mb-8 p-3 w-fit bg-primary/10 text-primary">
                            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>checkroom</span>
                        </div>
                        <h4 className="text-white text-2xl font-display font-medium mb-4">Confección a Medida</h4>
                        <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                            Trajes, camisas y abrigos confeccionados con las mejores telas inglesas e italianas. Un ajuste perfecto garantizado por nuestros maestros sastres.
                        </p>
                        <Link href="#" className="text-white text-sm font-bold tracking-wider uppercase group-hover:text-primary transition-colors flex items-center gap-2">
                            Ver Catálogo <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>
                    {/* Service 2 */}
                    <div className="group relative flex flex-col p-8 md:p-10 border border-white/5 bg-[#16191e] hover:border-primary/50 transition-colors duration-300">
                        <div className="mb-8 p-3 w-fit bg-primary/10 text-primary">
                            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>dry_cleaning</span>
                        </div>
                        <h4 className="text-white text-2xl font-display font-medium mb-4">Dry Clean Experto</h4>
                        <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                            Tecnología ecológica y procesos artesanales para la limpieza y restauración de sus prendas más delicadas. Tratamos cada fibra con respeto.
                        </p>
                        <Link href="#" className="text-white text-sm font-bold tracking-wider uppercase group-hover:text-primary transition-colors flex items-center gap-2">
                            Precios y Servicios <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>
                    {/* Service 3 */}
                    <div className="group relative flex flex-col p-8 md:p-10 border border-white/5 bg-[#16191e] hover:border-primary/50 transition-colors duration-300">
                        <div className="mb-8 p-3 w-fit bg-primary/10 text-primary">
                            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>storefront</span>
                        </div>
                        <h4 className="text-white text-2xl font-display font-medium mb-4">Coffee Collection</h4>
                        <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                            Elevamos su ritual matutino. Adquiera nuestra exclusiva selección de café de altura en grano o molido. El complemento perfecto para el caballero que aprecia la calidad en casa.
                        </p>
                        <Link href="#" className="text-white text-sm font-bold tracking-wider uppercase group-hover:text-primary transition-colors flex items-center gap-2">
                            Ver Selección <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
