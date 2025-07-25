# 🎇 @balasaravanan/particle-canvas

A lightweight JavaScript utility to render interactive particle effects on an HTML canvas. Perfect for animated backgrounds in websites and web apps.

---

## 🚀 Features

- 💫 Interactive particle animation that reacts to mouse movement
- 📏 Automatically resizes with the window
- 🎚️ Control the number of particles with a simple parameter
- 🧠 Zero dependencies
- 🛠️ Works in any browser that supports `<canvas>`
- 🔧 Easy to integrate with React, Vanilla JS, or any frontend framework

---

## 📦 Installation

```bash
npm install @balasaravanan/particle-canvas

```

### How to use

### ▶️ Vanilla JavaScript

```html
<canvas id="canvas"></canvas>

<script type="module">
  import ParticlesCanvas from "@balasaravanan/particle-canvas";

  const canvas = document.getElementById("canvas");
  const particleCanvas = new ParticlesCanvas(canvas, 150); // 150 particles
  particleCanvas.start();
</script>
```

### ⚛️ React (with Hooks)

```jsx
import { useEffect, useRef } from "react";
import ParticlesCanvas from "@balasaravanan/particle-canvas";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const particleCanvas = new ParticlesCanvas(canvasRef.current, 200); // 200 particles
      particleCanvas.start();
    }
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "2rem",
        }}
      >
        {/* Place your Components here */}
        <h1>Welcome to My App</h1>
        <p>This content appears above the animated background.</p>
      </div>
    </>
  );
}

export default App;
```
