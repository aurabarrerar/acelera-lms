"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiBookOpen,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';

export default function MaestroSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: <FiGrid />, label: "Dashboard", href: "/teacher/dashboard" },
    { icon: <FiUsers />, label: "Mis Clases", href: "/teacher/classes" },
    { icon: <FiBarChart2 />, label: "Reportes", href: "/teacher/reports" },
    { icon: <FiBookOpen />, label: "Contenido", href: "/teacher/content" },
  ];

  return (
    <aside className="w-72 h-screen bg-[#040d1a] border-r border-white/10 p-6 flex flex-col fixed left-0 top-0 z-50">

      {/* Branding - Igual al Admin */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <img src="/imperialight.png" alt="Imperia" className="w-10 h-10 object-contain" />
        <div>
          <h2 className="text-sm font-ubuntu font-bold tracking-tighter text-white uppercase">IMPERIA</h2>
          <span className="text-[8px] text-[#008cc7] font-black uppercase tracking-[0.2em]">Maestro Portal</span>
        </div>
      </div>

      {/* Navegación Principal */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all group ${
                isActive
                  ? 'bg-[#008cc7] text-white shadow-lg shadow-[#008cc7]/20'
                  : 'text-[#75777e] hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`text-lg ${isActive ? 'text-white' : 'group-hover:text-[#008cc7]'}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer del Sidebar: Perfil y Salir */}
      <div className="pt-6 border-t border-white/5 space-y-4">

        {/* Link a Perfil/Configuración rápido */}
        <Link
          href="/teacher/profile"
          className={`flex items-center gap-4 px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
            pathname === '/maestro/perfil' ? 'text-white bg-white/5' : 'text-[#75777e] hover:text-white'
          }`}
        >
          <FiSettings className="text-base" /> Configuración
        </Link>

        {/* Card de Usuario Estilo Admin */}
        <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 border border-white/5">
          <div className="w-9 h-9 bg-[#008cc7] rounded-xl flex items-center justify-center font-ubuntu font-bold text-white text-xs shadow-inner">
            AP
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] font-black text-white truncate uppercase tracking-tighter">Alejandra B.</p>
            <p className="text-[8px] font-bold text-[#008cc7] uppercase tracking-widest opacity-80">Software Eng.</p>
          </div>
          <button className="ml-auto text-[#75777e] hover:text-red-400 transition-colors">
            <FiLogOut />
          </button>
        </div>
      </div>
    </aside>
  );
}