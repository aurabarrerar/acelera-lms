"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiGrid, FiLayers, FiBox, FiShield } from 'react-icons/fi';

export default function SidebarAdmin() {
  const pathname = usePathname();

 const menuItems = [
     // Agregamos la / al principio de cada ruta
     { icon: <FiGrid />, label: "Dashboard", href: "/admin/dashboard-admin" },
     { icon: <FiLayers />, label: "Organizaciones", href: "/admin/organizations" },
     { icon: <FiBox />, label: "Fábrica de Contenido", href: "/admin/content-factory/editor" },
     { icon: <FiShield />, label: "Seguridad", href: "/admin/seguridad" },
   ];

  return (
    <aside className="w-72 h-screen bg-[#040d1a] border-r border-white/10 p-6 flex flex-col fixed left-0 top-0">
      {/* Branding */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <img src="/imperialight.png" alt="Imperia" className="w-10 h-10 object-contain" />
        <div>
          <h2 className="text-sm font-ubuntu font-bold tracking-tighter">IMPERIA</h2>
          <span className="text-[8px] text-[#008cc7] font-black uppercase tracking-[0.2em]">Admin Panel</span>
        </div>
      </div>

      {/* Navegación */}
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

      {/* Footer del Sidebar */}
      <div className="pt-6 border-t border-white/5">
        <div className="bg-white/5 p-4 rounded-2xl">
          <p className="text-[9px] text-[#75777e] uppercase font-bold mb-1 text-center">Modo Prototipo</p>
        </div>
      </div>
    </aside>
  );
}