"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800 overflow-hidden">
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-32 left-20 text-6xl opacity-10"
        >
          🏀
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-24 text-6xl opacity-10"
        >
          ⚽
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-32 left-1/2 text-6xl opacity-10"
        >
          🏸
        </motion.div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            Sports Team Management System
          </h1>

          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/login?role=student"
              className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-100 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-100 transition"
            >
              Register
            </Link>
            <Link
              href="/login?role=admin"
              className="px-3 py-1.5 rounded-md bg-slate-800 text-white hover:bg-slate-900 transition"
            >
              Admin
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-100 to-white">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Database Systems Project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-slate-600"
          >
            A web-based application demonstrating the integration of relational
            and non-relational databases for effective sports team and training
            management.
          </motion.p>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
            Project Overview
          </h3>
          <p className="text-slate-600 leading-relaxed">
            The Sports Team Management System (STMS) centralizes student, coach,
            course, training, and financial data into a single platform. The
            system is designed to improve data consistency, traceability, and
            overall operational efficiency for sports organizations.
          </p>
        </motion.div>
      </section>

      {/* DATABASE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold mb-3 text-blue-700">
              MySQL (Relational Database)
            </h4>
            <p className="text-slate-600">
              Stores structured transactional data such as users, roles,
              enrollments, courses, payments, and expenses with strong relational
              integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold mb-3 text-emerald-700">
              MongoDB (NoSQL Database)
            </h4>
            <p className="text-slate-600">
              Handles flexible and historical data such as training logs,
              attendance records, system activity logs, and notifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="text-2xl font-semibold mb-12 text-center text-indigo-700">
          Project Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Chawankorn Khamtue", id: "6710503895" },
            { name: "Naravin Vechpanich", id: "6710504450" },
            { name: "Achiraya Charoenpanvorakul", id: "6710503844" },
          ].map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">👤</div>
              <h4 className="font-semibold">{m.name}</h4>
              <p className="text-sm text-slate-500 mt-1">
                Student ID: {m.id}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-500">
          © 2026 Sports Team Management System — Database Systems Project
        </div>
      </footer>
    </main>
  )
}