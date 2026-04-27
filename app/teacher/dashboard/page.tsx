"use client";
import React, { useState } from 'react';
import {
  FiMoreVertical,
  FiFilter,
  FiDownload,
  FiPlus,
  FiChevronDown,
  FiBookOpen,
  FiCopy,
  FiCheck
} from 'react-icons/fi';

export default function TeacherDashboard() {
  // 1. ESTADOS
  const classes = [
    { id: 1, name: "Ingeniería de Software A", code: "ACEL-2024-X", students: 124, rate: "87.5%" },
    { id: 2, name: "Seguridad Industrial B", code: "SEC-2026-B", students: 85, rate: "92.0%" },
    { id: 3, name: "Protocolos de Redes", code: "NET-404-Z", students: 42, rate: "75.2%" },
  ];

  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // 2. FUNCIONES
  const handleCopy = (e: React.MouseEvent, code: string) => {
    e.stopPropagation(); // Evita que se abra el dropdown al copiar
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 font-redonda animate-in fade-in duration-700">

      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-[#008cc7] rounded-full"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#008cc7]">Portal Docente Imperia</p>
          </div>
          <h1 className="text-4xl font-ubuntu font-bold text-[#081b39] italic tracking-tight">
            Dashboard<span className="text-[#008cc7]">.</span>
          </h1>
        </div>

        <button className="bg-[#081b39] text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#008cc7] transition-all shadow-xl shadow-[#081b39]/10 active:scale-95">
          <FiPlus className="text-sm" /> Registrar Alumno
        </button>
      </div>

      {/* TARJETAS SUPERIORES */}
      <div className="grid grid-cols-12 gap-6">

        {/* SELECTOR DE CLASE INTERACTIVO */}
        <div className="col-span-5 relative">
          <div
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="bg-[#081b39] h-full rounded-[2.5rem] p-8 text-white cursor-pointer hover:shadow-2xl hover:shadow-[#081b39]/20 transition-all group relative overflow-hidden"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                  <FiBookOpen /> Clase Activa
                </p>
                <FiChevronDown className={`transition-transform duration-300 ${isSelectorOpen ? 'rotate-180' : ''}`} />
              </div>

              <div>
                <h2 className="text-2xl font-ubuntu font-bold italic mb-3 truncate pr-6">
                  {selectedClass.name}
                </h2>

                <div className="flex items-center gap-3">
                  {/* BOTÓN DE COPIAR CÓDIGO */}
                  <button
                    onClick={(e) => handleCopy(e, selectedClass.code)}
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all border border-white/5 group/copy"
                  >
                    <span className="text-[11px] font-black tracking-[0.2em]">
                      {selectedClass.code}
                    </span>
                    {copied ? (
                      <FiCheck className="text-green-400 text-xs animate-bounce" />
                    ) : (
                      <FiCopy className="text-white/40 group-hover/copy:text-white text-xs transition-colors" />
                    )}
                  </button>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-[#008cc7]/20 transition-all"></div>
          </div>

          {/* DROPDOWN DE CLASES */}
          {isSelectorOpen && (
            <div className="absolute top-[105%] left-0 w-full bg-white rounded-[2rem] shadow-2xl border border-[#c5c6ce]/20 p-4 z-50 animate-in zoom-in-95 duration-200">
              <p className="text-[9px] font-black uppercase text-[#c5c6ce] mb-3 px-4 tracking-widest">Mis Grupos</p>
              {classes.map((clase) => (
                <button
                  key={clase.id}
                  onClick={() => {
                    setSelectedClass(clase);
                    setIsSelectorOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all mb-1 flex justify-between items-center ${
                    selectedClass.id === clase.id
                    ? 'bg-[#008cc7]/10 border border-[#008cc7]/20'
                    : 'hover:bg-[#faf9f9]'
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold text-[#081b39]">{clase.name}</p>
                    <p className="text-[10px] font-medium text-[#75777e]">{clase.code}</p>
                  </div>
                  {selectedClass.id === clase.id && <div className="w-2 h-2 bg-[#008cc7] rounded-full"></div>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* MÉTRICA: ALUMNOS */}
        <div className="col-span-3 bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm flex flex-col justify-between">
          <p className="text-[9px] font-black uppercase tracking-widest text-[#75777e]">Estudiantes</p>
          <div>
            <h2 className="text-5xl font-ubuntu font-bold text-[#081b39] mb-1">{selectedClass.students}</h2>
            <p className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-lg inline-block">Activos</p>
          </div>
        </div>

        {/* MÉTRICA: PROGRESO */}
        <div className="col-span-4 bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm flex flex-col justify-between">
          <p className="text-[9px] font-black uppercase tracking-widest text-[#75777e]">Progreso del Grupo</p>
          <div>
            <h2 className="text-5xl font-ubuntu font-bold text-[#081b39] mb-4">{selectedClass.rate}</h2>
            <div className="w-full bg-[#f4f3f3] h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#008cc7] h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,140,199,0.3)]"
                style={{ width: selectedClass.rate }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLA DE DIRECTORIO */}
      <section className="bg-white rounded-[3rem] border border-[#c5c6ce]/20 shadow-sm overflow-hidden">
        <div className="p-10 flex justify-between items-center border-b border-[#f4f3f3]">
          <div>
            <h3 className="text-xl font-ubuntu font-bold text-[#081b39]">Directorio de Estudiantes</h3>
            <p className="text-[10px] font-bold text-[#c5c6ce] uppercase tracking-widest mt-1">
              Visualizando registros de {selectedClass.name}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 bg-[#faf9f9] text-[#75777e] rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 border border-[#c5c6ce]/10 hover:bg-white transition-all">
              <FiFilter /> Filtrar
            </button>
            <button className="px-5 py-3 bg-[#faf9f9] text-[#75777e] rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 border border-[#c5c6ce]/10 hover:bg-white transition-all">
              <FiDownload /> Reporte
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#faf9f9] text-[9px] font-black uppercase tracking-[0.2em] text-[#c5c6ce]">
                <th className="px-10 py-6">ID Alumno</th>
                <th className="px-10 py-6">Nombre Completo</th>
                <th className="px-10 py-6">Email</th>
                <th className="px-10 py-6">Estatus</th>
                <th className="px-10 py-6 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4f3f3]">
              <StudentRow id="#STU-2212" name="Alejandro Moreno" email="a.moreno@imperia.com" status="Enrolled" color="green" />
              <StudentRow id="#STU-4409" name="Beatriz Ortiz" email="b.ortiz@imperia.com" status="Enrolled" color="green" />
              <StudentRow id="#STU-9912" name="Carlos Slim" email="c.slim@imperia.com" status="Pending" color="orange" />
              <StudentRow id="#STU-3321" name="Daniela Ruz" email="d.ruz@imperia.com" status="Enrolled" color="green" />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// COMPONENTE DE FILA (STUDENT ROW)
function StudentRow({ id, name, email, status, color }: any) {
  const statusStyles: any = {
    green: "bg-green-500/10 text-green-600 border border-green-200",
    orange: "bg-orange-500/10 text-orange-600 border border-orange-200",
  };

  return (
    <tr className="group hover:bg-[#faf9f9] transition-all">
      <td className="px-10 py-6 text-[11px] font-black text-[#081b39]">{id}</td>
      <td className="px-10 py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#081b39] rounded-[14px] flex items-center justify-center text-[11px] font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
            {name.split(' ').map((n: any) => n[0]).join('')}
          </div>
          <span className="text-sm font-bold text-[#081b39]">{name}</span>
        </div>
      </td>
      <td className="px-10 py-6 text-sm text-[#75777e] font-medium">{email}</td>
      <td className="px-10 py-6">
        <span className={`text-[8px] font-black uppercase px-4 py-1.5 rounded-full ${statusStyles[color]}`}>
          {status}
        </span>
      </td>
      <td className="px-10 py-6 text-right">
        <button className="text-[#c5c6ce] hover:text-[#081b39] p-2 transition-all">
          <FiMoreVertical />
        </button>
      </td>
    </tr>
  );
}