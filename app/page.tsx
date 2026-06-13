import {
  LayoutDashboard,
  Brain,
  Wallet,
  CreditCard,
  FolderKanban,
  Calendar,
  StickyNote,
  Bell,
  ArrowRight,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ─── Navigation ─── */}
      <nav className="nav-blur fixed top-0 right-0 left-0 z-50 border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/wordmark-beige.png"
            alt="Aliester"
            width={172}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--fg)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition-all hover:bg-white hover:shadow-[0_4px_24px_rgba(239,235,234,0.12)]"
          >
            Empezar gratis
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        {/* Grid pattern + warm glow */}
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute inset-0 -z-10 warm-glow" />

        <div className="badge badge-accent mb-10">
          <Brain className="h-3.5 w-3.5" />
          <span>El corazón de Aliester</span>
        </div>

        <h1 className="max-w-5xl text-5xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-[var(--fg)]">Un asistente que </span>
          <span className="gradient-text">ordena tu atención</span>
          <br />
          <span className="text-[var(--fg-muted)]">antes de que el caos decida por ti</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
          Aliester analiza tu contexto completo — tareas, dinero, calendario, notas y suscripciones — y te muestra primero lo que merece atención ahora, lo que sigue después y lo que puede esperar.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="#features" className="btn-primary group">
            Conoce más
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#cta" className="btn-secondary">
            Empezar ahora
          </a>
        </div>

        <div className="mt-16 w-full max-w-5xl lg:mt-20">
          <div className="screenshot-shell accent-glow overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-3 sm:p-4">
            <div className="screenshot-toolbar mb-3 flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--fg)]">Asistente y centro de atención</p>
                <p className="text-xs text-[var(--fg-dim)]">Prioridades, contexto y siguientes pasos en una sola vista</p>
              </div>
              <div className="badge badge-accent">IA en acción</div>
            </div>
            <div className="screenshot-frame overflow-hidden rounded-xl border border-[var(--border)] bg-[#f4f1ef]">
              <Image
                src="/screenshots/asistente-attention-center.jpeg"
                alt="Centro de atención del asistente de Aliester mostrando prioridad actual, siguientes acciones y contexto"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats bar — refined with dividers */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {[
            { label: "Módulos", value: "7" },
            { label: "Apps reemplazadas", value: "5+" },
            { label: "Claridad", value: "100%" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              {i > 0 && (
                <div className="hidden h-8 w-px bg-[var(--border-strong)] sm:block" />
              )}
              <div className="text-center">
                <div className="text-2xl font-bold tracking-tight text-[var(--fg)]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs font-medium tracking-wide text-[var(--fg-dim)] uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-5 w-5 text-[var(--fg-dim)]" />
        </div>
      </section>

      {/* ─── AI Assistant — Centerpiece ─── */}
      <section className="section-border px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge badge-accent mb-6">
              <Brain className="h-3.5 w-3.5" />
              <span>Asistente en acción</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-[var(--fg)] lg:text-5xl">
              Así se ve
              <br />
              <span className="text-[var(--fg-muted)]">cuando prioriza por ti</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">
              Esta vista aterriza la promesa del producto: menos ruido, más claridad y una siguiente acción concreta basada en tu contexto real.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-3xl lg:mt-20">
            <div className="accent-glow overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)]">
              <div className="flex items-center gap-3 border-b border-[var(--border)] px-6 py-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                  <Brain className="h-4 w-4 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--fg)]">Asistente Aliester</p>
                  <p className="text-xs text-[var(--fg-dim)]">Análisis en tiempo real</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span className="text-xs text-[var(--fg-dim)]">Activo</span>
                </div>
              </div>

              <div className="space-y-5 p-6 lg:p-8">
                <p className="text-sm leading-relaxed text-[var(--fg-muted)] lg:text-base">
                  En lugar de prometer una IA abstracta, aquí está el centro de atención real del producto: prioridades, siguientes pasos y contexto en una sola vista.
                </p>

                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[#f4f1ef]">
                  <Image
                    src="/screenshots/asistente-attention-center.jpeg"
                    alt="Centro de atención del asistente de Aliester mostrando prioridad actual, siguientes acciones y contexto"
                    width={1600}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[var(--fg-dim)]">
                  <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>Prioridades generadas sobre datos reales del producto</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3 lg:mt-14">
            {[
              "Analiza tu situación completa",
              "Prioriza por ti",
              "Funciona sin conexión",
              "IA vía OpenRouter",
            ].map((benefit) => (
              <div
                key={benefit}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-2 text-sm text-[var(--fg-muted)]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section className="section-border relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Left — sticky heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <div className="badge mb-6">
                <Target className="h-3.5 w-3.5 text-[var(--accent)]" />
                <span>El problema</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-[var(--fg)] lg:text-[2.75rem] lg:leading-[1.1]">
                La información dispersa
                <br />
                <span className="text-[var(--fg-muted)]">te paraliza</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">
                No te desorganizas por falta de herramientas — te desorganizas porque cada área de tu vida vive en una app distinta.
              </p>
            </div>

            {/* Right — aligned cards */}
            <div className="space-y-3 lg:col-span-7">
              {[
                {
                  icon: Wallet,
                  title: "El banco en una app",
                  description: "Revisas tu saldo, pero no ves el panorama completo",
                },
                {
                  icon: Calendar,
                  title: "El calendario en otra",
                  description: "Eventos sin contexto de tus prioridades reales",
                },
                {
                  icon: FolderKanban,
                  title: "Las tareas en otra más",
                  description: "Listas infinitas sin saber qué atender primero",
                },
                {
                  icon: Bell,
                  title: "Las suscripciones en ninguna",
                  description: "Cobros sorpresa que descubres cuando ya es tarde",
                },
              ].map((item) => (
                <div key={item.title} className="card-surface flex gap-4 rounded-xl p-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                    <item.icon className="h-4.5 w-4.5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--fg)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--fg-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Callout — gradient border */}
          <div className="gradient-border mt-16 rounded-2xl bg-[var(--bg-elevated)] p-8 text-center lg:mt-20 lg:p-10">
            <p className="text-xl leading-relaxed text-[var(--fg-muted)] lg:text-2xl">
              El resultado:{" "}
              <span className="font-semibold text-[var(--fg)]">decisiones reactivas</span>,
              cobros sorpresa, y la sensación constante de que{" "}
              <span className="font-semibold text-[var(--accent)]">algo se te escapa</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Solution / Features — Bento Grid ─── */}
      <section id="features" className="section-border px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge badge-accent mb-6">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>La solución</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-[var(--fg)] lg:text-5xl">
              Todo tu contexto
              <br />
              <span className="text-[var(--fg-muted)]">en un solo lugar</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--fg-muted)]">
              Aliester reúne todas las áreas de tu vida en un panel unificado. Sin cambiar de apps, sin configurar integraciones complejas.
            </p>
          </div>

          {/* Bento grid — 2-3-2 rhythm */}
          <div className="mt-16 grid gap-3 md:grid-cols-3 lg:mt-20">
            {/* Row 1: Dashboard (featured, 2 cols) + Finanzas */}
            <div className="card-surface group rounded-xl p-6 md:col-span-2 md:p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                <LayoutDashboard className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg)]">Dashboard</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--fg-muted)]">
                Vista panorámica: balance del mes, tareas urgentes, próximos eventos, gasto en suscripciones. Todo de un vistazo.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[#f4f1ef]">
                <Image
                  src="/screenshots/proyectos-kanban.jpeg"
                  alt="Kanban de proyectos y tareas en Aliester"
                  width={1600}
                  height={900}
                  className="h-52 w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="card-surface group rounded-xl p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                <Wallet className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">Finanzas</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                Registro de ingresos y gastos por categoría, vinculados a cuentas bancarias
              </p>
            </div>

            {/* Row 2: Cuentas + Proyectos + Calendario */}
            <div className="card-surface group rounded-xl p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                <CreditCard className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">Cuentas</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                Tarjetas y cuentas con saldo, tipo, red y terminación
              </p>
            </div>

            <div className="card-surface group rounded-xl p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                <FolderKanban className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">Proyectos</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                Proyectos con tareas, prioridades y estados en un kanban simplificado
              </p>
            </div>

            <div className="card-surface group rounded-xl p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                <Calendar className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">Calendario</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                Eventos y citas con fecha, hora y color para organización visual
              </p>
            </div>

            {/* Row 3: Notas + Suscripciones (featured, 2 cols) */}
            <div className="card-surface group rounded-xl p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                <StickyNote className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--fg)]">Notas</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                Ideas y apuntes con fecha, siempre accesibles desde cualquier vista
              </p>
            </div>

            <div className="card-surface group rounded-xl p-6 md:col-span-2 md:p-8">
              <div className="flex items-start gap-5">
                <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                  <Bell className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--fg)]">Suscripciones</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                    Servicios activos con costo, fecha de corte y cuenta asociada. Alertas antes del cobro para que nada te tome por sorpresa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12">
            {[
              {
                src: "/screenshots/calendario-month-view.jpeg",
                alt: "Vista mensual del calendario en Aliester",
                title: "Calendario unificado",
              },
              {
                src: "/screenshots/suscripciones-overview.jpeg",
                alt: "Vista de suscripciones activas en Aliester",
                title: "Suscripciones bajo control",
              },
              {
                src: "/screenshots/proyectos-kanban.jpeg",
                alt: "Vista de proyectos en tablero kanban en Aliester",
                title: "Tareas por etapas",
              },
            ].map((shot) => (
              <div key={shot.src} className="card-surface overflow-hidden rounded-xl">
                <div className="overflow-hidden border-b border-[var(--border)] bg-[#f4f1ef]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={800}
                    className="h-48 w-full object-cover object-top"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold text-[var(--fg)]">{shot.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Target Users — Editorial Layout ─── */}
      <section className="section-border px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge mb-6">
              <Users className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span>Para quién es</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-[var(--fg)] lg:text-5xl">
              Si manejas múltiples frentes,
              <br />
              <span className="text-[var(--fg-muted)]">esto es para ti</span>
            </h2>
          </div>

          {/* Editorial numbered rows */}
          <div className="mt-16 space-y-0 lg:mt-20">
            {[
              {
                number: "01",
                icon: TrendingUp,
                title: "Freelancers",
                description: "Manejas proyectos, clientes, facturas y deadlines. Necesitas ver todo sin cambiar de herramienta cada 5 minutos.",
                features: [
                  "Proyectos con tareas y prioridades",
                  "Finanzas por proyecto y categoría",
                  "Calendario unificado",
                ],
              },
              {
                number: "02",
                icon: Zap,
                title: "Emprendedores",
                description: "Tu negocio y tu vida personal comparten el mismo cerebro. Necesitas una herramienta que entienda eso.",
                features: [
                  "Suscripciones bajo control",
                  "Balance mensual automático",
                  "Asistente que prioriza por ti",
                ],
              },
              {
                number: "03",
                icon: Target,
                title: "Estudiantes con proyectos",
                description: "Clases, proyectos paralelos, gastos limitados. Necesitas claridad sin complejidad.",
                features: [
                  "Notas con fecha y contexto",
                  "Presupuestos por categoría",
                  "Kanban simplificado",
                ],
              },
            ].map((user, i) => (
              <div
                key={user.title}
                className={`grid gap-8 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14 ${
                  i < 2 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                {/* Number + icon */}
                <div className="flex items-start gap-4 lg:col-span-3">
                  <span className="editorial-number">{user.number}</span>
                  <div className="mt-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)]">
                    <user.icon className="h-4.5 w-4.5 text-[var(--accent)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[var(--fg)]">{user.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[var(--fg-muted)]">{user.description}</p>
                </div>

                {/* Features */}
                <div className="lg:col-span-4">
                  <ul className="space-y-3">
                    {user.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-[var(--fg-muted)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="cta" className="section-border relative px-6 py-28 lg:py-36">
        {/* Subtle radial glow behind card */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[60%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.06)_0%,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="gradient-border rounded-3xl bg-[var(--bg-elevated)] px-8 py-16 text-center lg:px-16 lg:py-20">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--fg)] sm:text-5xl">
              Deja de reaccionar.
              <br />
              <span className="gradient-text">Empieza a decidir con claridad.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
              Un solo lugar para todo. Un asistente que piensa por ti. Cero configuraciones complejas.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="#" className="btn-primary group">
                Empezar gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#" className="btn-secondary">
                Ver demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--fg-dim)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                <span>Configuración en 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                <span>Datos aislados por usuario</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="section-border px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="inline-flex items-center rounded-lg bg-[#f4f1ef] px-4 py-2.5">
                <Image
                  src="/logo-brand-dark.png"
                  alt="Aliester"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--fg-dim)]">
                Tu centro de operaciones personal. Claridad sobre caos.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-3">
              <p className="text-xs font-semibold tracking-wide text-[var(--fg-muted)] uppercase">
                Producto
              </p>
              <ul className="mt-4 space-y-3">
                {["Funcionalidades", "Precios", "Documentación"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-[var(--fg-dim)] transition-colors hover:text-[var(--fg)]"
                    >
                      {link}
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-xs font-semibold tracking-wide text-[var(--fg-muted)] uppercase">
                Contacto
              </p>
              <ul className="mt-4 space-y-3">
                {["Soporte", "GitHub", "Twitter"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-[var(--fg-dim)] transition-colors hover:text-[var(--fg)]"
                    >
                      {link}
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
            <p className="text-xs text-[var(--fg-dim)]">
              © 2026 Aliester. Construido con claridad en mente.
            </p>
            <p className="text-xs text-[var(--fg-dim)]">
              Hecho para quienes deciden, no solo reaccionan.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
