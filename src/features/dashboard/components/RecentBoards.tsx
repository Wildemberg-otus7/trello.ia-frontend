'use client';

import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BoardCard } from './BoardCard';

interface Board {
  id: string;
  title: string;
  description?: string;
  status?: 'Active' | 'In Progress' | 'Planning';
  tasksCount?: number;
  completedTasks?: number;
}

interface RecentBoardsProps {
  boards: Board[];
}

export function RecentBoards({ boards }: RecentBoardsProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Recent Boards</h2>
        <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
          View All
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {boards.map((board) => (
          <BoardCard
            key={board.id}
            title={board.title}
            description={board.description}
            status={board.status}
            tasksCount={board.tasksCount}
            completedTasks={board.completedTasks}
          />
        ))}
      </div>
    </section>
  );
}
