import React, { useEffect, useMemo, useState } from "react";

export default function ConsultingLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 👉 Replace this with your real Calendly scheduling link:
  // Example: "https://calendly.com/your-handle/consultation"
  const CALENDLY_URL = "https://calendly.com/pmecgroupllc/30min";

  const navItems = useMemo(
    () => [
      { label: "Services", id: "services" },
      { label: "Approach", id: "approach" },
      { label: "Case Studies", id: "case-studies" },
      { label: "About", id: "about" },
      { label: "Contact", id: "book" },
    ],
    []
  );

  useEffect(() => {
    // Load at top even if browser remembers a #hash
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  // Close mobile menu on hash navigation
  useEffect(() => {
    const onHashChange = () => setMobileOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased">
      {/* Smooth scroll + offset so sticky header doesn't cover section titles */}
      <style>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 92px; }
      `}</style>


      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center">

            {/* LEFT: Logo */}
            <div className="flex flex-1 justify-start">
              <a href="/" className="flex items-center">
                <img
                  src="/images/STNRD-BLK.jpg"
                  alt="The STNRD GRP"
                  className="h-11"
                />
              </a>
            </div>

            {/* CENTER: Nav */}
            <nav className="hidden md:flex flex-none items-center gap-16 text-xs uppercase tracking-[0.22em] text-white/70">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#approach" className="hover:text-white transition">Approach</a>
              <a href="#case-studies" className="hover:text-white transition">Case Studies</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            {/* RIGHT: CTA */}
            <div className="flex flex-1 justify-end">
              <a
                href="#book"
                className="ml-6 md:ml-6 rounded-full border border-white/20 px-5 md:px-8 py-3.5 text-[10px] md:text-xs leading-1 uppercase tracking-[0.02em] text-white transition hover:border-white"
              >
                  Book a Consultation
              </a>
            </div>

          </div>
        </div>
      </header>
      {/* ================= MOBILE DRAWER ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu overlay"
          />

          {/* Drawer panel */}
          <div
            id="mobile-drawer"
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm translate-x-0 border-l border-white/10 bg-stone-950 text-white transition-transform duration-300 ease-out"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-full flex-col">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                    <span className="text-lg">🛍️</span>
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-white/80">
                      Retail Ops
                    </div>
                    <div className="text-xs text-white/50">Menu</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/50">
                  Navigation
                </div>

                <div className="mt-5 flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <span className="text-sm font-semibold tracking-[0.12em] uppercase text-white/85 transition group-hover:text-white">
                        {item.label}
                      </span>
                      <span className="text-white/40 transition group-hover:text-white/70">
                        →
                      </span>
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#book"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full rounded-full bg-white px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-stone-950 transition hover:bg-stone-100"
                  >
                    Book a consultation
                  </a>

                  <p className="mt-4 text-xs leading-relaxed text-white/50">
                    Clean ops. Better outcomes. Keep it consistent across every
                    location.
                  </p>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="border-t border-white/10 px-6 py-5">
                <div className="flex items-center justify-between text-[11px] text-white/45">
                  <span className="tracking-[0.14em] uppercase">
                    Retail Ops Consulting
                  </span>
                  <span>© {new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:pb-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* ROW 1 — LEFT: retail-interior.jpg */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="/images/retail-interior.jpg"
              alt="Retail interior"
              className="block h-[320px] w-full object-cover md:h-[360px]"
            />
          </div>

          {/* ROW 1 — RIGHT: HERO COPY */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold tracking-[0.10em] uppercase text-stone-700">
              <span>📈</span>
              Store performance, simplified
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Clean operations.
              <br />
              <span className="text-stone-500">Better retail outcomes.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-700 md:text-base">
              Growth demands discipline. I help retail brands scale with operating systems
              that protect margins, improve performance, and keep every store consistently
              on-brand.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Book a consultation
              </a>
              <a
                href="#case-studies"
                className="rounded-full border border-stone-300 bg-transparent px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                See results
              </a>
            </div>
          </div>

          {/* ROW 2 — FULL WIDTH: LABOR / SALES / EXCELLENCE */}
          {/* ROW 2 — FULL WIDTH: LABOR / GROWTH / EXCELLENCE */}
          <div className="md:col-span-2 mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                ["Labor", "Right people, right hours"],
                ["Growth", "Repeatable sales performance"],
                ["Excellence", "Standards that scale"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="
          group rounded-3xl bg-stone-50/60 px-23 py-2
          ring-1 ring-stone-200/60
          transition-all duration-300
          hover:bg-white hover:ring-stone-300/70 hover:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]
        "
                >
                  <div className="text-[11px] text-center font-semibold uppercase tracking-[0.22em] text-stone-500">
                    {title}
                  </div>

                  <div className="mt-1 h-px w- bg-stone-200/70" />

                  <div className="mt-1 text-[15px] text-center font-medium leading-snug text-stone-900">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= WEEKLY STORE PULSE ================= */}
          <div className="rounded-[32px] border border-stone-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                  Weekly Store Pulse
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-stone-900">
                  A dashboard your team actually uses.
                </div>
              </div>

              <div className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs font-semibold text-stone-700">
                Live
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 space-y-3">
              {[
                "Sales vs Plan",
                "Foot Traffic",
                "Conversion",
                "UPT / ATV",
                "Sales per Labor Hour",
                "Labor %",
                "NPS / CSAT",
              ].map((metric) => (
                <div
                  key={metric}
                  className="flex items-center justify-between rounded-full border border-stone-200 bg-stone-50 px-5 py-6"
                >
                  <span className="text-sm font-medium text-stone-900">
                    {metric}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                    tracked
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — DASHBOARD SHOWCASE */}
          <div className="rounded-[32px] border border-stone-200 bg-white shadow-sm overflow-hidden h-full flex flex-col">

            {/* Top Context */}
            <div className="border-b border-stone-200 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                  </div>
                  <div className="mt-1 text-lg font-semibold text-stone-900">
                    Decisions grounded in real-time performance.
                  </div>
                </div>

                <div className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">
                  Live
                </div>
              </div>

              <div className="mt-2 text-[11px] text-stone-500">
                Venice · Week of Dec 16–22 · Status: On Track
              </div>
            </div>

            {/* Dashboard Image — TOP ALIGNED */}
            <div className="relative bg-stone-50 px-6 pt-6">
              <img
                src="/images/store-performance-dashboard.png"
                srcSet="/images/store-performance-dashboard.jpg 1x"
                alt="Weekly Store Pulse Dashboard"
                className="w-full rounded-xl shadow-sm"
              />
            </div>

            {/* Bottom Insight — ON BRAND TEXT */}
            <div className="mt-6 px-6 pb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                Weekly Focus
              </div>

              <p className="mt-2 text-sm font-medium text-stone-900 leading-relaxed">
                Conversion gains are being offset by softer traffic. Optimizing coverage
                for peak hours is the fastest near-term lever to protect sales.
              </p>

              <div className="mt-3 text-[11px] text-stone-500">
                Data sources: Shopify, Lightspeed, Door Counter
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= LOGO STRIP (Monochrome) ================= */}
      <section className="bg-stone-950 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Previously trusted by modern retail teams
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
            {[
              "Buck Mason",
              "Reigning Champ",
              "Under Armour",
              "ALDI USA",
              "Zoomo",
              "Jyve Corp",
            ].map((name) => (
              <div
                key={name}
                className="
        flex items-center justify-center
        rounded-full
        border border-white/15
        bg-gradient-to-b from-white/10 to-white/5
        px-6 py-4
        text-[11px] font-semibold uppercase tracking-[0.18em]
        text-white/70
        backdrop-blur-sm
        transition
        hover:border-white/30
        hover:text-white
      "
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
              Services
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              The systems behind consistent store performance.
            </h2>
          </div>
          <div className="hidden md:block text-sm text-stone-600 max-w-sm text-right">
            Clear standards. Aligned teams. Results delivered.
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
          {/* Retail Performance */}
          <div className="h-full rounded-[32px] border border-stone-200 bg-white p-8 flex flex-col">
            <h3 className="text-lg font-semibold tracking-tight">📊 Retail Performance</h3>

            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              Turn real-time performance into weekly action on the floor.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-stone-800 min-h-[112px]">
              <li>— Sales, traffic & conversion scorecards</li>
              <li>— Labor models tied to demand</li>
              <li>— Weekly coaching routines</li>
              <li>— Daily floor execution insights</li>
            </ul>

            <div className="mt-auto pt-6">
              <p className="text-sm font-medium text-stone-900">
                Improves conversion, labor efficiency, and week-over-week execution.
              </p>
            </div>
          </div>

          {/* Operations Strategy */}
          <div className="h-full rounded-[32px] border border-stone-200 bg-white p-8 flex flex-col">
            <h3 className="text-lg font-semibold tracking-tight">🧭 Operations Strategy</h3>

            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              Build the operating foundation leaders can actually run.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-stone-800 min-h-[112px]">
              <li>— Store standards & audits</li>
              <li>— Clear ownership & RACI</li>
              <li>— Weekly operating cadence</li>
              <li>— Built-in accountability</li>
            </ul>

            <div className="mt-auto pt-6">
              <p className="text-sm font-medium text-stone-900">
                Creates consistency without adding complexity.
              </p>
            </div>
          </div>

          {/* Build & Launch */}
          <div className="h-full rounded-[32px] border border-stone-200 bg-white p-8 flex flex-col">
            <h3 className="text-lg font-semibold tracking-tight">🚀 Build & Launch</h3>

            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              Open strong and scale with confidence.
            </p>

            <ul className="mt-12 space-y-2 text-sm text-stone-800 min-h-[112px]">
              <li>— NSO playbooks</li>
              <li>— Hiring & training frameworks</li>
              <li>— Launch readiness checklists</li>
              <li>— Seamless handoff from build to open</li>
            </ul>

            <div className="mt-auto pt-6">
              <p className="text-sm font-medium text-stone-900">
                Fewer handoffs. Fewer misses. Better days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section id="approach" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-[36px] border border-stone-200 bg-white p-10 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                Approach
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Built on the floor. Store-first thinking that turns strategy into
                consistent execution.
              </h2>
              <p className="mt-8 text-sm leading-relaxed text-stone-700 md:text-base">
                We align on what matters, simplify what’s messy, and reinforce
                execution through coaching and a weekly cadence—so consistency
                holds across every location.
              </p>

              {/* Image — Female Retail Manager */}
              <div className="mt-11 overflow-hidden rounded-2xl shadow-sm bg-white">
                <img
                  src="/images/female-retail-manager.jpg"
                  alt="Retail manager leading a modern apparel store"
                  className="block h-[280px] w-full object-cover md:h-[340px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Diagnose",
                  desc: "Quick ops scan: labor, conversion, standards, inventory, and routines.",
                },
                {
                  title: "Design",
                  desc: "SOPs, scorecards, and checklists that match your brand and bandwidth.",
                },
                {
                  title: "Deploy",
                  desc: "Roll out with coaching, accountability, and a cadence leaders keep running.",
                },
                {
                  title: "Reinforce",
                  desc: "Embed standards through weekly rhythms, coaching, and clear ownership.",
                },
                {
                  title: "Scale",
                  desc: "Extend proven systems to new stores, teams, and growth phases without friction.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                    {step.title}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-stone-900">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= CASE STUDIES ================= */}
      <section id="case-studies" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
              Case Studies
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Proven in real retail environments.
            </h2>
            <p className="mt-5 text-sm md:text-base text-stone-700 leading-relaxed">
              Not theory—operator-led work across multi-unit retail, new store launches,
              and national expansion. These are the systems behind consistent execution.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                badge: "Expansion & NSO",
                title: "New store launches across 27+ U.S. states",
                desc: "We’ve helped launch stores across 27+ states and Canada — aligning hiring, training, inventory, and opening-week execution through repeatable playbooks that hold brand standards from day one.",
              },
              {
                badge: "Multi-Unit Operations",
                title: "Scaling consistent execution across 75+ stores",
                desc: "We’ve built and rolled out clear operating systems across a 75+ store footprint — giving managers practical routines, improving consistency, and reducing friction as the business scaled.",
              },
              {
                badge: "Standards & Systems",
                title: "Turning standards into daily execution",
                desc: "We turn brand standards into simple, runnable systems — so keeping execution consistent without slowing teams down.",
              },
              {
                badge: "People & Performance",
                title: "Building teams and operating cadence at scale",
                desc: "We’ve built and developed teams of 100+ retail employees by pairing strong hiring with weekly rhythms and reporting that keep leaders aligned.",
              },
              {
                badge: "Labor & Coverage",
                title: "Protecting margin through smarter labor models",
                desc: "We’ve built labor models and coverage plans that flex with traffic, sales, and service needs — helping stores balance performance, payroll, and the customer experience.",
              },
              {
                badge: "Enterprise Operations",
                title: "Connecting stores to supply chain, systems, and partners",
                desc: "We’ve helped stores operate in sync with the rest of the business — aligning execution with inventory, logistics, and the constraints that show up at scale.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-[32px] border border-stone-200 bg-stone-50 p-8"
              >
                <div className="inline-flex rounded-full border border-stone-200 bg-white px-10 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-600">
                  {c.badge}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-[36px] border border-stone-200 bg-white p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
              About
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
              Operator-led consulting.
            </h2>
            <p className="mt-10 text-sm leading-relaxed text-stone-700 md:text-base">
              We’ve spent our careers running stores and scaling retail teams — opening locations, building leaders, and navigating the real trade-offs that come with growth. 
              Today, we work with retail brands to turn what actually works on the floor into simple operating systems leaders can run week after week. 
              The focus isn’t more reporting or process — it’s clear priorities, practical routines, and execution that holds as teams, locations, and expectations grow. 
              Our work sits at the intersection of performance and practicality: helping teams improve results without adding noise, complexity, or friction to the day-to-day.
            </p>
            <div className="mt-14 overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/images/Coaching-moment.jpg"
                alt="Store-floor leadership moment"
                className="h-[320px] w-full object-cover md:h-[380px]"
              />
            </div>
          </div>

          <div className="rounded-[36px] border border-stone-200 bg-white p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
              What you get
            </div>

            <div className="mt-6 grid gap-3">
              {[
                "Operator-led execution",
                "Hands-on partnership through rollout",
                "Weekly operating cadence",
                "Labor models & coverage planning",
                "Training & coaching guides",
                "Standards, audits & accountability",
                "Expansion-ready operating playbooks",
                "New store & growth systems",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-3xl border border-stone-200 bg-stone-50 px-6 py-5 text-sm font-medium text-stone-900"
                >
                  {point}
                </div>
              ))}
              <div className="mt-2 rounded-[28px] bg-stone-900 px-9 py-8 text-white">
                <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">
                  Built by an operator — not an agency
                </h4>

                <ul className="mt-4 space-y-2 text-sm text-stone-100">
                  <li>• 15+ years in multi-unit retail leadership</li>
                  <li>• Stores opened and scaled across major U.S. markets</li>
                  <li>• Systems shaped by real floors, real teams, real constraints</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOK / CONTACT (Calendly embed) ================= */}
      <section id="book" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-[40px] bg-stone-900 p-10 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                Contact
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Book a consultation
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">
                Let’s chat. A conversation focused on an operations scan to
                identify 30–60 day wins and remove friction as the business
                grows.
              </p>

              <ul className="mt-10 space-y-2 text-s text-white/70">
                <li>— 30–45 minute call</li>
                <li>— Action plan recap</li>
                <li>— Optional follow-up sprint</li>
              </ul>
              {/* Supporting image */}
              <div className="mt-14 overflow-hidden rounded-2xl shadow-lg bg-black/20">
                <img
                  src="/images/mens-retail-workspace.jpg"
                  alt="Men’s retail workspace with apparel and planning tools"
                  className="block h-[260px] w-full object-cover md:h-[340px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mt-2 text-base text-s text-center text-white/80">
                  Let’s get started with an operations scan.
                  Pick a time that works for you.
                </div>
              </div>
            </div>

            {/* Calendly Embed Card */}
            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white p-0 text-stone-900">
              <div className="border-b border-stone-200 bg-stone-50 px-6 py-5">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
                  Scheduling
                </div>
                <div className="mt-1 text-sm font-semibold text-stone-900">
                  Choose a time
                </div>
              </div>

              <div className="h-[680px]">
                <iframe
                  title="Calendly Scheduling"
                  src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
                  className="h-full w-full"
                  frameBorder="0"
                />
              </div>

              <div className="px-6 py-4 text-center text-[11px] text-stone-500">
                Prefer email or have additional questions? Contact info below.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-12 text-stone-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <img
              src="/images/STNRD-BLK.jpg"
              alt="The STNRD GRP"
              className="h-8 w-auto"
            />
          </div>

          {/* Contact */}
          <div className="text-xs text-stone-400">
            <a
              href="mailto:pmecgroupllc@gmail.com"
              className="text-white/80 underline-offset-4 hover:underline"
            >
              thestandardgc@gmail.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs">
            © {new Date().getFullYear()} MoBrewsLLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}