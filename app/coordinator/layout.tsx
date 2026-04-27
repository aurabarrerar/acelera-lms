"use client";
import React from 'react';
import AdminSidebar from '@/components/Sidebarcoordinator'; // Asegúrate de que la ruta sea correcta
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#faf9f9]">

      {/* 1. SIDEBAR FIJO */}
      <AdminSidebar />

      {/* 2. CONTENEDOR PRINCIPAL */}
      <main className="flex-1 ml-72 flex flex-col">

        {/* TOPBAR (Barra de navegación superior) */}
        <header className="h-24 px-12 flex items-center justify-between sticky top-0 bg-[#faf9f9]/80 backdrop-blur-md z-40">

          {/* BARRA DE BÚSQUEDA RÁPIDA */}
          <div className="relative w-96 group">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#c5c6ce] group-focus-within:text-[#008cc7] transition-colors" />
            <input
              type="text"
              placeholder="Buscar maestros, alumnos o clases..."
              className="w-full bg-white border border-[#c5c6ce]/20 py-3.5 pl-14 pr-6 rounded-2xl text-xs font-medium focus:outline-none focus:border-[#008cc7] focus:shadow-lg focus:shadow-[#008cc7]/5 transition-all shadow-sm"
            />
          </div>

          {/* ACCIONES DE PERFIL / NOTIFICACIONES */}
          <div className="flex items-center gap-6">
            <button className="relative p-3 bg-white border border-[#c5c6ce]/20 rounded-xl text-[#75777e] hover:text-[#008cc7] transition-all shadow-sm">
              <FiBell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-10 w-[1px] bg-[#c5c6ce]/30 mx-2"></div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase text-[#081b39] leading-none mb-1">Coordinador General</p>
                <p className="text-[9px] font-bold text-[#c5c6ce] uppercase tracking-widest">Planta Hermosillo</p>
              </div>
              <div className="w-12 h-12 bg-[#081b39] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#081b39]/20 hover:scale-105 transition-transform cursor-pointer border-2 border-white">
                <FiUser size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* 3. ÁREA DE CONTENIDO DINÁMICO */}
        <div className="px-12 pb-12">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </div>

        {/* FOOTER DISCRETO */}
        <footer className="mt-auto px-12 py-8 border-t border-[#f4f3f3] text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#c5c6ce]">
            © 2026 Imperia LMS • <span className="text-[#008cc7]">Smart Governance System</span>
          </p>
        </footer>
      </main>
    </div>
  );
}