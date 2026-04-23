"use client";
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="h-screen bg-[#040d1a] text-white font-redonda overflow-hidden relative flex flex-col">

      {/* DECORACIÓN DE FONDO (Efectos de luz sutiles para no distraer) */}
      <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-[#008cc7]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[35%] h-[35%] bg-[#46178f]/10 blur-[120px] rounded-full"></div>

      {/* BARRA SUPERIOR (Compacta para ahorrar espacio vertical) */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          {/* 1. LOGO INTEGRADO (imperia.png desde /public) */}
          <div className="w-10 h-10 shrink-0 overflow-hidden rounded-xl rotate-3 shadow-[0_0_20px_rgba(0,140,199,0.3)] border border-white/5">
            <img
              src="/imperialight.png"
              alt="Imperia Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-black tracking-tighter italic uppercase text-white/90">Imperia</span>
        </div>

        {/* Botón de Empresa/Instituciones (Estilo Glassmorphism compacto) */}
        <button className="group relative px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#081b39] transition-all duration-500">
          <span className="flex items-center gap-1.5">
            Instituciones y Empresas
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </span>
        </button>
      </nav>

      {/* SECCIÓN CENTRAL (Todo el contenido "Above the Fold") */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">

        {/* Badge Ambiguo (Reducido) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 mt-[-40px]">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#008cc7]">Evoluciona tu forma de aprender</span>
        </div>

        {/* Título Principal (Compacto pero Impactante con font-ubuntu) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-ubuntu tracking-tight mb-6 leading-[0.95] max-w-4xl">
          El siguiente nivel del <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cc7] to-[#89ceff]">Conocimiento</span> <br />
          impulsado por IA.
        </h1>

        {/* Párrafo Descriptivo (Más corto para ahorrar espacio) */}
        <p className="max-w-xl text-[#75777e] text-base md:text-lg mb-10 leading-relaxed font-medium">
          Aula o industria, Imperia transforma la capacitación en una experiencia de simulación inmersiva y de alto rendimiento para el talento del futuro.
        </p>

        {/* BOTONES PRINCIPALES (Grandes y claros) */}
        <div className="flex flex-col sm:flex-row gap-5 items-center mb-16">
          <Link href="/login">
            <button className="min-w-[200px] px-8 py-4 bg-[#008cc7] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(0,140,199,0.25)]">
              Acceder al Portal
            </button>
          </Link>

          <Link href="/register">
            <button className="min-w-[200px] px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all">
              Crear una cuenta
            </button>
          </Link>
        </div>

        {/* VISTA PREVIA DEL SISTEMA (Compacta y enmarcada para caber en una pantalla) */}
        <div className="absolute bottom-[-100px] left-1/2 translate-x-[-50%] max-w-5xl w-full">
          <div className="p-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.5rem]">
            <div className="bg-[#081b39]/20 backdrop-blur-3xl rounded-t-[2.5rem] h-48 border-x border-t border-white/10 flex items-center justify-center overflow-hidden">
               {/* Un patrón de rejilla futurista muy sutil */}
               <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#008cc7 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

               {/* El icono principal flotando */}
               <span className="material-symbols-outlined text-[90px] text-white/10 animate-pulse relative z-20">
                 hub
               </span>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER (Oculto o muy minimalista para cumplir con el diseño single-screen) */}
      <footer className="relative z-10 py-5 px-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#75777e]">
          <span className="text-white">© 2026 Imperia Systems</span>
          <div className="flex gap-6 opacity-60">
            <span className="hover:text-white cursor-pointer transition-colors">Términos</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacidad</span>
          </div>
      </footer>

    </div>
  );
}