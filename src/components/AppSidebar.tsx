import { useState } from "react"
import { Settings, Package, ScanLine, Home, BarChart3, Users, FileText } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Inventory", url: "/inventory", icon: Package },
  { title: "Past Scan", url: "/past-scan", icon: ScanLine },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Users", url: "/users", icon: Users },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(path)
  }

  const getNavCls = (path: string) => {
    const active = isActive(path)
    return `
      relative overflow-hidden transition-all duration-300 
      ${active 
        ? "bg-gradient-primary text-primary-foreground shadow-glow" 
        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }
      ${collapsed ? "w-10 h-10 rounded-lg justify-center" : ""}
    `
  }

  return (
    <Sidebar
      className={`
        ${collapsed ? "w-16" : "w-64"} 
        transition-all duration-300 ease-in-out
        bg-sidebar border-sidebar-border
      `}
      collapsible="icon"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dashboard
              </h2>
              <p className="text-xs text-sidebar-foreground/60">Admin Panel</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "hidden" : "text-sidebar-foreground/60 text-xs font-medium mb-2"}>
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavCls(item.url)}
                    >
                      <item.icon className={`${collapsed ? "w-5 h-5" : "w-5 h-5 mr-3"} flex-shrink-0`} />
                      {!collapsed && (
                        <span className="font-medium transition-opacity duration-200">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}