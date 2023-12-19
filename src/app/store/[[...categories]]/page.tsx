interface CategoryPageProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function CategoryPage(props: CategoryPageProps) {
  const { categories } = props.params;

  return (
    <div>
      <h1>Categoria dinamica: {categories}</h1>
    </div>
  );
}
