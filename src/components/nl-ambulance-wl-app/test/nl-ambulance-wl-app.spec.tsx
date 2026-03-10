import { newSpecPage } from '@stencil/core/testing';
import { NlAmbulanceWlApp } from '../nl-ambulance-wl-app';

describe('nl-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [NlAmbulanceWlApp],
      html: `<nl-ambulance-wl-app base-path="/"></nl-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("nl-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [NlAmbulanceWlApp],
      html: `<nl-ambulance-wl-app base-path="/ambulance-wl/"></nl-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("nl-ambulance-wl-list");
  });
});