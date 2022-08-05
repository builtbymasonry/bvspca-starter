<template>
  <div>
    <PostsFeed v-bind="feedData" />
    <!-- <LocationsSection :locations="locationsData" />
    <section>
      <h2 class="mb-3 text-center text-xl font-bold">LocationProfile</h2>
      <LocationProfile :location="locationProfile" />
    </section>
    <section class="bg-gray-dark py-8">
      <h2 class="mb-3 text-center text-xl font-bold">MarqueeSponsors</h2>
      <MarqueeSponsors :slides="sponsorSlides" class="hidden md:block" />
    </section>
    <section class="py-8">
      <div class="mx-auto max-w-screen-2xl">
        <h2 class="mb-3 text-center text-xl font-bold">MapLocations</h2>
        <MapLocations :locations="locations" />
      </div>
    </section>
    <section
      class="mx-auto grid max-w-[1440px] grid-cols-1 text-center md:grid-cols-2 md:text-left"
    >
      <div
        class="order-2 ml-auto mt-7 w-full px-4 py-14 md:order-1 md:mt-0 md:max-w-xl xl:px-0"
      >
        <h2 class="mb-10 text-2xl font-bold md:text-3xl xl:text-5xl">
          Chewie fka Monkey
        </h2>
        <p>
          Chewie is a big sweetheart who loves taking over your side of the bed.
          He also loves attention and affection from his people and gets along
          well with kids. Chewie has got basic commands like sit, stay, down,
          out, and enough down pat. He's done well in dog playgroups at the
          shelter and would enjoy dogs he meets, but he does best as the only
          dog in the family. Come meet this big hunk of love and make him your
          newest family member. Chewie is a big sweetheart who loves taking over
          your side of the bed. He also loves attention and affection from his
          people and gets along well with kids. Chewie has got basic commands
          like sit, stay, down, out, and enough down pat. He's done well in dog
          playgroups at the shelter and would enjoy dogs he meets, but he does
          best as the only dog in the family. Come meet this big hunk of love
          and make him your newest family member.
        </p>
      </div>
      <div class="order-1 flex-col justify-between md:order-2 md:flex">
        <SliderThumbs :slides="profileSlides" />
      </div>
    </section>
    <section class="bg-gray-dark py-8">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold">FilterBar</h2>
        <FilterBar />
      </div>
    </section>
    <section class="py-8">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold">TableStatistics</h2>
        <div class="mb-10">
          <TableStatistics :data="monthlyData" />
        </div>
        <TableStatistics :data="quarterlyData" />
      </div>
    </section>
    <section class="py-8">
      <div class="mx-auto max-w-3xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold">Accordion</h2>
        <Accordion :items="faq" />
      </div>
    </section>
    <section class="bg-purple py-8">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold text-white">
          TablePackages
        </h2>
        <TablePackages :data="dogPackages" />
      </div>
    </section>
    <section class="py-8">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold">TableServices</h2>
        <TableServices :data="tableData" />
      </div>
    </section>
    <section class="py-8">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold">MapRentals</h2>
        <MapRentals v-bind="map" />
      </div>
    </section>

    <div class="py-12 lg:py-28">
      <div class="mx-auto max-w-7xl px-4">
        <PostModule v-bind="postModuleData1" />
      </div>
    </div>

    <div class="bg-gray-dark py-12 lg:py-28">
      <div class="mx-auto max-w-7xl px-4">
        <PostModule v-bind="postModuleData2" />
      </div>
    </div>

    <section class="py-12 lg:py-28">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-10 text-center text-xl font-bold">PostModule Video</h2>
        <PostModule class="text-sm" v-bind="postModuleVideo" />
      </div>
    </section>

    <section class="py-12 lg:py-28">
      <div class="mx-auto max-w-5xl px-4">
        <PostModule class="text-sm" v-bind="postModuleData3" />
      </div>
    </section>

    <section class="bg-gray-dark py-14 lg:py-28">
      <div class="mx-auto max-w-4xl px-4">
        <PostModule class="text-xs" v-bind="postModuleData4" />
        <PostModule class="mt-24 text-xs" v-bind="postModuleData5" />
      </div>
    </section>

    <section class="bg-purple py-14 text-white lg:py-28">
      <div class="mx-auto max-w-4xl px-4">
        <PostModule v-bind="postModuleData6" />
      </div>
    </section>

    <section class="py-14 lg:py-28">
      <div class="mx-auto max-w-4xl px-4">
        <PostModule v-bind="postModuleData7" />
      </div>
    </section> -->
  </div>
