<template>
  <div>
    <section class="py-8">
      <div class="mx-auto max-w-6xl px-4">
        <h2 class="mb-3 text-center text-xl font-bold">PostInline Video</h2>
        <PostInline v-bind="postInlineVideo" />
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
  </div>
</template>
<script setup>
import MapRentals from "@/components/MapRentals.vue";
import TableServices from "@/components/TableServices.vue";
import TablePackages from "@/components/TablePackages.vue";
import Accordion from "@/components/Accordion.vue";
import TableStatistics from "@/components/TableStatistics.vue";
import PostInline from "@/components/PostInline.vue";

const postInlineVideo = {
  title: "Our mission & vision",
  text: "Founded in 1929, the Brandywine Valley SPCA exists to end animal suffering and to involve the entire community in the welfare and well-being of animals. Our mission is to put the “human” back in humane animal treatment and advocate on their behalf. Our vision is to be the recognized leader in animal welfare that empowers communities to treat life with respect and dignity.",
  img: { src: "src/assets/img/content-img-99.jpg", alt: "man holding kittens" },
  video: { src: "https://www.youtube.com/embed/BHACKCNDMW8" }
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
</script>
