export interface Logger {
  info(...args: any[]): void
  error(...args: any[]): void
  trace(...args: any[]): void
  warn(...args: any[]): void
  fatal(...args: any[]): void
  debug(...args: any[]): void
}

export class NullLogger implements Logger {
  info(...args: any[]) {
    return void 0;
  }
  error(...args: any[]) { 
    return void 0;
  }
  trace(...args: any[]) { 
    return void 0;
  }
  warn(...args: any[]) {
    return void 0;
   }
  fatal(...args: any[]) { 
    return void 0;
  }
  debug(...args: any[]) { 
    return void 0;
  }
};

export default new NullLogger();