import type { ButtonProps, HowInterface } from "@/interfaces/interface";
import type { JSX } from "react";

export type MergedButtonProps = ButtonType & ButtonProps & BadgeType;

export type ButtonType = {
    label: string;
    onclick?: ()=>void;
    className: string;
}

export type BadgeType = {
    label: string,
    icon?: JSX.Element 
}

type Icon = Pick<BadgeType, "icon">

export type FeatureBtn = Pick<HowInterface, 'title' | "description"> & Icon
