//import { render, screen } from '@testing-library/react';
//import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  let title = page.locator('.counter-for-language-changed');
  await expect(title).toHaveText('Changed language already 0 times');


  // click on button to change language
  await page.click('text=Kiswahili')
  await expect(title).toHaveText('Lugha ilibadilishwa mara moja tu');
});

