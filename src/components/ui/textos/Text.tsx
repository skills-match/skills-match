interface IText {
  children: React.ReactNode;
  colors?: 'primary' | 'secondary' | 'foreground' | 'mutedForeground';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}


export const Text = ({ children, className, colors, size }: IText) => {

    const colorsClasses = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        foreground: 'text-foreground',
        mutedForeground: 'text-muted-foreground',
      };
    
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };
    
    const classes = `${colorsClasses[colors]} ${sizeClasses[size]} ${className}`;

    return <p className={classes}>
        {children}
    </p>;
};
