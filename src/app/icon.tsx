import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#2a2620",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 40 40">
          <rect
            x="3.5"
            y="3.5"
            width="33"
            height="33"
            rx="3.25"
            fill="none"
            stroke="#c4b49a"
            strokeWidth="2"
          />
          <rect
            x="8"
            y="8"
            width="24"
            height="24"
            rx="1.15"
            fill="none"
            stroke="#c4b49a"
            strokeWidth="1.5"
          />
          <path d="M8 20h24" fill="none" stroke="#c4b49a" strokeWidth="1.5" />
          <path
            d="M17.1 13.65h5.8"
            fill="none"
            stroke="#c4b49a"
            strokeWidth="1.85"
            strokeLinecap="round"
          />
          <path
            d="M17.1 26.35h5.8"
            fill="none"
            stroke="#c4b49a"
            strokeWidth="1.85"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
