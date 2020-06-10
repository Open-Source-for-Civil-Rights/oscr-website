export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
}

const config: WebsiteConfig = {
  title: 'OSCR Website',
  description: 'The Open Source for Civil Rights organization. Harnessing the power of technology to enact social change.',
  coverImage: 'assets/cover-card.png',
  logo: 'assets/horizontal-logo.png',
  lang: 'en',
  siteUrl: 'https://opensourceforcivilrights.com',
  facebook: 'https://www.facebook.com/oscr',
  twitter: 'https://twitter.com/oscr',
  googleSiteVerification: 'GoogleCode',
};

export default config;
