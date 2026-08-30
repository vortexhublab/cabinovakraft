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
          background: "#2c3138",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 64 64">
          <path
            d="M47.8 14.6a24.2 24.2 0 1 0 0 34.8"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M26.5 25.2h22"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M37.5 25.2v4.2"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <path
            d="M26.5 38.8h20"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M36.5 38.8v4.2"
            fill="none"
            stroke="#c4a574"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
