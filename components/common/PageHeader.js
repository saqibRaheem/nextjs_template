export function PageHeader({ title, description }) {
  return (
    <div className="text-center space-y-4 mb-12">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}