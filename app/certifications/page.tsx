"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function CertificationsPage() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        {/* Header */}
        <header className="mb-12">
          <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.4em] mb-2">Logros Académicos</h2>
          <h1 className="text-4xl font-bold text-[#081b39] font-ubuntu">Tus Certificaciones</h1>
          <p className="text-[#75777e] text-sm mt-2">Reconociendo tu esfuerzo y dominio técnico en la plataforma.</p>
        </header>

        {/* Resumen de Logros */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard icon="workspace_premium" label="Certificados" value="04" color="text-[#008cc7]" />
          <StatCard icon="military_tech" label="Insignias" value="12" color="text-[#ba1a1a]" />
          <StatCard icon="history" label="Horas Lectivas" value="48h" color="text-[#081b39]" />
          <StatCard icon="trending_up" label="Promedio" value="9.8" color="text-[#008cc7]" />
        </div>

        {/* Lista de Certificados */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[12px] font-bold text-[#44474e] uppercase tracking-[0.2em]">Diplomas Disponibles</h3>
            <div className="h-px flex-1 bg-[#c5c6ce]/30 mx-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CertCard
              title="Seguridad Industrial y ESD"
              date="12 de Abril, 2026"
              grade="100/100"
              issuer="Ing. Barrera"
              id="IMP-2026-001"
            />
            <CertCard
              title="Ergonomía y Bienestar"
              date="05 de Marzo, 2026"
              grade="95/100"
              issuer="Dr. Martínez"
              id="IMP-2026-042"
            />
            {/* Estado Bloqueado */}
            <CertCard
              title="Lean Manufacturing"
              locked
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#c5c6ce]/20 shadow-sm text-center">
      <span className={`material-symbols-outlined ${color} text-3xl mb-2`}>{icon}</span>
      <p className="text-[9px] font-bold text-[#75777e] uppercase tracking-widest">{label}</p>
      <p className="text-2xl font-bold text-[#081b39] font-ubuntu">{value}</p>
    </div>
  );
}

function CertCard({ title, date, grade, issuer, id, locked = false }: any) {
  if (locked) {
    return (
      <div className="bg-[#f4f3f3]/50 border-2 border-dashed border-[#c5c6ce] rounded-3xl p-8 flex flex-col items-center justify-center text-center opacity-60">
        <span className="material-symbols-outlined text-4xl text-[#c5c6ce] mb-4">lock</span>
        <h4 className="font-bold text-[#75777e] uppercase text-xs tracking-widest">{title}</h4>
        <p className="text-[10px] text-[#75777e] mt-1">Completa el curso para desbloquear</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#c5c6ce]/20 shadow-md p-8 flex gap-8 items-center group hover:shadow-xl transition-all duration-500">
      {/* Visual del Diploma */}
      <div className="w-32 h-40 bg-[#081b39] rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden shrink-0">
        <div className="absolute top-2 right-2 w-6 h-6 bg-[#008cc7] rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-[12px]">check</span>
        </div>
        <span className="material-symbols-outlined text-white/20 text-5xl">description</span>
        <div className="mt-4 w-full h-1 bg-white/20 rounded"></div>
        <div className="mt-2 w-2/3 h-1 bg-white/20 rounded"></div>
      </div>

      {/* Info del Diploma */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-[#081b39] font-ubuntu leading-tight">{title}</h4>
          <span className="bg-[#d7e2ff] text-[#008cc7] text-[9px] font-bold px-2 py-1 rounded uppercase">Validado</span>
        </div>

        <div className="grid grid-cols-2 gap-y-3 mt-4">
          <div>
            <p className="text-[9px] text-[#75777e] font-bold uppercase tracking-tighter">Fecha</p>
            <p className="text-xs font-medium text-[#44474e]">{date}</p>
          </div>
          <div>
            <p className="text-[9px] text-[#75777e] font-bold uppercase tracking-tighter">Calificación</p>
            <p className="text-xs font-medium text-[#44474e]">{grade}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[9px] text-[#75777e] font-bold uppercase tracking-tighter">ID de Certificado</p>
            <p className="text-[10px] font-mono text-[#75777e]">{id}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => window.open('/certifications/preview', '_blank')}
            className="flex-1 py-2 bg-[#081b39] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#008cc7] transition-all"
          >
            Descargar PDF
          </button>
          <button className="px-4 py-2 border border-[#c5c6ce] text-[#081b39] rounded-lg text-[10px] font-bold uppercase hover:bg-[#f4f3f3] transition-all">
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
}