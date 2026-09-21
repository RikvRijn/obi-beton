import { Button } from "@/components/ui/Button";

export function CtaBanner({
  title,
  description,
  buttonLabel = "Offerte aanvragen",
  href = "/offerte",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-dark-maroon px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-black uppercase leading-tight text-on-dark sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-on-dark-secondary">{description}</p>
        <Button href={href} variant="primary">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
