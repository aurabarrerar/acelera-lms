"use client";
import React, { useState } from 'react';
import {
  FiUser,
  FiMail,
  FiBriefcase,
  FiKey,
  FiLock,
  FiCheckCircle,
  FiAlertCircle,
  FiX
} from 'react-icons/fi';

export default function ProfilePage() {
  // 1. ESTADOS
  const [showPassModal, setShowPassModal] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Datos simulados (Aquí irían los datos de Alejandra)
  const userData = {
    nombre: "Alejandra Patricia",
    apellido: "Barrera Ruz",
    email: "a.barrera@imperia.edu",
    empresa: "Imperia Software Global",
    rol: "Docente Titular",
    matricula: "221201483"
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de validación
    setStatus('success');
    setTimeout(() => {
      setShowPassModal(false);
      setStatus('idle');
    }, 2500);
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in duration-700">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-ubuntu font-bold text-[#081b39] italic tracking-tight">
          Mi Perfil<span className="text-[#008cc7]">.</span>
        </h1>
        <p className="text-[11px] font-bold text-[#75777e] uppercase tracking-widest mt-1">Gestión de cuenta y seguridad</p>
      </div>

      <div className="grid grid-cols-12 gap-8">

        {/* 4.1 DATOS GENERALES */}
        <div className="col-span-8 bg-white rounded-[3rem] p-10 border border-[#c5c6ce]/20 shadow-sm">
          <div className="flex items-center gap-8 mb-12">
            <div className="w-24 h-24 bg-[#081b39] rounded-[2rem] flex items-center justify-center text-white text-3xl font-ubuntu font-bold shadow-xl shadow-[#081b39]/20">
              {userData.nombre.charAt(0)}{userData.apellido.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-ubuntu font-bold text-[#081b39]">{userData.nombre} {userData.apellido}</h2>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#008cc7] bg-[#008cc7]/10 px-3 py-1 rounded-lg">
                ID: {userData.matricula}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-10 gap-x-6">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-[#c5c6ce] tracking-widest flex items-center gap-2">
                <FiMail className="text-[#008cc7]" /> Correo Electrónico
              </p>
              <p className="text-sm font-bold text-[#081b39]">{userData.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-[#c5c6ce] tracking-widest flex items-center gap-2">
                <FiBriefcase className="text-[#008cc7]" /> Empresa Asignada
              </p>
              <p className="text-sm font-bold text-[#081b39]">{userData.empresa}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-[#c5c6ce] tracking-widest flex items-center gap-2">
                <FiUser className="text-[#008cc7]" /> Cargo
              </p>
              <p className="text-sm font-bold text-[#081b39]">{userData.rol}</p>
            </div>
          </div>
        </div>

        {/* ACCIONES RÁPIDAS (Cambiar Contraseña) */}
        <div className="col-span-4 space-y-6">
          <div className="bg-[#081b39] rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <FiLock size={32} className="mb-4 text-[#008cc7]" />
              <h3 className="text-xl font-ubuntu font-bold italic mb-2">Seguridad</h3>
              <p className="text-[11px] text-white/60 font-medium mb-6 leading-relaxed">
                Mantén tu cuenta protegida actualizando tu contraseña regularmente.
              </p>
              <button
                onClick={() => setShowPassModal(true)}
                className="w-full py-4 bg-white text-[#081b39] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#008cc7] hover:text-white transition-all shadow-lg active:scale-95"
              >
                Cambiar Contraseña
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-[#008cc7]/20 transition-all"></div>
          </div>
        </div>
      </div>

      {/* 4.1.2 MODAL DE CAMBIO DE CONTRASEÑA */}
      {showPassModal && (
        <div className="fixed inset-0 bg-[#081b39]/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-white rounded-[3rem] p-12 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-300">

            {status === 'idle' ? (
              <>
                <button
                  onClick={() => setShowPassModal(false)}
                  className="absolute top-8 right-8 text-[#c5c6ce] hover:text-[#081b39] transition-colors"
                >
                  <FiX size={24} />
                </button>

                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-[#081b39]/5 text-[#081b39] rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <FiKey size={32} />
                  </div>
                  <h3 className="text-2xl font-ubuntu font-bold text-[#081b39]">Actualizar Clave</h3>
                  <p className="text-xs text-[#75777e] mt-2 font-medium">Introduce tu nueva contraseña de acceso.</p>
                </div>

                <form onSubmit={handlePasswordUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-[#c5c6ce] ml-4 tracking-widest">Contraseña Actual</label>
                    <input required type="password" placeholder="••••••••" className="w-full bg-[#faf9f9] border border-[#f4f3f3] p-4 rounded-2xl text-sm focus:outline-none focus:border-[#008cc7] font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase text-[#c5c6ce] ml-4 tracking-widest">Nueva Contraseña</label>
                    <input required type="password" placeholder="••••••••" className="w-full bg-[#faf9f9] border border-[#f4f3f3] p-4 rounded-2xl text-sm focus:outline-none focus:border-[#008cc7] font-bold" />
                  </div>
                  <button type="submit" className="w-full mt-6 py-4 bg-[#081b39] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#008cc7] transition-all shadow-xl shadow-[#081b39]/10">
                    Confirmar Cambio
                  </button>
                </form>
              </>
            ) : (
              /* 4.1.2 POP-UP DE ÉXITO/ERROR */
              <div className="py-10 text-center animate-in fade-in zoom-in-90">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${status === 'success' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                  {status === 'success' ? <FiCheckCircle size={40} /> : <FiAlertCircle size={40} />}
                </div>
                <h3 className="text-2xl font-ubuntu font-bold text-[#081b39]">
                  {status === 'success' ? '¡Todo listo!' : 'Hubo un error'}
                </h3>
                <p className="text-sm text-[#75777e] mt-2 font-medium">
                  {status === 'success'
                    ? 'Tu contraseña ha sido actualizada correctamente.'
                    : 'Las contraseñas no coinciden, intenta de nuevo.'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}