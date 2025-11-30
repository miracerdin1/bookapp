import { beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { mockLocalStorage } from "./mocks/localStorage"

beforeEach(() => {
    mockLocalStorage()
    setActivePinia(createPinia())
})