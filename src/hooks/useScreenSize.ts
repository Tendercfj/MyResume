import { ref, readonly, onMounted, onUnmounted, Ref } from 'vue'

export interface ScreenSize {
  width: Readonly<Ref<number>>
  height: Readonly<Ref<number>>
}

export function useScreenSize(): ScreenSize {
  const width  = ref<number>(0)
  const height = ref<number>(0)

  const update = (): void => {
    width.value  = window.innerWidth
    height.value = window.innerHeight
  }

  let ro: ResizeObserver | null = null

  /* ① 改成 onBeforeMount 或者在 onMounted 里先判断 window */
  onMounted(() => {
    if (typeof window !== 'undefined') {
      update()          // 现在一定在浏览器里
      ro = new ResizeObserver(update)
      ro.observe(document.body)
    }
  })

  onUnmounted(() => {
    ro?.disconnect?.()
  })

  return { width: readonly(width), height: readonly(height) }
}