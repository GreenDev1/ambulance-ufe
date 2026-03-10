import { newE2EPage } from '@stencil/core/testing';

describe('nl-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nl-ambulance-wl-editor></nl-ambulance-wl-editor>');

    const element = await page.find('nl-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
