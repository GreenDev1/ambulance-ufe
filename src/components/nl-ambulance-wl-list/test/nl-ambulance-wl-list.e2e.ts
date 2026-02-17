import { newE2EPage } from '@stencil/core/testing';

describe('nl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nl-ambulance-wl-list></nl-ambulance-wl-list>');

    const element = await page.find('nl-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
