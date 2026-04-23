"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

function RedirectModal({ isOpen, onClose, target, url }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[#081b39]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-[#c5c6ce]/20">
        <span className="material-symbols-outlined text-[#ba1a1a] text-5xl mb-4">open_in_new</span>
        <h3 className="text-xl font-bold text-[#081b39] font-ubuntu mb-2">Estás saliendo de Imperia</h3>
        <p className="text-sm text-[#75777e] mb-8">Te vamos a redirigir a <strong>{target}</strong> para completar esta actividad.</p>
        <div className="flex flex-col gap-3">
          <a href={url} target="_blank" rel="noopener noreferrer" className="py-3 bg-[#081b39] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#008cc7] transition-all">
            Continuar
          </a>
          <button onClick={onClose} className="py-3 text-[#75777e] font-bold text-[10px] uppercase hover:text-[#081b39]">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LessonPage() {
    const [volume, setVolume] = React.useState(50);
    const [isMuted, setIsMuted] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false); // De una vez para el Play/
    const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      {/* Contenido Principal */}
      <main className="flex-1 ml-64 p-8 flex gap-8">

        {/* COLUMNA IZQUIERDA: Video y Lectura */}
        <div className="flex-1 max-w-4xl">
          {/* Header de Navegación */}
          <nav className="flex items-center gap-2 text-[10px] font-bold text-[#75777e] uppercase tracking-widest mb-6">
            <Link href="/dashboard" className="hover:text-[#081b39]">Dashboard</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-[#081b39]">Seguridad Industrial</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-[#081b39]">Introducción al módulo</span>
          </nav>

          {/* Reproductor de Video */}
          <div className="w-full aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden relative group border-4 border-[#081b39]/5">
            <div className="absolute inset-0 flex items-center justify-center bg-[#081b39]/20 group-hover:bg-transparent transition-all">
              <span className="material-symbols-outlined text-white text-7xl opacity-80 group-hover:scale-110 transition-transform cursor-pointer">
                play_circle
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
              <div className="h-full bg-[#008cc7] w-1/3"></div>
            </div>
          </div>

            {/* Reproductor de Podcast Minimalista e Interactivo */}
            <div className="mt-4 bg-[#f4f3f3]/50 border border-[#c5c6ce]/20 rounded-xl p-3 flex items-center gap-4 group hover:bg-white transition-all duration-300">

              <button className="w-10 h-10 bg-white border border-[#c5c6ce]/30 rounded-full flex items-center justify-center text-[#081b39] shadow-sm hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[24px] fill-current">play_arrow</span>
              </button>

              <div className="flex-1 flex items-center gap-4">
                <div className="shrink-0">
                  <p className="text-[10px] font-bold text-[#081b39] uppercase tracking-wider">Audio-Resumen</p>
                  <p className="text-[9px] text-[#75777e] font-medium">12:45 min</p>
                </div>

                {/* Barra de Progreso (Lectura) */}
                <div className="flex-1 h-1 bg-[#081b39]/10 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-[#008cc7] rounded-full"></div>
                </div>

                {/* Controles de Salto y VOLUMEN INTERACTIVO */}
                <div className="flex items-center gap-3 text-[#75777e]">
                  <button className="hover:text-[#081b39] transition-colors">
                    <span className="material-symbols-outlined text-[18px]">replay_10</span>
                  </button>

                  <div className="flex items-center gap-2 group/vol relative">
                    <button onClick={() => setIsMuted(!isMuted)} className="hover:text-[#081b39] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        {isMuted || volume === 0 ? 'volume_off' : volume < 50 ? 'volume_down' : 'volume_up'}
                      </span>
                    </button>

                    {/* Slider de Volumen (Aparece al hacer hover en el icono) */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="w-16 h-1 bg-[#081b39]/10 rounded-full appearance-none cursor-pointer accent-[#008cc7] transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

          {/* Texto de la Lección */}
          <div className="mt-10 space-y-6">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.2em]">Módulo 02 • Core Foundations</span>
                <h1 className="text-4xl font-bold text-[#081b39] font-ubuntu mt-2 leading-tight">
                  Principios Avanzados de Seguridad Técnica
                </h1>
              </div>

              {/* Barra de Herramientas de la Lección */}
              {/* Barra de Herramientas de la Lección */}
              <div className="flex flex-wrap justify-center gap-4 bg-white/50 p-6 rounded-3xl border border-[#c5c6ce]/10">

                {/* 1. GRIS - Recursos PDF */}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f4f3f3] text-[#081b39] rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#d7e2ff] transition-all border border-[#c5c6ce]/20 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                  Recursos PDF
                </button>

                {/* 2. AZUL (IMPERIA) - IA */}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#081b39] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#008cc7] transition-all shadow-md shadow-[#081b39]/10">
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  Abrir ImperiaGPT
                </button>

                {/* 3. MORADO - Kahoot */}
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#46178f] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#331069] transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  Unirse al Kahoot
                </button>

                {/* 4. GRIS - Mapa Conceptual */}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f4f3f3] text-[#081b39] rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#d7e2ff] transition-all border border-[#c5c6ce]/20 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">account_tree</span>
                  Mapa Conceptual
                </button>

                {/* 5. MORADO - Presentación */}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#46178f] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#331069] transition-all shadow-md">
                  <span className="material-symbols-outlined text-[18px]">present_to_all</span>
                  Presentación
                </button>

                {/* 6. MORADO - Ideas Principales */}
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#081b39] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-[#331069] transition-all shadow-md">
                  <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                  Ideas Principales
                </button>
              </div>
            </div>

            <div className="prose prose-slate max-w-none pt-6">
              <p className="text-lg font-medium text-[#44474e] leading-relaxed italic border-l-4 border-[#008cc7] pl-6 py-2">
                "La seguridad técnica no es solo cumplir normas; es construir sistemas que protejan el capital humano mediante la ingeniería preventiva."
              </p>
              <p className="text-[#1a1c1c] leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className="text-xl font-bold text-[#081b39] font-ubuntu pt-4">Análisis de Riesgos ESD</h3>
              <p className="text-[#1a1c1c] leading-loose">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Banner de Evaluación */}
            <div className="mt-12 p-8 bg-[#081b39] rounded-2xl text-white flex justify-between items-center shadow-lg">
              <div>
                <h4 className="text-lg font-bold font-ubuntu mb-1">¿Lista para validar tus conocimientos?</h4>
                <p className="text-white/60 text-xs">Completa el examen del módulo para ganar tu insignia.</p>
              </div>
              <Link href="/exam-intro">
                <button className="px-8 py-3 bg-[#008cc7] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#89ceff] transition-all cursor-pointer">
                  Tomar Examen
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Sidebar de la Lección y AVATAR */}
        <div className="w-80 space-y-6">
          <div className="bg-white rounded-2xl border border-[#c5c6ce]/30 shadow-sm overflow-hidden flex flex-col h-[400px]">
            <div className="p-4 border-b border-[#f4f3f3] flex justify-between items-center">
              <span className="text-[10px] font-black text-[#081b39] uppercase tracking-widest italic">Imperia AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <div className="flex-1 bg-[#e3e2e2] flex items-center justify-center relative">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-[#081b39]/20 animate-bounce">psychology</span>
                <p className="text-[10px] font-bold text-[#081b39]/40 uppercase tracking-[0.3em] mt-4">Avatar</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-[#081b39]/10 text-[10px] shadow-xl">
                <p className="text-[#081b39]">"Alejandra, ¿tienes alguna duda sobre el <strong>Análisis ESD</strong>?"</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#c5c6ce]/30 shadow-sm">
            <h5 className="text-[10px] font-bold text-[#44474e] uppercase tracking-widest mb-4">Contenido del Curso</h5>
            <div className="space-y-4">
              <LessonItem title="Introducción al Módulo" active done />
              <LessonItem title="Seguridad Técnica Avanzada" active />
              <LessonItem title="Prácticas de Ergonomía" />
              <LessonItem title="Cierre de Módulo" />
            </div>
          </div>
                  </div>

                  {/* LLAMADA AL MODAL */}
                  <RedirectModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    target="Kahoot"
                    url="https://kahoot.it"
                  />
                </main>
              </div>
            );
          }

function LessonItem({ title, active = false, done = false }: any) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${active ? 'bg-[#f4f3f3] border border-[#c5c6ce]/20' : 'hover:bg-[#f4f3f3]/50'}`}>
      <span className={`material-symbols-outlined text-[18px] ${done ? 'text-green-600' : 'text-[#c5c6ce]'}`}>
        {done ? 'check_circle' : 'play_circle'}
      </span>
      <span className={`text-[11px] font-bold ${active ? 'text-[#081b39]' : 'text-[#75777e]'}`}>{title}</span>
    </div>
  );
}