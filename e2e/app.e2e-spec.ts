import { KeeHelloWorldPage } from './app.po';

describe('kee-hello-world App', function() {
  let page: KeeHelloWorldPage;

  beforeEach(() => {
    page = new KeeHelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
