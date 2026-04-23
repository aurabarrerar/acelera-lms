"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de creación de cuenta
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#040d1a] text-white flex flex-col items-center justify-center p-8 font-redonda relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#008cc7]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-[#46178f]/10 blur-[120px] rounded-full"></div>

      {/* Header con Logo Light */}
      <div className="relative z-10 mb-8 text-center">
        <img
          src="/imperialight.png"
          alt="Imperia Logo"
          className="w-14 h-14 mx-auto mb-4 object-contain"
        />
        <h1 className="text-3xl font-bold tracking-[0.2em] text-white font-ubuntu uppercase">IMPERIA</h1>
        <p className="text-[#008cc7] font-bold tracking-[0.3em] text-[9px] uppercase mt-1 text-center">Registro de Nuevo Usuario</p>
      </div>

      {/* Card de Registro */}
      <div className="relative z-10 w-full max-w-[500px] bg-white/[0.02] backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2 font-ubuntu">Crear Cuenta</h2>
          <p className="text-[#75777e] text-sm leading-relaxed">Únete al ecosistema de aprendizaje de élite.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest ml-1">Nombre Real</label>
              <input
                required
                type="text"
                placeholder="Nombre Legal"
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white placeholder:text-white/20"
              />
            </div>

            {/* Username */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest ml-1">Usuario</label>
              <input
                required
                type="text"
                placeholder="@usuario"
                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white placeholder:text-white/20"
              />
            </div>
          </div>

          {/* Class Code (Estilo Terminal) */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest ml-1 text-center block">Código de Clase</label>
            <div className="relative group">
              <input
                type="text"
                defaultValue="MATH-2024-01"
                className="w-full px-5 py-4 bg-[#081b39]/50 border border-[#008cc7]/30 text-[#89ceff] rounded-2xl focus:ring-2 focus:ring-[#008cc7] transition-all text-sm font-bold tracking-[0.2em] outline-none text-center uppercase"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#008cc7] animate-pulse">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="material-symbols-outlined text-green-400 text-[14px]">check_circle</span>
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest italic">Clase: Matemáticas 1 Encontrada</span>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest ml-1">Correo Institucional</label>
            <input
              required
              type="email"
              placeholder="nombre@institucion.edu"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white placeholder:text-white/20"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest ml-1">Contraseña</label>
            <input
              required
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white placeholder:text-white/20"
            />
          </div>

          {/* Visual CAPTCHA (Contenedor reservado) */}
          <div className="pt-4">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 select-none">
                   <div className="text-xs font-mono opacity-40 tracking-tighter italic">A7X9</div>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-[#75777e] uppercase tracking-[0.2em]">Verificación</p>
                  <p className="text-[11px] text-white/60">Escribe el código</p>
                </div>
              </div>
              <input
                className="w-20 h-12 text-center bg-white/10 border border-white/10 rounded-xl text-lg font-bold tracking-widest focus:ring-2 focus:ring-[#008cc7] outline-none text-white transition-all"
                maxLength={4}
                type="text"
                placeholder="****"
              />
            </div>
          </div>

          {/* Botón de Registro */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-4 py-5 bg-[#008cc7] text-white rounded-2xl font-ubuntu font-black uppercase tracking-[0.3em] text-[11px] transition-all shadow-lg shadow-[#008cc7]/20 active:scale-[0.95] flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-wait' : 'hover:bg-[#007bb0] hover:scale-[1.02]'}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Creando Acceso...
              </>
            ) : "Completar Registro"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-[#75777e] uppercase tracking-widest font-bold">
            ¿Ya tienes cuenta? <a className="text-[#008cc7] hover:underline underline-offset-4 ml-1" href="/login">Iniciar Sesión</a>
          </p>
        </div>
      </div>

      {/* Decorative Steps (Dark Mode Style) */}
      <div className="mt-12 flex items-center gap-8 opacity-20 relative z-10">
        <div className="flex flex-col items-center">
          <span className="text-white font-black text-xl italic font-ubuntu">01</span>
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] mt-1 text-white">Enroll</span>
        </div>
        <div className="h-px w-16 bg-white/20"></div>
        <div className="flex flex-col items-center">
          <span className="text-white font-black text-xl italic font-ubuntu">02</span>
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] mt-1 text-white">Verify</span>
        </div>
        <div className="h-px w-16 bg-white/20"></div>
        <div className="flex flex-col items-center">
          <span className="text-white font-black text-xl italic font-ubuntu">03</span>
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] mt-1 text-white">Learn</span>
        </div>
      </div>

      <footer className="mt-12 py-4 text-center text-white/10 text-[9px] uppercase tracking-[0.5em] font-bold">
        Imperia Intelligence Systems © 2026
      </footer>
    </div>
  );
}