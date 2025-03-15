import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Import,
  FileText,
  Box,
  LayoutGrid,
  Search as SearchIcon,
  PackageSearch,
  Trash2,
  Play,
  Pause,
  FastForward,
} from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';

export default function Sidebar() {
  const location = useLocation();
  const [isSimulating, setIsSimulating] = useState(false);
  const [fastForwardDays, setFastForwardDays] = useState('');

  return (
    <div className="w-64 bg-black/30 backdrop-blur-sm border-r border-white/10">
      <div className="flex flex-col h-full p-4">
        <div className="space-y-2 flex-1">
          <Link to="/import">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/import' && 'bg-white/10 text-white'
              )}
            >
              <Import className="mr-2 h-4 w-4" />
              Import
            </Button>
          </Link>
          <Link to="/logs">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/logs' && 'bg-white/10 text-white'
              )}
            >
              <FileText className="mr-2 h-4 w-4" />
              Logs
            </Button>
          </Link>
          <Link to="/place">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/place' && 'bg-white/10 text-white'
              )}
            >
              <Box className="mr-2 h-4 w-4" />
              Place
            </Button>
          </Link>
          <Link to="/placement">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/placement' && 'bg-white/10 text-white'
              )}
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Placement
            </Button>
          </Link>
          <Link to="/search">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/search' && 'bg-white/10 text-white'
              )}
            >
              <SearchIcon className="mr-2 h-4 w-4" />
              Search
            </Button>
          </Link>
          <Link to="/retrieve">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/retrieve' && 'bg-white/10 text-white'
              )}
            >
              <PackageSearch className="mr-2 h-4 w-4" />
              Retrieve
            </Button>
          </Link>
          <Link to="/waste">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-white/70 hover:text-white hover:bg-white/10',
                location.pathname === '/waste' && 'bg-white/10 text-white'
              )}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Waste
            </Button>
          </Link>
        </div>
        <div className="pt-4 border-t border-white/10">
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => setIsSimulating(!isSimulating)}
            >
              {isSimulating ? (
                <Pause className="mr-2 h-4 w-4" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              Simulate
            </Button>
            {isSimulating && (
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="Days"
                  value={fastForwardDays}
                  onChange={(e) => setFastForwardDays(e.target.value)}
                  className="h-8 bg-white/5 border-white/10 text-white"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                >
                  <FastForward className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}