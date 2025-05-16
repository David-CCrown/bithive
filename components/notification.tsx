import NotificationIcon from "./icons/notification-icon";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Notification = () => {
  return (
    <>
          <Popover>
              <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="cursor-pointer relative">
                      <NotificationIcon />
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-65" side="bottom" align="end">
                  <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-semibold">Notifications</h4>
                      <p>No new notifications</p>
                  </div>
                  <div className="flex justify-end">
                      <Button variant="link" size="sm" className="text-gray-500">
                          Clear All
                      </Button>
                  </div>
              </PopoverContent>
        </Popover>
      </>
  );
}
export default Notification;