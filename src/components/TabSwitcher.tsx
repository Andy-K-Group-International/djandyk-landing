"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function TabSwitcher({
  tabs,
  activeTab,
  onTabChange,
}: TabSwitcherProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = container.querySelector<HTMLButtonElement>(
      `[data-tab-id="${activeTab}"]`
    );
    if (!activeButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    setIndicator({
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width,
    });
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex rounded-lg border border-grid-300 p-1 bg-bg-light"
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-1 bottom-1 rounded-md bg-white shadow-sm transition-all duration-300 ease-out"
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
      />

      {/* Tab buttons */}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-tab-id={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative z-10 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer ${
            activeTab === tab.id
              ? "text-foreground"
              : "text-muted-2 hover:text-muted"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
