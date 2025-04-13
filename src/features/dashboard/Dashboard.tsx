import Link from 'next/link';
import {
  Bell,
  ChevronRight,
  Grid,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  Sparkles,
  User,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { logoutAction } from '../auth/actions/logout';

export function DashboardView() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-8">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="py-4 border-b">
                    <Link href="/dashboard" className="flex items-center gap-2 px-2">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                        T
                      </div>
                      <span className="font-semibold text-lg">Trello.ia</span>
                    </Link>
                  </div>
                  <nav className="flex-1 py-4">
                    <div className="px-3 mb-2 text-xs font-medium text-slate-500 uppercase">
                      Main
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-100 text-slate-900"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/boards"
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      >
                        <Grid className="h-4 w-4" />
                        All Boards
                      </Link>
                      <Link
                        href="/tasks"
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      >
                        <Badge className="h-4 w-4 bg-blue-500" variant="default" />
                        My Tasks
                      </Link>
                      <Link
                        href="/ai-features"
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      >
                        <Sparkles className="h-4 w-4" />
                        AI Features
                      </Link>
                    </div>
                    <div className="px-3 mt-6 mb-2 text-xs font-medium text-slate-500 uppercase">
                      Settings
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                    </div>
                  </nav>
                  <div className="py-4 border-t">
                    <form action={logoutAction}>
                      <button
                        type="submit"
                        className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-semibold text-lg hidden sm:inline-block">Trello.ia</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex relative w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search boards, tasks..."
                className="pl-10 h-9 bg-slate-50 border-slate-200 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-slate-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="sr-only">Notifications</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Settings */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5 text-slate-600" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <span className="hidden md:inline text-sm font-medium text-slate-700">
                Sarah Johnson
              </span>
              <Avatar className="h-8 w-8 border border-slate-200">
                <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                  SJ
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-slate-200 p-4 sticky top-16 h-[calc(100vh-4rem)]">
          <nav className="h-full flex flex-col">
            <div className="space-y-1 mb-6">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-100 text-slate-900"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/boards"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
              >
                <Grid className="h-4 w-4" />
                All Boards
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
              >
                <Badge className="h-4 w-4 bg-blue-500" variant="default" />
                My Tasks
              </Link>
              <Link
                href="/ai-features"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
              >
                <Sparkles className="h-4 w-4" />
                AI Features
                <Badge
                  className="ml-auto bg-indigo-100 text-indigo-800 hover:bg-indigo-100"
                  variant="outline"
                >
                  New
                </Badge>
              </Link>
            </div>

            <div className="mt-auto space-y-1">
              <Link
                href="/profile"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </form>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Welcome Section */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Welcome back, Sarah!
                </h1>
                <p className="text-slate-500 mt-1">You have 8 active boards and 24 pending tasks</p>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white self-start md:self-auto">
                <Plus className="mr-2 h-4 w-4" />
                Create New Board
              </Button>
            </div>
          </section>

          {/* Recent Boards Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Recent Boards</h2>
              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Board 1 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-slate-800">Marketing Campaign</h3>
                      <p className="text-sm text-slate-500 mt-1">Q3 Product Launch</p>
                    </div>
                    <Badge
                      className="bg-green-100 text-green-800 hover:bg-green-100"
                      variant="secondary"
                    >
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">12</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">4</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xs">
                        TK
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">
                        +2
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 2 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-slate-800">Website Redesign</h3>
                      <p className="text-sm text-slate-500 mt-1">Frontend Development</p>
                    </div>
                    <Badge
                      className="bg-purple-100 text-purple-800 hover:bg-purple-100"
                      variant="secondary"
                    >
                      In Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">18</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">7</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-rose-100 text-rose-700 text-xs">
                        AL
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 3 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-slate-800">Mobile App Development</h3>
                      <p className="text-sm text-slate-500 mt-1">Version 2.0 Release</p>
                    </div>
                    <Badge
                      className="bg-amber-100 text-amber-800 hover:bg-amber-100"
                      variant="secondary"
                    >
                      Planning
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">24</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">3</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                        RB
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xs">
                        +3
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 4 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-slate-800">Content Calendar</h3>
                      <p className="text-sm text-slate-500 mt-1">Social Media Strategy</p>
                    </div>
                    <Badge
                      className="bg-green-100 text-green-800 hover:bg-green-100"
                      variant="secondary"
                    >
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">16</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">9</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-amber-100 text-amber-700 text-xs">
                        JM
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* All Boards Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">All Boards</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Settings className="mr-2 h-4 w-4" />
                  Manage Boards
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Board 1 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="font-medium text-slate-800">Marketing Campaign</h3>
                    <p className="text-sm text-slate-500 mt-1">Q3 Product Launch</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">12</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">4</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xs">
                        TK
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 2 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="font-medium text-slate-800">Website Redesign</h3>
                    <p className="text-sm text-slate-500 mt-1">Frontend Development</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">18</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">7</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-rose-100 text-rose-700 text-xs">
                        AL
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 3 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="font-medium text-slate-800">Mobile App Development</h3>
                    <p className="text-sm text-slate-500 mt-1">Version 2.0 Release</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">24</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">3</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                        RB
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 4 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="font-medium text-slate-800">Content Calendar</h3>
                    <p className="text-sm text-slate-500 mt-1">Social Media Strategy</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">16</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">9</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-amber-100 text-amber-700 text-xs">
                        JM
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 5 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="font-medium text-slate-800">Product Roadmap</h3>
                    <p className="text-sm text-slate-500 mt-1">2023 Strategy</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">20</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">12</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">
                        DM
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xs">
                        +2
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Board 6 */}
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div>
                    <h3 className="font-medium text-slate-800">Customer Support</h3>
                    <p className="text-sm text-slate-500 mt-1">Ticket Management</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="font-medium">32</span>
                    <span className="mx-1">tasks</span>
                    <span className="text-slate-400">•</span>
                    <span className="mx-1 text-green-600 font-medium">18</span>
                    <span className="text-green-600">completed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="h-7 w-7 border-2 border-white">
                      <AvatarFallback className="bg-rose-100 text-rose-700 text-xs">
                        KL
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button size="sm" className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100">
                    Open Board
                  </Button>
                </CardFooter>
              </Card>

              {/* Create New Board Card */}
              <Card className="bg-white border-dashed border-slate-300 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center p-6 h-[172px]">
                <Button variant="ghost" className="h-12 w-12 rounded-full bg-slate-100 mb-3">
                  <Plus className="h-6 w-6 text-indigo-600" />
                </Button>
                <h3 className="font-medium text-slate-800">Create New Board</h3>
                <p className="text-sm text-slate-500 mt-1">Add a new project or task list</p>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardView;
