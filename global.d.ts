interface Options {
  cookies: {
    clear: (name: string, options: object) => any
    clearAll: (name: string) => any
    get: (name: string) => any
    getAll: (name: string) => any
    set: (name: string) => any
  }
  data: any
  emitCustomGoal: (name: string) => any
  emitMetric: (type: string, productId: string, metaData: any) => any
  getBrowserState: any | Promise<any>
  getVisitorState: any | Promise<any>
  getMemberState: any | Promise<any>
  integration: (friendlyId: string, defaults: any) => any
  isMemberOf: (segment: string) => any
  log: {
    info: (data: any) => any
    warn: (data: any) => any
    error: (data: any) => any
  }
  meta: {
    cookieDomain: string
    trackingId: string
    experienceId: number
    experimentId: number
    isPreview: boolean
    vertical: string
    namespace: string | null
    iterationId: number
    variationId: number
    variationMasterId: number
    variationIsControl: boolean
    visitorId: string
  }
  onActivation: (fn: () => any) => any
  onMembershipsChanged: () => any
  onRemove: (fn: () => any) => any
  poll: (
    targets: string | string[],
    options?: object
  ) => Promise<any>
  react: {
    register: () => any
    release: () => any
  }
  redirectTo: any
  registerContentAreas: () => any
  solution: any
  state: {
    get: (key: string) => any
    set: (key: string, data: any) => void
  }
  unregisterContentAreas: () => any
  uv: {
    emit: () => any
    events: object[]
    on: () => any
    onEventSent: () => any
    once: () => any
    onceEventSent: () => any
  }
}

interface QubitUtils {
  insertAfter: (anchor: HTMLElement, element: HTMLElement) => void,
  restoreAll: () => void
}
