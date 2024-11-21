import type { MenuItem } from "./Header.types";
import { FaXmark } from "react-icons/fa6";

interface MenuModalProps {
  menu: MenuItem[];
  setIsOpen: Function;
}

export default function MenuModal({ menu, setIsOpen }: MenuModalProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center bg-white">
      <FaXmark className="absolute right-8 top-8 text-3xl duration-200 hover:text-accent-500" />
      <ul className="flex flex-col gap-4">
        {menu.map((menuItem: MenuItem, key) => {
          return (
            <li key={key}>
              <a
                className="text-3xl font-medium duration-200 hover:text-accent-500"
                href={menuItem.href}
              >
                {menuItem.display}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
