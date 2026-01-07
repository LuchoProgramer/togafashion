import React from 'react';

export default function Testimonials() {
    return (
        <section className="py-24 bg-background-dark text-center" id="testimonios">
            <div className="max-w-[1200px] mx-auto px-6">
                <p className="text-gray-500 text-xs font-bold tracking-[0.25em] uppercase mb-12">Confían en Nosotros</p>
                {/* Logos Grid - Modified for Ecuador Context */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 mb-20 text-white font-display font-bold text-xl md:text-2xl">
                    <span>COLEGIO AMERICANO</span>
                    <span>COLEGIO EINSTEIN</span>
                    <span>USFQ</span>
                    <span>BANCO PICHINCHA</span>
                </div>
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center">
                        <div className="mb-6 text-primary">
                            <span className="material-symbols-outlined">format_quote</span>
                        </div>
                        <p className="text-gray-200 font-display text-xl italic leading-relaxed mb-6">
                            "La atención es personalizada y me ayudaron el mismo día con algo express ya que no contaba con tiempo. ¡Vale la pena visitarlo!"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
                                <span className="text-gray-300 text-[10px] font-medium tracking-wider uppercase">Google Review</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white font-bold text-sm tracking-wide">Yaguana Viviana</span>
                                <span className="material-symbols-outlined text-green-500 text-sm" title="Verificado">verified</span>
                            </div>
                            <div className="flex text-primary text-xs mt-1">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-6 text-primary">
                            <span className="material-symbols-outlined">format_quote</span>
                        </div>
                        <p className="text-gray-200 font-display text-xl italic leading-relaxed mb-6">
                            "Prestigiosa tienda de ropa elegante, confección a medida de trajes de gala y vestidos."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
                                <span className="text-gray-300 text-[10px] font-medium tracking-wider uppercase">Local Guide</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white font-bold text-sm tracking-wide">Alberto Soto</span>
                                <span className="material-symbols-outlined text-green-500 text-sm" title="Verificado">verified</span>
                            </div>
                            <div className="flex text-primary text-xs mt-1">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="mb-6 text-primary">
                            <span className="material-symbols-outlined">format_quote</span>
                        </div>
                        <p className="text-gray-200 font-display text-xl italic leading-relaxed mb-6">
                            "Excelente trabajo, servicio y atención recomendado."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
                                <span className="text-gray-300 text-[10px] font-medium tracking-wider uppercase">Google Review</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white font-bold text-sm tracking-wide">Nelson Rueda</span>
                                <span className="material-symbols-outlined text-green-500 text-sm" title="Verificado">verified</span>
                            </div>
                            <div className="flex text-primary text-xs mt-1">
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                                <span className="material-symbols-outlined text-[14px]">star</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
