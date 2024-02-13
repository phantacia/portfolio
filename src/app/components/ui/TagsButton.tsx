const TagsButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <span className="cursor-default inline-block px-2 py-1 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-background">
        {children}
      </span>
    </div>
  );
};

export default TagsButton;
