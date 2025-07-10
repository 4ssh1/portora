export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface howInterface {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface inputType {
    type: string;
    placeholder?: string;
    className?: string;
    name?: string;
    value?: string;
}