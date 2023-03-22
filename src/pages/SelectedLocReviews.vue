<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            v-model="newReviewContent"
            class="new-qweet"
            placeholder="What's happening?"
            maxlength="280"
            bottom-slots
            counter
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img
                  src="https://s.gravatar.com/avatar/ce7f3697e231df38b3ca6065848520da?s=80"
                />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewReview"
            :disable="!newReviewContent"
            class="q-mb-lg"
            color="primary"
            label="Review"
            rounded
            unelevated
            no-caps
          />
        </div>
      </div>

      <q-separator class="divider" color="grey-2" size="10px" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="review in reviews"
            :key="review.id"
            class="review q-py-md"
          >
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Danny Connell</strong>
                <span class="text-grey-7">
                  @danny__connell
                  <br class="lt-md" />&bull; {{ review.date }}
                </span>
              </q-item-label>
              <q-item-label class="review-content text-body1">{{
                review.content
              }}</q-item-label>
              <q-item-label class="review-content text-body2">{{
                review.locationID
              }}</q-item-label>
              <q-item-label class="review-content text-body3">{{
                review.upvotes
              }}</q-item-label>
              <div class="col col-shrink">
                <q-btn
                  @click="upvoteReview(review)"
                  class="q-mb-lg"
                  color="primary"
                  label="Upvote"
                  rounded
                  unelevated
                  no-caps
                />
              </div>
              <div class="col col-shrink">
                <q-btn
                  @click="downvoteReview(review)"
                  class="q-mb-lg"
                  color="primary"
                  label="Downvote"
                  rounded
                  unelevated
                  no-caps
                />
              </div>
              <div class="col col-shrink">
                <q-btn
                  @click="deleteReview(review)"
                  class="q-mb-lg"
                  color="primary"
                  label="Delete"
                  rounded
                  unelevated
                  no-caps
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
//display the individual bar
//display the list of reviews that responds to the bar's unique
//location ID, in order of newest to oldest
import db from "src/boot/firebase";
import {
  collection,
  doc,
  query,
  where,
  onSnapshot,
  FieldValue,
  updateDoc,
  increment,
  deleteDoc,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import PageAbout from "./Profile.vue";
import SearchPage from "./SearchPage.vue";
import ReviewComments from "./SelectedRevComments.vue";

export default {
  name: "LocationReviews",
  props: {
    locID: String,
  },
  data() {
    return {
      newReviewContent: "",
      authorName: "",
      locationID: "",
      upvotes: 0,
      commentIDs: [],
      reviews: [
        // {
        //   content: "hard code 1",
        //   author: "dani",
        //   locationID: "Midtown",
        //   date: "today 1",
        //   upvotes: 5,
        // },
        // {
        //   content: "hard code 2",
        //   author: "dani",
        //   locationID: "Midtown",
        //   date: "today 2",
        //   upvotes: 4,
        // },
        // {
        //   content: "hard code 3",
        //   author: "dani",
        //   locationID: "Not Midtown",
        //   date: "today 2",
        //   upvotes: 2,
        // },
      ],
    };
  },
  methods: {
    addNewReview() {
      const docRef = addDoc(collection(db, "reviews"), {
        content: this.newReviewContent,
        author: "queenalberta",
        locationID: "Grog32603",
        upvotes: 0,
        date: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
      // let newReview = {
      //   content: this.newReviewContent,
      //   date: Date.now(),
      // };
      // this.reviews.push(newReview);
    },
    upvoteReview(review) {
      const docRef = doc(db, "reviews", review.id);
      updateDoc(docRef, {
        upvotes: increment(1),
      });
      // review.upvotes = tempVote;
      // console.log("Total Upvotes: ", tempVote);
    },
    downvoteReview(review) {
      const docRef = doc(db, "reviews", review.id);
      updateDoc(docRef, {
        upvotes: increment(-1),
      });
      // review.upvotes = tempVote;
      // console.log("Total Downvotes: ", tempVote);
    },
    deleteReview(review) {
      deleteDoc(doc(db, "reviews", review.id));
      console.log("Document successfully deleted!");
    },
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
  mounted() {
    const q = query(
      collection(db, "reviews"),
      where("locationID", "==", this.locID)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let reviewChange = change.doc.data();
        reviewChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New review: ", change.doc.data());
          this.reviews.unshift(reviewChange);
        }
        if (change.type === "modified") {
          console.log("Modified qweet: ", reviewChange);
          let index = this.reviews.findIndex(
            (review) => review.id === reviewChange.id
          );
          Object.assign(this.reviews[index], reviewChange);
        }
        if (change.type === "removed") {
          console.log("Removed qweet: ", reviewChange);
          let index = this.reviews.findIndex(
            (review) => review.id === reviewChange.id
          );
          this.reviews.splice(index, 1);
        }
      });
    });
  },
};
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
