import React, { useState, useRef } from "react";

const SplitViewer = () => {
  const [leftWidth, setLeftWidth] = useState(30); // Pourcentage
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const startDragging = () => {
    isDragging.current = true;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;

    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const newLeftWidth = (e.clientX / containerWidth) * 100;

    // Contrainte entre 10% et 90%
    if (newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      style={{ display: "flex", width: "100vw", height: "100vh" }}
    >
      <div style={{ width: `${leftWidth}%`, backgroundColor: "#f0f0f0" }}>
        <p style={{ padding: "1rem" }}>
          Partie gauche ({Math.round(leftWidth)}%)
        </p>
      </div>
      <div
        onMouseDown={startDragging}
        style={{
          width: "5px",
          cursor: "col-resize",
          backgroundColor: "#ccc",
          zIndex: 1,
        }}
      />
      <div style={{ flex: 1, backgroundColor: "#e0e0ff" }}>
        <p style={{ padding: "1rem" }}>
          Partie droite ({Math.round(100 - leftWidth)}%)
        </p>
      </div>
    </div>
  );
};

export default SplitViewer;