</template>
<script setup>
import MapRentals from "@/components/MapRentals.vue";
import TableServices from "@/components/TableServices.vue";
import TablePackages from "@/components/TablePackages.vue";
import Accordion from "@/components/Accordion.vue";
import TableStatistics from "@/components/TableStatistics.vue";
import FilterBar from "@/components/FilterBar.vue";
import SliderThumbs from "@/components/SliderThumbs.vue";
import MapLocations from "@/components/MapLocations.vue";
import MarqueeSponsors from "@/components/MarqueeSponsors.vue";
import PostModule from "@/components/PostModule.vue";
import LocationProfile from "@/components/LocationProfile.vue";
import LocationsSection from "@/components/Locations.vue";
import PostsFeed from "@/components/sections/PostsFeed.vue";

const feedData = {
  title: "News, events & resources",
  posts: [
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: "$5 off our 5K Color Run",
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: "Walk-4-Paws",
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: "Critter Camp",
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: "$5 off our 5K Color Run",
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: "Walk-4-Paws",
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: "Critter Camp",
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: "$5 off our 5K Color Run",
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: "Walk-4-Paws",
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: "Critter Camp",
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-07.jpg", alt: "" },
      title: "$5 off our 5K Color Run",
      text: "We're so excited to be offering a number of new activities to this year's line-up of fun, including a Color Run for you and your furry running partner. Register today!",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/img-pet-08.jpg", alt: "" },
      title: "Walk-4-Paws",
      text: "We’re bringing back the most popular activities PLUS we’ve changed our 5K to a Color Run, expanded Yoga with Puppies, added live music, and added more fun things.",
      buttonLink: { text: "Read more", url: "#!" }
    },
    {
      url: "#!",
      img: { src: "src/assets/img/content-img-03.jpg", alt: "" },
      title: "Critter Camp",
      text: "Kids ages 7 to 12 will have a howling good time at our Critter Camp day camp. Our next session is a Spring-themed Weekend: April 9 – April 10 for kids ages 10 through 12. ",
      buttonLink: { text: "Read more", url: "#!" }
    }
  ]
};

const locationsData = [
  {
    name: "Dover",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    distance: 2.9,
    phone: [
      { title: "Phone", number: "(484) 302-0018" },
      { title: "AHC Phone", number: "(302) 516-1004" }
    ],
    hours: [
      {
        title: "Shelter hours",
        description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
      },
      {
        title: "Animal Health Center hours",
        description: "Monday: 9:00 am – 5:00 pm",
        link: { url: "#!", text: "See full hours" }
      }
    ],
    coordinates: {
      lat: 39.1414900571048,
      lng: -75.47439972883507
    }
  },
  {
    name: "New Castle",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    distance: 2.9,
    phone: [
      { title: "Phone", number: "(111) 111-1111" },
      { title: "AHC Phone", number: "(302) 516-1004" }
    ],
    hours: [
      {
        title: "Shelter hours",
        description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
      },
      {
        title: "Animal Health Center hours",
        description: "Monday: 9:00 am – 5:00 pm",
        link: { url: "#!", text: "See full hours" }
      }
    ],
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Eastern Shore Pet Resort",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    distance: 2.9,
    phone: [
      { title: "Phone", number: "(222) 222-2222" },
      { title: "AHC Phone", number: "(302) 516-1004" }
    ],
    hours: [
      {
        title: "Shelter hours",
        description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
      },
      {
        title: "Animal Health Center hours",
        description: "Monday: 9:00 am – 5:00 pm",
        link: { url: "#!", text: "See full hours" }
      }
    ],
    coordinates: {
      lat: 38.72256761723463,
      lng: -75.34210678465972
    }
  }
];

