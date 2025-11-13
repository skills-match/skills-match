interface ISubtitle {
  children: React.ReactNode;
}

const Subtitle = ({ children }: ISubtitle) => {
  return (
    <p className="text-4xl font-bold text-foreground mb-4 text-center">
      {children}
    </p>
  );
};

export default Subtitle;
