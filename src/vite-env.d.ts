declare module 'virtual:svg-icons-register' {
  const content: any
  export default content
}
declare module 'virtual:svg-icons-names' {
  // eslint-disable-next-line
  const iconsNames: string[]
  export default iconsNames
}
// env.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
