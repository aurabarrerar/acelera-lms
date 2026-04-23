"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  // Datos del usuario (luego los traerás de tu BD)
  const user = {
    name: "Alejandra Barrera",
    institution: "Universidad de Sonora", // O el nombre de la empresa
    initials: "AB"
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-[#c5c6ce]/30 flex flex-col p-6 z-50">

      {/* LOGO E IDENTIDAD */}
      <div className="flex items-center gap-3 mb-12">
        <img src="/imperiadark.png" alt="Logo" className="w-10 h-10 object-contain" />
        <div>
          <h1 className="text-xl font-black tracking-tighter italic uppercase text-[#081b39]">Imperia</h1>
          <p className="text-[8px] font-bold text-[#75777e] uppercase tracking-[0.2em]">LMS Ecosystem</p>
        </div>
      </div>

      {/* MENÚ DE NAVEGACIÓN (Tus links actuales...) */}
      <nav className="flex-1 space-y-2">
        <SidebarLink href="/dashboard" icon="dashboard" label="Dashboard" active={pathname === '/dashboard'} />
        <SidebarLink href="/courses" icon="menu_book" label="Mis Cursos" active={pathname === '/courses'} />
        <SidebarLink href="/progress" icon="bar_chart" label="Progreso" active={pathname === '/progress'} />
        <SidebarLink href="/certifications" icon="workspace_premium" label="Certificaciones" active={pathname === '/certifications'} />
        <SidebarLink href="/settings" icon="settings" label="Configuración" active={pathname === '/settings'} />
      </nav>

      {/* SECCIÓN DE USUARIO CORREGIDA */}
      <div className="mt-auto border-t border-[#f4f3f3] pt-6">
        <Link href="/settings"> {/* 3. REDIRECCIÓN A SETTINGS */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#f4f3f3] hover:bg-[#e3e2e2] transition-all cursor-pointer group">

            {/* 1. AVATAR MÁS GRANDE */}
            <div className="w-12 h-12 rounded-xl bg-[#081b39] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#081b39]/10 group-hover:scale-105 transition-transform">
              {user.initials}
            </div>

            {/* INFO DEL USUARIO */}
            <div className="flex flex-col justify-center min-w-0">
              {/* Nombre del usuario - Mantenemos truncate aquí por si es muy largo */}
              <p className="text-sm font-bold text-[#081b39] truncate mb-0.5">
                {user.name}
              </p>

              {/* NOMBRE DE LA INSTITUCIÓN - Ahora permite múltiples líneas */}
              <p className="text-[9px] font-bold text-[#75777e] uppercase tracking-wider leading-tight break-words">
                {user.institution}
              </p>
            </div>
          </div>
        </Link>

        {/* CERRAR SESIÓN */}
        <button className="w-full mt-4 flex items-center gap-3 px-3 py-2 text-[#ba1a1a] hover:bg-[#ba1a1a]/5 rounded-xl transition-all">
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}

// Componente auxiliar para los links
function SidebarLink({ href, icon, label, active }: any) {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${active ? 'bg-[#d7e2ff] text-[#081b39]' : 'text-[#75777e] hover:bg-[#f4f3f3]'}`}>
        <span className={`material-symbols-outlined text-[22px] ${active ? 'fill-current' : ''}`}>
          {icon}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-widest">{label}</span>
      </div>
    </Link>
  );
}