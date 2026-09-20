export const asset = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p.startsWith("/") ? p : "/" + p}`;
