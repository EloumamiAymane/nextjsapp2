import React from "react";
import Default from "../layouts/dashboard/default";
import { DefaultRouter } from "./default-router";

export const IndexRouters = [
  {
    path: "/",
    element: <Default />,
    children: [...DefaultRouter],
  },
];
