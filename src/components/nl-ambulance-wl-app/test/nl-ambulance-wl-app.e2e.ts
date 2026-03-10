import { newE2EPage } from '@stencil/core/testing';

describe('nl-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nl-ambulance-wl-app></nl-ambulance-wl-app>');

    const element = await page.find('nl-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
