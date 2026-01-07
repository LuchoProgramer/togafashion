import React from 'react';

export default function Hero() {
    return (
        <header className="relative flex min-h-[85vh] w-full flex-col justify-center items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZyoKUf1g4muS0gMDFbyNQLwgpC8DpOgQIx33t6x04TJOeFRlJpq02trCKgX-pQfpHSQ6M94MX4AfQacDHMElI2-PpUQJSc7w6mM875nCn1KyxbtYdEGzSNBNTGNZPXEt7Rfgq-zAi6Ss5Va3_NLw1JKBXEUGHZ5goSAzurj9w2yHbxp4PwZwHiwCDQDK9vy2kItQwCIOPDr5LOTwCgt4u_PBEx9akONEs_af38GE4uc4jeyjTlVWIUNbyr-QqP_3vrEUgltq5FHg')" }}
                >
                </div>
            </div>
            <div className="relative z-20 layout-content-container flex flex-col max-w-[960px] px-6 text-center animate-fade-in-up">
                <span className="text-primary text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 block">
                    Sastrería • Dry Clean • Coffee
                </span>
                <h1 className="text-white text-5xl md:text-7xl font-display font-light leading-[1.1] tracking-tight mb-6">
                    Sastrería a Medida con <br />
                    <span className="italic font-normal text-gray-200">Estilo Moderno</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
                    Confección de ternos, alquiler de togas y cuidado textil experto en Quito. Elevamos su imagen personal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                    <button className="flex w-full sm:w-auto min-w-[200px] h-14 items-center justify-center rounded-none bg-primary hover:bg-[#c98b0f] transition-all text-background-dark text-base font-bold tracking-wide uppercase">
                        Agendar Cita
                    </button>
                    <button className="flex w-full sm:w-auto min-w-[200px] h-14 items-center justify-center rounded-none border border-white/30 hover:border-white hover:bg-white/5 transition-all text-white text-base font-bold tracking-wide uppercase">
                        Solicitar Recolección
                    </button>
                </div>
            </div>
        </header>
    );
}
