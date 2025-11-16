interface ISubtitle {
  children: React.ReactNode;
  position?: "center" | "left" | "right";
}

const Subtitle = ({ children, position = "center" }: ISubtitle) => {
  return (
    <p className={`text-3xl font-bold text-foreground mb-4 ${position === "center" ? "text-center" : position === "left" ? "text-left" : "text-right"} `}>
      {children}
    </p>
  );
};

export default Subtitle;
