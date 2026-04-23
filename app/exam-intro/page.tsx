"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function ExamIntro() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 flex items-center justify-center p-12">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-12 border border-[#c5c6ce]/20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] text-center">

          {/* Icono de Alerta */}
          <div className="w-20 h-20 bg-[#d7e2ff] rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-[#081b39] text-4xl">history_edu</span>
          </div>

          <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.4em] mb-3">Protocolo de Evaluación</h2>
          <h1 className="text-3xl font-bold text-[#081b39] font-ubuntu mb-6">¿Estás lista para comenzar?</h1>

          <p className="text-[#75777e] leading-relaxed mb-10 text-sm">
            Estás a punto de iniciar el examen de <strong>Seguridad Técnica y Riesgos ESD</strong>.
            Una vez que comiences, el temporizador no se detendrá. Asegúrate de estar en un entorno tranquilo.
          </p>

          {/* Detalles Técnicos */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="p-4 bg-[#f4f3f3] rounded-2xl">
              <p className="text-[9px] font-bold text-[#75777e] uppercase mb-1">Tiempo</p>
              <p className="text-sm font-bold text-[#081b39]">15 Minutos</p>
            </div>
            <div className="p-4 bg-[#f4f3f3] rounded-2xl">
              <p className="text-[9px] font-bold text-[#75777e] uppercase mb-1">Preguntas</p>
              <p className="text-sm font-bold text-[#081b39]">10 Reactivos</p>
            </div>
            <div className="p-4 bg-[#f4f3f3] rounded-2xl">
              <p className="text-[9px] font-bold text-[#75777e] uppercase mb-1">Aprobación</p>
              <p className="text-sm font-bold text-[#081b39]">80% Mínimo</p>
            </div>
          </div>

          {/* Advertencias */}
          <div className="bg-[#ffdad6] p-4 rounded-xl flex items-start gap-3 text-left mb-10 border border-[#ba1a1a]/10">
            <span className="material-symbols-outlined text-[#ba1a1a] text-sm mt-0.5">warning</span>
            <p className="text-[11px] text-[#ba1a1a] font-medium leading-tight">
              Si sales de la pestaña o recargas la página, el progreso se guardará automáticamente pero el tiempo seguirá corriendo.
            </p>
          </div>

          {/* Acciones */}
          <div className="flex gap-4">
            <Link href="/lesson" className="flex-1">
              <button className="w-full py-4 px-6 rounded-2xl border-2 border-[#f4f3f3] text-[#75777e] font-bold text-[10px] uppercase tracking-widest hover:bg-[#f4f3f3] transition-all">
                Regresar a la lección
              </button>
            </Link>

            <Link href="/exam" className="flex-[1.5]">
              <button className="w-full py-4 px-6 rounded-2xl bg-[#081b39] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/20">
                ¡Entendido, Comenzar!
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}