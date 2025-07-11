import type { JSX } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface HowInterface {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface InputType {
    type: string;
    placeholder?: string;
    className?: string;
    name?: string;
    value?: string;
    onChange?:  (()=>void)
    icon?: JSX.Element
}


