"use client";
import React, { useState } from 'react';
import {
  FiUsers, FiSettings, FiArchive, FiClock,
  FiMoreVertical, FiUserX, FiBarChart2, FiArrowRight
} from 'react-icons/fi';

export default function MisClases() {
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [showSettings, setShowSettings] = useState(false);

  // Datos de ejemplo para tus clases
  const [myClasses, setMyClasses] = useState([
    { id: 1, name: "Ingeniería de Software A", code: "ACEL-2024-X", studentsCount: 124, endDate: "2024-12-15", status: "Active" },
    { id: 2, name: "Seguridad Industrial B", code: "SEC-2026-B", studentsCount: 85, endDate: "2024-11-20", status: "Active" },
    { id: 3, name: "Protocolos de Redes", code: "NET-404-Z", studentsCount: 42, endDate: "2025-01-10", status: "Active" },
  ]);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-ubuntu font-bold text-[#081b39]">Mis Clases</h1>
          <p className="text-[11px] font-bold text-[#75777e] uppercase tracking-widest mt-1">
            Gestión de grupos y desvinculación automática
          </p>
        </div>
      </div>

      {/* 1.1 VISUALIZACIÓN DE GRUPOS (TARJETAS) */}
      {!selectedClass ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myClasses.map((clase) => (
            <div key={clase.id} className="bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm hover:shadow-xl hover:border-[#008cc7]/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#081b39]/5 p-3 rounded-2xl text-[#081b39]">
                  <FiUsers className="text-xl" />
                </div>
                <span className="text-[9px] font-black uppercase px-3 py-1 bg-green-100 text-green-600 rounded-full">
                  {clase.status}
                </span>
              </div>

              <h3 className="text-xl font-ubuntu font-bold text-[#081b39] mb-2">{clase.name}</h3>
              <p className="text-[10px] font-black text-[#008cc7] tracking-[0.2em] mb-6">CÓDIGO: {clase.code}</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-[11px] text-[#75777e] font-medium">
                  <FiClock /> Cierre: {clase.endDate}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#75777e] font-medium">
                  <FiUsers /> {clase.studentsCount} Alumnos inscritos
                </div>
              </div>

              <button
                onClick={() => setSelectedClass(clase)}
                className="w-full py-4 bg-[#faf9f9] group-hover:bg-[#081b39] group-hover:text-white text-[#081b39] rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                Administrar Clase <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* VISTA DETALLE DE LA CLASE SELECCIONADA */
        <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
          <button
            onClick={() => {setSelectedClass(null); setShowSettings(false);}}
            className="text-[10px] font-black uppercase tracking-widest text-[#75777e] hover:text-[#081b39] flex items-center gap-2"
          >
            ← Volver a mis clases
          </button>

          <div className="bg-white rounded-[3rem] border border-[#c5c6ce]/20 shadow-sm overflow-hidden">
            {/* TABS DE DETALLE */}
            <div className="flex border-b border-[#f4f3f3]">
              <button
                onClick={() => setShowSettings(false)}
                className={`px-10 py-6 text-[10px] font-black uppercase tracking-widest transition-all ${!showSettings ? 'border-b-2 border-[#008cc7] text-[#081b39]' : 'text-[#c5c6ce]'}`}
              >
                Lista de Alumnos
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className={`px-10 py-6 text-[10px] font-black uppercase tracking-widest transition-all ${showSettings ? 'border-b-2 border-[#008cc7] text-[#081b39]' : 'text-[#c5c6ce]'}`}
              >
                Configuración de Clase
              </button>
            </div>

            <div className="p-10">
              {showSettings ? (
                /* 1.2 CONFIGURACIÓN DE CLASE */
                <div className="max-w-xl space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#75777e] ml-2">Nombre de la Clase</label>
                    <input type="text" defaultValue={selectedClass.name} className="w-full bg-[#faf9f9] border border-[#f4f3f3] p-4 rounded-2xl text-sm font-bold text-[#081b39] focus:outline-none focus:border-[#008cc7]" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-[#75777e] ml-2">Fecha de Cierre (Desvinculación Auto)</label>
                    <input type="date" defaultValue={selectedClass.endDate} className="w-full bg-[#faf9f9] border border-[#f4f3f3] p-4 rounded-2xl text-sm font-bold text-[#081b39] focus:outline-none focus:border-[#008cc7]" />
                  </div>

                  <div className="pt-6 flex gap-4">
                    <button className="flex-1 py-4 bg-[#081b39] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#008cc7] transition-all">
                      Guardar Cambios
                    </button>
                    <button className="px-8 py-4 border-2 border-[#ba1a1a]/20 text-[#ba1a1a] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#ba1a1a] hover:text-white transition-all flex items-center gap-2">
                      <FiArchive /> Archivar
                    </button>
                  </div>
                </div>
              ) : (
                /* 1.3 DETALLE DE ALUMNOS */
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[9px] font-black uppercase tracking-widest text-[#c5c6ce]">
                      <th className="pb-6">Alumno</th>
                      <th className="pb-6">Correo</th>
                      <th className="pb-6">Última Conexión</th>
                      <th className="pb-6 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f4f3f3]">
                    <AlumnoRow name="Alejandro Moreno" email="a.moreno@imperia.com" lastSeen="Hoy, 10:45 AM" />
                    <AlumnoRow name="Beatriz Ortiz" email="b.ortiz@imperia.com" lastSeen="Ayer, 03:20 PM" />
                    <AlumnoRow name="Carlos Slim" email="c.slim@imperia.com" lastSeen="Hace 3 días" />
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// COMPONENTE PARA LA FILA DE ALUMNOS (1.3.1 y 1.3.2)
function AlumnoRow({ name, email, lastSeen }: any) {
  const handleExpulsar = () => {
    if (window.confirm(`¿Estás seguro de que deseas expulsar a ${name}? Esta acción no se puede deshacer.`)) {
      alert("Alumno expulsado");
    }
  };

  return (
    <tr className="group">
      <td className="py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#081b39] rounded-xl flex items-center justify-center text-white text-[10px] font-bold">
            {name.charAt(0)}
          </div>
          <span className="text-sm font-bold text-[#081b39]">{name}</span>
        </div>
      </td>
      <td className="py-6 text-sm text-[#75777e]">{email}</td>
      <td className="py-6 text-sm text-[#75777e]">{lastSeen}</td>
      <td className="py-6 text-right space-x-2">
        {/* 1.3.3 Vista de progreso (Botón rápido) */}
        <button className="p-3 bg-[#008cc7]/5 text-[#008cc7] rounded-xl hover:bg-[#008cc7] hover:text-white transition-all shadow-sm" title="Ver Progreso">
          <FiBarChart2 />
        </button>
        {/* 1.3.2 Botón de expulsión */}
        <button
          onClick={handleExpulsar}
          className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
          title="Expulsar"
        >
          <FiUserX />
        </button>
      </td>
    </tr>
  );
}