import { useEffect, useState, type ReactNode, type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Wrench,
  MapPin,
  Trophy,
  Users,
  Lightbulb,
  Cog,
  Bitcoin,
  Blocks,
  Award,
  Gavel,
  Briefcase,
  Zap,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Cpu,
  Database,
  Network,
  Shield,
} from "lucide-react";

import heroArena from "@/assets/hero-arena.jpg";
import discRoborace from "@/assets/disc-roborace.jpg";
import discLine from "@/assets/disc-linefollower.jpg";
import discRc from "@/assets/disc-rcracing.jpg";
import discDrone from "@/assets/disc-drone.jpg";
import discHockey from "@/assets/disc-hockey.jpg";
import discWar from "@/assets/disc-robowar.jpg";

/* -------------------------------------------------------------------------- */
/*  Shared bits                                                               */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 lg:px-16 py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-primary mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
      {children}
    </h2>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = ["Events", "Programs", "Community", "Ranks"];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-black text-2xl tracking-wider">
            <span className="text-accent">BOT</span>
            <span className="text-foreground">LEAGUE</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                i === 0
                  ? "text-foreground relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                  : "text-muted-foreground"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 rounded-md border border-border text-sm font-medium hover:bg-surface transition-colors">
            LOGIN
          </button>
          <button className="px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition glow-red">
            REGISTER NOW
          </button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/5 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground py-2"
            >
              {l}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 px-4 py-2 rounded-md border border-border text-sm">LOGIN</button>
            <button className="flex-1 px-4 py-2 rounded-md bg-primary text-sm font-semibold">
              REGISTER
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <img
        src={heroArena}
        alt="Robotics arena"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      {/* Live badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-24 sm:top-28 right-5 sm:right-10 z-10 glass rounded-full px-4 py-2 flex items-center gap-3 text-xs sm:text-sm"
      >
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-semibold text-primary">LIVE</span>
        </span>
        <span className="text-muted-foreground hidden sm:inline">
          : Episode 14 · Bengaluru Regionals
        </span>
        <span className="text-muted-foreground sm:hidden">Ep 14</span>
        <a href="#" className="text-primary font-semibold flex items-center gap-1">
          WATCH LIVE
        </a>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            India&apos;s Ultimate
            <br />
            <span className="text-gradient-rb">Robotics Arena</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl"
          >
            Build. Compete. Rank. The National Ecosystem for Robotics Arena.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <button className="px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold tracking-wide hover:brightness-110 transition glow-red">
              CREATE ACCOUNT
            </button>
            <button className="px-7 py-3.5 rounded-md border border-border bg-background/40 backdrop-blur font-semibold tracking-wide hover:bg-surface transition flex items-center gap-2">
              <Play size={16} /> EXPLORE EVENTS
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Competitions & Events                                                     */
/* -------------------------------------------------------------------------- */

function BracketSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto">
      {[20, 70, 150, 200].map((y, i) => (
        <rect key={i} x="10" y={y} width="90" height="28" rx="4" fill="#1f1f1f" />
      ))}
      <rect x="130" y="40" width="90" height="28" rx="4" fill="#1f1f1f" />
      <rect x="130" y="170" width="90" height="28" rx="4" fill="#1f1f1f" />
      <rect x="250" y="105" width="60" height="28" rx="4" fill="#1f1f1f" />
      <g stroke="#ff4343" strokeWidth="1.5" fill="none">
        <path d="M100 34 H115 V54 H130" />
        <path d="M100 84 H115 V54 H130" />
        <path d="M100 164 H115 V184 H130" />
        <path d="M100 214 H115 V184 H130" />
        <path d="M220 54 H235 V119 H250" />
        <path d="M220 184 H235 V119 H250" />
      </g>
    </svg>
  );
}

