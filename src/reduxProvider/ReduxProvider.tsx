"use client";
import { api } from "@/redux/api";
import { FC, ReactNode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

interface ILayout {
    children: ReactNode;
}

const ReduxProvider: FC<ILayout> = ({ children }) => {
    return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
