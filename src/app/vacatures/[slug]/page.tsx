import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/Button";
import { VACATURES } from "@/data/vacatures";

export function generateStaticParams() {
  return VACATURES.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = VACATURES.find((v) => v.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} | Vacature OBI`,
    description: job.intro,
  };
}

export default async function VacatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = VACATURES.find((v) => v.slug === slug);
  if (!job) notFound();

  const mailtoHref = `mailto:martijn@obibeton.nl?subject=${encodeURIComponent(
    `Sollicitatie ${job.title}`
  )}`;

  return (
    <>
      <Header />
      <main>
        <PageIntro eyebrow="Vacature" title={job.title} intro={job.intro} />

        <section className="bg-page px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
                {job.location} · {job.type}
              </p>
              <h2 className="font-display mt-4 text-2xl font-bold uppercase text-ink">Taken en verantwoordelijkheden</h2>
              <ul className="mt-4 space-y-3">
                {job.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 text-lg text-ink-secondary">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                    {task}
                  </li>
                ))}
              </ul>

              <Link
                href="/vacatures"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-secondary hover:text-accent"
              >
                &larr; Terug naar alle vacatures
              </Link>
            </div>

            <div className="h-fit rounded-sm border border-border bg-surface p-8">
              <h3 className="font-display text-lg font-bold text-ink">Interesse in deze functie?</h3>
              <p className="mt-2 text-sm text-ink-secondary">
                Stuur uw sollicitatie met CV en motivatiebrief naar martijn@obibeton.nl. We nemen
                dan zo snel mogelijk contact met u op.
              </p>
              <Button href={mailtoHref} variant="primary" className="mt-6 w-full justify-center">
                Solliciteer nu
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
