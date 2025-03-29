import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Item = {
  id: string
  name: string
  symbol: string
  price: string
  currentRate: string
  icon: string
  quantity: string
}

type ItemState = {
  items: Item[]
  addItemToCart: (item: Item) => void
  removeItemFromCart: (id: string) => void
  total: () => number
  removeAll: () => void
}

export const useCartStore = create<ItemState>()(
  persist(
    (set, get) => ({
      items: [],

      addItemToCart: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      total: () =>
        get().items.reduce(
          (acc, item) => acc + Number(item.price) * Number(item.quantity),
          0
        ),

      removeAll: () => set({ items: [] }),
    }),

    { name: 'cartStore', storage: createJSONStorage(() => localStorage) }
  )
)