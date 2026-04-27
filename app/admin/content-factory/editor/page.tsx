"use client";
import React, { useState, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  FiVideo, FiFileText, FiSave, FiLayers,
  FiLink, FiX, FiHelpCircle, FiEye,
  FiFile, FiCpu, FiExternalLink, FiShare2, FiZap, FiAirplay,
  FiPlus, FiUpload, FiDownload
} from 'react-icons/fi';

// 1. Importamos el CSS de la librería
import 'react-quill-new/dist/quill.snow.css';

// 2. Importación dinámica del Editor (Evita errores de SSR en Next.js)
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estado para los recursos externos
  const [links, setLinks] = useState({
    kahoot: '',
    presentacion: '',
    pdf: '',
    mapa: '',
    ideas: '',
    ia: ''
  });

  const [tempLink, setTempLink] = useState('');

  // Configuración de la barra de herramientas de Quill
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'blockquote'],
      ['clean']
    ],
  }), []);

  // --- LÓGICA: DESCARGAR PLANTILLA DE EJEMPLO ---
  const downloadExample = () => {
    const exampleFormat = `<h1>Título de la Lección</h1>
<p>Este es un párrafo de ejemplo. Puedes usar <b>negritas</b> o <i>itálicas</i> directamente en el archivo.</p>
<ul>
  <li>Punto clave A</li>
  <li>Punto clave B</li>
</ul>
<blockquote>Esta es una nota técnica importante.</blockquote>`;

    const element = document.createElement("a");
    const file = new Blob([exampleFormat], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "plantilla_leccion_imperia.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // --- LÓGICA: SUBIR ARCHIVO (TXT/HTML) ---
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const rawContent = e.target?.result as string;
        setContent(rawContent); // Quill renderiza el HTML automáticamente
      };
      reader.readAsText(file);
    }
  };

  const openModal = (type: string) => {
    setActiveResource(type);
    setTempLink(links[type.toLowerCase().replace(/\s/g, '') as keyof typeof links] || '');
  };

  const saveLink = () => {
    if (activeResource) {
      const key = activeResource.toLowerCase().replace(/\s/g, '');
      setLinks({ ...links, [key]: tempLink });
      setActiveResource(null);
      setTempLink('');
    }
  };

  return (
    <div className="p-12 bg-[#faf9f9] min-h-screen font-redonda text-[#081b39]">

      {/* HEADER */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#081b39] rounded-[22px] flex items-center justify-center text-white shadow-xl">
            <FiLayers className="text-xl" />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#008cc7] mb-1">Fábrica de Contenido</p>
            <h1 className="text-2xl font-ubuntu font-bold italic tracking-tight text-[#081b39]">Editor de Módulos Maestro</h1>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={downloadExample}
            className="px-5 py-3 rounded-xl bg-white border border-[#c5c6ce]/30 text-[#75777e] font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#f4f3f3] transition-all"
          >
            <FiDownload /> Ejemplo .txt
          </button>

          <input type="file" accept=".txt,.html" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-5 py-3 rounded-xl border-2 border-dashed border-[#008cc7]/30 text-[#008cc7] font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7]/5 transition-all"
          >
            <FiUpload /> Importar HTML
          </button>

          <div className="h-10 w-[1px] bg-[#c5c6ce]/30 mx-1"></div>

          <button className="px-6 py-3 rounded-xl border border-[#c5c6ce]/30 font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all text-[#75777e]">
            <FiEye /> Previsualizar
          </button>

          <button className="px-8 py-3 bg-[#081b39] text-white rounded-xl font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#008cc7] transition-all shadow-lg shadow-[#081b39]/10">
            <FiSave /> Guardar Cambios
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">

        {/* IZQUIERDA: EDITOR Y EXAMEN */}
        <div className="col-span-8 space-y-8">
          <section className="bg-white rounded-[2.5rem] p-10 border border-[#c5c6ce]/20 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#75777e] flex items-center gap-2">
                <FiFileText className="text-[#008cc7]" /> Contenido de la Lección
              </h3>
              <span className="text-[8px] bg-[#008cc7]/10 text-[#008cc7] px-3 py-1 rounded-full font-black uppercase tracking-tighter">Renderizado HTML Activo</span>
            </div>
            <div className="quill-container min-h-[450px]">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                placeholder="Escribe aquí o importa un archivo .txt con etiquetas HTML para autocompletar el estilo..."
              />
            </div>
          </section>

          {/* ACCESO A EXAMEN */}
          <section className="bg-white rounded-[2.5rem] p-10 border border-[#c5c6ce]/20 shadow-sm relative group overflow-hidden">
             <h3 className="text-[10px] font-black uppercase tracking-widest text-[#75777e] mb-8 flex items-center gap-2">
                <FiHelpCircle className="text-[#008cc7]" /> Evaluación
              </h3>
              <div className="py-12 border-2 border-dashed border-[#f4f3f3] rounded-[2.5rem] flex flex-col items-center justify-center transition-all group-hover:border-[#008cc7]/20 group-hover:bg-[#faf9f9]">
                <div className="w-16 h-16 bg-[#008cc7]/10 rounded-full flex items-center justify-center mb-4">
                  <FiHelpCircle className="text-[#008cc7] text-2xl" />
                </div>
                <h4 className="font-ubuntu font-bold text-lg text-[#081b39] mb-2">Configurador de Reactivos</h4>
                <p className="text-[11px] text-[#75777e] mb-8 max-w-xs text-center font-medium">Crea el examen final para este módulo. Podrás importar reactivos masivos en la siguiente pantalla.</p>

                <Link href="/admin/content-factory/exam">
                  <button className="bg-[#081b39] text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#008cc7] transition-all shadow-xl shadow-[#081b39]/10">
                    Ir a realizar examen <FiExternalLink />
                  </button>
                </Link>
              </div>
          </section>
        </div>

        {/* DERECHA: RECURSOS */}
        <aside className="col-span-4 space-y-6">
          <div className="bg-[#081b39] text-white rounded-[2.5rem] p-8 shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-ubuntu font-bold text-[#008cc7] mb-6 flex items-center gap-2">
                <FiLink /> Recursos Externos
              </h4>
              <div className="space-y-3">
                <ResourceButton icon={<FiZap className="rotate-12" />} label="Unirse al Kahoot" active={!!links.kahoot} onClick={() => openModal('Kahoot')} />
                <ResourceButton icon={<FiAirplay />} label="Presentación" active={!!links.presentacion} onClick={() => openModal('Presentacion')} />
                <ResourceButton icon={<FiFile />} label="Recursos PDF" active={!!links.pdf} onClick={() => openModal('PDF')} />
                <ResourceButton icon={<FiShare2 />} label="Mapa Conceptual" active={!!links.mapa} onClick={() => openModal('Mapa')} />
                <ResourceButton icon={<FiZap />} label="Ideas Principales" active={!!links.ideas} onClick={() => openModal('Ideas')} />
                <ResourceButton icon={<FiCpu className="animate-pulse" />} label="ImperiaGPT" active={!!links.ia} onClick={() => openModal('IA')} highlight />
              </div>
            </div>
            {/* Decoración de fondo */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#008cc7]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-[#c5c6ce]/20 shadow-sm group">
            <h4 className="font-ubuntu font-bold mb-4 flex items-center gap-2 text-[#081b39]">
              <FiVideo className="text-[#008cc7]" /> Recurso Video
            </h4>
            <div className="relative">
              <input type="text" placeholder="URL de YouTube" className="w-full p-5 bg-[#faf9f9] rounded-2xl text-[11px] font-bold outline-none border border-transparent focus:border-[#008cc7]/20 transition-all text-[#081b39]" />
              <FiLink className="absolute right-5 top-1/2 -translate-y-1/2 text-[#c5c6ce]" />
            </div>
          </div>
        </aside>
      </div>

      {/* MODAL DE ENLACES */}
      {activeResource && (
        <div className="fixed inset-0 bg-[#081b39]/80 backdrop-blur-md flex items-center justify-center z-[100] p-6">
          <div className="bg-white w-full max-w-md rounded-[3rem] p-12 shadow-2xl animate-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-ubuntu font-bold text-2xl text-[#081b39]">{activeResource}</h3>
                <p className="text-[10px] text-[#75777e] font-black uppercase tracking-widest mt-1">Configuración de acceso</p>
              </div>
              <button onClick={() => setActiveResource(null)} className="w-10 h-10 bg-[#faf9f9] rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"><FiX /></button>
            </div>

            <input
              type="url"
              value={tempLink}
              onChange={(e) => setTempLink(e.target.value)}
              placeholder="https://ejemplo.com/recurso"
              className="w-full p-5 bg-[#faf9f9] rounded-[1.5rem] outline-none border-2 border-transparent focus:border-[#008cc7] font-medium text-sm mb-6 text-[#081b39]"
              autoFocus
            />

            <button onClick={saveLink} className="w-full py-5 bg-[#081b39] text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#008cc7] shadow-xl transition-all active:scale-95">
              Vincular Recurso
            </button>
          </div>
        </div>
      )}

      {/* ESTILOS GLOBALES QUILL */}
      <style jsx global>{`
        .ql-toolbar.ql-snow { border: none !important; border-bottom: 1px solid #f4f3f3 !important; padding: 1.5rem !important; background: #fafafa; border-radius: 2rem 2rem 0 0; }
        .ql-container.ql-snow { border: none !important; font-family: 'Redonda', sans-serif !important; min-height: 400px; }
        .ql-editor { padding: 2.5rem !important; font-size: 16px; color: #081b39; line-height: 1.6; }
        .ql-editor.ql-blank::before { color: #c5c6ce !important; font-style: normal !important; }
        .ql-editor h1 { font-family: 'Ubuntu', sans-serif; font-weight: 700; font-style: italic; color: #081b39; }
      `}</style>
    </div>
  );
}

// COMPONENTE AUXILIAR BOTÓN
function ResourceButton({ label, active, onClick, icon, highlight = false }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-5 rounded-[1.5rem] border-2 flex justify-between items-center transition-all group/btn ${
        active
          ? 'bg-[#008cc7] border-transparent text-white shadow-lg shadow-[#008cc7]/20'
          : highlight
            ? 'bg-[#008cc7]/10 border-[#008cc7]/20 text-[#008cc7] hover:bg-[#008cc7]/20'
            : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/20'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-sm ${active ? 'text-white' : highlight ? 'text-[#008cc7]' : 'group-hover/btn:text-[#008cc7] transition-colors'}`}>
          {icon}
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.15em]">{label}</span>
      </div>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
        active ? 'bg-white text-[#008cc7]' : 'bg-white/10 group-hover/btn:bg-[#008cc7] group-hover/btn:text-white'
      }`}>
        {active ? <span className="text-[12px]">✓</span> : <FiPlus className="text-[10px]" />}
      </div>
    </button>
  );
}