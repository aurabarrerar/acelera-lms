"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';

export default function SettingsPage() {
  // 1. DATOS INICIALES (Simulando respuesta de API)
  const [initialData] = useState({
    fullName: "Alejandra Patricia Barrera Ruz",
    email: "alejandra.barrera@universidad.edu.mx",
    city: "Hermosillo, Sonora",
    role: "Estudiante", // Esto vendrá definido por el sistema
    dragonIA: true,
    notifications: true,
    publicProfile: false
  });

  const [formData, setFormData] = useState({ ...initialData });
  const [hasChanges, setHasChanges] = useState(false);

  // 2. LÓGICA DE BOTÓN GUARDAR (Solo si hay cambios en campos editables)
  useEffect(() => {
    const isDifferent = JSON.stringify(initialData) !== JSON.stringify(formData);
    setHasChanges(isDifferent);
  }, [formData, initialData]);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        <header className="mb-10">
          <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.3em] mb-1">Preferencias</h2>
          <h1 className="text-3xl font-bold text-[#081b39] font-ubuntu">Configuración</h1>
        </header>

        <div className="grid grid-cols-12 gap-8">

          {/* COLUMNA IZQUIERDA: Perfil y Estado */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#c5c6ce]/20 shadow-sm text-center">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-[#081b39] flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  {formData.fullName.split(' ').map(n => n[0]).join('').slice(0,2)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#081b39] mb-1">
                {formData.fullName.split(' ')[0]} {formData.fullName.split(' ')[1]}
              </h3>
              <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest">
                {formData.role} en Sistemas
              </p>
            </div>

            {/* ESTADO DE LA CUENTA */}
            <div className="bg-[#081b39] rounded-3xl p-6 text-white shadow-lg shadow-[#081b39]/20">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 mb-3 text-white/70">Estado de la cuenta</p>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-bold tracking-wide">Usuario Activo / Inscrito</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-10 border border-[#c5c6ce]/20 shadow-sm">
              <h3 className="text-[11px] font-black text-[#081b39] uppercase tracking-widest mb-8 pb-4 border-b border-[#f4f3f3]">Información del Perfil</h3>

              <div className="grid grid-cols-2 gap-6">
                <InputGroup label="Nombre Completo" value={formData.fullName} readOnly />
                <InputGroup label="Correo Electrónico" value={formData.email} readOnly />

                {/* CIUDAD (Editable) */}
                <InputGroup
                  label="Ciudad"
                  value={formData.city}
                  onChange={(e: any) => handleChange('city', e.target.value)}
                />

                {/* ROL (Solo lectura - Bloqueado) */}
                <InputGroup
                  label="Ocupación / Rol"
                  value={formData.role}
                  readOnly
                />
              </div>
            </div>

            {/* AJUSTES DE APRENDIZAJE */}
            <div className="bg-white rounded-3xl p-10 border border-[#c5c6ce]/20 shadow-sm">
              <h3 className="text-[11px] font-black text-[#081b39] uppercase tracking-widest mb-8 pb-4 border-b border-[#f4f3f3]">Ajustes de Aprendizaje</h3>
              <div className="space-y-6">
                <ToggleGroup
                  title="Modo DragonIA Activo"
                  desc="Permite que el avatar interactivo brinde sugerencias proactivas durante las lecciones."
                  active={formData.dragonIA}
                  onClick={() => handleChange('dragonIA', !formData.dragonIA)}
                />
                <ToggleGroup
                  title="Notificaciones de Examen"
                  desc="Recibe alertas 48 horas antes del cierre de tus evaluaciones."
                  active={formData.notifications}
                  onClick={() => handleChange('notifications', !formData.notifications)}
                />
              </div>
            </div>

            {/* BOTONES */}
            <div className="flex justify-end items-center gap-8">
              <button
                onClick={() => setFormData({ ...initialData })}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${hasChanges ? 'text-[#ba1a1a] hover:underline' : 'text-[#75777e] opacity-50 cursor-not-allowed'}`}
                disabled={!hasChanges}
              >
                Descartar cambios
              </button>
              <button
                disabled={!hasChanges}
                className={`px-10 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all ${
                  hasChanges
                  ? 'bg-[#008cc7] text-white shadow-lg shadow-[#008cc7]/30 hover:scale-105 active:scale-95'
                  : 'bg-[#e3e2e2] text-[#75777e] cursor-not-allowed'
                }`}
              >
                Guardar Configuración
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// COMPONENTES REUTILIZABLES
function InputGroup({ label, value, readOnly = false, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-bold text-[#75777e] uppercase tracking-widest ml-1">{label}</label>
      <input
        type="text"
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        className={`w-full px-5 py-4 border-none rounded-2xl text-sm font-medium text-[#081b39] transition-all ${
          readOnly
          ? 'bg-[#f4f3f3] opacity-60 cursor-not-allowed'
          : 'bg-[#f4f3f3] focus:ring-2 focus:ring-[#008cc7] hover:bg-[#ececec]'
        }`}
      />
    </div>
  );
}

function ToggleGroup({ title, desc, active, onClick }: any) {
  return (
    <div className="flex justify-between items-center group">
      <div className="max-w-[80%]">
        <h4 className="text-sm font-bold text-[#081b39] mb-1">{title}</h4>
        <p className="text-[11px] text-[#75777e] leading-relaxed">{desc}</p>
      </div>
      <button
        onClick={onClick}
        className={`w-12 h-6 rounded-full relative transition-all duration-300 shadow-inner ${active ? 'bg-[#008cc7]' : 'bg-[#e3e2e2]'}`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${active ? 'left-7' : 'left-1'}`}></div>
      </button>
    </div>
  );
}