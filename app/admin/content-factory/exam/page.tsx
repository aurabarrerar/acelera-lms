"use client";
import React, { useState } from 'react';
import {
  FiPlus, FiTrash2, FiSave, FiAlertTriangle,
  FiUploadCloud, FiChevronRight, FiBookOpen
} from 'react-icons/fi';

interface Option {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswerId: number | null;
}

export default function ExamCreator() {
  // Estado para metadatos del examen (Contexto)
  const [context] = useState({
    modulo: "Seguridad Industrial",
    leccion: "Protocolos de Evacuación",
    clase: "Simulacros de Incendio"
  });

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "",
      options: [
        { id: 1, text: "" },
        { id: 2, text: "" },
        { id: 3, text: "" }
      ],
      correctAnswerId: null
    }
  ]);

  const addQuestion = () => {
    const newId = questions.length + 1;
    setQuestions([...questions, {
      id: newId,
      text: "",
      options: [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, text: "" }],
      correctAnswerId: null
    }]);
  };

  const removeQuestion = (id: number) => {
    if (questions.length > 1) setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="p-12 bg-[#faf9f9] min-h-screen font-redonda text-[#081b39]">

      {/* BARRA DE CONTEXTO (BREADCRUMBS) */}
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

      {/* HEADER PRINCIPAL */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#008cc7] mb-1">Fábrica de Contenido</p>
          <h1 className="text-3xl font-ubuntu font-bold italic tracking-tight">Configurador de Examen</h1>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl border border-[#c5c6ce]/30 text-[#75777e] font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all">
            <FiAlertTriangle /> Descartar
          </button>
          <button className="px-8 py-3 bg-[#081b39] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/10">
            <FiSave /> Guardar y Publicar
          </button>
        </div>
      </header>

      <div className="max-w-5xl space-y-8 pb-20">

        {/* HERRAMIENTAS DE CARGA */}
        <div className="flex justify-between items-center bg-white p-6 rounded-[1.5rem] border border-[#c5c6ce]/20 shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#081b39]">Reactivos: {questions.length}</h2>
            <div className="h-4 w-[1px] bg-[#f4f3f3]"></div>
            <p className="text-[10px] font-bold text-[#c5c6ce] italic">Estado: Borrador Local</p>
          </div>
          <button className="px-5 py-2.5 bg-[#f4f3f3] text-[#081b39] rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#c5c6ce]/30 transition-all">
            <FiUploadCloud /> Importar .CSV
          </button>
        </div>

        {/* LISTA DE PREGUNTAS */}
        {questions.map((question, index) => (
          <section key={question.id} className="bg-white rounded-[2.5rem] p-10 border border-[#c5c6ce]/20 shadow-sm relative group animate-in slide-in-from-bottom-4 transition-all hover:border-[#008cc7]/30">

            <button
              onClick={() => removeQuestion(question.id)}
              className="absolute top-8 right-8 text-[#c5c6ce] hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            >
              <FiTrash2 />
            </button>

            <div className="flex gap-8">
              <div className="w-12 h-12 bg-[#081b39] rounded-2xl flex items-center justify-center font-ubuntu font-bold text-white text-xl shadow-xl">
                {index + 1}
              </div>

              <div className="flex-1 space-y-8">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-3 block">Pregunta del examen</label>
                  <textarea
                    placeholder="Escribe el reactivo aquí..."
                    className="w-full bg-[#faf9f9] border-none rounded-[1.5rem] p-6 text-base text-[#081b39] font-bold outline-none focus:ring-2 focus:ring-[#008cc7] transition-all resize-none shadow-inner"
                    rows={2}
                  />
                </div>

                <div className="grid gap-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-1 block">Opciones y Respuesta Correcta</label>

                  {[0, 1, 2].map((optIndex) => (
                    <div key={optIndex} className="flex items-center gap-4 group/option">
                      <div className="relative">
                        <input
                          type="radio"
                          name={`correct-${question.id}`}
                          className="w-6 h-6 accent-[#008cc7] cursor-pointer appearance-none border-2 border-[#c5c6ce] rounded-full checked:border-[#008cc7] transition-all"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder={`Respuesta ${String.fromCharCode(65 + optIndex)}`}
                        className="flex-1 p-5 bg-[#f4f3f3] border border-transparent rounded-xl text-sm font-medium outline-none focus:bg-white focus:ring-1 focus:ring-[#008cc7] transition-all shadow-sm"
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