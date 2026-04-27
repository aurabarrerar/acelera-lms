"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FiPlus, FiTrash2, FiSave, FiAlertTriangle,
  FiUploadCloud, FiChevronRight, FiBookOpen, FiArrowLeft, FiCheckCircle,
  FiDownload // Importamos el icono de descarga
} from 'react-icons/fi';

export default function ExamCreator() {
  const router = useRouter();

  const [context] = useState({
    modulo: "Seguridad Industrial",
    leccion: "Protocolos de Evacuación",
    clase: "Simulacros de Incendio"
  });

  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      options: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }],
      correctAnswerId: null
    }
  ]);

  // --- LÓGICA: DESCARGAR PLANTILLA CSV ---
  const downloadCSVExample = () => {
    // Definimos el encabezado y una fila de ejemplo
    const csvContent = "Pregunta,OpcionA,OpcionB,OpcionC,RespuestaCorrecta\n" +
      "¿Cuál es el color de los extintores de PQS?,Rojo,Azul,Verde,Rojo\n" +
      "¿Qué significa la señal ética verde?,Peligro,Evacuacion,Informativa,Evacuacion";

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "ejemplo_examen_imperia.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addQuestion = () => {
    setQuestions([...questions, {
      id: Date.now(),
      text: "",
      options: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }],
      correctAnswerId: null
    }]);
  };

  const removeQuestion = (id: number) => {
    if (questions.length > 1) setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="p-12 bg-[#faf9f9] min-h-screen">
      {/* BOTÓN VOLVER */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#75777e] hover:text-[#008cc7] transition-all mb-8 group"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Volver a la Fábrica
      </button>

      {/* BREADCRUMBS */}
      <nav className="flex items-center gap-3 mb-4 px-2">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#75777e]">
          <FiBookOpen className="text-[#008cc7]" />
          <span>{context.modulo}</span>
        </div>
        <FiChevronRight className="text-[#c5c6ce] text-xs" />
        <div className="text-[10px] font-black uppercase tracking-widest text-[#75777e]">
          <span>{context.leccion}</span>
        </div>
        <FiChevronRight className="text-[#c5c6ce] text-xs" />
        <div className="text-[10px] font-black uppercase tracking-widest text-[#008cc7] bg-[#008cc7]/5 px-3 py-1 rounded-full border border-[#008cc7]/10">
          <span>{context.clase}</span>
        </div>
      </nav>

      {/* HEADER */}
      <header className="flex justify-between items-end mb-12">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#008cc7] mb-1">Fábrica de Contenido</p>
          <h1 className="text-3xl font-ubuntu font-bold italic tracking-tight text-[#081b39]">Configurador de Examen</h1>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-xl border border-[#c5c6ce]/30 text-[#75777e] font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-[#ba1a1a] hover:border-[#ba1a1a]/20 transition-all">
            <FiAlertTriangle /> Descartar
          </button>

          <button className="px-6 py-3 bg-white border border-[#008cc7]/20 text-[#008cc7] rounded-xl font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7]/5 transition-all">
            <FiSave /> Guardar Borrador
          </button>

          <button className="px-8 py-3 bg-[#081b39] text-white rounded-xl font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/10">
            <FiCheckCircle /> Publicar Examen
          </button>
        </div>
      </header>

      <div className="max-w-5xl space-y-8 pb-20">
        {/* HERRAMIENTAS DE CARGA */}
        <div className="flex justify-between items-center bg-white p-6 rounded-[1.5rem] border border-[#c5c6ce]/20 shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#081b39]">Reactivos: {questions.length}</h2>
            <div className="h-4 w-[1px] bg-[#f4f3f3]"></div>
            <p className="text-[10px] font-bold text-[#c5c6ce] italic">En edición</p>
          </div>

          <div className="flex gap-3">
            {/* BOTÓN NUEVO: DESCARGAR EJEMPLO */}
            <button
              onClick={downloadCSVExample}
              className="px-5 py-2.5 bg-white border border-[#c5c6ce]/30 text-[#75777e] rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#faf9f9] transition-all"
            >
              <FiDownload /> Ejemplo .CSV
            </button>

            <button className="px-5 py-2.5 bg-[#081b39] text-white rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all shadow-md">
              <FiUploadCloud /> Importar .CSV
            </button>
          </div>
        </div>

        {/* LISTA DE PREGUNTAS */}
        {questions.map((question, index) => (
          <section key={question.id} className="bg-white rounded-[2.5rem] p-10 border border-[#c5c6ce]/20 shadow-sm relative group transition-all hover:border-[#008cc7]/30">
            <button
              onClick={() => removeQuestion(question.id)}
              className="absolute top-8 right-8 text-[#c5c6ce] hover:text-[#ba1a1a] transition-colors opacity-0 group-hover:opacity-100 p-2"
            >
              <FiTrash2 />
            </button>
            <div className="flex gap-8">
              <div className="w-12 h-12 bg-[#081b39] rounded-2xl flex items-center justify-center font-ubuntu font-bold text-white text-xl shadow-xl shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 space-y-8">
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#75777e] mb-3 block opacity-60">Enunciado</label>
                  <textarea
                    placeholder="Escribe el reactivo aquí..."
                    className="w-full bg-[#faf9f9] border-none rounded-[1.5rem] p-6 text-base text-[#081b39] font-bold outline-none focus:ring-2 focus:ring-[#008cc7] transition-all resize-none shadow-inner"
                    rows={2}
                  />
                </div>
                <div className="grid gap-4">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#75777e] mb-1 block opacity-60">Opciones (Marca la correcta)</label>
                  {[0, 1, 2].map((optIndex) => (
                    <div key={optIndex} className="flex items-center gap-4 group/option">
                      <input
                        type="radio"
                        name={`correct-${question.id}`}
                        className="w-5 h-5 accent-[#008cc7] cursor-pointer"
                      />
                      <input
                        type="text"
                        placeholder={`Respuesta ${String.fromCharCode(65 + optIndex)}`}
                        className="flex-1 p-4 bg-[#f4f3f3] border border-transparent rounded-xl text-sm font-medium outline-none focus:bg-white focus:ring-1 focus:ring-[#008cc7] transition-all shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <button
          onClick={addQuestion}
          className="w-full py-10 border-2 border-dashed border-[#c5c6ce]/30 rounded-[2.5rem] flex items-center justify-center gap-3 text-[#75777e] hover:border-[#008cc7] hover:bg-white hover:text-[#008cc7] transition-all group"
        >
          <FiPlus className="text-2xl group-hover:scale-125 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Añadir Reactivo</span>
        </button>
      </div>
    </div>
  );
}