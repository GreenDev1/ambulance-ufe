import { newSpecPage } from '@stencil/core/testing';
import { NlAmbulanceWlList } from '../nl-ambulance-wl-list';

describe('nl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NlAmbulanceWlList],
      html: `<nl-ambulance-wl-list></nl-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as NlAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
