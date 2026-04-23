"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

// Datos de ejemplo para la revisión
const reviewData = [
  {
    id: 1,
    question: "¿Cuál es el protocolo principal de conexión a tierra al manipular componentes sensibles a descargas electrostáticas (ESD)?",
    options: [
      "Uso de calzado conductor sin pulsera.",
      "Conexión en serie a toma estándar.",
      "Punto común de tierra (Common Point Ground).",
      "Humedad relativa superior al 90%."
    ],
    correctIndex: 2,
    userIndex: 2,
    explanation: "El Punto Común de Tierra asegura que todos los elementos (persona, superficie y equipo) estén al mismo potencial eléctrico."
  },
  {
    id: 2,
    question: "¿Qué nivel de resistencia se considera seguro para una pulsera antiestática estándar?",
    options: [
      "10 Ohms",
      "1 Megaohm",
      "1 Gigaohm",
      "0 Ohms (Continuidad total)"
    ],
    correctIndex: 1,
    userIndex: 3, // Ejemplo de respuesta incorrecta
    explanation: "Se requiere una resistencia de 1MΩ para limitar la corriente y proteger al usuario de choques eléctricos accidentales."
  }
];

export default function ReviewPage() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        <div className="max-w-3xl mx-auto">
          {/* Header de Revisión */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <Link href="/exam/success" className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest hover:text-[#081b39] flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-sm">arrow_back</span> Volver al éxito
              </Link>
              <h1 className="text-3xl font-bold text-[#081b39] font-ubuntu">Revisión de Evaluación</h1>
              <p className="text-[#75777e] text-sm mt-1">Repasa tus aciertos y áreas de oportunidad.</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-[#008cc7]">90<span className="text-lg text-[#75777e]">/100</span></p>
              <p className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest">Calificación Final</p>
            </div>
          </div>

          {/* Lista de Preguntas */}
          <div className="space-y-8">
            {reviewData.map((item, index) => (
              <div key={item.id} className="bg-white rounded-3xl p-8 border border-[#c5c6ce]/20 shadow-sm relative overflow-hidden">
                {/* Indicador lateral de estado */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.userIndex === item.correctIndex ? 'bg-green-500' : 'bg-[#ba1a1a]'}`}></div>

                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-[#75777e] uppercase tracking-widest">Pregunta {index + 1}</span>
                  {item.userIndex === item.correctIndex ? (
                    <span className="flex items-center gap-1 text-green-600 font-bold text-[10px] uppercase">
                      <span className="material-symbols-outlined text-sm">check_circle</span> Correcta
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[#ba1a1a] font-bold text-[10px] uppercase">
                      <span className="material-symbols-outlined text-sm">cancel</span> Incorrecta
                    </span>
                  )}
                </div>

                <p className="text-lg font-medium text-[#081b39] mb-6">{item.question}</p>

                <div className="space-y-3">
                  {item.options.map((option, optIdx) => {
                    const isCorrect = optIdx === item.correctIndex;
                    const isUserChoice = optIdx === item.userIndex;

                    return (
                      <div
                        key={optIdx}
                        className={`p-4 rounded-xl border text-sm flex justify-between items-center ${
                          isCorrect ? 'border-green-200 bg-green-50 text-green-800' :
                          isUserChoice ? 'border-red-200 bg-red-50 text-red-800' : 'border-[#f4f3f3] text-[#75777e]'
                        }`}
                      >
                        <span>{option}</span>
                        {isCorrect && <span className="material-symbols-outlined text-sm">done</span>}
                        {isUserChoice && !isCorrect && <span className="material-symbols-outlined text-sm">close</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explicación Técnica */}
                <div className="mt-6 p-4 bg-[#f4f3f3]/50 rounded-2xl border border-dashed border-[#c5c6ce]/50">
                  <div className="flex items-center gap-2 mb-1 text-[#081b39]">
                    <span className="material-symbols-outlined text-sm">info</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Feedback de DragonIA</span>
                  </div>
                  <p className="text-xs text-[#44474e] leading-relaxed italic">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/dashboard">
              <button className="px-10 py-4 bg-[#081b39] text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#008cc7] transition-all">
                Finalizar Revisión
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}