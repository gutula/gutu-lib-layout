import React from "react";

import { cn } from "@platform/ui";

export const packageId = "layout" as const;
export const packageDisplayName = "Layout" as const;
export const packageDescription = "Canonical layout primitives for workspace shells, dashboards, and builder splits." as const;

export function WorkspaceShellLayout(props: {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  rail?: React.ReactNode | undefined;
}) {
  return React.createElement(
    "div",
    { className: "awb-shell" },
    props.sidebar,
    props.main,
    props.rail ?? null
  );
}

export function DashboardGrid(props: {
  children?: React.ReactNode;
  columns?: 2 | 3 | 4 | undefined;
}) {
  return React.createElement(
    "div",
    {
      className: cn("awb-dashboard-grid", `is-${props.columns ?? 3}-cols`)
    },
    props.children
  );
}

export function SplitPanelLayout(props: {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
}) {
  return React.createElement(
    "div",
    {
      className: "awb-builder-host",
      id: "split-panel-layout"
    },
    React.createElement("section", { className: "awb-builder-column awb-builder-column-left" }, props.left),
    React.createElement("div", { className: "awb-builder-divider", "aria-hidden": true }),
    React.createElement("section", { className: "awb-builder-column awb-builder-column-center" }, props.center),
    React.createElement("div", { className: "awb-builder-divider", "aria-hidden": true }),
    React.createElement("section", { className: "awb-builder-column awb-builder-column-right" }, props.right)
  );
}
