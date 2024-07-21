import Header from "@/components/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="py-32">{children}</main>
    </>
  );
}
