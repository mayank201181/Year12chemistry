// iOS home-screen icon: Erlenmeyer flask + IB Chemistry badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #0f766e 100%)`,
        }}
      >
        <svg width={92} height={92} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <path d="M36 14h28M42 14v24L20 78a8 8 0 0 0 7 12h46a8 8 0 0 0 7-12L58 38V14" fill="none" stroke="#ffffff" strokeWidth={6.5} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31 64h38" stroke="#a7f3d0" strokeWidth={6} strokeLinecap="round" />
          <circle cx="46" cy="76" r="4.5" fill="#ffffff" />
          <circle cx="58" cy="72" r="3.5" fill="#ffffff" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            padding: "2px 12px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: 0.5,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
