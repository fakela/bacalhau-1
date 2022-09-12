---
draft: true
blocks:
  - tailwind:
      section: 'pt-16 pb-16 sm:pt-40'
      wrap: >-
        max-w-desktop-full mx-auto relative flex flex-row-reverse items-start
        items-vertical-end sm:flex-col-reverse
      imageWrap: 'w-1/2 pt-60 pb-16 px-20 sm:p-10 sm:w-full'
      image: ml-auto
      contentWrap: 'w-1/2 pt-40 pb-16 pl-20 sm:p-10 sm:w-full'
      content: ''
      label: w-6 h-6 bg-accent1 text-accent1 mb-8
      headline: 'text-primary font-1 text-4xl mb-1 font-bold sm:text-2xl sm:mb-12'
      subhead: ''
      text: 'text-black font-2 text-base mb-4 sm:mb-8'
      buttons: text-accent2 text-base font-bold
      button: ''
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1655389409/bacalhau/Bacalhau_Architecture_and_Roadmap_for_the_Website_pjtcsp.jpg
    label: x
    headline: High Level Architecture
    subhead: ''
    body: "The purpose of Bacalhau is to provide a platform for public, transparent, and optionally verifiable computation. Bacalhau enables users to run arbitrary docker containers and wasm images as tasks against data stored in IPFS. This architecture is also referred to as Compute Over Data (or CoD). The Portuguese word for salted Cod fish is \"Bacalhau\" which is the origin of the project's name.\n\nBacalhau operates as a peer-to-peer network of nodes where each node has both a requestor and compute component.\_&#x20;\n\nTo interact with the cluster - Bacalhau CLI requests are sent to a node in the cluster (via JSON over HTTP), which then broadcasts messages over the transport layer to other nodes in the cluster.\_ All other nodes in the network are connected to the transport layer and as such have a shared view of the world.\n"
    buttons:
      - label: Learn More
        link: 'https://docs.bacalhau.org '
    _template: tailwindFeature
  - tailwind:
      section: pt-16 pb-16
      wrap: 'max-w-desktop-full mx-auto relative '
      imageWrap: ' pl-20'
      image: ''
      contentWrap: 'w-8/12 ml-auto  pr-20 sm:w-full sm:p-10'
      content: ''
      label: ''
      headline: >-
        absolute left-20 font-1 font-bold text-white text-2xl sm:relative
        sm:left-0
      subhead: font-1 text-white text-xl mb-8
      text: font-3 text-xs text-white bg-accent1 p-8
      buttons: ''
    background:
      fillStyles: bg-primary
    label: ''
    headline: Sample Code
    subhead: Submitting Jobs is Easy
    body: |
      $ bacalhau run ubuntu echo hello

      $ bacalhau list --wide --sort-by=id --id-filter=\<JOB\_ID>&#x20;

      $ ipfs get \<RESULT\_CID>
    _template: tailwindFeature
meta:
  pageTitle: Bacalhau - Architecture
  pageDescription: Reinventing Science through reproducible data pipelines
  siteImageSrc: >-
    https://res.cloudinary.com/protocolai/image/upload/v1657726476/bacalhau/bacalhua-social_hbrzct.png
---

