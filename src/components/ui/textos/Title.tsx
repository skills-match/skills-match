type TitleProps = {
    children: React.ReactNode;
}

const Title = ({children}: TitleProps) => {
    return (
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            {children}
        </h1>
    );
}
 
export default Title;