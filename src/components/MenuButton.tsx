import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import MenuModal from "./MenuModal";

import type { MenuItem } from "./Header.types";

interface MenuButtonProps {
  menu: MenuItem[];
}

export default function MenuButton({ menu }: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const breakPoint = 767;

  function handleResize() {
    if (isOpen && window.innerWidth > breakPoint) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <button className="" onClick={() => setIsOpen((prev) => !prev)}>
      {isOpen ? (
        <MenuModal menu={menu} setIsOpen={setIsOpen} />
      ) : (
        <FaBars className="text-2xl" />
      )}
    </button>
  );
}
