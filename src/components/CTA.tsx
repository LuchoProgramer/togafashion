import React from 'react';

export default function CTA() {
    return (
        <section className="py-20 px-6 bg-primary">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[#181611] text-3xl md:text-5xl font-display font-bold mb-6">¿Listo para elevar su estilo?</h2>
                <p className="text-[#181611]/80 text-lg mb-8 font-medium">Reserve su cita hoy y descubra la diferencia de Toga Fashion.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-[#181611] text-white px-8 py-4 rounded-none text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors">
                        Agendar Visita
                    </button>
                    <a
                        href="https://wa.me/593987407430?text=Hola,%20me%20gustaría%20más%20información%20sobre%20sus%20servicios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-[#181611] text-[#181611] px-8 py-4 rounded-none text-sm font-bold uppercase tracking-wider hover:bg-[#181611] hover:text-white transition-colors inline-block"
                    >
                        Contactar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
