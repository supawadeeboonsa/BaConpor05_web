export function BackgroundGrid() {
  return <div className="canvas-grid" id="canvasGrid" aria-hidden="true">
    <div className="mark" style={{ top: "12%", left: "6%" }} />
    <div className="mark" style={{ top: "28%", right: "9%" }} />
    <div className="mark" style={{ top: "62%", left: "14%" }} />
    <div className="mark" style={{ top: "78%", right: "18%" }} />
    <div className="mark" style={{ top: "46%", left: "48%" }} />
  </div>;
}
