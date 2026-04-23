"use client";
import React from 'react';
import {
  FiGrid, FiLayers, FiBox, FiShield,
  FiPlus, FiSearch, FiBell, FiActivity
} from 'react-icons/fi';

export default function SuperAdminDashboard() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#081b39]">

      {/* SIDEBAR SUPERADMIN (Variante Dark de Imperia) */}
      <aside className="w-64 bg-[#081b39] text-white flex flex-col p-6 fixed h-full">
        <div className="mb-12 px-2">
          <h1 className="text-xl font-ubuntu font-bold tracking-[0.2em] uppercase">IMPERIA</h1>
          <span className="text-[9px] font-bold text-[#008cc7] tracking-[0.3em] uppercase opacity-80">SuperAdmin Panel</span>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem icon={<FiGrid />} label="Dashboard" active />
          <NavItem icon={<FiLayers />} label="Organizaciones" />
          <NavItem icon={<FiBox />} label="Fábrica de Contenido" />
          <NavItem icon={<FiShield />} label="Seguridad" />
        </nav>

        {/* MONITOR DE SEGURIDAD (Terminal inferior) */}
        <div className="mt-auto bg-black/20 rounded-2xl p-4 font-mono text-[9px] border border-white/5">
          <p className="text-[#ba1a1a] mb-1">● 14:02 - IP Blocked (RU)</p>
          <p className="text-green-400 mb-1">● DragonIA: 98% efficiency</p>
          <p className="text-[#008cc7]">● 13:10 - Backup Sync OK</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-64 p-12">

        {/* TOP BAR */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-ubuntu font-bold">Panel de Control Global</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#75777e]" />
              <input
                type="text"
                placeholder="Buscar organización..."
                className="bg-white border border-[#c5c6ce]/20 rounded-2xl py-3 pl-12 pr-6 text-sm outline-none focus:ring-2 focus:ring-[#008cc7] w-64 shadow-sm"
              />
            </div>
            <button className="p-3 bg-white rounded-xl border border-[#c5c6ce]/20 text-[#75777e] relative">
              <FiBell />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-[#c5c6ce]/30">
              <div className="w-10 h-10 rounded-full bg-[#081b39] flex items-center justify-center text-white font-bold text-xs">SA</div>
            </div>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <StatCard label="Empresas" value="24" change="+2 este mes" />
          <StatCard label="Usuarios" value="1,240" change="+5.6%" />
          <StatCard label="Módulos IA" value="85" sub="Versión 2.4 Stable" />
          <StatCard label="Estado del Sistema" value="Operativo" sub="Latencia: 42ms" status />
        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* TABLA DE GESTIÓN DE ORGANIZACIONES */}
          <div className="col-span-8 bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-ubuntu font-bold text-lg">Gestión de Organizaciones</h3>
              <button className="bg-[#081b39] text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all">
                <FiPlus /> Nueva Empresa
              </button>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-[#75777e] border-b border-[#f4f3f3]">
                  <th className="pb-4 font-black">Empresa</th>
                  <th className="pb-4 font-black">Coordinador</th>
                  <th className="pb-4 font-black">Usuarios</th>
                  <th className="pb-4 font-black">Estatus de Carga</th>
                  <th className="pb-4 font-black">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <OrgRow name="TechNova S.A." coord="Carlos Méndez" users="452" load={75} />
                <OrgRow name="Global Logistics" coord="Lucía Torres" users="215" load={40} />
                <OrgRow name="Retail Corp" coord="Marcos Ruiz" users="890" load={95} />
                <OrgRow name="Green Energy" coord="Elena Paz" users="112" load={20} />
              </tbody>
            </table>
          </div>

          {/* COLUMNA DERECHA ACCIONES RÁPIDAS */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm">
              <h3 className="font-ubuntu font-bold mb-6 flex items-center gap-2">
                <FiBox className="text-[#008cc7]" /> Fábrica de Contenido
              </h3>
              <div className="space-y-3">
                <QuickAction label="Crear Módulo" />
                <QuickAction label="Configurar Examen" />
                <QuickAction label="Plantilla de Certificado" />
              </div>
            </div>

            <div className="bg-[#008cc7]/5 border border-[#008cc7]/10 rounded-[2.5rem] p-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#008cc7] mb-2">IA Generator Status</p>
              <div className="flex items-center gap-2 text-sm font-bold">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Ready to generate content
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// COMPONENTES AUXILIARES
function NavItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white/10 text-white shadow-inner' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-[11px] font-bold uppercase tracking-widest">{label}</span>
    </div>
  );
}

function StatCard({ label, value, change, sub, status = false }: any) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-[#c5c6ce]/20 shadow-sm">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-2">{label}</p>
      <h4 className="text-3xl font-ubuntu font-black mb-1">{value}</h4>
      {change && <p className="text-[10px] font-bold text-green-500">{change}</p>}
      {sub && <p className="text-[10px] font-bold text-[#008cc7]">{sub}</p>}
      {status && (
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-[#008cc7]"></div>
          <p className="text-[9px] text-[#75777e] font-bold uppercase">Latencia: 42 ms</p>
        </div>
      )}
    </div>
  );
}

function OrgRow({ name, coord, users, load }: any) {
  return (
    <tr className="border-b border-[#f4f3f3] hover:bg-[#faf9f9] transition-all">
      <td className="py-6 font-bold text-[#081b39]">{name}</td>
      <td className="py-6 text-[#75777e]">{coord}</td>
      <td className="py-6 font-bold">{users}</td>
      <td className="py-6">
        <div className="w-24 h-1.5 bg-[#f4f3f3] rounded-full overflow-hidden">
          <div className="h-full bg-[#081b39]" style={{ width: `${load}%` }}></div>
        </div>
      </td>
      <td className="py-6">
        <button className="p-2 hover:bg-[#008cc7]/10 rounded-lg text-[#75777e] hover:text-[#008cc7] transition-all">
          <FiActivity />
        </button>
      </td>
    </tr>
  );
}

function QuickAction({ label }: any) {
  return (
    <button className="w-full text-left p-4 bg-[#081b39] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest flex justify-between items-center hover:bg-[#008cc7] transition-all">
      {label}
      <FiPlus />
    </button>
  );
}