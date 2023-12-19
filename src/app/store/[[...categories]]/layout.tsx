export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Navegacion de las categorias</nav>
      {children}
    </div>
  );
}