function CompetitionsEvents() {
  const upcoming = [
    { city: "Mumbai", date: "11/11/25", location: "BKC", category: "Lorem" },
    { city: "Delhi", date: "11/11/25", location: "BKC", category: "Lorem" },
  ];
  const past = ["Bengaluru Regionals", "Bengaluru Regionals", "Bengaluru Regionals"];

  return (
    <Section id="events">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <SectionTitle>Competitions &amp; Events</SectionTitle>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LIVE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-sm tracking-[0.25em] text-primary mb-4">LIVE NOW</h3>
          <div className="rounded-2xl bg-surface border border-border p-6 h-full">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-display text-xl font-bold">Bengaluru Regionals</h4>
                <p className="text-sm text-muted-foreground mt-1">Lorem Ipsum</p>
              </div>
              <span className="px-2.5 py-1 text-xs rounded-md bg-primary text-primary-foreground font-medium">
                Ongoing
              </span>
            </div>
            <div className="h-px bg-border my-5" />
            <BracketSVG />
          </div>
        </motion.div>

        {/* UPCOMING */}
        <div>
          <h3 className="font-display text-sm tracking-[0.25em] text-muted-foreground mb-4">UPCOMING</h3>
          <div className="space-y-5">
            {upcoming.map((e, i) => (
              <motion.div
                key={e.city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-surface border border-border p-6"
              >
                <h4 className="font-display text-xl font-bold">Event in {e.city}</h4>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium mt-0.5">{e.date}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium mt-0.5">{e.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium mt-0.5">{e.category}</p>
                  </div>
                </div>
                <button className="mt-5 w-full py-3 rounded-md bg-primary text-primary-foreground font-display font-semibold tracking-wider text-sm hover:brightness-110 transition">
                  REGISTER
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PAST */}
        <div>
          <h3 className="font-display text-sm tracking-[0.25em] text-muted-foreground mb-4">PAST RESULTS</h3>
          <div className="rounded-2xl bg-surface border border-border p-2 divide-y divide-border">
            {past.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 hover:bg-surface-2 transition rounded-xl"
              >
                <h4 className="font-display text-lg font-bold">{p}</h4>
                <p className="text-sm text-muted-foreground mt-1">Lorem Ipsum</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  User Journey                                                              */
/* -------------------------------------------------------------------------- */

function UserJourney() {
  const steps = [
    { icon: Wrench, label: "Build Your Team" },
    { icon: MapPin, label: "Compete Across India" },
    { icon: Trophy, label: "Earn National Ranking & Value" },
    { icon: Users, label: "Join The League" },
  ];

  return (
    <Section>
      <div className="text-center">
        <Eyebrow>USER JOURNEY</Eyebrow>
        <SectionTitle>Your Path to The League</SectionTitle>
        <p className="mt-3 text-muted-foreground">
          From your first build to a national-ranked team — four steps to the arena.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-accent/40" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl" />
                <div className="relative h-24 w-24 rounded-full bg-surface border-2 border-accent grid place-items-center">
                  <s.icon size={36} className="text-foreground" />
                </div>
              </div>
              <p className="mt-6 font-display text-xs tracking-[0.25em] text-primary">STEP {i + 1}</p>
              <p className="mt-2 font-display text-base font-bold uppercase max-w-[14ch]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  What is BotLeague                                                         */
/* -------------------------------------------------------------------------- */

function WhatIs() {
  const items = [
    { n: "1", t: "Structured Events", d: "From one-off events to a year-round competitive season." },
    { n: "2", t: "Digital Identity", d: "Your professional robotics legacy, tracked and verified." },
    { n: "3", t: "National Ranking", d: "Benchmark your skills against the best engineers in India." },
    { n: "4", t: "Career Pathway", d: "Turning arena victories into real-world industry opportunities." },
  ];

  const orbitIcons: { Icon: ComponentType<{ size?: number; className?: string }>; angle: number }[] = [
    { Icon: Database, angle: 0 },
    { Icon: Cog, angle: 90 },
    { Icon: Briefcase, angle: 180 },
    { Icon: Network, angle: 270 },
  ];

  return (
    <Section className="border-t border-border/60">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionTitle>What is BotLeague?</SectionTitle>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-display text-2xl font-bold text-primary">{it.n}.</p>
                <h4 className="font-display text-lg font-bold uppercase mt-2">{it.t}</h4>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">&ldquo;{it.d}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Orbit visualization */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 ring-grid rounded-full opacity-30" />
          {[0.55, 0.78, 1].map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-border/60"
              style={{ transform: `scale(${s})` }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {/* center hub */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full" />
              <div className="relative h-20 w-20 rounded-full bg-surface border border-accent grid place-items-center glow-blue">
                <Cpu size={32} className="text-accent" />
              </div>
            </div>
          </div>
          {/* orbiting nodes */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {orbitIcons.map(({ Icon, angle }, i) => {
              const rad = (angle * Math.PI) / 180;
              const r = 42; // percent
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <motion.div
                  key={i}
                  className="absolute h-12 w-12 -mt-6 -ml-6 rounded-full bg-surface border border-border grid place-items-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                >
                  <Icon size={20} className="text-muted-foreground" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Categories                                                                */
/* -------------------------------------------------------------------------- */

function Categories() {
  const cats = [
    { Icon: Blocks, title: "Mini Makers", desc: "Where Creativity Meets Logic.", featured: true },
    { Icon: Lightbulb, title: "Junior Innovators", desc: "Engineering & Strategy Fundamentals." },
    { Icon: Cog, title: "Young Engineers", desc: "Advanced Wireless & Autonomous Control." },
    { Icon: Bitcoin, title: "Robo Minds", desc: "Elite Professional Sports & Robotics." },
  ];
  return (
    <Section id="programs">
      <SectionTitle>Categories</SectionTitle>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cats.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={`group relative rounded-2xl bg-surface border p-7 transition-all min-h-[260px] flex flex-col ${
              c.featured
                ? "border-yellow-500/60 shadow-[0_0_0_1px_rgba(234,179,8,0.2),0_20px_60px_-20px_rgba(234,179,8,0.35)]"
                : "border-border hover:border-primary/60 hover:shadow-[0_0_0_1px_rgba(255,67,67,0.2),0_20px_60px_-20px_rgba(255,67,67,0.4)]"
            }`}
          >
            <div
              className={`h-14 w-14 rounded-full grid place-items-center mb-8 ${
                c.featured
                  ? "border-2 border-yellow-500 text-yellow-400"
                  : "border-2 border-yellow-500/80 text-yellow-400"
              }`}
            >
              <c.Icon size={28} />
            </div>
            <h3 className="font-display text-xl font-bold uppercase leading-tight">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 flex-1">{c.desc}</p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1 font-display text-xs tracking-[0.2em] text-primary group-hover:gap-2 transition-all"
            >
              LEARN MORE <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Disciplines                                                               */
/* -------------------------------------------------------------------------- */

function Disciplines() {
  const items = [
    { img: discRoborace, name: "Robo Race" },
    { img: discLine, name: "Line Follower" },
    { img: discRc, name: "RC Racing" },
    { img: discDrone, name: "FPV Drone Racing & Aeromodelling" },
    { img: discHockey, name: "Robo Hockey" },
    { img: discWar, name: "Robo War" },
  ];
  return (
    <Section>
      <Eyebrow>SPORTS</Eyebrow>
      <SectionTitle>Competition Disciplines</SectionTitle>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.a
            href="#"
            key={it.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group rounded-2xl bg-surface border border-border p-3 hover:border-primary/60 transition-all"
          >
            <div className="relative overflow-hidden rounded-xl aspect-square">
              <img
                src={it.img}
                alt={it.name}
                loading="lazy"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="text-center mt-3 mb-1 text-sm sm:text-base font-medium">{it.name}</h4>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  League Advantage                                                          */
/* -------------------------------------------------------------------------- */

function LeagueAdvantage() {
  const advs = [
    { Icon: Award, t: "National Recognition", d: "Benchmark your skills on India's official robotics leaderboard." },
    { Icon: Gavel, t: "Fair Judging", d: "Compete with confidence under standardized, expert-led evaluation." },
    { Icon: Briefcase, t: "Career Ops", d: "Bridge the gap between arena victories and top-tier tech placements." },
    { Icon: Zap, t: "High-Energy Eco", d: "Join a nationwide community of elite innovators and robotics athletes." },
  ];
  const board = [
    { rank: "01", name: "Player Name", pts: "508754", featured: true },
    { rank: "02", name: "Player Name", pts: "22000" },
    { rank: "03", name: "Player Name", pts: "20030" },
    { rank: "04", name: "Player Name", pts: "19500" },
    { rank: "05", name: "Player Name", pts: "15060" },
    { rank: "06", name: "Player Name", pts: "13865" },
    { rank: "07", name: "Player Name", pts: "10954" },
    { rank: "08", name: "Player Name", pts: "9057" },
  ];

  return (
    <Section id="ranks" className="border-t border-border/60">
      <div className="grid lg:grid-cols-2 gap-14">
        <div>
          <Eyebrow>WHY REGISTER?</Eyebrow>
          <SectionTitle>The League Advantage</SectionTitle>
          <div className="mt-10 space-y-8">
            {advs.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="shrink-0 h-12 w-12 grid place-items-center rounded-lg bg-primary/10 text-primary">
                  <a.Icon size={24} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase">{a.t}</h4>
                  <p className="text-sm text-muted-foreground mt-1 max-w-md">&ldquo;{a.d}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-sm w-full mx-auto"
        >
          <div className="absolute -inset-6 bg-accent/20 blur-3xl rounded-3xl" />
          <div className="relative glass rounded-3xl p-6 border border-accent/30">
            <h3 className="font-display text-center text-xl font-bold tracking-[0.25em] text-foreground">
              LEADERBOARD
            </h3>
            {/* featured */}
            <div className="mt-6 text-center">
              <div className="h-20 w-20 mx-auto rounded-xl bg-yellow-500/90 grid place-items-center">
                <Users size={40} className="text-background" />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">#01 — Player Name</p>
              <p className="font-display text-3xl font-extrabold text-foreground tracking-wider">
                508754
              </p>
            </div>
            <div className="mt-5 space-y-2">
              {board.slice(1).map((b) => (
                <div
                  key={b.rank}
                  className="flex items-center gap-3 rounded-full bg-surface/80 border border-border px-3 py-2"
                >
                  <span className="font-display text-xs text-muted-foreground w-6">{b.rank}</span>
                  <span className="h-7 w-7 rounded-md bg-accent/30 grid place-items-center">
                    <Users size={14} className="text-accent" />
                  </span>
                  <span className="text-sm flex-1">{b.name}</span>
                  <span className="font-display text-sm text-foreground">{b.pts}</span>
                  <Shield size={14} className="text-primary" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Join the ecosystem                                                        */
/* -------------------------------------------------------------------------- */

function JoinEcosystem() {
  const cards = ["Become A Judge", "Volunteer", "Community Member"];
  return (
    <Section id="community">
      <SectionTitle>Join the Ecosystem</SectionTitle>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.form
            key={c}
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-surface border border-border p-7"
          >
            <h3 className="font-display text-xl font-bold uppercase">{c}</h3>
            <div className="mt-6 space-y-3">
              {["Name", "Location", "Enroll"].map((ph) => (
                <input
                  key={ph}
                  placeholder={ph}
                  className="w-full bg-surface-2 border border-border rounded-md px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition"
                />
              ))}
              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-md bg-primary text-primary-foreground font-display font-semibold tracking-wider hover:brightness-110 transition glow-red"
              >
                SIGN UP
              </button>
            </div>
          </motion.form>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sponsors                                                                  */
/* -------------------------------------------------------------------------- */

function Sponsors() {
  const list = [
    "NIT DELHI",
    "INDIAN BIT",
    "NIT SILCHAR",
    "ROBO COMPANY",
    "IIT BOMBAY",
    "GENERAL ROBOTICS",
  ];
  return (
    <Section>
      <SectionTitle>Sponsors</SectionTitle>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6">
        {list.map((s, i) => (
          <motion.div
            key={s + i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-4 justify-center sm:justify-start group"
          >
            <div className="h-14 w-14 rounded-full border border-border grid place-items-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 transition">
              <Cog size={26} />
            </div>
            <span className="font-display text-sm tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition uppercase">
              {s}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  const links1 = ["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"];
  const links2 = ["Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"];
  const socials = [Youtube, Instagram, Facebook, Twitter];

  return (
    <footer className="border-t border-border px-5 sm:px-8 lg:px-16 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-display text-sm tracking-[0.25em] text-muted-foreground mb-6">
            QUICK LINKS
          </h4>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
            {[...links1, ...links2].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-center">
          <span className="font-display font-black text-2xl tracking-wider">
            <span className="text-accent">BOT</span>
            <span className="text-foreground">LEAGUE</span>
          </span>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs md:mx-auto">
            India&apos;s national ecosystem for robotics arena competitions.
          </p>
        </div>

        <div className="md:text-right">
          <h4 className="font-display text-sm tracking-[0.25em] text-muted-foreground mb-6">
            SOCIAL MEDIA
          </h4>
          <div className="flex md:justify-end gap-4">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} BotLeague. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CompetitionsEvents />
        <UserJourney />
        <WhatIs />
        <Categories />
        <Disciplines />
        <LeagueAdvantage />
        <JoinEcosystem />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
