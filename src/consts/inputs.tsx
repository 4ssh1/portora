import type { InputType } from "@/interfaces/interface";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const inputs: InputType[] =[
        {
            type: "text",
            placeholder: "Enter your firstname",
            className: "text-xs ",
            name: "firstname",
            value: "",
            icon:  <IoPersonCircleOutline />
        },
        {
            type: "text",
            placeholder: "Enter your lastname",
            className: "text-xs ",
            name: "lastname",
            icon:  <IoPersonCircleOutline />,
            value: "",
        },
        {
            type: "email",
            placeholder: "Enter your email",
            className: "text-xs ",
            name: "email",
            icon: <MdOutlineMail />,
            value: ""
        },
        {
            type: "password",
            placeholder: "Enter your password",
            className: "text-xs ",
            name: "password",
            icon: <MdOutlineRemoveRedEye />,
            value: ""
        },
        {
            type: "password",
            placeholder: "Confirm your password",
            className: "text-xs ",
            name: "password",
            icon: <MdOutlineRemoveRedEye />,
            value: ""
        },
    ]