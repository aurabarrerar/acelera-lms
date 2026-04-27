// app/admin/dashboard-admin/layout.tsx
import React from 'react';
// Importamos como SidebarAdmin (con A mayúscula)
import SidebarAdmin from '@/components/Sidebaradmin';

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen bg-[#faf9f9]">
      {/* Usamos el nombre EXACTO de la importación arriba */}
      <SidebarAdmin />

      <main className="flex-1 ml-64 overflow-y-auto">
        {children}
      </main>
    </section>
  );
}