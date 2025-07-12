declare module "@balasaravanan/particle-canvas" {
  export default class ParticlesCanvas {
    constructor(canvas: HTMLCanvasElement, numParticles?: number);
    start(): void;
  }
}
