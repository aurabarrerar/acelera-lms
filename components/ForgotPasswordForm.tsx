"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de envío
    setTimeout(() => {
      setIsLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#040d1a] text-white flex flex-col items-center justify-center p-6 font-redonda relative overflow-hidden">

      {/* Decoración de fondo futurista */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#008cc7]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-[#46178f]/10 blur-[120px] rounded-full"></div>

      {/* Header con Logo */}
      <div className="relative z-10 mb-10 text-center">
        <img
          src="/imperialight.png"
          alt="Imperia Logo"
          className="w-14 h-14 mx-auto mb-4 object-contain"
        />
        <h1 className="text-3xl font-bold tracking-[0.2em] text-white font-ubuntu uppercase">IMPERIA</h1>
        <p className="text-[#008cc7] font-bold tracking-[0.3em] text-[9px] uppercase mt-1">Acceso de Seguridad</p>
      </div>

      <div className="relative z-10 w-full max-w-[450px] bg-white/[0.02] backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
        {!sent ? (
          <>
            <div className="mb-8 text-center">
              <div className="w-16 h-16 bg-[#008cc7]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#008cc7]/20">
                <span className="material-symbols-outlined text-[#008cc7] text-4xl">lock_reset</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 font-ubuntu">Recuperar Contraseña</h2>
              <p className="text-[#75777e] text-sm leading-relaxed">
                Ingresa tu correo institucional y te enviaremos las instrucciones para recuperar tu acceso.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest ml-1">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="nombre@institucion.edu"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#008cc7] focus:bg-white/10 transition-all text-white"
                />
              </div>

              <button
                disabled={isLoading}
                className={`w-full py-5 bg-[#008cc7] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-lg shadow-[#008cc7]/20 active:scale-[0.95] flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-wait' : 'hover:bg-[#007bb0] hover:scale-[1.02]'}`}
                type="submit"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Enviando enlace...
                  </>
                ) : "Enviar Enlace de Recuperación"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
              <span className="material-symbols-outlined text-green-400 text-5xl">mark_email_read</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 font-ubuntu">Revisa tu Correo</h2>
            <p className="text-[#75777e] text-sm mb-10 leading-relaxed px-4">
              Hemos enviado las instrucciones de recuperación a tu bandeja de entrada.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-[#008cc7] font-bold text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              ¿No lo recibiste? Reenviar código
            </button>
          </div>
        )}

        <div className="mt-10 text-center pt-8 border-t border-white/5">
          <Link href="/login" className="text-[#75777e] text-[10px] font-bold hover:text-[#008cc7] flex items-center justify-center gap-2 transition-colors tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Volver al Inicio de Sesión
          </Link>
        </div>
      </div>

      <footer className="mt-16 text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">
        Imperia Intelligence Systems © 2026
      </footer>
    </div>
  );
}