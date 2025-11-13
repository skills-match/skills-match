interface LiFooter {
    children: React.ReactNode;
    onClick: () => void;
}

export const LiFooter = ({ children, onClick }: LiFooter) => {
    return (
        <li>
            <button onClick={onClick} className="text-foreground transition-colors text-sm text-muted-foreground hover:underline hover:text-primary active:underline text-start">
                {children}
            </button>
        </li>
    );
}