import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#FAFAF7",
          color: "#0F1E16",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -140,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundColor: "rgba(244,176,0,0.20)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -180,
            top: 80,
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundColor: "rgba(11,61,46,0.16)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 18, fontSize: 34, fontWeight: 700, letterSpacing: -0.5, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 18, fontSize: 22, opacity: 0.78, maxWidth: 950 }}>
          Apps + USSD • Offline-first workflows • Farmers • Providers • Agents
        </div>
        </div>
      </div>
    ),
    size
  );
}
