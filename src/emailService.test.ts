import { EmailService, MockProvider1, MockProvider2 } from './emailService';

test('EmailService should retry with exponential backoff and switch provider on failure', async () => {
  const provider1 = new MockProvider1();
  const provider2 = new MockProvider2();
  const service = new EmailService([provider1, provider2]);

  await service.sendEmail('test@example.com', 'Test Subject', 'Test Body');
  // Add assertions to check retry and fallback logic
});

test('EmailService should ensure idempotency', async () => {
  const provider1 = new MockProvider1();
  const service = new EmailService([provider1]);

  await service.sendEmail('test@example.com', 'Test Subject', 'Test Body');
  await service.sendEmail('test@example.com', 'Test Subject', 'Test Body');
  // Add assertions to check idempotency
});
