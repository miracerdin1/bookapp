import { beforeEach, expect } from "vitest"
import { config } from "@vue/test-utils"
import { setActivePinia, createPinia } from "pinia"
import { mockLocalStorage } from "./mocks/localStorage"

beforeEach(() => {
    mockLocalStorage()
    setActivePinia(createPinia())
})