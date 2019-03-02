
# Professional Association of Integrated Emergency Surgical Officers of Ethiopia
{:.no_toc}

Welcome to the website of the Professional Association of Integrated Emergency Surgical Officers of Ethiopia. This GitHub repository holds the Jekyll site that is served up by GitHub Pages.

## Contents:
{:.no_toc}

- Contents
{:toc}

## People:
This would not be possible without inspiration from the following:
- Melese Takele: President of PAESOE and a very motivated Integrated Emergency Surgery Officer based in Addis Ababa, Ethiopia
- Dr. Biku Ghosh FRCS, OBE: Retired(?) Consultant Surgeon, who is working as hard now as he did before retirement. He is the co-founder of the Southern Ethiopia Gwent Health Link, which I did some work with. 

## Development
This website uses several open-source software as well as code snippets and ideas borrowed from the very generous open-source community on the internet.
I am not a web designer or developer and I have undertaken this in my spare time. 
Nearly always, ease of use/development has taken priority over best-practice, often not out of choice but out of not knowing any better.

In no particular order, here are some of the resources that I have used in putting this together.

- Free hosting: http://github.com/
- Static site generator: https://jekyllrb.com/
- Minify HTML/CSS: https://github.com/penibelst/jekyll-compress-html
- Normalize: http://necolas.github.io/normalize.css/
- Milligram CSS:  https://milligram.io
- ChartJS: https://chartjs.org (will probably endup using Chartist instead)
- Rellax Parallax library: https://github.com/dixonandmoe/rellax
- CDN - Cloudflare: https://www.cloudflare.com

No longer in use:
- ~~ Theme: https://github.com/alexcarpenter/material-jekyll-theme~~
- ~~ CSS: https://minicss.org (Very good and learnt a lot.) ~~

## ToDo: 
- [ ] Achieve 100% on Google Lighthouse
    - [ ] Performance
        - [ ] Check if any further optimisations can be made especially with JS
        - [ ] Eliminate render-blocking resources (main.css)
        - [ ] Minimize Critical Requests Depth
    - [ ] PWA 
        - [ ] Respond with a 200 when offline
        - [ ] User will be prompted to Install the Web App. 
        - [ ] Include Manifest file
        - [ ] Register a service worker
        - [ ] Is configured for a custom splash screen.
        - [ ] Address bar should match brand colors.
        - [ ] Site works cross-browser
        - [ ] Page transitions don't feel like they block on the network
        - [ ] Each page has a URL
    - [ ] Accessibility
        - [ ] Image elements should have [alt] attributes
        - [ ] Background and foreground colors should have a sufficient contrast ratio.
        - [ ] `<dl>`'s contain only properly-ordered `<dt> and <dd> groups, <script> or <template>` elements.
        - [ ] List items (`<li>`) are contained within `<ul> or <ol>` parent elements.
        - [ ] Manual Checks
        - [ ] The page has a logical tab order
        - [ ] Interactive controls are keyboard focusable
        - [ ] Interactive elements indicate their purpose and state
        - [ ] The user's focus is directed to new content added to the page
        - [ ] User focus is not accidentally trapped in a region
        - [ ] Custom controls have associated labels
        - [ ] Custom controls have ARIA roles
        - [ ] Visual order on the page follows DOM order
        - [ ] Offscreen content is hidden from assistive technology
        - [ ] Headings don't skip levels
        - [ ] HTML5 landmark elements are used to improve navigation
    - [ ] Best Practices
        - [ ] Use HTTP/2 for all resources
    - [ ] SEO 
        - [ ] [Page is mobile friendly](https://search.google.com/test/mobile-friendly)
        - [ ] Structured data is [valid](https://search.google.com/structured-data/testing-tool/) and [linted](http://linter.structured-data.org/)

- [ ] Integrate Zotero to facilitate access to a curated library
- [ ] Automate publishing new posts to social media and IESO Telegram group

### Lighthouse metrics

| Date     | Build | Performance |  PWA  | Accessibility | Best Practices |  SEO  |
| :------- | :---- | :---------: | :---: | :-----------: | :------------: | :---: |
| 02/03/19 | local |     100     |  42   |      72       |       87       |  100  |
