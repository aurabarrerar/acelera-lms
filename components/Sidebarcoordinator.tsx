"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiGrid,
  FiLayers,
  FiBox,
  FiShield,
  FiUsers,
  FiBook,
  FiLogOut
} from 'react-icons/fi';

export default function SidebarAdmin() {
  const pathname = usePathname();

  const menuItems = [
    {
      group: "Principal",
      items: [{ icon: <FiGrid />, label: "Dashboard", href: "/admin/dashboard-admin" }]
    },
    {
      group: "Organización",
      items: [
        { icon: <FiLayers />, label: "Organizaciones", href: "/admin/organizations" },
        { icon: <FiShield />, label: "Seguridad", href: "/admin/seguridad" }
      ]
    },
    {
      group: "Personal",
      items: [{ icon: <FiUsers />, label: "Maestros", href: "/admin/teachers" }]
    },
    {
      group: "Académico",
      items: [
        { icon: <FiBook />, label: "Clases", href: "/admin/classes" },
        { icon: <FiBox />, label: "Contenido", href: "/admin/content-factory/editor" }
      ]
    }
  ];

  return (
    // CAMBIO: overflow-hidden para matar la barra de scroll molesta
    <aside className="w-72 h-screen bg-[#040d1a] border-r border-white/10 p-6 flex flex-col fixed left-0 top-0 overflow-hidden">

      {/* Branding - mb-6 en lugar de 8 para ganar aire */}
      <div className="mb-6 flex items-center gap-3 px-2">
        <img src="/imperialight.png" alt="Imperia" className="w-10 h-10 object-contain" />
        <div>
          <h2 className="text-sm font-ubuntu font-bold tracking-tighter text-white">IMPERIA</h2>
          <span className="text-[8px] text-[#008cc7] font-black uppercase tracking-[0.2em]">Admin Panel</span>
        </div>
      </div>

      {/* Navegación - space-y-4 para que los grupos no empujen tanto */}
      <nav className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
        {menuItems.map((section, idx) => (
          <div key={idx} className="space-y-1.5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#75777e] px-4 opacity-50">
              {section.group}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all group ${
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
            </div>
          </div>
        ))}
      </nav>

      {/* Footer del Sidebar - Espaciado interno reducido un pelín */}
      <div className="pt-4 mt-4 border-t border-white/5 space-y-4">
        <div className="bg-white/5 p-3 rounded-2xl flex items-center gap-3">
          <div className="w-8 h-8 bg-[#008cc7] rounded-xl flex items-center justify-center font-bold text-xs text-white">
            AB
          </div>
          <div className="leading-none">
            <p className="text-[10px] font-bold text-white mb-1">Alejandra B.</p>
            <p className="text-[8px] text-[#75777e] uppercase font-bold tracking-wider">Modo Prototipo</p>
          </div>
        </div>

        <button className="flex items-center gap-3 px-4 text-red-400/60 hover:text-red-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] pb-2">
          <FiLogOut /> Salir
        </button>
      </div>
    </aside>
  );
}