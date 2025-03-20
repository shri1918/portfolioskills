export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center gap-4 items-center md:py-10 py-8">
      <div className="justify-center text-center inline-block">{children}</div>
    </section>
  );
}
