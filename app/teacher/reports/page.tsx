"use client";
import React, { useState } from 'react';
import {
  FiSearch,
  FiDownload,
  FiCheckCircle,
  FiClock,
  FiMinusCircle,
  FiChevronDown,
  FiBookOpen,
  FiX
} from 'react-icons/fi';

export default function ReportsPage() {
  // 1. ESTADOS
  const [showExportModal, setShowExportModal] = useState(false);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  // Simulación de clases asignadas al maestro
  const classes = [
    { id: 1, name: "Ingeniería de Software A", code: "ACEL-2024-X" },
    { id: 2, name: "Seguridad Industrial B", code: "SEC-2026-B" },
    { id: 3, name: "Protocolos de Redes", code: "NET-404-Z" },
  ];

  const [selectedClass, setSelectedClass] = useState(classes[0]);

  // Datos de la Matriz (Simulados por ahora)
  const reportData = [
    { id: 1, name: "Alejandro Moreno", status: "Aprobado", modules: ["complete", "complete", "progress", "pending"] },
    { id: 2, name: "Beatriz Ortiz", status: "Aprobado", modules: ["complete", "complete", "complete", "complete"] },
    { id: 3, name: "Carlos Slim", status: "Reprobado", modules: ["complete", "progress", "pending", "pending"] },
    { id: 4, name: "Daniela Ruz", status: "Aprobado", modules: ["complete", "complete", "complete", "progress"] },
    { id: 5, name: "Eduardo Pérez", status: "Aprobado", modules: ["complete", "complete", "progress", "pending"] },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">

      {/* HEADER Y SELECTOR DE CLASE */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-ubuntu font-bold text-[#081b39] italic tracking-tight">
            Reportes<span className="text-[#008cc7]">.</span>
          </h1>

          <div className="relative mt-4">
            <button
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              className="bg-white border border-[#c5c6ce]/20 px-6 py-4 rounded-[1.8rem] shadow-sm flex items-center gap-4 hover:border-[#008cc7] transition-all group"
            >
              <div className="bg-[#081b39] p-2.5 rounded-xl text-white text-xs group-hover:bg-[#008cc7] transition-colors">
                <FiBookOpen />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black uppercase text-[#c5c6ce] tracking-widest leading-none mb-1">Grupo seleccionado</p>
                <h2 className="text-sm font-bold text-[#081b39] flex items-center gap-2">
                  {selectedClass.name} <FiChevronDown className={`transition-transform ${isSelectorOpen ? 'rotate-180' : ''}`} />
                </h2>
              </div>
            </button>

            {isSelectorOpen && (
              <div className="absolute top-[115%] left-0 w-72 bg-white rounded-[2rem] shadow-2xl border border-[#f4f3f3] p-3 z-50 animate-in zoom-in-95 duration-200">
                <p className="text-[9px] font-black uppercase text-[#c5c6ce] mb-2 px-4 tracking-widest">Cambiar de Clase</p>
                {classes.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setSelectedClass(c); setIsSelectorOpen(false); }}
                    className={`w-full text-left p-4 rounded-xl text-[11px] font-bold transition-all mb-1 ${
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

        <button
          onClick={() => setShowExportModal(true)}
          className="bg-[#081b39] text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#008cc7] transition-all shadow-xl shadow-[#081b39]/10"
        >
          <FiDownload className="text-sm" /> Exportar Matriz
        </button>
      </div>

      {/* MATRIZ DE SEGUIMIENTO (SEMÁFORO) */}
      <section className="bg-white rounded-[3rem] border border-[#c5c6ce]/20 shadow-sm overflow-hidden">
        <div className="p-10 border-b border-[#f4f3f3] flex justify-between items-center bg-[#faf9f9]/50">
          <div>
            <h3 className="text-xl font-ubuntu font-bold text-[#081b39]">Matriz de Avance</h3>
            <p className="text-[10px] font-bold text-[#c5c6ce] uppercase tracking-widest mt-1">Estatus de módulos para {selectedClass.code}</p>
          </div>

          {/* LEYENDA DEL SEMÁFORO */}
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-[9px] font-black uppercase text-[#75777e] tracking-widest">
              <FiCheckCircle className="text-green-500 text-sm" /> Completado
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black uppercase text-[#75777e] tracking-widest">
              <FiClock className="text-orange-400 text-sm" /> En Proceso
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black uppercase text-[#75777e] tracking-widest">
              <FiMinusCircle className="text-[#c5c6ce] text-sm" /> Sin Iniciar
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#faf9f9] text-[9px] font-black uppercase tracking-[0.2em] text-[#c5c6ce]">
                <th className="px-10 py-6">Alumno</th>
                <th className="px-10 py-6">Estatus Final</th>
                <th className="px-6 py-6 text-center">Módulo 1</th>
                <th className="px-6 py-6 text-center">Módulo 2</th>
                <th className="px-6 py-6 text-center">Módulo 3</th>
                <th className="px-6 py-6 text-center">Módulo 4</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4f3f3]">
              {reportData.map((alumno) => (
                <tr key={alumno.id} className="group hover:bg-[#faf9f9] transition-all">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#081b39]/5 rounded-lg flex items-center justify-center text-[#081b39] font-bold text-[10px]">
                        {alumno.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-[#081b39]">{alumno.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className={`text-[8px] font-black uppercase px-4 py-1.5 rounded-full border ${
                      alumno.status === 'Aprobado'
                      ? 'bg-green-50 text-green-600 border-green-100'
                      : 'bg-red-50 text-red-600 border-red-100'
                    }`}>
                      {alumno.status}
                    </span>
                  </td>
                  {alumno.modules.map((mod, idx) => (
                    <td key={idx} className="px-6 py-6 text-center">
                      <StatusIcon type={mod} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* POP-UP DE EXPORTACIÓN (MODAL) */}
      {showExportModal && (
        <div className="fixed inset-0 bg-[#081b39]/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-white rounded-[3rem] p-12 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowExportModal(false)}
              className="absolute top-8 right-8 text-[#c5c6ce] hover:text-[#081b39] transition-colors"
            >
              <FiX size={24} />
            </button>

            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-[#008cc7]/10 text-[#008cc7] rounded-3xl flex items-center justify-center mx-auto mb-4">
                <FiDownload size={32} />
              </div>
              <h3 className="text-2xl font-ubuntu font-bold text-[#081b39]">Exportar Matriz</h3>
              <p className="text-sm text-[#75777e] mt-2 font-medium">Clase: {selectedClass.name}</p>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-6 rounded-2xl bg-[#faf9f9] border border-[#f4f3f3] hover:border-[#008cc7] hover:bg-white transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-black text-xs">PDF</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black uppercase text-[#081b39] tracking-widest">Documento PDF</p>
                    <p className="text-[10px] text-[#75777e]">Ideal para impresión</p>
                  </div>
                </div>
                <FiChevronDown className="-rotate-90 text-[#c5c6ce] group-hover:text-[#008cc7]" />
              </button>

              <button className="w-full flex items-center justify-between p-6 rounded-2xl bg-[#faf9f9] border border-[#f4f3f3] hover:border-[#008cc7] hover:bg-white transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-black text-xs">XLS</div>
                  <div className="text-left">
                    <p className="text-[11px] font-black uppercase text-[#081b39] tracking-widest">Hoja de Excel</p>
                    <p className="text-[10px] text-[#75777e]">Para análisis de datos</p>
                  </div>
                </div>
                <FiChevronDown className="-rotate-90 text-[#c5c6ce] group-hover:text-[#008cc7]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// SUBCOMPONENTE PARA EL SEMÁFORO
function StatusIcon({ type }: { type: string }) {
  if (type === 'complete') return (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100 shadow-inner">
        <FiCheckCircle className="text-green-500 text-lg" />
      </div>
    </div>
  );
  if (type === 'progress') return (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 shadow-inner animate-pulse">
        <FiClock className="text-orange-400 text-lg" />
      </div>
    </div>
  );
  return (
    <div className="flex justify-center">
      <div className="w-8 h-8 rounded-full bg-[#faf9f9] flex items-center justify-center border border-[#f4f3f3] shadow-inner">
        <FiMinusCircle className="text-[#c5c6ce] text-lg" />
      </div>
    </div>
  );
}