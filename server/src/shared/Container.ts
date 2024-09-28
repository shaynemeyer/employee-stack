class Container {
  private dependencies: Map<string, any> = new Map();

  public register(key: string, dependency: any): void {
    this.dependencies.set(key, dependency);
  }

  public resolve(key: string) {
    const dependency = this.dependencies.get(key);
    if (!dependency) {
      throw new Error(`Dependency with key: ${key}, not found.`);
    }
    return dependency;
  }
}

const container = new Container();

export function resolveInjected<T>(key: string): T {
  return container.resolve(key);
}

export function injectDependency(key: string, dependency: any): void {
  container.register(key, dependency);
}
