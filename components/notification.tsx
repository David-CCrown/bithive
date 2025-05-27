'use client';

import { ExpandIcon } from "lucide-react";
import NotificationIcon from "./icons/notification-icon";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Sheet, SheetContent } from "./ui/sheet";
import { useState } from "react";

const Notification = () => {
    const [openExpanded, setOpenExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
        setOpenExpanded(false);
    };
    const handleOpenExpanded = () => {
        setOpenExpanded(!openExpanded);
        setOpen(false);
    };
  return (
    <>
          <Popover open={open} onOpenChange={handleOpen}>
              <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="cursor-pointer relative">
                      <NotificationIcon />
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-65" side="bottom" align="end">
                  <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">Notifications</h4>
                            <Button variant="link" size="icon" className="text-gray-500" about="Expand" onClick={handleOpenExpanded}>
                                <span className="sr-only">Expand</span>
                                <ExpandIcon />
                            </Button>
                      </div>
                      <p>No new notifications</p>
                  </div>
                  <div className="flex justify-end">
                      <Button variant="link" size="sm" className="text-gray-500">
                          Clear All
                      </Button>
                  </div>
              </PopoverContent>
          </Popover>
          {/* expanded view */}
          <Sheet open={openExpanded} onOpenChange={handleOpenExpanded}>
              <SheetContent  className=" h-[96%] rounded-2xl self-center   mx-3">
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold">Notifications</h4>
                                {/* <Button variant="link" size="icon" className="text-gray-500" about="Close" onClick={handleOpenExpanded}>
                                    <span className="sr-only">Close</span>
                                    <ExpandIcon />
                                </Button> */}
                        </div>
                        <p>No new notifications</p>
                    </div>
                    <div className="flex justify-end">
                        <Button variant="link" size="sm" className="text-gray-500">
                            Clear All
                        </Button>
                    </div>
              </SheetContent>
          </Sheet>
      </>
  );
}
export default Notification;