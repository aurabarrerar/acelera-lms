"use client";
import React from 'react';
import MaestroSidebar from "@/components/Sidebarteacher";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#faf9f9]">
      {/* El Sidebar ya tiene 'fixed', así que se queda ahí */}
      <MaestroSidebar />

      {/* Añadimos 'pl-72' (Padding Left) para empujar el contenido
          exactamente lo que mide el sidebar (72 = 18rem = 288px)
      */}
      <div className="flex-1 flex flex-col pl-72">
        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
}