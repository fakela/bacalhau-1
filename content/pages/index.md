---
draft: true
blocks:
  - tailwind:
      section: ''
      wrap: >-
        max-w-desktop-full mx-auto relative flex flex-row-reverse items-end
        items-start-vertical
      imageWrap: 'pb-16 pr-20 sm:hidden'
      image: object-right object-scale-down
      contentWrap: 'w-3/4 pt-52 pb-16 pl-20 sm:px-8 sm:w-full'
      content: ''
      label: bg-accent4 text-accent4 w-6 h-6 mb-8
      headline: 'text-primary font-1 text-4xl mb-1 font-bold sm:text-2xl'
      subhead: 'text-primary font-1 text-2xl mb-10 font-bold sm:text-2xl'
      text: text-black font-2 text-base mb-8 max-w-lg
      buttons: 'text-accent2 font-bold text-base '
      button: ''
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1655154094/bacalhau/shapes-1_u20ojn.svg
    label: x
    headline: Bacalhau Project
    subhead: Data. Transformed.
    body: |
      Simple, low cost, compute that unlocks an open, collaborative ecosystem.
    buttons:
      - label: Learn More
        link: /architecture
    _template: tailwindFeature
  - tailwind:
      section: pt-16 pb-16
      wrap: 'max-w-desktop-full mx-auto relative '
      imageWrap: 'pl-20 sm:hidden'
      image: ''
      contentWrap: 'w-8/12 ml-auto pr-20 sm:px-8 sm:w-full'
      content: ''
      label: ''
      headline: >-
        absolute left-20 font-1 font-bold text-primary text-xl sm:relative
        sm:left-0 sm:mb-20
      subhead: 'font-1 font-bold text-primary text-base mb-8 sm:text-xl sm:font-normal'
      text: font-2 text-base
      buttons: ''
    background:
      fillStyles: bg-accent3
    label: ''
    headline: Why Bacalhau?
    subhead: 'Bacalhau seeks to address deep rooted gaps in managing big data that are:'
    body: >
      *   Closed by design, difficult to share and collaborate with other
      organizations.

      *   Expensive and slow to process large (multi-PB) datasets.

      *   Requires rewriting to move “to the cloud”.
    _template: tailwindFeature
  - style:
      alignment: 'flex-row text-left items-end items-start-vertical sm:flex-col-reverse'
      featureContent: 'w-2/3 min-h-0 '
      padding: 'pt-0 pb-14 pr-20 pl-0 sm:pt-4 sm:pb-14 sm:pr-9 sm:pl-9'
      featureImage: 'object-left object-scale-down '
      imagePadding: 'pt-0 pb-20 pr-0 pl-20 sm:pt-0 sm:pb-0 sm:pr-0 sm:pl-0'
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-primary font-1 text-xl mb-0 font-bold
      subheadStyles: >-
        text-primary font-1 text-base mb-8 font-bold sm:text-primary sm:font-1
        sm:text-lg sm:mb-8 
      textStyles: 'text-black font-2 text-base mb-0 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-accent3
      src: ''
      ornaments:
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1655154093/bacalhau/shapes-2_v1e0y7.svg
          alignment: bottom-left
          xOffset: '80'
          yOffset: '-80'
    image:
      src: ''
    label: ''
    headline: ''
    subhead: >-
      Bacalhau gives developers low cost, decentralized tools that unlock a new
      collaborative ecosystem
    body: >
      *   Collaborative - all content can be shared using the globally
      distributed IPFS network

      *   Simple and Familiar - use the tools you already know via Docker and
      WASM runtimes

      *   Efficient - the network runs the jobs where the data is already stored
    _template: feature
  - tailwind:
      section: pt-16 pb-16
      wrap: 'max-w-desktop-full mx-auto relative '
      imageWrap: ' pl-20'
      image: ''
      contentWrap: 'w-8/12 ml-auto pr-20 sm:px-8 sm:w-full'
      content: ''
      label: ''
      headline: >-
        absolute left-20 font-1 font-bold text-primary text-xl sm:relative
        sm:left-0 sm:mb-20
      subhead: 'font-1 font-bold text-primary text-base mb-8 sm:text-xl sm:font-normal'
      text: font-2 text-base
      buttons: ''
    background:
      fillStyles: bg-white
    label: ''
    headline: How does it work?
    subhead: >-
      Bacalahau is a network of open compute resources made available to serve
      any data processing workload.
    body: >
      Bacalhau enables users to run arbitrary docker containers and wasm images
      against data stored in IPFS. Bacalhau is a peer-to-peer network of nodes
      where each node participates in executing (computing) jobs submitted to
      the cluster.


      This architecture is referred to as **Compute Over Data** (or COD). The
      Portuguese word for salted Cod fish is **Bacalhau** \[*bakaˈlyaw*].
    _template: tailwindFeature
  - tailwind:
      section: pb-26
      wrap: flex max-w-desktop-full mx-auto relative items-end
      imageWrap: 'pl-20 pb-16 sm:hidden'
      image: ''
      contentWrap: 'w-8/12 ml-auto pr-20 sm:w-full sm:px-8 pb-16'
      content: ''
      label: ''
      headline: ''
      subhead: 'font-1 font-bold text-primary text-base mb-8 sm:text-xl sm:font-normal'
      text: bg-accent1 p-6 text-white text-xs font-3 mb-8
      buttons: text-accent2 font-bold text-base space-x-10
      button: ''
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1655154093/bacalhau/shapes-3_ivg8gb.svg
    label: ''
    headline: ''
    subhead: Submitting Jobs is Easy
    body: |
      $ bacalhau docker run ubuntu echo hello

      $ bacalhau list

      $ bacalhau get CID
    buttons:
      - label: Demo Video
        link: 'https://youtu.be/4YHkmL4Ld74'
      - label: Learn More
        link: /architecture
    _template: tailwindFeature
  - style:
      alignment: 'flex-row-reverse text-left items-start items-start-vertical '
      featureContent: 'w-full min-h-100 '
      padding: 'pt-20 pb-20 pr-52 pl-20 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
      featureImage: 'object-center object-scale-down '
      imagePadding: pt-0 pb-0 pr-0 pl-0
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-primary font-1 text-xl mb-5 '
      subheadStyles: 'text-primary font-1 text-lg mb-0 '
      textStyles: 'text-black font-2 text-base mb-5 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-gray-light
      ornaments:
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1655154094/bacalhau/shapes-4_t6tkoz.svg
          alignment: bottom-right
          xOffset: '-80'
          yOffset: '-80'
    image:
      src: ''
    label: ''
    headline: Dive In!
    subhead: ''
    body: ''
    buttons:
      - label: Slack
        link: 'https://filecoinproject.slack.com/archives/C02RLM3JHUY'
        type: primary
      - label: Source Code
        link: 'https://github.com/filecoin-project/bacalhau'
        type: primary
      - label: Community
        link: /community
        type: primary
      - label: Architecture
        link: /architecture
        type: primary
    _template: feature
meta:
  pageTitle: Bacalhau
  pageDescription: Reinventing Science through reproducible data pipelines
  siteImageSrc: >-
    https://res.cloudinary.com/protocolai/image/upload/v1657726476/bacalhau/bacalhua-social_hbrzct.png
---

