// The Category component that displays the category of the product.
const Category = ({ category }: { category: string }) => {
  return (
    <>
      <span className="bg-(--muted-foreground)/10 text-(--muted-foreground) text-xs font-mono px-2 py-0.5 rounded">
        {category}
      </span>
    </>
  );
};

export default Category;
