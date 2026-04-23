"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';

// INTERFACE PARA TYPESCRIPT
interface ExamOptionProps {
  index: number;
  text: string;
  selected: boolean;
  onClick: () => void;
}

// COMPONENTE AUXILIAR (Fuera de la función principal)
function ExamOption({ index, text, selected, onClick }: ExamOptionProps) {
  const letters = ['A', 'B', 'C', 'D'];
  return (
    <div
      onClick={onClick}
      className={`group w-full p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
        selected ? 'border-[#008cc7] bg-[#f0f9ff]' : 'border-[#f4f3f3] hover:border-[#c5c6ce] bg-white'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
        selected ? 'bg-[#008cc7] text-white' : 'bg-[#f4f3f3] text-[#75777e] group-hover:bg-[#e3e2e2]'
      }`}>
        {letters[index]}
      </div>
      <span className={`text-sm font-medium ${selected ? 'text-[#008cc7]' : 'text-[#44474e]'}`}>
        {text}
      </span>
    </div>
  );
}

export default function ExamPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos

  // 1. AVISO DE SALIDA (Aparece si intentas cerrar la pestaña)
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "¡Cuidado! Si sales ahora, tu examen se enviará automáticamente.";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // 2. TEMPORIZADOR
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFinish = () => {
    alert("¡Examen enviado con éxito!");
    router.push('/exam/success');
  };

  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 p-12 flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-3xl flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.3em] mb-1">Evaluación de Módulo</h2>
            <h1 className="text-2xl font-bold text-[#081b39] font-ubuntu">Seguridad Técnica y Riesgos ESD</h1>
          </div>

          <div className="bg-white border border-[#ba1a1a]/20 px-6 py-3 rounded-2xl shadow-sm flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ba1a1a] animate-pulse">timer</span>
            <span className="text-lg font-mono font-bold text-[#ba1a1a]">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Barra de Progreso */}
        <div className="w-full max-w-3xl mb-8">
          <div className="flex justify-between text-[10px] font-bold text-[#75777e] uppercase mb-2">
            <span>Pregunta 4 de 10</span>
            <span>40% Completado</span>
          </div>
          <div className="w-full h-2 bg-[#e3e2e2] rounded-full overflow-hidden">
            <div className="bg-[#008cc7] h-full w-[40%] transition-all duration-500"></div>
          </div>
        </div>

        {/* Tarjeta de la Pregunta */}
        <div className="w-full max-w-3xl bg-white rounded-3xl p-10 border border-[#c5c6ce]/20 shadow-sm">
          <p className="text-lg font-medium text-[#081b39] mb-8 leading-relaxed">
            ¿Cuál es el protocolo principal de conexión a tierra al manipular componentes sensibles a descargas electrostáticas (ESD)?
          </p>

          <div className="space-y-4">
            {[
              "Uso de calzado conductor sin pulsera.",
              "Conexión en serie a toma estándar.",
              "Punto común de tierra (Common Point Ground).",
              "Humedad relativa superior al 90%."
            ].map((text, i) => (
              <ExamOption
                key={i}
                index={i}
                text={text}
                selected={selectedOption === i}
                onClick={() => setSelectedOption(i)}
              />
            ))}
          </div>

          {/* Navegación */}
          <div className="mt-12 pt-8 border-t border-[#f4f3f3] flex justify-between">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 text-[#75777e] font-bold text-[10px] uppercase tracking-widest hover:text-[#081b39] transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Anterior
            </button>
            <button
              onClick={handleFinish}
              disabled={selectedOption === null}
              className={`px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg ${
                selectedOption !== null
                ? 'bg-[#081b39] text-white hover:bg-[#008cc7] shadow-[#081b39]/20'
                : 'bg-[#e3e2e2] text-[#75777e] cursor-not-allowed'
              }`}
            >
              Siguiente Pregunta
            </button>
          </div>
        </div>

        {/* Botón de Emergencia */}
        <button className="mt-8 flex items-center gap-2 text-[#081b39] opacity-40 hover:opacity-100 transition-all group">
          <span className="material-symbols-outlined text-lg group-hover:rotate-12">tempest</span>
          <span className="text-[9px] font-bold uppercase tracking-widest">Pedir pista a DragonIA (Penalización -5pts)</span>
        </button>
      </main>
    </div>
  );
}