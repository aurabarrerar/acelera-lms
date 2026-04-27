"use client";
import React from 'react';
import {
  FiPlus, FiSearch, FiBell, FiActivity, FiBox
} from 'react-icons/fi';

export default function SuperAdminDashboard() {
  return (
    <div className="p-12 font-redonda text-[#081b39]">

      {/* TOP BAR */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-ubuntu font-bold">Panel de Control Global</h2>
          <p className="text-xs text-[#75777e] mt-1 font-bold uppercase tracking-wider">Infraestructura Central de Imperia</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#75777e]" />
            <input
              type="text"
              placeholder="Buscar organización..."
              className="bg-white border border-[#c5c6ce]/20 rounded-2xl py-3 pl-12 pr-6 text-sm outline-none focus:ring-2 focus:ring-[#008cc7] w-64 shadow-sm transition-all"
            />
          </div>
          <button className="p-3 bg-white rounded-xl border border-[#c5c6ce]/20 text-[#75777e] relative hover:bg-gray-50 transition-all">
            <FiBell />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-3 pl-6 border-l border-[#c5c6ce]/30">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-tighter">Super Admin</p>
              <p className="text-[9px] text-[#008cc7] font-bold">Root Access</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#081b39] flex items-center justify-center text-white font-bold text-xs shadow-lg">SA</div>
          </div>
        </div>
      </header>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard label="Empresas" value="24" change="+2 este mes" />
        <StatCard label="Usuarios" value="1,240" change="+5.6%" />
        <StatCard label="Módulos IA" value="85" sub="Versión 2.4 Stable" />
        <StatCard label="Estado del Sistema" value="Operativo" status />
      </div>

      <div className="grid grid-cols-12 gap-8">

        {/* TABLA DE GESTIÓN DE ORGANIZACIONES */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-ubuntu font-bold text-lg">Gestión de Organizaciones</h3>
            <button className="bg-[#081b39] text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all shadow-md active:scale-95">
              <FiPlus /> Nueva Empresa
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-[#75777e] border-b border-[#f4f3f3]">
                  <th className="pb-4 font-black">Empresa</th>
                  <th className="pb-4 font-black">Coordinador</th>
                  <th className="pb-4 font-black">Usuarios</th>
                  <th className="pb-4 font-black">Estatus de Carga</th>
                  <th className="pb-4 font-black text-center">Acciones</th>
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
        </div>

        {/* COLUMNA DERECHA ACCIONES RÁPIDAS */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
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
            <div className="flex items-center gap-2 text-sm font-bold text-[#081b39]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Sistemas Listos para Generar
            </div>
            <p className="text-[10px] text-[#75777e] mt-2 italic font-medium">DragonIA Engine: Online</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- COMPONENTES AUXILIARES INTERNOS ---

function StatCard({ label, value, change, sub, status = false }: any) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-[#c5c6ce]/20 shadow-sm hover:shadow-md transition-all">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-2">{label}</p>
      <h4 className="text-3xl font-ubuntu font-black mb-1">{value}</h4>
      {change && <p className="text-[10px] font-bold text-green-500">{change}</p>}
      {sub && <p className="text-[10px] font-bold text-[#008cc7]">{sub}</p>}
      {status && (
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-[#008cc7]"></div>
          <p className="text-[9px] text-[#75777e] font-bold uppercase tracking-tighter text-nowrap">Latencia Global: 42 ms</p>
        </div>
      )}
    </div>
  );
}

function OrgRow({ name, coord, users, load }: any) {
  return (
    <tr className="border-b border-[#f4f3f3] hover:bg-[#faf9f9]/50 transition-all group">
      <td className="py-6 font-bold text-[#081b39]">{name}</td>
      <td className="py-6 text-[#75777e] font-medium">{coord}</td>
      <td className="py-6 font-bold">{users}</td>
      <td className="py-6">
        <div className="flex items-center gap-3">
            <div className="w-20 h-1.5 bg-[#f4f3f3] rounded-full overflow-hidden">
                <div className={`h-full ${load > 80 ? 'bg-orange-500' : 'bg-[#081b39]'}`} style={{ width: `${load}%` }}></div>
            </div>
            <span className="text-[10px] font-bold text-[#75777e]">{load}%</span>
        </div>
      </td>
      <td className="py-6 text-center">
        <button className="p-2 bg-gray-50 rounded-lg text-[#75777e] hover:text-white hover:bg-[#008cc7] transition-all">
          <FiActivity size={14} />
        </button>
      </td>
    </tr>
  );
}

function QuickAction({ label }: any) {
  return (
    <button className="w-full text-left p-4 bg-[#081b39] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest flex justify-between items-center hover:bg-[#008cc7] hover:translate-x-1 transition-all shadow-sm">
      {label}
      <FiPlus className="text-[#008cc7] group-hover:text-white" />
    </button>
  );
}