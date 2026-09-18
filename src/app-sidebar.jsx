import React, { useEffect, useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar"
import { Package, LayoutGrid, AlertCircle, ChevronRight } from "lucide-react"

const API_URL = "https://api.escuelajs.co/api/v1/categories"

export function AppSidebar() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeId, setActiveId] = useState("all")

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error("Failed to fetch categories")
        const data = await response.json()
        setCategories(data.slice(0, 6)) // Limit to top 6 categories
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <Sidebar variant="floating" className={'h-full top-16 h-[calc(100vh-4rem)]'}>
      {/* Header */}
      <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
        <div className="flex items-center gap-2 font-semibold">
          <Package className="h-5 w-5 text-sidebar-primary" />
          <span className="text-base tracking-tight">Platzi Store</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={activeId === "all"}
                onClick={() => setActiveId("all")}
              >
                <LayoutGrid className="h-4 w-4" />
                <span>All Products</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Dynamic Categories */}
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            {loading && (
              <>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
              </>
            )}

            {error && (
              <SidebarMenuItem>
                <div className="flex items-center gap-2 px-3 py-2 text-xs text-sidebar-ring">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Failed to load</span>
                </div>
              </SidebarMenuItem>
            )}

            {!loading &&
              !error &&
              categories.map((category) => {
                const isActive = activeId === category.id
                return (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => setActiveId(category.id)}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-4 w-4 rounded-full object-cover shrink-0"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://via.placeholder.com/16"
                        }}
                      />
                      <span className="truncate">{category.name}</span>
                      <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-60" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-accent font-bold text-xs">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">Platzi API</span>
            <span className="text-[10px] text-sidebar-foreground/60">
              v1 Catalog
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}