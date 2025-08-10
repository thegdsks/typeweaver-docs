/**
 * Environment configuration for TypeWeaver | GLINR Studio
 */

export const config = {
  // Base URL for the application (with protocol)
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3002",

  // Domain for the application (without protocol)
  domain: process.env.NEXT_PUBLIC_DOMAIN || "localhost:3002",

  // Environment
  env: process.env.NODE_ENV || "development",

  // Is production environment
  isProd: process.env.NODE_ENV === "production",

  // Is development environment
  isDev: process.env.NODE_ENV === "development",
} as const;

/**
 * Get absolute URL for a given path
 */
export function getAbsoluteUrl(path: string = ""): string {
  // Remove leading slash to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${config.baseUrl}${cleanPath ? `/${cleanPath}` : ""}`;
}

/**
 * Get documentation URL for a given path
 */
export function getDocsUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return getAbsoluteUrl(`docs${cleanPath ? `/${cleanPath}` : ""}`);
}
