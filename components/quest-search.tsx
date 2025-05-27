'use client'

import React, { useState } from "react";
import { Search, X, Filter, ChevronDown } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";


export default function QuestSearch() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [timeRange, setTimeRange] = useState([0, 90]); // 0-90 days
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);
  
  const addFilter = (type, value) => {
    setActiveFilters([...activeFilters, { type, value }]);
  };
  
  const removeFilter = (index) => {
    setActiveFilters(activeFilters.filter((_, i) => i !== index));
  };
  
  const clearAllFilters = () => {
    setActiveFilters([]);
    setTimeRange([0, 90]);
    setIsVerifiedOnly(false);
  };

  const formatTimeToComplete = (days) => {
    if (days === 0) return "Same day";
    if (days === 1) return "1 day";
    if (days <= 7) return `${days} days`;
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? "1 week" : `${weeks} weeks`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Search input with active filters */}
        <div className="p-4">
          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              className="pl-10 pr-4 py-2 h-12 text-base w-full rounded-full border-gray-200"
              placeholder="Search by title, tags, tools, guild, difficulty..."
            />
            <div className="flex gap-2 absolute right-3">
              {/* Mobile filter trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden h-8 w-8">
                    <Filter size={16} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your quest search results</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-6 p-6 block lg:hidden overflow-y-auto">
                    {/* Mobile Filter Controls */}
                    <MobileFilters 
                      timeRange={timeRange} 
                      setTimeRange={setTimeRange}
                      isVerifiedOnly={isVerifiedOnly}
                      setIsVerifiedOnly={setIsVerifiedOnly} 
                    />
                  </div>
                  <SheetFooter>
                    <Button onClick={clearAllFilters} variant="outline" className="w-full">Clear All</Button>
                    <Button className="w-full">Apply Filters</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              
              {/* Desktop filter button */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="hidden md:flex items-center gap-1 h-8 rounded-full">
                    <Filter size={16} />
                    <span>Filters</span>
                    <ChevronDown size={14} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-96 p-1" align="end">
                  <div className="space-y-4 overflow-y-auto max-h-[65vh] p-4">
                    <h3 className="font-medium">Filters</h3>
                    
                    {/* Desktop Filter Controls */}
                    <DesktopFilters 
                      timeRange={timeRange} 
                      setTimeRange={setTimeRange}
                      isVerifiedOnly={isVerifiedOnly}
                      setIsVerifiedOnly={setIsVerifiedOnly}
                    />
                    
                    <div className="flex justify-between pt-2">
                      <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                        Clear all
                      </Button>
                      <Button size="sm">Apply filters</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {activeFilters.map((filter, index) => (
                <Badge key={index} variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
                  <span className="text-xs">
                    <span className="font-medium">{filter.type}:</span> {filter.value}
                  </span>
                  <button 
                    onClick={() => removeFilter(index)}
                    className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
              {activeFilters.length > 0 && (
                <button 
                  onClick={clearAllFilters}
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Desktop Quick filter bar */}
        <div className="hidden md:flex items-center border-t border-gray-100 p-2 px-4 gap-2 flex-wrap">
          <Select onValueChange={(value) => addFilter("Type", value)}>
            <SelectTrigger className="h-8 text-xs bg-transparent border-none shadow-none w-auto px-2 font-medium text-gray-600">
              <SelectValue placeholder="Quest Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Quest Type</SelectLabel>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="microtask">Microtask</SelectItem>
                <SelectItem value="project">Project</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Separator orientation="vertical" className="h-5" />
          
          <Select onValueChange={(value) => addFilter("Difficulty", value)}>
            <SelectTrigger className="h-8 text-xs bg-transparent border-none shadow-none w-auto px-2 font-medium text-gray-600">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Difficulty</SelectLabel>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Separator orientation="vertical" className="h-5" />
          
          <Select onValueChange={(value) => addFilter("Reward", value)}>
            <SelectTrigger className="h-8 text-xs bg-transparent border-none shadow-none w-auto px-2 font-medium text-gray-600">
              <SelectValue placeholder="Reward Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Reward Type</SelectLabel>
                <SelectItem value="xp">XP</SelectItem>
                <SelectItem value="token">Token</SelectItem>
                <SelectItem value="nft">NFT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Separator orientation="vertical" className="h-5" />
          
          <Select onValueChange={(value) => addFilter("Guild", value)}>
            <SelectTrigger className="h-8 text-xs bg-transparent border-none shadow-none w-auto px-2 font-medium text-gray-600">
              <SelectValue placeholder="Guild" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Guild Affiliation</SelectLabel>
                <SelectItem value="developers">Developers</SelectItem>
                <SelectItem value="designers">Designers</SelectItem>
                <SelectItem value="content">Content Creators</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Separator orientation="vertical" className="h-5" />
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="link" className="h-8 text-xs font-medium text-gray-600 px-2">
                Time to Complete
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4 py-2">
                <h4 className="font-medium text-sm">Time to Complete</h4>
                <div className="px-1">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Same day</span>
                    <span>90 days</span>
                  </div>
                  <Slider
                    defaultValue={[0, 90]}
                    value={timeRange}
                    onValueChange={setTimeRange}
                    max={90}
                    step={1}
                    className="mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium">
                      {formatTimeToComplete(timeRange[0])} - {formatTimeToComplete(timeRange[1])}
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => {
                        addFilter("Time", `${formatTimeToComplete(timeRange[0])} - ${formatTimeToComplete(timeRange[1])}`);
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <Separator orientation="vertical" className="h-5" />
          
          <div className="flex items-center gap-2">
            <Switch 
              id="verified" 
              checked={isVerifiedOnly}
              onCheckedChange={(checked) => {
                setIsVerifiedOnly(checked);
                if (checked) {
                  addFilter("Verified", "Yes");
                } else {
                  setActiveFilters(activeFilters.filter(f => f.type !== "Verified"));
                }
              }}
              className="data-[state=checked]:bg-blue-600"
            />
            <Label htmlFor="verified" className="text-xs font-medium text-gray-600">
              Verified Quests Only
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFilters({ timeRange, setTimeRange, isVerifiedOnly, setIsVerifiedOnly }) {
  const formatTimeToComplete = (days) => {
    if (days === 0) return "Same day";
    if (days === 1) return "1 day";
    if (days <= 7) return `${days} days`;
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? "1 week" : `${weeks} weeks`;
  };

  return (
    <>
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Quest Type</h3>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="justify-start text-sm">Video</Button>
          <Button variant="outline" className="justify-start text-sm">Microtask</Button>
          <Button variant="outline" className="justify-start text-sm">Project</Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Difficulty</h3>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="justify-start text-sm">Easy</Button>
          <Button variant="outline" className="justify-start text-sm">Medium</Button>
          <Button variant="outline" className="justify-start text-sm">Hard</Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Reward Type</h3>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="justify-start text-sm">XP</Button>
          <Button variant="outline" className="justify-start text-sm">Token</Button>
          <Button variant="outline" className="justify-start text-sm">NFT</Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Guild Affiliation</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select guild" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developers">Developers</SelectItem>
            <SelectItem value="designers">Designers</SelectItem>
            <SelectItem value="content">Content Creators</SelectItem>
            <SelectItem value="community">Community</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Time to Complete</h3>
        <div className="px-1">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Same day</span>
            <span>90 days</span>
          </div>
          <Slider
            value={timeRange}
            onValueChange={setTimeRange}
            max={90}
            step={1}
            className="mb-4"
          />
          <div className="text-sm font-medium">
            {formatTimeToComplete(timeRange[0])} - {formatTimeToComplete(timeRange[1])}
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <Label htmlFor="verified-mobile" className="text-sm font-medium">
          Verified Quests Only
        </Label>
        <Switch 
          id="verified-mobile" 
          checked={isVerifiedOnly}
          onCheckedChange={setIsVerifiedOnly}
          className="data-[state=checked]:bg-blue-600"
        />
      </div>
    </>
  );
}

function DesktopFilters({ timeRange, setTimeRange, isVerifiedOnly, setIsVerifiedOnly }) {
  const formatTimeToComplete = (days) => {
    if (days === 0) return "Same day";
    if (days === 1) return "1 day";
    if (days <= 7) return `${days} days`;
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? "1 week" : `${weeks} weeks`;
  };

  return (
    <>
      <div className="space-y-2">
        <h4 className="text-sm">Quest Type</h4>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className="justify-start text-xs">Video</Button>
          <Button variant="outline" size="sm" className="justify-start text-xs">Microtask</Button>
          <Button variant="outline" size="sm" className="justify-start text-xs">Project</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm">Difficulty</h4>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className="justify-start text-xs">Easy</Button>
          <Button variant="outline" size="sm" className="justify-start text-xs">Medium</Button>
          <Button variant="outline" size="sm" className="justify-start text-xs">Hard</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm">Reward Type</h4>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className="justify-start text-xs">XP</Button>
          <Button variant="outline" size="sm" className="justify-start text-xs">Token</Button>
          <Button variant="outline" size="sm" className="justify-start text-xs">NFT</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm">Guild Affiliation</h4>
        <Select>
          <SelectTrigger className="text-xs h-8">
            <SelectValue placeholder="Select guild" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developers">Developers</SelectItem>
            <SelectItem value="designers">Designers</SelectItem>
            <SelectItem value="content">Content Creators</SelectItem>
            <SelectItem value="community">Community</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm">Time to Complete</h4>
        <div className="px-1">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Same day</span>
            <span>90 days</span>
          </div>
          <Slider
            value={timeRange}
            onValueChange={setTimeRange}
            max={90}
            step={1}
            className="mb-2"
          />
          <div className="text-xs">
            {formatTimeToComplete(timeRange[0])} - {formatTimeToComplete(timeRange[1])}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <Label htmlFor="verified-desktop" className="text-sm">
          Verified Quests Only
        </Label>
        <Switch 
          id="verified-desktop" 
          checked={isVerifiedOnly}
          onCheckedChange={setIsVerifiedOnly}
          className="data-[state=checked]:bg-blue-600"
        />
      </div>
    </>
  );
}