import React from 'react';

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[#faf9f9]">
      {/* Aquí podrías mover el Sidebar para no repetirlo en cada página */}
      {children}
    </section>
  );
}