import { newSpecPage } from '@stencil/core/testing';
import { NlAmbulanceWlList } from '../nl-ambulance-wl-list';

describe('nl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NlAmbulanceWlList],
      html: `<nl-ambulance-wl-list></nl-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <nl-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nl-ambulance-wl-list>
    `);
  });
});
