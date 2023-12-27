export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 h-full">
      {/* Nav */}
      <main className="bg-slate-100 pt-40">{children}</main>
      {/*  Footer */}
    </div>
  );
}
