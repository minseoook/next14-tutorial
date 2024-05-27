"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const ClientSideProviderTest = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ClientSideProviderTest;
