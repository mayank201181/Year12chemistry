// Browser-tab icon: emerald/teal square with crisp Erlenmeyer flask glyph.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #0f766e 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={22} height={22} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 14h28M42 14v24L20 78a8 8 0 0 0 7 12h46a8 8 0 0 0 7-12L58 38V14" fill="none" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M31 64h38" stroke="#a7f3d0" strokeWidth={7} strokeLinecap="round" />
          <circle cx="46" cy="76" r="4" fill="#ffffff" />
          <circle cx="58" cy="72" r="3" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
