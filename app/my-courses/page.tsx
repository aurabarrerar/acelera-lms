"use client";
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function MyCoursesPage() {
  const myCourses = [
    {
      id: 1,
      title: "Seguridad Industrial",
      instructor: "Ing. Barrera",
      progress: 85,
      modules: 4,
      image: "engineering",
      color: "bg-[#081b39]"
    },
    {
      id: 2,
      title: "Bienestar Corporativo",
      instructor: "Dr. Martínez",
      progress: 42,
      modules: 6,
      image: "health_and_safety",
      color: "bg-[#1a1c1c]"
    }
  ];

  return (
    <div className="flex bg-[#faf9f9] min-h-screen font-redonda text-[#1a1c1c]">
      <Sidebar />

      <main className="flex-1 ml-64 p-12">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-[10px] font-bold text-[#008cc7] uppercase tracking-[0.4em] mb-2">Formación Activa</h2>
            <h1 className="text-4xl font-bold text-[#081b39] font-ubuntu">Mis Cursos</h1>
          </div>

        </header>

        <div className="grid grid-cols-1 gap-6">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl border border-[#c5c6ce]/20 shadow-sm overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all">

              <div className={`w-full md:w-48 ${course.color} flex items-center justify-center p-8`}>
                <span className="material-symbols-outlined text-white text-5xl opacity-40 group-hover:scale-110 transition-transform">
                  {course.image}
                </span>
              </div>

              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#081b39] font-ubuntu">{course.title}</h3>
                    <p className="text-xs text-[#75777e] mt-1">Instructor: {course.instructor} • {course.modules} Módulos</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#008cc7] font-ubuntu">{course.progress}%</span>
                    <p className="text-[9px] font-bold text-[#75777e] uppercase tracking-widest">Progreso</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <div className="flex-1 h-2 bg-[#f4f3f3] rounded-full overflow-hidden">
                    <div
                      className="bg-[#008cc7] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <button className="px-6 py-2 border-2 border-[#081b39] text-[#081b39] rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#081b39] hover:text-white transition-all">
                      Ver Módulos
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}