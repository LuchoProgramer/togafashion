import React from 'react';

export default function ValueProposition() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-y border-white/5" id="experiencia">
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    data-alt="Close up texture of luxury dark wool fabric with measuring tape"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxwOSkHVkOVvaW5G5r270Ds-vt27WGIgdqheQyghviW8kv72UdavMkqWyPQ_4qou155yZbIXNVoy2qBXdcy4rMr9nFOSjMoIFl7Rw5pMhwl1tf9pBzwUY_EBGtvPXb4nZw3aZ8sNqJz6S32abf_-vq-M423Dfc7CcSrvQ2R7A_qJ0S8fjeFQvwSiAC29zJZdRWtQlKUO2tO4bNHART8TkpTSHld6zcWcLT6ZKJCEzB-gTb7_0qKFE7XFg_zE3V5O_QlU_Lqg3cjHc')" }}
                >
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="flex flex-col justify-center bg-[#13151a] p-10 md:p-20 lg:p-24">
                <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">La Experiencia Toga</span>
                <h2 className="text-white text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
                    Más que una sastrería, <br /> <span className="text-gray-400 italic">un refugio de buen gusto.</span>
                </h2>
                <div className="w-20 h-0.5 bg-primary mb-8"></div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-8">
                    En Toga Fashion, entendemos que el tiempo es el activo más valioso del caballero moderno. Por ello, hemos unificado la maestría de la sastrería clásica con la conveniencia de servicios premium.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-10">
                    Cada visita es una oportunidad para desconectar del ruido de la ciudad, disfrutar de una conversación significativa y asegurar que su imagen proyecte exactamente lo que usted desea.
                </p>
                <button className="self-start rounded-none border border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-4 text-sm font-bold uppercase tracking-wider">
                    Conocer Nuestra Historia
                </button>
            </div>
        </section>
    );
}