const locationProfile = {
  img: { src: "src/assets/img/location-photo-01.jpg", alt: "Dover" },
  name: "Dover",
  address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
  phone: [
    { title: "Phone", number: "(302) 601-7000" },
    { title: "AHC Phone", number: "(302) 516-1004" }
  ],
  hours: [
    {
      title: "Shelter hours",
      description: `Sun - Thurs 11am - 9pm \nFri & Sat 11am - 10pm`
    },
    {
      title: "Spay/Neuter Surgery hours",
      description: "Tuesdays and Fridays, by appointment"
    },
    {
      title: "Animal Health Center hours",
      description: `Monday: 9:00 am – 5:00 pm \n(sick visit walk-ins end at 1:00 \npm; waiting times may vary)`
    },
    {
      description: `Thursday& Friday: 10:00 am – 5:00 pm \n(sick visit walk-ins end at 1:00 pm; \nwaiting times may vary)`
    }
  ],
  coordinates: { lat: 39.14137979713557, lng: -75.47439046561871 }
};

const sponsorSlides = [
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo01.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo05.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo06.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo07.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo07.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo01.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo02.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo03.png", alt: "" },
    url: "#!"
  },
  {
    img: { src: "src/assets/img/sponsors/sponsor-logo04.png", alt: "" },
    url: "#!"
  }
];

const locations = [
  {
    name: "Dover",
    address: ["1757 Horsepond Rd.", "Dover, DE 19901"],
    phone: [
      { title: "Main", number: "(484) 302-0018" },
      { title: "AHC", number: "(302) 516-1004" }
    ],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.1414900571048,
      lng: -75.47439972883507
    }
  },
  {
    name: "New Castle",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Georgetown",
    address: ["22918 Dupont Boulevard", "Georgetown, DE 19947"],
    phone: [
      { title: "Main", number: "(302) 858-4203" },
      { title: "AHC", number: "(302) 516-1004" }
    ],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 38.66560267717307,
      lng: -75.38127138650519
    }
  },
  {
    name: "West Chester",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Malvern",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Plymouth Meeting",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "ARC",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  },
  {
    name: "Eastern Shore Pet Resort",
    address: ["600 South Street", "New Castle, DE 19720"],
    phone: [{ title: "Main", number: "(302) 516-1005" }],
    email: ["info@bvspca.org "],
    button: { url: "#!" },
    coordinates: {
      lat: 39.65997584020019,
      lng: -75.57023031534025
    }
  }
];

const profileSlides = [
  {
    img: { src: "src/assets/img/profile-slide01.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/profile-slide02.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/profile-slide01.jpg", alt: "" },
    video: {
      src: "src/assets/video/profile-slide-video.mp4",
      poster: "src/assets/img/profile-slide01.jpg"
    }
  },
  {
    img: { src: "src/assets/img/profile-slide01.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/profile-slide02.jpg", alt: "" }
  },
  {
    img: { src: "src/assets/img/profile-slide01.jpg", alt: "" },
    video: {
      src: "src/assets/video/profile-slide-video.mp4",
      poster: "src/assets/img/profile-slide01.jpg"
    }
  }
];

const postModuleVideo = {
  title: { text: "Our mission & vision", size: "md" },
  text: [
    "Founded in 1929, the Brandywine Valley SPCA exists to end animal suffering and to involve the entire community in the welfare and well-being of animals. Our mission is to put the “human” back in humane animal treatment and advocate on their behalf. Our vision is to be the recognized leader in animal welfare that empowers communities to treat life with respect and dignity."
  ],
  video: {
    src: "https://www.youtube.com/embed/BHACKCNDMW8",
    thumb: {
      src: "src/assets/img/content-img-99.jpg",
      alt: ""
    }
  }
};

const quarterlyData = {
  title: "2022",
  rows: [
    {
      title: "PA 2022:",
      content: [
        {
          label: "Jan-March",
          value: "#1"
        },
        {
          label: "April-June",
          value: null
        },
        {
          label: "July-Sept",
          value: null
        },
        {
          label: "Oct-Dec",
          value: null
        }
      ]
    },
    {
      title: "DE 2022",
      content: [
        {
          label: "Jan-March",
          value: "#1"
        },
        {
          label: "April-June",
          value: null
        },
        {
          label: "July-Sept",
          value: null
        },
        {
          label: "Oct-Dec",
          value: null
        }
      ]
    },
    {
      title: "LA Hub 2022",
      content: [
        {
          label: "Jan-March",
          value: "#1"
        },
        {
          label: "April-June",
          value: null
        },
        {
          label: "July-Sept",
          value: null
        },
        {
          label: "Oct-Dec",
          value: null
        }
      ]
    },
    {
      title: "All States Combined 2022",
      content: [
        {
          label: "Jan-March",
          value: "#1"
        },
        {
          label: "April-June",
          value: null
        },
        {
          label: "July-Sept",
          value: null
        },
        {
          label: "Oct-Dec",
          value: null
        }
      ]
    }
  ]
};

