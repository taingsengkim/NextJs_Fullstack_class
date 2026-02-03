export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-5">
      <p>auth groups</p> {children}
    </div>
  );
}
