"use client";
import React from 'react';
import {
  FiUsers,
  FiUserCheck,
  FiActivity,
  FiAlertTriangle,
  FiArrowRight,
  FiTrendingUp
} from 'react-icons/fi';

// Definimos el subcomponente arriba para evitar problemas de hoisting en el build
function StatCard({ title, value, icon, trend, color }: any) {
  return (
    <div className="col-span-4 bg-white p-8 rounded-[2.5rem] border border-[#c5c6ce]/20 shadow-sm group hover:border-[#008cc7]/30 transition-all">
      <div className="flex justify-between items-start mb-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${
          color === 'blue' ? 'bg-[#008cc7]/10 text-[#008cc7]' : 'bg-[#081b39] text-white'
        }`}>
          {icon}
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black uppercase text-[#c5c6ce] tracking-widest">{title}</p>
          <h2 className="text-3xl font-ubuntu font-bold text-[#081b39]">{value}</h2>
        </div>
      </div>
      <div className="pt-4 border-t border-[#f4f3f3]">
        <p className="text-[9px] font-bold text-[#75777e] uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> {trend}
        </p>
      </div>
    </div>
  );
}

export default function CoordinatorDashboardPage() {
  const expiringClasses = [
    { id: 1, name: "Ingeniería de Software A", teacher: "Ing. Ramos", daysLeft: 3, category: "Sistemas" },
    { id: 2, name: "Seguridad Industrial B", teacher: "Lic. Soto", daysLeft: 5, category: "Planta Norte" },
    { id: 3, name: "Cálculo Diferencial", teacher: "Dr. Méndez", daysLeft: 7, category: "Bachillerato" },
  ];

  const categoriesProgress = [
    { name: "Sistemas", progress: 85, color: "#008cc7" },
    { name: "Planta Norte", progress: 42, color: "#081b39" },
    { name: "Recursos Humanos", progress: 60, color: "#008cc7" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-[#008cc7] rounded-full animate-pulse"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#008cc7]">Panel de Control Coordinador</p>
          </div>
          <h1 className="text-4xl font-ubuntu font-bold text-[#081b39] italic tracking-tight">
            Overview<span className="text-[#008cc7]">.</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-[#c5c6ce] uppercase tracking-widest">Estado del Sistema</p>
          <p className="text-sm font-bold text-[#081b39]">27 de Abril, 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <StatCard title="Total Alumnos" value="1,240" icon={<FiUsers />} trend="+12% este mes" color="blue" />
        <StatCard title="Maestros Activos" value="42" icon={<FiUserCheck />} trend="Sin bajas recientes" color="dark" />
        <StatCard title="Avance Global" value="68.4%" icon={<FiActivity />} trend="En tiempo" color="blue" />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 space-y-6">
          <div className="bg-white rounded-[3rem] p-10 border border-[#c5c6ce]/20 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
                  <FiAlertTriangle size={20} />
                </div>
                <h3 className="text-xl font-ubuntu font-bold text-[#081b39]">Clases próximas a vencer</h3>
              </div>
            </div>
            <div className="space-y-4">
              {expiringClasses.map((clase) => (
                <div key={clase.id} className="group flex items-center justify-between p-6 bg-[#faf9f9] border border-[#f4f3f3] rounded-[2rem] hover:border-orange-200 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm font-bold text-sm">
                      {clase.daysLeft}d
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081b39]">{clase.name}</h4>
                      <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest">{clase.teacher} • {clase.category}</p>
                    </div>
                  </div>
                  <button className="p-3 bg-white text-[#c5c6ce] group-hover:text-[#081b39] rounded-xl transition-all">
                    <FiArrowRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-5 space-y-6">
          <div className="bg-[#081b39] rounded-[3rem] p-10 text-white shadow-xl shadow-[#081b39]/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <FiTrendingUp className="text-[#008cc7]" />
                </div>
                <h3 className="text-xl font-ubuntu font-bold italic">Avance por Categoría</h3>
              </div>
              <div className="space-y-8">
                {categoriesProgress.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{cat.name}</p>
                      <p className="text-sm font-bold">{cat.progress}%</p>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#008cc7] h-full rounded-full transition-all duration-1000" style={{ width: `${cat.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#008cc7]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}