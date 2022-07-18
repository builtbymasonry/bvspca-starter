<template>
  <div>
    <section class="py-14 lg:py-28 bg-gray-dark">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto max-w-2xl mb-10 sm:mb-14 text-sm text-center">
          <h2 class="mb-2 font-bold text-4xl lg:text-6xl">Clinic staff</h2>
          <p>Our veterinary team is proud to provide high-quality medical services to communities across Southeastern Pennsylvania and Delaware at an affordable cost. Our vets are experienced and highly qualified for the important work they do every single day.</p>
        </div>

        <div class="space-y-10 lg:space-y-14">
          <PostCardInline
            v-for="post in postItems"
            :key="post.title"
            :imgSrc="post.imgSrc"
            :imgAlt="post.imgAlt"
            :title="post.title"
            :subtitle="post.subtitle"
            :text="post.text"
          />
        </div>

      </div>
    </section>

    <TextBanner
      v-bind="textBannerData"
    />
  </div>
</template>

<script setup>
import TextBanner from "@/components/TextBanner.vue";
import PostCardInline from "@/components/PostCardInline.vue";

import postCardInline01 from "@/assets/img/post-card-inline-img-01.jpg";
import postCardInline02 from "@/assets/img/post-card-inline-img-02.jpg";
import postCardInline03 from "@/assets/img/post-card-inline-img-03.jpg";
import postCardInline04 from "@/assets/img/post-card-inline-img-04.jpg";
import postCardInline05 from "@/assets/img/post-card-inline-img-05.jpg";
import postCardInline06 from "@/assets/img/post-card-inline-img-06.jpg";


const postItems = [
  {
    imgSrc: postCardInline01,
    imgAlt: "Dr. Sheri Wood",
    title: "Dr. Sheri Wood",
    subtitle: "BVSPCA Medical Director - Surgery in New Castle & Georgetown",
    text: "Dr. Sheri Wood received a B.A. in Biology from the University of Delaware and a D.V.M. from Ohio State.  After graduation, Dr. Wood worked in private practice for several years before moving full-time to shelter medicine in 2009. Throughout her 24 years of experience in the veterinary field, Dr. Wood started the first high volume spay/neuter clinic in the state of Delaware and  has taught as an adjunct faculty professor at Delaware Technical Community College for past five years. Dr. Wood owns 2 cats, 2 dogs, a rabbit, and 4 ducks and she likes to spend her free time going camping and hiking.",
  },
  {
    imgSrc: postCardInline02,
    imgAlt: "Dr. Sarah Landon",
    title: "Dr. Sarah Landon",
    subtitle: "Surgery & outpatient in Georgetown",
    text: "Dr. Sarah Landon received her B.A. in English Literature and Chemistry from the University of North Carolina in Charlotte and her D.V.M. from North Carolina State University. She worked in small animal private practice for several years before completing a post doctoral research fellowship at Duke University. She then returned to private practice for seven years before joining BVSPCA in 2018.  With 15 years professional experience, she has also been an adjunct professor at Delaware Technical Community College in their Veterinary Technology program for the past 5 years. Dr. Landon has 2 dogs and 2 cats and in her free time enjoys painting and drawing, playing the violin, and spending time with family and friends.",
  },
  {
    imgSrc: postCardInline03,
    imgAlt: "Dr. Julianne Grady",
    title: "Dr. Julianne Grady",
    subtitle: "Surgery in Malvern",
    text: "Dr. Julianne Grady received her B.A. from Chestnut Hill College and her V.M.D. from the University of Pennsylvania. She has worked in several animal hospitals, including Radnor Veterinary Hospital, Berwyn Veterinary Center, and Saint George Hunts. With 24 years’ experience as a veterinarian, she has also assisted Forgotten Cats with Trap/Neuter/Return of feral cats. Dr. Grady has a tripod boxer mix, a tripod orange tabby and a Puggle. Outside of work, she enjoys CrossFit, volunteer work and spending time with her family. She is an enthusiast of skiing, zip lining, and white water rafting.",
  },
  {
    imgSrc: postCardInline04,
    imgAlt: "Dr. Sherritta Ridgely",
    title: "Dr. Sherritta Ridgely",
    subtitle: "Outpatient in New Castle & Dover",
    text: "Dr. Sherritta Ridgely earned her BS in Biology from Cornell University, College of Agriculture.  She attended Tuskegee University College of Veterinary Medicine where she developed a strong interest in veterinary pathology and laboratory animal medicine.  After earning her DVM, she worked in private practice at Rahway Animal Hospital in Rahway, NJ, before entering a veterinary pathology residence at Washington State University, College of Veterinary Medicine, where she also earned her PhD in Veterinary Science.  Returning home to New Jersey, she worked at Banfield Pet Hospital.  She then worked at Rutgers University as a Clinical Laboratory Animal Veterinarian and served as a consultant for Ramapo College. Most recently she worked as a veterinarian at Join Base McGuire-Dix-Lakehurst in New Jersey for over seven years before joining the BVSPCA family.  Dr. Ridgely enjoys spending time with family, visits to amusement parks, beaches, camping, hiking and gardening.  She also enjoys taking pictures and creating photo projects.",
  },
  {
    imgSrc: postCardInline05,
    imgAlt: "Dr. Gina Graziano",
    title: "Dr. Gina Graziano",
    subtitle: "Outpatient in Malvern",
    text: "Dr. Gina Graziano received her B.S. with an emphasis on pre-veterinary medicine from University of New Hampshire prior to graduating with her D.V.M. from Virginia Maryland College of Veterinary Medicine. She worked in private practice for a few years prior to working at multiple Banfield Pet Hospitals, where she continued to learn and grow into a multi-unit manager. During that time, she also received her Silver Certification in Low Stress Handling. Dr. Graziano lives with her wife, son and their dogs, cats and birds.  In her free time, she likes to read and play video games. She also loves spending time with family and friends and working on her new exotics hobby.",
  },
  {
    imgSrc: postCardInline06,
    imgAlt: "Dr. Casey Wanros",
    title: "Dr. Casey Wanros",
    subtitle: "Outpatient in Malvern",
    text: "Dr. Casey Wanros attended University of Delaware and Drexel University prior to moving for veterinary school at Michigan State University. During her time in college, she worked for many years as a licensed veterinary technician and then decided to pursue veterinary school. During her clinical year in veterinary school, she completed a six-week externship at the BVSPCA spaying and neutering shelter pets. After graduation, she worked in small animal general practice. Dr. Wanros is originally from Delaware and decided to come back after school to be close to her family. She currently has two cats, Stormy and Butters, and hopes to adopt a dog soon.",
  }
];

const textBannerData = {
  title: "Have questions or need help?",
  text: "Give us a call or stop by one of our healthcare locations for more help.",
  buttons: [
    {
      variant: "primary",
      text: "Contact us",
    },
    {
      variant: "outline",
      text: "Wellness clinic locations",
    },
  ],
};
</script>
