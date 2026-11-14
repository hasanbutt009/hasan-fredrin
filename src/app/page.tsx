import { profile, shipped, whyFredrin } from "@/data/profile";

const link =
  "underline decoration-steel/40 underline-offset-4 hover:text-amber hover:decoration-amber";

export default function Home() {
  const { links } = profile;
  return (
    <>
      <header className="border-b border-steel/20">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <p className="font-mono text-sm text-amber">FDE / DOSSIER</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-emerald sm:text-2xl">{profile.headline}</p>
          <p className="mt-6 max-w-2xl text-lg text-steel">{profile.subheadline}</p>
          <p className="mt-4 font-mono text-sm text-steel">{profile.location}</p>
          <nav aria-label="Contact" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
            <a className={link} href={`mailto:${links.email}`}>Email</a>
            <a className={link} href={links.portfolio}>Portfolio</a>
            <a className={link} href={links.github}>GitHub</a>
            <a className={link} href={links.linkedin}>LinkedIn</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5">
        <section aria-labelledby="shipped" className="py-14">
          <h2 id="shipped" className="font-mono text-sm uppercase tracking-widest text-amber">
            What I&apos;ve Shipped
          </h2>
          <ol className="mt-8 divide-y divide-steel/20 border-y border-steel/20">
            {shipped.map((item) => (
              <li key={item.id} className="grid gap-6 py-8 md:grid-cols-[14rem_1fr]">
                <div>
                  <p className="font-mono text-xs text-steel">{item.id}</p>
                  <dl className="mt-3 space-y-3">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="font-mono text-xs text-steel">{m.label}</dt>
                        <dd className="font-mono text-2xl font-semibold text-emerald">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {(item.org || item.period) && (
                    <p className="mt-1 font-mono text-sm text-amber">
                      {[item.org, item.period].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-steel marker:text-steel/60">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {item.caseStudies.length > 0 && (
                    <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
                      {item.caseStudies.map((c) => (
                        <a key={c.href} className={link} href={c.href}>
                          {c.label} ↗
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="why" className="border-t border-steel/20 py-14">
          <h2 id="why" className="font-mono text-sm uppercase tracking-widest text-amber">
            Why Fredrin
          </h2>
          <dl className="mt-8 divide-y divide-steel/20 border-y border-steel/20">
            {whyFredrin.map((w) => (
              <div key={w.title} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr]">
                <dt className="font-semibold">{w.title}</dt>
                <dd className="text-steel">{w.body}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-steel/20 bg-panel">
        <section aria-labelledby="reach" className="mx-auto max-w-4xl px-5 py-14">
          <h2 id="reach" className="font-mono text-sm uppercase tracking-widest text-amber">
            Reach Me
          </h2>
          <ul className="mt-6 space-y-2 font-mono text-sm">
            <li><a className={link} href={`mailto:${links.email}`}>{links.email}</a></li>
            <li><a className={link} href={links.portfolio}>{links.portfolio}</a></li>
            <li><a className={link} href={links.github}>{links.github}</a></li>
            <li><a className={link} href={links.linkedin}>{links.linkedin}</a></li>
            <li><a className={link} href={`tel:${links.phone}`}>{links.phone}</a></li>
          </ul>
        </section>
      </footer>
    </>
  );
}
