import { quotes } from "@/data/quotes";
import { works } from "@/data/works";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Ibn ʿAbd al-Barr
          </p>
          <h1 className="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl">
            Fjalë frymëzuese nga dijetari i Al-Andalusit
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600">
            Jusuf ibn ʿAbd Allah ibn ʿAbd el-Berr el-Nemeri (978–1071) ishte
            jurist dhe muhaddith malikas që shërbeu si kadi në gadishullin
            Iberik. I lindur në Kordobë dhe i ndëruar si &ldquo;Bukhariu i
            Perëndimit&rdquo;, ai ndërtoi ura mes traditës së hershme dhe
            gjeneratave të reja përmes punëve monumentale si{" "}
            <em>el-Temhid</em> dhe <em>Jamiʿ Bayan al-ʿIlm wa Faḍlih</em>.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600">
            Më poshtë janë tre fragmente ku vërehet qartësia e tij metodologjike
            dhe kujdesi për t’u afruar me dijen me zemër të përulët.
          </p>
        </header>

        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Thënie të përzgjedhura
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {quotes.map((quote) => (
              <article
                key={quote.id}
                className="flex h-full flex-col gap-5 rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm shadow-zinc-200 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col gap-3">
                  <p
                    className="text-right text-lg leading-8 text-zinc-800"
                    dir="rtl"
                  >
                    {quote.arabic}
                  </p>
                  <p className="text-base leading-7 text-zinc-700">
                    {quote.translationSq}
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-2 text-sm text-zinc-500">
                  <span className="font-medium text-zinc-600">
                    {quote.context}
                  </span>
                  <a
                    href={quote.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-500 underline decoration-dotted underline-offset-4 hover:text-zinc-700"
                  >
                    {quote.source.title} · {quote.source.citation}
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Vepra që formuan diskursin e shek. XI
            </h2>
            <p className="max-w-2xl text-base text-zinc-600">
              Ibn Abd el-Berr ndërthurte kritikën e hadithit me jurisprudencën
              dhe etikën. Përmbledhja e shkurtër e mëposhtme tregon larmishmërinë
              e kontributeve të tij.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {works.map((work) => (
              <div
                key={work.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/80 p-5 shadow-inner"
              >
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {work.title}
                  </h3>
                  {work.year && (
                    <p className="text-sm text-zinc-500">{work.year}</p>
                  )}
                </div>
                <p className="text-sm leading-6 text-zinc-600">
                  {work.description}
                </p>
                <p className="text-sm font-medium text-zinc-700">
                  Fokus: {work.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/70 p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Burime të konsultuara
          </h2>
          <ul className="list-inside list-disc text-sm text-zinc-600">
            <li>
              <a
                href="https://archive.org/details/jbiwfdleh"
                className="underline decoration-dotted underline-offset-4 hover:text-zinc-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                جامع بيان العلم وفضله، تحقيق أبو الأشبال الزهيري (archive.org)
              </a>
            </li>
            <li>
              <a
                href="https://archive.org/details/AlkafiFiFeqh"
                className="underline decoration-dotted underline-offset-4 hover:text-zinc-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                الكافي في فقه أهل المدينة (archive.org)
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Ibn_Abd_al-Barr"
                className="underline decoration-dotted underline-offset-4 hover:text-zinc-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ibn ʿAbd al-Barr — Wikipedia overview
              </a>
            </li>
          </ul>
        </section>

        <footer className="pb-10 pt-6 text-sm text-zinc-500">
          Përgati nga një përzgjedhje e dorëshkrimeve digjitale për të sjellë
          fjalët e Ibn Abd el-Berr në shqip.
        </footer>
      </main>
    </div>
  );
}
