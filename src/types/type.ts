import type { ButtonProps } from "@/interfaces/interface";

export type MergedButtonProps = ButtonType & ButtonProps;

export type ButtonType = {
    label: string;
    onclick: ()=>void;
    className: string;
}