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
          background: "#1c1814",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
          <rect
            x="3.2"
            y="3.2"
            width="33.6"
            height="33.6"
            stroke="#b0894f"
            strokeWidth="1.4"
          />
          <path
            d="M27.2 12.2H13.1v15.6h14.1"
            stroke="#b0894f"
            strokeWidth="1.9"
            strokeLinejoin="miter"
          />
          <rect x="29.1" y="29.1" width="3.4" height="3.4" fill="#b0894f" />
        </svg>
      </div>
    ),
    size
  );
}
