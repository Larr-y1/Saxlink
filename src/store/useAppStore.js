import { create } from 'zustand';

export const useAppStore = create((set, get) => ({
  // UI state
  sidebarCollapsed: false,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),

  // Notifications
  notifications: [],
  addNotification: (notif) =>
    set((s) => ({
      notifications: [{ ...notif, id: Date.now(), read: false, timestamp: new Date() }, ...s.notifications].slice(0, 50),
    })),
  markAllRead: () =>
    set((s) => ({ notifications: s.notifications.map((n) => ({ ...n, read: true })) })),
  clearNotification: (id) =>
    set((s) => ({ notifications: s.notifications.filter((n) => n.id !== id) })),
  unreadCount: () => get().notifications.filter((n) => !n.read).length,
}));