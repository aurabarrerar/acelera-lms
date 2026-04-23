import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        {/* Header con Bienvenida */}
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#081b39] font-ubuntu tracking-tight">Bienvenida, Alejandra</h2>
            <p className="text-[#75777e] text-sm mt-1">Explora tus módulos de aprendizaje de hoy.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-[#c5c6ce]/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#008cc7] text-sm">calendar_today</span>
            <span className="text-[11px] font-bold text-[#081b39] uppercase tracking-widest">Abril 2026</span>
          </div>
        </header>

        {/* BARRA DE PROGRESO GLOBAL */}
        <section className="mb-12 bg-white p-6 rounded-xl border border-[#c5c6ce]/20 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-[10px] font-bold text-[#44474e] uppercase tracking-[0.2em]">Progreso General del Programa</h3>
              <p className="text-xl font-bold text-[#081b39] font-ubuntu">72% Completado</p>
            </div>
            <span className="text-[10px] font-bold text-[#008cc7] bg-[#d7e2ff] px-3 py-1 rounded-full uppercase">Nivel Avanzado</span>
          </div>
          <div className="w-full bg-[#f4f3f3] h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#081b39] to-[#008cc7] h-full rounded-full transition-all duration-1000"
              style={{ width: '72%' }}
            ></div>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#081b39]"></span>
              <span className="text-[10px] text-[#75777e] font-bold uppercase">12 Módulos Listos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5c6ce]"></span>
              <span className="text-[10px] text-[#75777e] font-bold uppercase">4 Pendientes</span>
            </div>
          </div>
        </section>

        {/* Sección de Cursos */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[12px] font-bold text-[#44474e] uppercase tracking-[0.2em]">Rutas de Entrenamiento</h3>
            <div className="h-px flex-1 bg-[#c5c6ce]/30 mx-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1: Con Link a la lección */}
            <Link href="/courses/id" className="block transform transition-transform active:scale-95">
              <CourseCard
                title="Seguridad Industrial"
                topics={["Ergonomía Avanzada", "Pausas Activas", "ESD (Seguridad Técnica)"]}
                progress={85}
                instructor="Ing. Barrera"
                color="bg-[#081b39]"
                tag="Seguridad"
              />
            </Link>

            {/* Tarjeta 2 */}
            <CourseCard
              title="Bienestar Corporativo"
              topics={["Manejo de Estrés", "Talleres de Nutrición", "Handling Work"]}
              progress={42}
              instructor="Dr. Martínez"
              color="bg-[#1a1c1c]"
              tag="Salud"
            />

            {/* Tarjeta 3 */}
            <CourseCard
              title="Mejora de Procesos"
              topics={["Lean Manufacturing", "Six Sigma", "Poka-Yoke"]}
              progress={20}
              instructor="Imperia AI"
              color="bg-[#008cc7]"
              tag="Calidad"
            />
          </div>
        </section>

        {/* Notificación de Examen */}
        <div className="p-8 bg-white rounded-xl border border-[#c5c6ce]/20 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-[#ffdad6] rounded-full flex items-center justify-center text-[#ba1a1a]">
              <span className="material-symbols-outlined">notification_important</span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#081b39]">Examen Próximo: Análisis de Fallas</p>
              <p className="text-xs text-[#75777e]">Vence en 2 días • Basado en temas de Seguridad</p>
            </div>
          </div>
          <Link href="/exam">
            <button className="px-6 py-2 bg-[#081b39] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#364767] transition-all">
              Ir al examen
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

function CourseCard({ title, progress, instructor, color, tag, topics }: any) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#c5c6ce]/20 shadow-sm group cursor-pointer hover:shadow-xl transition-all duration-300 h-full">
      <div className={`h-24 ${color} p-6 flex flex-col justify-between relative overflow-hidden`}>
        <span className="text-[9px] font-bold bg-white/20 text-white w-fit px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm z-10">
          {tag}
        </span>
        <span className="material-symbols-outlined text-white/10 text-6xl absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform">
          engineering
        </span>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-ubuntu font-bold text-[#081b39] text-lg mb-1">{title}</h4>
          <p className="text-[10px] text-[#75777e] uppercase font-bold tracking-wider mb-4">Mtro: {instructor}</p>

          <div className="mb-6 space-y-2">
            {topics.map((topic: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#008cc7]"></span>
                <span className="text-[11px] text-[#44474e]">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 border-t border-[#f4f3f3] pt-4 mt-auto">
          <div className="flex justify-between text-[10px] font-bold text-[#081b39] uppercase tracking-tighter">
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-[#f4f3f3] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#008cc7] h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}