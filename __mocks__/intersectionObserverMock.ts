function mockIntersectionObserver() {
    class MockIntersectionObserver {
      private callback: any;
  
      constructor(callback: any) {
        this.callback = callback;
      }
  
      observe() {
        this.callback([{ isIntersecting: true }], this);
      }
  
      unobserve() { /* No-op */ }
  
      disconnect() { /* No-op */ }
    }
  
    (window as any).IntersectionObserver = MockIntersectionObserver;
}

module.exports = mockIntersectionObserver;
