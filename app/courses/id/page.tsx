"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function CourseModulesPage() {
  // Datos simulados de la materia según tu ejemplo
  const courseData = {
    title: "Seguridad Industrial",
    instructor: "MTRO: ING. BARRERA",
    progress: 85,
    modules: [
      {
        id: 1,
        title: "Ergonomía Avanzada",
        lessons: ["Introducción a la Ergonomía", "Evaluación de Puestos", "Antropometría Aplicada"]
      },
      {
        id: 2,
        title: "Pausas Activas",
        lessons: ["Dinámicas de Estiramiento", "Prevención de Fatiga Visual", "Programación de Descansos"]
      },
      {
        id: 3,
        title: "ESD (Seguridad Técnica)",
        lessons: ["Fundamentos de Descarga Electrostática", "Equipamiento de Protección", "Normativas ISO"]
      }
    ]
  };

  const [openModule, setOpenModule] = useState<number | null>(1); // Módulo 1 abierto por defecto

  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        {/* Header de la Materia */}
        <header className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.3em] mb-2">Materia</h2>
              <h1 className="text-4xl font-ubuntu font-bold text-[#081b39]">{courseData.title}</h1>
              <p className="text-[#75777e] text-xs mt-2 font-bold tracking-widest">{courseData.instructor}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-[#008cc7]">{courseData.progress}%</span>
              <div className="w-48 h-2 bg-[#e3e2e2] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#008cc7] transition-all" style={{ width: `${courseData.progress}%` }}></div>
              </div>
            </div>
          </div>
        </header>

        {/* Lista de Módulos */}
        <div className="max-w-4xl space-y-4">
          <h3 className="text-[11px] font-black text-[#081b39] uppercase tracking-widest mb-6 pb-2 border-b border-[#c5c6ce]/30">Estructura del Curso</h3>

          {courseData.modules.map((module) => (
            <div key={module.id} className="bg-white rounded-[2rem] border border-[#c5c6ce]/20 overflow-hidden shadow-sm transition-all hover:shadow-md">
              {/* Encabezado del Módulo */}
              <button
                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                className={`w-full p-8 flex justify-between items-center transition-colors ${openModule === module.id ? 'bg-[#081b39] text-white' : 'text-[#081b39] hover:bg-[#f4f3f3]'}`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-xl font-black italic ${openModule === module.id ? 'text-[#008cc7]' : 'text-[#c5c6ce]'}`}>
                    0{module.id}
                  </span>
                  <h4 className="text-lg font-bold font-ubuntu tracking-tight">{module.title}</h4>
                </div>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openModule === module.id ? 'rotate-180 text-[#008cc7]' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Lista de Lecciones (Subtemas) */}
              {openModule === module.id && (
                <div className="p-8 space-y-3 bg-white">
                  {module.lessons.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="group flex justify-between items-center p-4 rounded-2xl hover:bg-[#faf9f9] border border-transparent hover:border-[#008cc7]/20 transition-all cursor-pointer"
                      onClick={() => window.location.href = `/lesson`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#f4f3f3] flex items-center justify-center text-[#081b39] text-[10px] font-bold group-hover:bg-[#008cc7] group-hover:text-white transition-colors">
                          {idx + 1}
                        </div>
                        <span className="text-sm font-medium text-[#44474e] group-hover:text-[#081b39] transition-colors">{lesson}</span>
                      </div>
                      <span className="material-symbols-outlined text-[#c5c6ce] text-sm group-hover:text-[#008cc7] group-hover:translate-x-1 transition-all">
                        arrow_forward_ios
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}