"use client";
import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import {
  FiVideo, FiFileText, FiSave, FiLayers,
  FiLink, FiX, FiHelpCircle, FiEye
} from 'react-icons/fi';

// 1. Importamos el CSS de la nueva librería
import 'react-quill-new/dist/quill.snow.css';

// 2. Importación dinámica simple (Sin wrappers complicados)
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => (
    <div className="h-80 bg-[#f4f3f3] animate-pulse rounded-[2rem] flex items-center justify-center text-[#c5c6ce] font-bold">
      Cargando Editor de Imperia...
    </div>
  )
});

export default function ContentFactoryEditor() {
  const [content, setContent] = useState('');
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [links, setLinks] = useState({ kahoot: '', pptx: '', diagnostis: '' });
  const [tempLink, setTempLink] = useState('');

  // Configuración de la barra de herramientas
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'blockquote'],
      ['clean']
    ],
  }), []);

  const openModal = (type: string) => {
    setActiveResource(type);
    setTempLink(links[type.toLowerCase() as keyof typeof links] || '');
  };

  const saveLink = () => {
    if (activeResource) {
      setLinks({ ...links, [activeResource.toLowerCase()]: tempLink });
      setActiveResource(null);
      setTempLink('');
    }
  };

  return (
    <div className="p-12 bg-[#faf9f9] min-h-screen font-redonda text-[#081b39]">

      {/* HEADER */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#081b39] rounded-[1.5rem] flex items-center justify-center text-white shadow-xl">
            <FiLayers className="text-xl" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#008cc7]">Fábrica de Contenido</p>
            <h1 className="text-2xl font-ubuntu font-bold italic tracking-tight">Editor de Módulos Maestro</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl border border-[#c5c6ce]/30 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all">
            <FiEye /> Previsualizar
          </button>
          <button className="px-8 py-3 bg-[#081b39] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/10">
            <FiSave /> Guardar Cambios
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">

        {/* IZQUIERDA: EDITOR */}
        <div className="col-span-8 space-y-8">
          <section className="bg-white rounded-[2.5rem] p-10 border border-[#c5c6ce]/20 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-6 flex items-center gap-2">
              <FiFileText className="text-[#008cc7]" /> Contenido Teórico
            </h3>
            <div className="quill-container min-h-[400px]">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                placeholder="Escribe la lección técnica aquí..."
              />
            </div>
          </section>

          {/* EXAMEN PLACEHOLDER */}
          <section className="bg-white rounded-[2.5rem] p-10 border border-[#c5c6ce]/20 shadow-sm text-center">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-8 text-left flex items-center gap-2">
                <FiHelpCircle className="text-[#008cc7]" /> Evaluación
              </h3>
              <p className="text-sm font-bold text-[#c5c6ce] py-10">Módulo de evaluación en construcción</p>
          </section>
        </div>

        {/* DERECHA: SIDEBAR */}
        <aside className="col-span-4 space-y-6">
          <div className="bg-[#081b39] text-white rounded-[2.5rem] p-8 shadow-2xl">
            <h4 className="font-ubuntu font-bold mb-2 text-[#008cc7] flex items-center gap-2">
              <FiLink /> Recursos Externos
            </h4>
            <div className="space-y-3 mt-6">
              <ResourceButton label="Kahoot" active={!!links.kahoot} onClick={() => openModal('Kahoot')} />
              <ResourceButton label="Presentación (PPTX)" active={!!links.pptx} onClick={() => openModal('PPTX')} />
              <ResourceButton label="Diagnostis" active={!!links.diagnostis} onClick={() => openModal('Diagnostis')} />
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20">
            <h4 className="font-ubuntu font-bold mb-4 flex items-center gap-2"><FiVideo className="text-[#008cc7]" /> Video</h4>
            <input type="text" placeholder="URL o ID del Video" className="w-full p-4 bg-[#f4f3f3] rounded-2xl text-xs font-bold outline-none" />
          </div>
        </aside>
      </div>

      {/* MODAL DE LINKS */}
      {activeResource && (
        <div className="fixed inset-0 bg-[#081b39]/60 backdrop-blur-md flex items-center justify-center z-[100] p-6 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-[3rem] p-12 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-ubuntu font-bold text-2xl text-[#081b39]">{activeResource}</h3>
              <button onClick={() => setActiveResource(null)}><FiX /></button>
            </div>
            <input
              type="url"
              value={tempLink}
              onChange={(e) => setTempLink(e.target.value)}
              placeholder="Pega el enlace aquí..."
              className="w-full p-5 bg-[#f4f3f3] rounded-[1.5rem] outline-none border-2 border-transparent focus:border-[#008cc7] mb-6 font-medium"
              autoFocus
            />
            <button onClick={saveLink} className="w-full py-5 bg-[#081b39] text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-widest hover:bg-[#008cc7]">Vincular Recurso</button>
          </div>
        </div>
      )}

      {/* ESTILOS GLOBALES */}
      <style jsx global>{`
        .ql-toolbar.ql-snow { border: none !important; border-bottom: 1px solid #f4f3f3 !important; padding: 1.5rem !important; background: #fafafa; border-radius: 2rem 2rem 0 0; }
        .ql-container.ql-snow { border: none !important; font-family: 'Redonda', sans-serif !important; min-height: 350px; }
        .ql-editor { padding: 2rem !important; font-size: 16px; color: #081b39; }
      `}</style>
    </div>
  );
}

function ResourceButton({ label, active, onClick }: any) {
  return (
    <button onClick={onClick} className={`w-full p-5 rounded-[1.5rem] border-2 flex justify-between items-center transition-all ${active ? 'bg-[#008cc7] border-transparent text-white' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}>
      <span className="text-[10px] font-black uppercase tracking-[0.15em]">{label}</span>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${active ? 'bg-white text-[#008cc7]' : 'bg-white/10 text-white'}`}>
        {active ? <span className="text-[12px]">✓</span> : <FiLink className="text-[10px]" />}
      </div>
    </button>
  );
}