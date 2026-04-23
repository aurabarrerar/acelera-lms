"use client";
import React from 'react';
import { FiPlus, FiSearch, FiSettings, FiUsers, FiServer } from 'react-icons/fi';

export default function OrganizationsDirectory() {
  const orgs = [
    { id: 1, name: "TechNova S.A.", sector: "Industrial", users: 452, status: "Active" },
    { id: 2, name: "Global Logistics", sector: "Transporte", users: 215, status: "Pending" },
    { id: 3, name: "Unison", sector: "Académico", users: 1240, status: "Active" },
  ];

  return (
    <div className="p-12 bg-[#faf9f9] min-h-screen font-redonda">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-ubuntu font-bold text-[#081b39]">Directorio de Clientes</h1>
          <p className="text-[#75777e] text-sm font-bold mt-1 uppercase tracking-widest">Gestión de Organizaciones</p>
        </div>
        <button className="bg-[#081b39] text-white px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/10">
          <FiPlus className="text-lg" /> Nueva Organización
        </button>
      </header>

      {/* Filtros Rápidos */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-8 relative">
          <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-[#75777e]" />
          <input
            type="text"
            placeholder="Buscar por nombre, coordinador o sector..."
            className="w-full bg-white border border-[#c5c6ce]/20 rounded-[2rem] py-5 pl-16 pr-8 text-sm outline-none focus:ring-2 focus:ring-[#008cc7] shadow-sm"
          />
        </div>
        <div className="col-span-4 bg-white border border-[#c5c6ce]/20 rounded-[2rem] p-2 flex">
          <button className="flex-1 bg-[#081b39] text-white rounded-[1.5rem] text-[9px] font-black uppercase tracking-widest">Todos</button>
          <button className="flex-1 text-[#75777e] text-[9px] font-black uppercase tracking-widest">Industrial</button>
          <button className="flex-1 text-[#75777e] text-[9px] font-black uppercase tracking-widest">Académico</button>
        </div>
      </div>

      {/* Grid de Empresas */}
      <div className="grid grid-cols-3 gap-8">
        {orgs.map(org => (
          <div key={org.id} className="bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-[#f4f3f3] rounded-2xl flex items-center justify-center group-hover:bg-[#008cc7]/10 transition-colors">
                <FiServer className="text-2xl text-[#081b39] group-hover:text-[#008cc7]" />
              </div>
              <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${org.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                {org.status}
              </span>
            </div>
            <h3 className="text-xl font-ubuntu font-black text-[#081b39] mb-1">{org.name}</h3>
            <p className="text-[#75777e] text-[10px] font-bold uppercase tracking-widest mb-6">{org.sector}</p>

            <div className="flex items-center gap-6 mb-8 py-4 border-y border-[#f4f3f3]">
              <div className="flex items-center gap-2">
                <FiUsers className="text-[#008cc7]" />
                <span className="text-sm font-black">{org.users}</span>
              </div>
            </div>

            <button
              onClick={() => window.location.href = `/admin/organizations/${org.id}`}
              className="w-full py-4 bg-[#f4f3f3] text-[#081b39] rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#081b39] hover:text-white transition-all"
            >
              <FiSettings /> Configurar Panel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}