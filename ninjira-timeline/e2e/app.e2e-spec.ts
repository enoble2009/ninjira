import { NinjiraTimelinePage } from './app.po';

describe('ninjira-timeline App', () => {
  let page: NinjiraTimelinePage;

  beforeEach(() => {
    page = new NinjiraTimelinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
