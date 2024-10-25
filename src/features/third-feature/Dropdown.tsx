import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

type DropdownProps<T> = {
  options: T[];
  labelKey: keyof T;
  valueChange?: (selectedOption: T) => void;
};

export default function Dropdown<T extends { id: number | string }>({
  options,
  labelKey,
  valueChange,
}: DropdownProps<T>) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option: T) => {
    setSearchTerm(getLabel(option));
    setIsOpen(false);
    valueChange?.(option);
  };

  const getLabel = (option: T) => {
    return String(option[labelKey]);
  };

  const filteredOptions = options.filter((option) =>
    getLabel(option).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlighMatching = (label: string) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = label.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    );
  };

  return (
    <div ref={dropdownRef} className="dropdown">
      <input
        className="dropdown-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="dropdown-list">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              className="dropdown-list-item"
              onClick={() => handleOptionSelect(option)}
            >
              {highlighMatching(getLabel(option))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
