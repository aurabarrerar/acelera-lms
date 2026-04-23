"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function ProgressPage() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        <header className="mb-10">
          <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.4em] mb-2">Analytics</h2>
          <h1 className="text-4xl font-bold text-[#081b39] font-ubuntu">Tu Rendimiento</h1>
        </header>

        {/* KPIs Superiores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatBox label="Cursos Completados" value="3/5" icon="menu_book" color="text-[#081b39]" />
          <StatBox label="Promedio General" value="96%" icon="insights" color="text-[#008cc7]" />
          <StatBox label="Racha de Estudio" value="12 Días" icon="local_fire_department" color="text-[#ba1a1a]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Gráfico de Actividad Semanal (Simulado con Tailwind) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-[#c5c6ce]/20 shadow-sm">
            <h3 className="text-sm font-bold text-[#081b39] uppercase tracking-widest mb-10">Actividad de la Semana</h3>
            <div className="flex items-end justify-between h-48 gap-2">
              <Bar day="Lun" height="h-[60%]" />
              <Bar day="Mar" height="h-[40%]" />
              <Bar day="Mie" height="h-[90%]" active />
              <Bar day="Jue" height="h-[70%]" />
              <Bar day="Vie" height="h-[30%]" />
              <Bar day="Sab" height="h-[10%]" />
              <Bar day="Dom" height="h-[0%]" />
            </div>
          </div>

          {/* Desglose por Competencias */}
          <div className="bg-white p-8 rounded-3xl border border-[#c5c6ce]/20 shadow-sm">
            <h3 className="text-sm font-bold text-[#081b39] uppercase tracking-widest mb-6">Competencias</h3>
            <div className="space-y-6">
              <SkillItem label="Seguridad Técnica" progress={95} />
              <SkillItem label="Simulación de Sistemas" progress={70} />
              <SkillItem label="Cálculo Diferencial" progress={85} />
              <SkillItem label="Diseño UI/UX" progress={60} />
            </div>
          </div>
        </div>

        {/* Historial de Actividad Reciente */}
        <section className="mt-12">
          <h3 className="text-sm font-bold text-[#081b39] uppercase tracking-widest mb-6">Actividad Reciente</h3>
          <div className="bg-white rounded-3xl border border-[#c5c6ce]/20 shadow-sm overflow-hidden">
            <ActivityRow
              title="Examen Final: Seguridad Industrial"
              date="Hoy, 2:30 PM"
              score="10/10"
              status="Excelente"
            />
            <ActivityRow
              title="Lección: Análisis ESD completada"
              date="Ayer, 5:45 PM"
              score="+50 XP"
              status="Completado"
            />
            <ActivityRow
              title="Mapa Conceptual Generado"
              date="11 Abr, 2026"
              score="1 PDF"
              status="Descargado"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// Sub-componentes para mantener el código limpio
function StatBox({ label, value, icon, color }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#c5c6ce]/20 shadow-sm flex items-center gap-6">
      <div className={`w-12 h-12 rounded-xl bg-[#f4f3f3] flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-[9px] font-bold text-[#75777e] uppercase tracking-widest">{label}</p>
        <p className="text-xl font-bold text-[#081b39] font-ubuntu">{value}</p>
      </div>
    </div>
  );
}

function Bar({ day, height, active = false }: any) {
  return (
    <div className="flex-1 flex flex-col items-center gap-4">
      <div className={`w-full ${height} ${active ? 'bg-[#008cc7]' : 'bg-[#081b39]/10'} rounded-t-lg transition-all hover:bg-[#081b39]`}></div>
      <span className="text-[10px] font-bold text-[#75777e] uppercase">{day}</span>
    </div>
  );
}

function SkillItem({ label, progress }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold uppercase">
        <span className="text-[#44474e]">{label}</span>
        <span className="text-[#008cc7]">{progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#f4f3f3] rounded-full overflow-hidden">
        <div className="bg-[#008cc7] h-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function ActivityRow({ title, date, score, status }: any) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-[#f4f3f3] last:border-0 hover:bg-[#faf9f9] transition-colors">
      <div>
        <h4 className="text-sm font-bold text-[#081b39]">{title}</h4>
        <p className="text-xs text-[#75777e]">{date}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-[#008cc7]">{score}</p>
        <p className="text-[9px] font-bold text-[#75777e] uppercase">{status}</p>
      </div>
    </div>
  );
}