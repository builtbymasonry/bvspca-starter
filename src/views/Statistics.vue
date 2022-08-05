<template>
  <HeroInner v-bind="heroInnerData" />

  <section class="py-14 lg:py-28 bg-gray-dark">
    <div class="mx-auto max-w-7xl px-4">
      <PostModule v-bind="postModuleData" />
    </div>
  </section>

  <section class="py-14 lg:py-28">
    <div class="mx-auto max-w-7xl px-4">
      <h2
        class="mb-8 text-center text-2xl font-bold sm:text-3xl md:mb-10 lg:text-4xl"
      >
        Monthly Statistics
      </h2>

      <div class="space-y-10 md:space-y-16">
        <TableStatistics
          v-for="year in monthlyStatistics"
          :key="year.title"
          :data="year"
        />
      </div>

      <h2
        class="mb-8 mt-14 text-center text-2xl font-bold sm:text-3xl md:mb-12 lg:text-4xl"
      >
        Quarterly Statistics
      </h2>
      <div class="space-y-10 md:space-y-16">
        <TableStatistics
          v-for="year in quarterlyStatistics"
          :key="year.title"
          :data="year"
        />
      </div>

      <h2
        class="mb-8 mt-14 text-center text-2xl font-bold sm:text-3xl md:mb-12 lg:text-4xl"
      >
        Annual Statistics
      </h2>
      <div class="space-y-10 md:space-y-16">
        <TableStatistics
          class="md:bg-gray-dark md:rounded-lg"
          :data="annualStatistics"
        />
      </div>
    </div>
  </section>

  <section class="relative pt-20 sm:pt-32">
    <div class="absolute top-0 left-0 h-full w-full">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="src/assets/img/bg-image-01-sm.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcset="src/assets/img/bg-image-01.jpg"
        />
        <img
          class="absolute top-0 left-0 h-full w-full object-cover"
          src="src/assets/img/bg-image-01.jpg"
          alt="background"
        />
      </picture>
    </div>

    <InfoCard v-bind="infoCardData" />

    <div
      class="bg-skew bg-skew-reverse bg-purple mt-28 pt-8 pb-20 text-white md:py-24 lg:py-28"
    ></div>
  </section>
</template>

<script setup>
import HeroInner from "@/components/HeroInner.vue";
import PostModule from "@/components/PostModule.vue";
import TableStatistics from "@/components/TableStatistics.vue";
import InfoCard from "@/components/InfoCard.vue";

const heroInnerData = {
  title: "Statistics",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl.",
  img: { src: "src/assets/img/hero-image-17.jpg", alt: "" }
};

const postModuleData = {
  carousel: {
    slides: [
      { src: "src/assets/img/slide08.jpg", alt: "slide alt1" },
      { src: "src/assets/img/slide07.jpg", alt: "slide alt2" },
      { src: "src/assets/img/slide06.jpg", alt: "slide alt3" },
      { src: "src/assets/img/slide04.jpg", alt: "slide alt4" }
    ]
  },
  title: { text: "Lorem ipsum dolor sit amet", size: "md"},
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. Pellentesque finibus lorem dignissim bibendum pretium. Maecenas efficitur varius feugiat. Vestibulum eu mi ac diam mollis euismod. Etiam pharetra dui sit amet tempus scelerisque. Vivamus et dolor tellus. Donec vulputate, justo vitae lobortis tempus, metu.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi. "
  ],
  reverse: true
};

