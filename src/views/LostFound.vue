<template>
  <div>
    <section class="py-14 lg:py-28">
      <div class="mx-auto grid max-w-7xl grid-cols-1 px-4 lg:grid-cols-2">
        <div class="xxl:pr-36 pb-14 text-xs sm:text-sm lg:pb-0 lg:pr-20">
          <h3 class="mb-2 text-2xl font-bold sm:text-4xl">
            If you have lost your pet, we invite you to fill out the report to
            the right
          </h3>
          <p class="mb-6">
            Please look at the list of
            <a class="text-red hover:text-red-dark font-bold" href="#0"
              >recently found pets</a
            >
            and you can also do a walk-through of our shelter to determine if
            your pet has been brought to us. If you do NOT see your Lost Report
            uploaded to our Lost & Found Facebook page after 24 hours or did not
            receive a confirmation email, please contact the shelter directly.
          </p>
          <p class="mb-12">
            All Lost/Found Reports will also be posted to our Lost/Found
            <a class="text-red hover:text-red-dark font-bold" href="#0"
              >Facebook Page</a
            >, an online community we have set up to help reunite pets and
            owners.
          </p>
          <h4 class="mb-6 text-lg font-bold tracking-wider">
            Other suggestions include:
          </h4>
          <ol
            class="list-decimal space-y-2 pl-5 marker:text-lg marker:font-bold"
          >
            <li class="pl-2">
              Contact friends and neighbors and hang up flyers in the community.
            </li>
            <li class="pl-2">
              Post your pet to online sites like Facebook, Instagram, Twitter,
              Next Door and CraigsList.
            </li>
            <li class="pl-2">
              In the event that you’ve lost a cat, put out something that smells
              familiar to your cat, such as a blanket or a bit of dirty litter.
              Many indoor cats will remain very close to the home and a familiar
              smell can lure them back into the home, safe and sound.
            </li>
            <li class="pl-2">Call local veterinary hospitals.</li>
            <li class="pl-2">
              Also, we strongly urge all pet owners to permanently identify
              their pet with a microchip. This can be done for at our
              <a class="text-red hover:text-red-dark font-bold" href="#0"
                >clinics</a
              >. While collars can fall off and tags can go missing, a microchip
              is permanent and ensures that your contact information remains
              with your pet at all times!
            </li>
          </ol>
        </div>

        <div class="rounded-lg bg-white p-8 shadow sm:p-12 xl:p-20">
          <form class="divide-gray-dark -my-9 divide-y-2">
            <div class="py-9">
              <h3 class="-mt-2 mb-4 text-xl font-bold sm:text-4xl">
                Lost & found pet form
              </h3>
              <Select inputLabel="Select location" :options="location" />
            </div>

            <div class="py-9">
              <h4 class="mb-3 text-lg font-bold tracking-wider">
                About the pet
              </h4>
              <RadioGroup
                class="mb-6"
                label="Lost or found? *"
                :options="[
                  { value: 1, label: 'Lost' },
                  { value: 2, label: 'Found' }
                ]"
              />
              <RadioGroup
                class="mb-6"
                label="Type of pet *"
                :options="[
                  { value: 1, label: 'Cat' },
                  { value: 2, label: 'Dog' },
                  { value: 3, label: 'Other' }
                ]"
              />
              <Input
                class="mb-2"
                type="file"
                label="Upload a picture if possible"
              />
              <Input class="mb-2" label="Breed *" />
              <Input class="mb-2" label="Animals Age (if known)" />
              <Input class="mb-2" label="Weight (approximate)" />
              <Input class="mb-2" label="Collar type and color" />
              <Datepicker
                class="mb-2"
                placeholder="MM/DD/YYYY"
                label="Date lost or found *"
              />
              <Input
                class="mb-2"
                type="textarea"
                textAreaSize="md"
                label="Give a description of the animal (name, color, distinguishing marks, etc.), and location of where the animal was lost. Include City, and Zip *"
              />
              <Input
                class="mb-8"
                label="Please identify the road or township where the animal was found or lost. *"
              />

              <h4 class="mb-3 text-lg font-bold tracking-wider">Your info</h4>
              <div class="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
                <Input label="First Name *" />
                <Input label="Last Name *" />
              </div>
              <Input class="mb-2" label="Email *" />
              <Input class="mb-2" label="Phone *" />
              <div class="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
                <Input label="City *" />
                <Input label="Zip code *" />
              </div>
              <Checkbox
                class="mb-10 items-center"
                label="I’m not a robot (that I know of)"
              />
              <div class="text-center sm:text-left">
                <Button text="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Select from "@/components/Select.vue";
import Checkbox from "@/components/Checkbox.vue";
import RadioGroup from "@/components/RadioGroup.vue";
import Input from "@/components/Input.vue";
import Datepicker from "@/components/Datepicker.vue";
import Button from "@/components/Button.vue";

const location = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true
  },
  {
    value: 1,
    label: "option 01"
  },
  {
    value: 2,
    label: "option 02"
  },
  {
    value: 3,
    label: "option 03"
  },
  {
    value: 4,
    label: "option 04"
  }
];
</script>
