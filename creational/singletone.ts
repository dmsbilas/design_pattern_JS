class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log("someMethod");
  }
}

const singleton = Singleton.getInstance();
singleton.someMethod();

const singleton2 = Singleton.getInstance();
singleton2.someMethod();






