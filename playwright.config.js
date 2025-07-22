import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  // Directory where your tests are located
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 5,
  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['blob', { outputDir: 'blob-report' }], // Use blob reporter
    ['json', { outputFile: './playwright-report/report.json' }],
<<<<<<< HEAD
    // ['@alphabin/trx', {

    //    // Required configuration
    //    serverUrl: 'https://staging-api.testdino.com',
    //    apiKey: 'trx_staging_8e8d07d94ddde82c43fac1c83401555efbdff83c0e290138a95905df2a8e739e',
   

    //   // Optional: Custom tags
    //   tags: [
    //     'automated',
    //     process.env.TEST_ENV || 'staging',
    //     process.env.BRANCH_NAME || 'main'
    //   ],
    // }]
  ],
  timeout: 60000,
  use: {
    launchOptions: {
      slowMo: 1000,
      args: ['--start-maximized']
    },
    headless: true,
    baseURL: 'http://demo.alphabin.co',
    bypassCSP: true,
    trace: 'on',           
    screenshot: 'on',     
    video: 'on',         
  },
=======
      // ['@alphabin/trx', {
>>>>>>> e53ee7a (added some test cases)

      //  // Required configuration
      //  serverUrl: 'https://staging-api.testdino.com',
      //  apiKey: 'trx_staging_96dde6aa397caba148106304889ae88a2a5339b4e0da54e64a8f2324e87ec73c',
   

      // // Optional: Custom tags
      // tags: [
      //   'automated',
      //   process.env.TEST_ENV || 'staging',
      //   process.env.BRANCH_NAME || 'main'
      // ],
    // }]
  ],
  timeout: 60000,

  use: {
    headless: false, 
    baseURL: 'http://demo.alphabin.co',
    viewport: { width: 412, height: 915 },
    launchOptions: {
      args: ['--window-size=412,915'],
    },
    screenshot: 'on',
    trace: 'on',
    video: 'on',
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
 
  projects: [
    {
      name: 'chromium',
      use: {
<<<<<<< HEAD
        ...devices['Desktop Chromium'],
        viewport: null,
        permissions: ['clipboard-read', 'clipboard-write']
      },
=======
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 }
      }
>>>>>>> e53ee7a (added some test cases)
    },
  ],
    }
);
