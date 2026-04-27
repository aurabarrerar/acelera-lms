"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Función para el formulario normal (Default: Alumno)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/perfil/alumno');
    }, 1000);
  };

  // Función para los botones de acceso rápido
  const handleQuickAccess = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040d1a] font-redonda text-white relative overflow-hidden p-4">

      {/* Decoración de fondo futurista */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#008cc7]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#46178f]/10 blur-[100px] rounded-full"></div>

      {/* Contenedor Principal */}
      <div className="relative z-10 w-full max-w-[450px] p-10 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl">

        {/* Logo */}
        <header className="mb-10 text-center">
          <img
            src="/imperialight.png"
            alt="Imperia Logo"
            className="w-16 h-16 mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-ubuntu font-bold tracking-[0.2em] uppercase">
            IMPERIA
            <span className="block text-[9px] font-bold tracking-[0.3em] mt-1 text-[#008cc7]">Sistemas de Aprendizaje</span>
          </h1>
        </header>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-ubuntu font-bold mb-1">Bienvenido</h2>
          <p className="text-[#75777e] text-sm">Selecciona un rol para probar el prototipo.</p>
        </div>

        {/* --- SECCIÓN DE ACCESO RÁPIDO (PROTOTIPO) --- */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: 'Superadmin', path: '/admin/dashboard-admin', color: 'border-red-500/30' },
            { label: 'Coordinador', path: '/coordinator/dashboard', color: 'border-purple-500/30' },
            { label: 'Maestro', path: '/teacher/dashboard', color: 'border-green-500/30' },
            { label: 'Alumno', path: '/dashboard', color: 'border-[#008cc7]/30' },
          ].map((role) => (
            <button
              key={role.label}
              onClick={() => handleQuickAccess(role.path)}
              disabled={isLoading}
              className={`py-3 px-2 bg-white/5 border ${role.color} rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-white/10 transition-all active:scale-95 disabled:opacity-50`}
            >
              {role.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center justify-center mb-8">
            <span className="absolute inset-x-0 h-px bg-white/10"></span>
            <span className="relative px-4 bg-[#0d1523] text-[9px] text-[#75777e] uppercase tracking-widest font-bold">O ingresar datos</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-[#75777e]">Usuario o Correo</label>
            <input
              required
              type="text"
              placeholder="nombre@ejemplo.com"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end px-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#75777e]">Contraseña</label>
              <a href="#" className="text-[10px] text-[#008cc7] uppercase font-bold hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
            <input
              required
              type="password"
              placeholder="••••••••"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-5 bg-[#008cc7] text-white font-ubuntu font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl transition-all shadow-lg shadow-[#008cc7]/20 active:scale-[0.95] flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-wait' : 'hover:bg-[#007bb0] hover:scale-[1.02]'}`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Iniciando...
              </span>
            ) : "Acceder al Sistema"}
          </button>
        </form>

        <p className="text-center text-[11px] text-[#75777e] mt-10">
          ¿Nuevo en la plataforma? <a href="#" className="text-[#008cc7] font-bold underline ml-1">Crear Cuenta</a>
        </p>
      </div>

      <footer className="mt-12 text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] relative z-10 text-center">
        Imperia Intelligence Systems © 2026
      </footer>
    </div>
  );
}