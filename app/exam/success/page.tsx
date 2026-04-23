"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function ExamSuccessPage() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center">

          {/* Icono de Éxito Animado */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[#008cc7]/10 rounded-full animate-ping"></div>
            <div className="relative w-24 h-24 bg-white border-4 border-[#008cc7] rounded-full flex items-center justify-center shadow-xl">
              <span className="material-symbols-outlined text-[#008cc7] text-5xl font-bold">
                task_alt
              </span>
            </div>
          </div>

          {/* Mensaje Principal */}
          <h1 className="text-4xl font-bold text-[#081b39] font-ubuntu mb-4">
            ¡Examen Enviado con Éxito!
          </h1>
          <p className="text-[#75777e] text-lg mb-10 leading-relaxed max-w-md mx-auto">
            Tu evaluación sobre <strong>Seguridad Técnica</strong> ha sido procesada. Tu calificación se reflejará en tu perfil en unos momentos.
          </p>

          {/* Tarjeta de Resumen Rápido */}
          <div className="bg-white rounded-3xl p-8 border border-[#c5c6ce]/20 shadow-sm mb-10 flex justify-around items-center max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest mb-1">Preguntas</p>
              <p className="text-2xl font-bold text-[#081b39]">10/10</p>
            </div>
            <div className="w-px h-10 bg-[#f4f3f3]"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest mb-1">Tiempo</p>
              <p className="text-2xl font-bold text-[#081b39]">12:45</p>
            </div>
            <div className="w-px h-10 bg-[#f4f3f3]"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest mb-1">Estado</p>
              <span className="text-[10px] font-black bg-green-100 text-green-700 px-3 py-1 rounded-full uppercase italic">
                Entregado
              </span>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#081b39] text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/20">
                Volver al Dashboard
              </button>
            </Link>

            {/* ENLACE A LA REVISIÓN HABILITADO */}
            <Link href="/exam/review">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#081b39] border border-[#c5c6ce]/30 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#f4f3f3] transition-all">
                Revisar Respuestas
              </button>
            </Link>
          </div>

          {/* Mensaje de DragonIA */}
          <div className="mt-12 flex items-center justify-center gap-3 text-[#008cc7]">
             <span className="material-symbols-outlined text-xl">auto_awesome</span>
             <p className="text-[11px] font-medium italic">"Gran trabajo. Tu constancia es la clave del dominio técnico." — DragonIA</p>
          </div>

        </div>
      </main>
    </div>
  );
}