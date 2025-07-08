import type { ButtonProps } from "@/interfaces/interface";
import type { JSX } from "react";

export type MergedButtonProps = ButtonType & ButtonProps;

export type ButtonType = {
    label: string;
    onclick: ()=>void;
    className: string;
}

export type badgeType = {
    label: string,
    icon?: JSX.Element
}