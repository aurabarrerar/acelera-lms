"use client";
import React from 'react';

export default function CertificatePreview() {
  // Estos datos podrían venir de parámetros en la URL en el futuro
  const certData = {
    studentName: "Alejandra Patricia Barrera Ruz",
    courseName: "Seguridad Industrial y Riesgos ESD",
    date: "13 de Abril, 2026",
    id: "IMP-2026-001-BARRERA",
    instructor: "Ing. Sistema de Gestión Imperia"
  };

  return (
    <div className="min-h-screen bg-[#525659] flex justify-center p-10 font-ubuntu">
      {/* Hoja de Certificado (Tamaño Carta Horizontal) */}
      <div className="w-[1100px] h-[800px] bg-white shadow-2xl relative p-1 text-center overflow-hidden border-[16px] border-[#081b39]">

        {/* Bordes Decorativos Internos */}
        <div className="h-full w-full border-4 border-[#008cc7] flex flex-col items-center justify-between p-16 relative">

          {/* Marca de Agua / Decoración de Fondo */}
          <span className="material-symbols-outlined absolute text-[400px] text-[#081b39]/5 -z-0 rotate-12">
            workspace_premium
          </span>

          {/* Logo y Encabezado */}
          <div className="z-10">
            <h1 className="text-5xl font-black text-[#081b39] tracking-[0.2em] mb-2 italic">IMPERIA</h1>
            <div className="h-1 w-24 bg-[#008cc7] mx-auto"></div>
            <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-[0.5em] mt-4">Learning Management System</p>
          </div>

          {/* Cuerpo del Certificado */}
          <div className="z-10">
            <p className="text-xl font-medium text-[#44474e] italic mb-8">Otorga el presente</p>
            <h2 className="text-6xl font-bold text-[#081b39] mb-4">CERTIFICADO</h2>
            <p className="text-xl font-medium text-[#44474e] mb-12">A favor de:</p>

            <h3 className="text-5xl font-ubuntu font-bold text-[#008cc7] mb-4 underline decoration-[#081b39] decoration-2 underline-offset-8">
              {certData.studentName}
            </h3>

            <p className="max-w-2xl text-lg text-[#44474e] leading-relaxed mx-auto mt-10">
              Por haber completado satisfactoriamente los criterios de evaluación y demostrar dominio técnico en el curso de
              <span className="block font-bold text-[#081b39] text-2xl mt-2">"{certData.courseName}"</span>
            </p>
          </div>

          {/* Firmas y Sellos */}
          <div className="w-full flex justify-between items-end z-10 px-10">
            <div className="text-center w-64">
              <div className="h-px bg-[#081b39] w-full mb-2"></div>
              <p className="text-[10px] font-bold text-[#081b39] uppercase tracking-widest">{certData.instructor}</p>
              <p className="text-[9px] text-[#75777e] uppercase">Director Académico</p>
            </div>

            {/* Sello de Autenticidad */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 border-4 border-[#008cc7] rounded-full flex flex-col items-center justify-center p-2">
                <span className="material-symbols-outlined text-[#008cc7] text-3xl">verified</span>
                <span className="text-[7px] font-bold text-[#008cc7] text-center uppercase leading-none mt-1">Sello de Verificación Digital</span>
              </div>
              <p className="text-[8px] font-mono text-[#75777e] mt-4 uppercase">ID: {certData.id}</p>
            </div>

            <div className="text-center w-64">
              <p className="text-lg font-bold text-[#081b39] mb-2">{certData.date}</p>
              <div className="h-px bg-[#081b39] w-full mb-2"></div>
              <p className="text-[10px] font-bold text-[#081b39] uppercase tracking-widest">Fecha de Expedición</p>
            </div>
          </div>

        </div>
      </div>

      {/* Botón flotante para imprimir (Solo visible en pantalla) */}
      <button
        onClick={() => window.print()}
        className="fixed bottom-10 right-10 bg-[#008cc7] text-white p-4 rounded-full shadow-2xl hover:bg-[#081b39] transition-all print:hidden flex items-center gap-2 font-bold text-xs uppercase"
      >
        <span className="material-symbols-outlined">print</span>
        Imprimir o Guardar PDF
      </button>
    </div>
  );
}