const monthlyData = {
  title: "2022",
  rows: [
    {
      title: "PA 2022:",
      content: [
        {
          label: "Jan",
          value: "#1"
        },
        {
          label: "Feb",
          value: "#2"
        },
        {
          label: "March",
          value: "#3"
        },
        {
          label: "April",
          value: "#4"
        },
        {
          label: "May",
          value: "#5"
        },
        {
          label: "June",
          value: null
        },
        {
          label: "July",
          value: null
        },
        {
          label: "Aug",
          value: null
        },
        {
          label: "Sept",
          value: null
        },
        {
          label: "Oct",
          value: null
        },
        {
          label: "Nov",
          value: null
        },
        {
          label: "Dec",
          value: null
        }
      ]
    },
    {
      title: "DE 2022:",
      content: [
        {
          label: "Jan",
          value: "#1"
        },
        {
          label: "Feb",
          value: "#2"
        },
        {
          label: "March",
          value: "#3"
        },
        {
          label: "April",
          value: "#4"
        },
        {
          label: "May",
          value: "#5"
        },
        {
          label: "June",
          value: null
        },
        {
          label: "July",
          value: null
        },
        {
          label: "Aug",
          value: null
        },
        {
          label: "Sept",
          value: null
        },
        {
          label: "Oct",
          value: null
        },
        {
          label: "Nov",
          value: null
        },
        {
          label: "Dec",
          value: null
        }
      ]
    },
    {
      title: "LA Hub 2022:",
      content: [
        {
          label: "Jan",
          value: "#1"
        },
        {
          label: "Feb",
          value: "#2"
        },
        {
          label: "March",
          value: "#3"
        },
        {
          label: "April",
          value: "#4"
        },
        {
          label: "May",
          value: "#5"
        },
        {
          label: "June",
          value: null
        },
        {
          label: "July",
          value: null
        },
        {
          label: "Aug",
          value: null
        },
        {
          label: "Sept",
          value: null
        },
        {
          label: "Oct",
          value: null
        },
        {
          label: "Nov",
          value: null
        },
        {
          label: "Dec",
          value: null
        }
      ]
    },
    {
      title: "All States Combined 2022:",
      content: [
        {
          label: "Jan",
          value: "#1"
        },
        {
          label: "Feb",
          value: "#2"
        },
        {
          label: "March",
          value: "#3"
        },
        {
          label: "April",
          value: "#4"
        },
        {
          label: "May",
          value: "#5"
        },
        {
          label: "June",
          value: null
        },
        {
          label: "July",
          value: null
        },
        {
          label: "Aug",
          value: null
        },
        {
          label: "Sept",
          value: null
        },
        {
          label: "Oct",
          value: null
        },
        {
          label: "Nov",
          value: null
        },
        {
          label: "Dec",
          value: null
        }
      ]
    }
  ]
};

