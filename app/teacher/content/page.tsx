"use client";
import React, { useState } from 'react';
import {
  FiBookOpen,
  FiChevronDown,
  FiPlayCircle,
  FiFileText,
  FiEye,
  FiClock,
  FiInfo,
  FiChevronRight
} from 'react-icons/fi';

export default function TeacherContentPage() {
  // 1. ESTADOS
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  // Simulación de clases con diferente cantidad de módulos
  const classes = [
    { id: 1, name: "Ingeniería de Software A", code: "ACEL-2024-X", modulesCount: 4 },
    { id: 2, name: "Seguridad Industrial B", code: "SEC-2026-B", modulesCount: 6 },
    { id: 3, name: "Protocolos de Redes", code: "NET-404-Z", modulesCount: 3 },
  ];

  const [selectedClass, setSelectedClass] = useState(classes[0]);

  // Simulación de módulos cargados por el SuperAdmin
  const modulos = [
    {
      id: 1,
      title: "Introducción al Framework Corporativo",
      duration: "15 min",
      type: "Video",
      description: "Conceptos básicos sobre la arquitectura y flujo de trabajo."
    },
    {
      id: 2,
      title: "Guía de Estilo y UI Imperia",
      duration: "45 min",
      type: "Lectura",
      description: "Documentación oficial sobre el sistema de diseño y componentes."
    },
    {
      id: 3,
      title: "Seguridad y Manejo de Sesiones",
      duration: "1h 10 min",
      type: "Video",
      description: "Mejores prácticas para la autenticación y protección de datos."
    },
    {
      id: 4,
      title: "Despliegue y CI/CD",
      duration: "30 min",
      type: "Lectura",
      description: "Procesos de automatización para subida a producción."
    },
  ];

  return (
    <div className="max-w-6xl space-y-8 animate-in fade-in duration-700">

      {/* HEADER CON SELECTOR DINÁMICO */}
      <div className="flex justify-between items-center bg-white p-10 rounded-[3rem] border border-[#c5c6ce]/20 shadow-sm">
        <div>
          <h1 className="text-3xl font-ubuntu font-bold text-[#081b39]">Contenido del Curso</h1>
          <p className="text-[11px] font-bold text-[#75777e] uppercase tracking-widest mt-1">
            Material de referencia para {selectedClass.code}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="flex items-center gap-4 bg-[#faf9f9] px-6 py-4 rounded-[1.8rem] border border-[#f4f3f3] font-bold text-sm text-[#081b39] hover:bg-white hover:shadow-md transition-all group"
          >
            <div className="bg-[#008cc7] p-2 rounded-lg text-white">
              <FiBookOpen size={16} />
            </div>
            {selectedClass.name}
            <FiChevronDown className={`transition-transform duration-300 ${isSelectorOpen ? 'rotate-180' : ''}`} />
          </button>

          {isSelectorOpen && (
            <div className="absolute top-[110%] right-0 w-72 bg-white rounded-[2rem] shadow-2xl border border-[#f4f3f3] p-3 z-50 animate-in zoom-in-95 duration-200">
              <p className="text-[9px] font-black uppercase text-[#c5c6ce] mb-3 px-4 tracking-widest">Seleccionar Grupo</p>
              {classes.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setSelectedClass(c); setIsSelectorOpen(false); }}
                  className={`w-full text-left p-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all mb-1 ${
                    selectedClass.id === c.id ? 'bg-[#008cc7]/10 text-[#008cc7]' : 'text-[#081b39] hover:bg-[#faf9f9]'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* LISTA DE MÓDULOS */}
      <div className="grid gap-6">
        {modulos.map((modulo) => (
          <div
            key={modulo.id}
            className="bg-white p-8 rounded-[2.5rem] border border-[#c5c6ce]/20 flex items-center justify-between hover:border-[#008cc7]/40 hover:shadow-xl hover:shadow-[#008cc7]/5 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center gap-8 relative z-10">
              {/* Icono dinámico según tipo */}
              <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all ${
                modulo.type === "Video"
                ? "bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                : "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white"
              }`}>
                {modulo.type === "Video" ? <FiPlayCircle size={28} /> : <FiFileText size={28} />}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#008cc7]">
                    Módulo 0{modulo.id}
                  </span>
                  <span className="w-1 h-1 bg-[#c5c6ce] rounded-full"></span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#75777e]">
                    {modulo.type}
                  </span>
                </div>
                <h3 className="text-xl font-ubuntu font-bold text-[#081b39] group-hover:text-[#008cc7] transition-colors">
                  {modulo.title}
                </h3>
                <p className="text-sm text-[#75777e] font-medium mt-1 opacity-80">{modulo.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 relative z-10">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase text-[#c5c6ce] tracking-widest">Duración est.</p>
                <p className="text-sm font-bold text-[#081b39] flex items-center gap-2 justify-end">
                  <FiClock className="text-[#008cc7]" /> {modulo.duration}
                </p>
              </div>

              <button className="bg-[#081b39] text-white p-4 rounded-2xl hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/10 group-hover:scale-105 active:scale-95">
                <FiEye size={20} />
              </button>
            </div>

            {/* Decoración de fondo suave */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#faf9f9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* BANNER INFORMATIVO (3.1 - Nota de Referencia) */}
      <div className="bg-[#081b39] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-[#081b39]/20">
        <div className="relative z-10 flex items-start gap-6">
          <div className="bg-white/10 p-4 rounded-2xl">
            <FiInfo size={24} className="text-[#008cc7]" />
          </div>
          <div>
            <h4 className="text-lg font-ubuntu font-bold italic mb-2">Panel de Referencia</h4>
            <p className="text-sm text-white/70 font-medium leading-relaxed max-w-2xl">
              Este apartado muestra exclusivamente el material didáctico cargado por el <span className="text-[#008cc7] font-bold">SuperAdmin</span>.
              Como docente, puedes previsualizar el contenido para guiar a tus alumnos, pero la edición de módulos y exámenes está restringida al administrador del sistema.
            </p>
          </div>
        </div>

        {/* Círculos decorativos de fondo */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute right-20 -top-20 w-40 h-40 bg-[#008cc7]/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}