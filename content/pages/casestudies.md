---
draft: true
blocks:
  - tailwind:
      section: ''
      wrap: ''
      imageWrap: ''
      image: w-1/2
      contentWrap: p-20 pt-60 max-w-desktop-full mx-auto
      content: ''
      label: w-6 h-6 bg-accent1 text-accent1 mb-8
      headline: text-primary font-bold text-4xl font-1 mb-8
      subhead: ''
      text: mb-6 text-base max-w-lg font-2
      buttons: text-accent2 font-bold text-base
      button: ''
      cardWrap: ''
      card: >-
        p-20 odd:bg-gray-light text-base flex flex-row-reverse
        max-w-desktop-full mx-auto
      cardImageWrap: w-1/2
      cardContentWrap: flex-1 pr-12
      cardContent: max-w-lg
      cardHeadline: text-primary text-xl font-bold font-1 mb-8
      cardSubhead: text-primary text-base font-2
      cardText: text-black text-base font-2
      cardButtons: mt-8
      cardButton: block font-bold text-accent2 mb-2
    label: x
    headline: Case Studies
    subhead: ''
    body: |
      Example scientific workloads running on Bacalhau.
    buttons:
      - label: Start Onboarding Your Workload Here >
        link: 'https://docs.bacalhau.org/getting-started/workload-onboarding/'
        type: primary
    items:
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1659095159/bacalhau/bacalhau-eurec4a_kraedg.png
        headline: EUREC4A Cloud Masking
        subhead: ''
        text: >
          [EUREC4A](https://eurec4a.eu/), the Field Study, is an international
          initiative in support of the World Climate Research Programme's Grand
          Science Challenge on Clouds, Circulation and Climate Sensitivity.
          EUREC4A will take place between 20 January and 20 February 2020 with
          operations based out of Barbados.


          EUREC4A aims at advancing understanding of the interplay between
          clouds, convection and circulation and their role in climate change:
          How resilient or sensitive is the shallow cumulus cloud amount to
          variations in the strength of convective mixing, surface turbulence
          and large-scale circulations?
        buttons:
          - label: Source (Github)
            link: 'https://github.com/wesfloyd/how_to_eurec4a'
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1659095485/bacalhau/bacalhau-socat_isdgud.png
        headline: Surface Ocean CO₂ Atlas (SOCAT)
        subhead: ''
        text: "The Surface Ocean CO₂ Atlas (SOCAT) contains measurements of the\_[fugacity](https://en.wikipedia.org/wiki/Fugacity)\_of CO2 in seawater around the globe. But in order to calculate how much carbon the ocean is taking up from the atmosphere, these measurements need to be converted to partial pressure of CO2.&#x20;\n\nWe convert the units by combining measurements of the surface temperature and fugacity. Python libraries (xarray, pandas, numpy) and the pyseaflux package facilitate this process.\n"
        buttons:
          - label: Demo (Youtube)
            link: 'https://www.youtube.com/watch?v=t2AHD8yJhLY'
          - label: Source (Github)
            link: 'https://github.com/wesfloyd/bacalhau_socat_test'
      - image:
          src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1659095481/bacalhau/bacalhau-openmm_bljzhl.png
        headline: OpenMM
        subhead: ''
        text: >
          OpenMM is a toolkit for molecular simulation. It can be used either as
          a stand-alone application for running simulations, or as a library you
          call from your own code. It provides a combination of extreme
          flexibility (through custom forces and integrators), openness, and
          high performance (especially on recent GPUs) that make it truly unique
          among simulation codes.
        buttons:
          - label: Source (Github)
            link: 'https://github.com/wesfloyd/openmm-test'
    _template: tailwindCards
meta:
  pageTitle: Bacalhau
  pageDescription: Reinventing Science through reproducible data pipelines
  siteImageSrc: ''
---

