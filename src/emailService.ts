export interface EmailProvider {
    sendEmail(to: string, subject: string, body: string): Promise<void>;
  }
  
  export class MockProvider1 implements EmailProvider {
    async sendEmail(to: string, subject: string, body: string): Promise<void> {
      // Simulate sending email
      console.log(`MockProvider1 sent email to ${to}`);
    }
  }
  
  export class MockProvider2 implements EmailProvider {
    async sendEmail(to: string, subject: string, body: string): Promise<void> {
      // Simulate sending email
      console.log(`MockProvider2 sent email to ${to}`);
    }
  }
  
  export class EmailService {
    private providers: EmailProvider[];
    private currentProviderIndex: number = 0;
  
    constructor(providers: EmailProvider[]) {
      this.providers = providers;
    }
  
    async sendEmail(to: string, subject: string, body: string): Promise<void> {
      let attempts = 0;
      const maxRetries = 3;
      const backoff = (attempts: number) => Math.pow(2, attempts) * 100; // Exponential backoff
  
      while (attempts < maxRetries) {
        try {
          await this.providers[this.currentProviderIndex].sendEmail(to, subject, body);
          return;
        } catch (error) {
          console.error(`Attempt ${attempts + 1} failed`);
          attempts++;
          this.currentProviderIndex = (this.currentProviderIndex + 1) % this.providers.length;
          await new Promise(res => setTimeout(res, backoff(attempts)));
        }
      }
  
      throw new Error('All email providers failed');
    }
  }
  