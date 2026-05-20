import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#f8fafc",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          SEO Baseline Lab
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: 28,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Unoptimized demo pages for SEO and AI discoverability audit experiments
        </div>
      </div>
    ),
    size
  );
}
