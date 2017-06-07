import { LorenzomartePage } from './app.po';

describe('lorenzomarte App', () => {
  let page: LorenzomartePage;

  beforeEach(() => {
    page = new LorenzomartePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
