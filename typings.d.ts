// Allow CSS file side-effect imports (used by Next.js App Router layout)
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