const monthlyStatistics = [
  {
    title: "2022",
    rows: [
      {
        title: "PA 2022:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: null },
          { label: "July", value: null },
          { label: "Aug", value: null },
          { label: "Sept", value: null },
          { label: "Oct", value: null },
          { label: "Nov", value: null },
          { label: "Dec", value: null }
        ]
      },
      {
        title: "DE 2022:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: null },
          { label: "July", value: null },
          { label: "Aug", value: null },
          { label: "Sept", value: null },
          { label: "Oct", value: null },
          { label: "Nov", value: null },
          { label: "Dec", value: null }
        ]
      },
      {
        title: "LA Hub 2022:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: null },
          { label: "July", value: null },
          { label: "Aug", value: null },
          { label: "Sept", value: null },
          { label: "Oct", value: null },
          { label: "Nov", value: null },
          { label: "Dec", value: null }
        ]
      },
      {
        title: "All States Combined 2022:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: null },
          { label: "July", value: null },
          { label: "Aug", value: null },
          { label: "Sept", value: null },
          { label: "Oct", value: null },
          { label: "Nov", value: null },
          { label: "Dec", value: null }
        ]
      }
    ]
  },
  {
    title: "2021",
    rows: [
      {
        title: "PA 2021:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "DE 2021:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "LA Hub 2021:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "All States Combined 2021:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      }
    ]
  },
  {
    title: "2020",
    rows: [
      {
        title: "PA 2020:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "DE 2020:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "PA & DE Combined 2020:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      }
    ]
  },
  {
    title: "2019",
    rows: [
      {
        title: "PA 2019:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "DE 2019:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "PA & DE Combined 2019:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      }
    ]
  },
  {
    title: "2018",
    rows: [
      {
        title: "PA 2018:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "DE 2018:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "PA & DE Combined 2018:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      }
    ]
  },
  {
    title: "2017",
    rows: [
      {
        title: "PA 2017:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "DE 2017:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      },
      {
        title: "PA & DE Combined 2017:",
        content: [
          { label: "Jan", value: "#1" },
          { label: "Feb", value: "#2" },
          { label: "March", value: "#3" },
          { label: "April", value: "#4" },
          { label: "May", value: "#5" },
          { label: "June", value: "#6" },
          { label: "July", value: "#7" },
          { label: "Aug", value: "#8" },
          { label: "Sept", value: "#9" },
          { label: "Oct", value: "#10" },
          { label: "Nov", value: "#11" },
          { label: "Dec", value: "#12" }
        ]
      }
    ]
  }
];

const quarterlyStatistics = [
  {
    title: "2022",
    rows: [
      {
        title: "PA 2022:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: null },
          { label: "July-Sept", value: null },
          { label: "Oct-Dec", value: null }
        ]
      },
      {
        title: "DE 2022",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: null },
          { label: "July-Sept", value: null },
          { label: "Oct-Dec", value: null }
        ]
      },
      {
        title: "LA Hub 2022",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: null },
          { label: "July-Sept", value: null },
          { label: "Oct-Dec", value: null }
        ]
      },
      {
        title: "All States Combined 2022",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: null },
          { label: "July-Sept", value: null },
          { label: "Oct-Dec", value: null }
        ]
      }
    ]
  },
  {
    title: "2021",
    rows: [
      {
        title: "PA 2021:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "DE 2021",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "LA Hub 2021",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "All States Combined 2021",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      }
    ]
  },
  {
    title: "2020",
    rows: [
      {
        title: "PA 2020:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "DE 2020",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "PA & DE Combined 2020:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      }
    ]
  },
  {
    title: "2019",
    rows: [
      {
        title: "PA 2019:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "DE 2019",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "PA & DE Combined 2019:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      }
    ]
  },
  {
    title: "2018",
    rows: [
      {
        title: "PA 2018:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "DE 2018",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "PA & DE Combined 2018:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      }
    ]
  },
  {
    title: "2017",
    rows: [
      {
        title: "PA 2017:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "DE 2017",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      },
      {
        title: "PA & DE Combined 2017:",
        content: [
          { label: "Jan-March", value: "#1" },
          { label: "April-June", value: "#2" },
          { label: "July-Sept", value: "#3" },
          { label: "Oct-Dec", value: "#4" }
        ]
      }
    ]
  }
];

const annualStatistics = {
  rows: [
    {
      content: [
        { label: "2021", value: "#1" },
        { label: "2020", value: "#2" },
        { label: "2019", value: "#3" },
        { label: "2018", value: "#4" },
        { label: "2017", value: "#4" }
      ]
    }
  ]
};

const infoCardData = {
  title: "We place over 16,000 animals a year",
  text: "We were the first open-admission no-kill shelter in Pennsylvania, and we have led Delaware to becoming the first no-kill state in the United States.",
  img: { src: "src/assets/img/content-img-01.jpg", alt: "" },
  buttons: [{ text: "Learn more about our impact", url: "#!" }]
};
</script>