const faq = [
  {
    button: "Lorem ipsum dolor sit amet consectetur?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in. Penatibus et magnis dis parturient. Dictum at tempor commodo ullamcorper a lacus."
  },
  {
    button: "Lorem ipsum dolor sit amet?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    button: "Lorem ipsum dolor sit amet consectetur?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in. Penatibus et magnis dis parturient. Dictum at tempor commodo ullamcorper a lacus."
  },
  {
    button: "Lorem ipsum dolor sit amet?",
    panel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const dogPackages = {
  desktop: [
    [
      { headTitle: "Services Included" },
      {
        headTitle: "Puppy Package",
        currentPrice: 70,
        normalPrice: 80,
        priceDifference: 10
      },
      {
        headTitle: "Canine Basic Package",
        currentPrice: 85,
        normalPrice: 100,
        priceDifference: 15
      },
      {
        headTitle: "Canine Adult Package",
        currentPrice: 140,
        normalPrice: 155,
        priceDifference: 15
      }
    ],
    [
      {
        title: "Physical Exam - $45"
      },
      {
        included: true
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "DA2PPv - $20"
      },
      {
        included: true
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Dewormer - $15"
      },
      {
        included: true
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "1 year Rabies Vaccine - $20",
        description: "(3 year vaccine can be given for additional $7)"
      },
      {
        included: false
      },
      {
        included: true
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Bordetella - $20"
      },
      {
        included: false
      },
      {
        included: false
      },
      {
        included: true
      }
    ],
    [
      {
        title: "Heartworm Test (4DX) – $35"
      },
      {
        included: false
      },
      {
        included: false
      },
      {
        included: true
      }
    ],
    [
      {},
      {},
      {
        description: [
          "* Additional $5 for pets 1 year and over that are not spayed or neutered.",
          "** $3 rabies surcharge required in the state of Delaware."
        ]
      },
      {
        description: [
          "* Additional $5 for pets 1 year and over that are not spayed or neutered.",
          "** $3 rabies surcharge required in the state of Delaware."
        ]
      }
    ]
  ],
  mobile: [
    {
      head: {
        title: "Puppy Package",
        currentPrice: 70,
        normalPrice: 80,
        priceDifference: 10
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" }
      ]
    },
    {
      head: {
        title: "Canine Basic Package",
        currentPrice: 85,
        normalPrice: 100,
        priceDifference: 15
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" },
        {
          title: "1 year Rabies Vaccine - $20",
          description: "(3 year vaccine can be given for additional $7)"
        }
      ]
    },
    {
      head: {
        title: "Canine Adult Package",
        currentPrice: 140,
        normalPrice: 155,
        priceDifference: 15
      },
      body: [
        { title: "Physical Exam - $45" },
        { title: "DA2PPv - $20" },
        { title: "Dewormer - $15" },
        {
          title: "1 year Rabies Vaccine - $20",
          description: "(3 year vaccine can be given for additional $7)"
        },
        { title: "Bordetella - $20" },
        { title: "Heartworm Test (4DX) – $35" }
      ]
    }
  ]
};

const tableData = {
  title: "Exams",
  content: [
    {
      title: "Regular Exam",
      description: [
        "For all preventative services including new patients and annual vaccines.",
        "* Additional $5 for pets 1 year and over that are not spayed or neutered. "
      ],
      price: "$45"
    },
    {
      title: "Tech Appointment",
      description:
        "For anal glands, lab-work and returning patient vaccine boosters (rabies excluded).",
      price: "$25"
    },
    {
      title: "Nail Trim",
      description:
        "For a visit just for a nail trim. (A nail trim during an annual/regular visit is $15.)",
      price: ["$20 Cats", "$30 Dogs"]
    },
    {
      title: "Recheck Appointment",
      description: "Appointments for recurring issues.",
      price: "$35"
    },
    {
      title: "Sick Exam/Walk-In ",
      description:
        "Additional $5 for pets 1 year and over that are not spayed or neutered. ",
      price: "$65"
    }
  ]
};

const map = {
  title: "Trap rentals",
  description: "Rental Period: 1-14 days (maximum)",
  locationsCenter: { lat: 39.3443091461365, lng: -75.63985351727538 },
  locations: [
    {
      name: "West Chester",
      address: ["1212 Phoenixville Pike", "West Chester, PA 19380"],
      tel: "(484) 302-0018",
      coordinates: {
        lat: 39.9998077725332,
        lng: -75.59375539999999
      }
    },
    {
      name: "New Castle",
      address: ["600 South Street", "New Castle, DE 19720"],
      tel: "(302) 516-1005",
      coordinates: {
        lat: 39.65964363297543,
        lng: -75.57012141561196
      }
    },
    {
      name: "Georgetown",
      address: ["22918 Dupont Boulevard", "Georgetown, DE 19947"],
      tel: "(302) 856-6361",
      coordinates: {
        lat: 38.6695080498251,
        lng: -75.38105993716913
      }
    }
  ]
};

const postModuleData1 = {
  img: { src: "src/assets/img/content-img-02.jpg", alt: "" },
  title: { text: "Need help?", size: "lg" },
  text: [
    "Supporting our community by providing the resources needed to improve the lives and well-being of animals is what we do"
  ],
  textGrid: [
    {
      title: "Lost & found pets",
      text: "Losing your furry friend or finding another’s beloved animal can be a very harrowing and emotional process. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Reporting animal cruelty",
      text: "Our Animal Protective Services Department works tirelessly to prevent abuse and protect companion animals. ",
      button: { text: "Learn more", url: "#!" }
    }
  ],
  buttons: [{ text: "See all ways to get help", url: "#!" }],
  layoutAlt: true,
  reverse: true
};

const postModuleData2 = {
  img: { src: "src/assets/img/content-img-02.jpg", alt: "", type: "cover" },
  title: { text: "Need help?", size: "lg" },
  text: [
    "Supporting our community by providing the resources needed to improve the lives and well-being of animals is what we do"
  ],
  textGrid: [
    {
      title: "Lost & found pets",
      text: "Losing your furry friend or finding another’s beloved animal can be a very harrowing and emotional process. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Reporting animal cruelty",
      text: "Our Animal Protective Services Department works tirelessly to prevent abuse and protect companion animals. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Pet food pantry",
      text: "Free food assistance for pet owners living below the poverty line. ",
      button: { text: "Learn more", url: "#!" }
    },
    {
      title: "Behavior resources",
      text: "We offer phone, e-mail and on-site support for our adopters, foster families and pet owners seeking behavior assistance.",
      button: { text: "Learn more", url: "#!" }
    }
  ],
  buttons: [
    { text: "See all ways to get help", url: "#!" },
    { variant: "outline", text: "See all ways to get help", url: "#!" }
  ],
  layoutAlt: true,
  stretchColumns: true
};

const postModuleData3 = {
  title: { text: "A second chance at nine lives", size: "md" },
  text: [
    "Whiskers got his leg caught in a fox trap after getting loose from his home. He lost a lot of skin, suffered nerve damage, ahd a quickly spreading infection. His family brought him.",
    "Thanks to our pet retention grant from Petco Love, we were able to bridge what his owners couldn’t afford and saved Whiskers by amputating the badly damaged leg. Whiskers now lives a life of three-legged luxury. We’re grateful for Petco Love’s support, which results from all of you who donate at checkout at the Petco stores."
  ],
  buttons: [{ text: "Get involved", url: "#!" }],
  carousel: {
    slides: [
      { src: "src/assets/img/slide01.jpg", alt: "kitty" },
      { src: "src/assets/img/slide02.jpg", alt: "" }
    ]
  },
  reverse: true
};

const postModuleData4 = {
  img: { src: "src/assets/img/content-img-19.jpg", alt: "" },
  title: {
    text: "Request friends and family to send items off our wish list instead of buying gifts"
  },
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in dapibus nisl. Donec at libero eget odio lacinia aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci nisi."
  ],
  share: true,
  buttons: [{ text: "View our wishlist", url: "#!" }],
  reverse: true
};

const postModuleData5 = {
  img: { src: "src/assets/img/content-img-20.jpg", alt: "" },
  title: {
    text: "Other ways to honor your special day with charitable causes"
  },
  list: ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit."],
  customList: {
    data: ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit."]
  },
  buttons: [{ text: "Get involved", url: "#!" }]
};

const postModuleData6 = {
  title: { text: "Give back to your community", size: "md" },
  text: [
    "Open the door to endless possibilities. Together, we will create positive change within our community, help control the homeless animal population, and improve the lives of pets and their families."
  ],
  img: { src: "src/assets/img/content-img-04.jpg", alt: "" },
  buttons: [
    { variant: "secondary", text: "Donate", url: "#!" },
    { variant: "outlineSecondary", text: "Sponsor", url: "#!" }
  ],
  reverse: true
};

const postModuleData7 = {
  title: { text: "Impacting lifesaving across the country", size: "md" },
  text: [
    "The past five years have seen substantial change in our area. We transformed the faltering then Chester County SPCA into the f irst open admission no-kill shelter in Pennsylvania. We then provided the leadership needed for the state of Delaware to become the f irst and only no-kill state in the country. Our next step is to share what we’ve learned and help other shelters achieve the same success."
  ],
  img: { src: "src/assets/img/content-img-23.png", alt: "", type: "default" },
  reverse: true
};
</script>
