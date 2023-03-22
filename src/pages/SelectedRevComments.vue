<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            v-model="newCommentContent"
            class="new-qweet"
            placeholder="What's happening?"
            maxlength="280"
            bottom-slots
            counter
            autogrow
          >
            <template v-slot:before> </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewComment"
            :disable="!newCommentContent"
            class="q-mb-lg"
            color="primary"
            label="Comment"
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
            v-for="comment in comments"
            :key="comment.id"
            class="comment q-py-md"
          >
            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Danny Connell</strong>
                <span class="text-grey-7">
                  @danny__connell
                  <br class="lt-md" />&bull; {{ comment.date }}
                </span>
              </q-item-label>
              <q-item-label class="review-content text-body1">{{
                comment.content
              }}</q-item-label>
              <q-item-label class="review-content text-body2">{{
                comment.reviewID
              }}</q-item-label>

              <div class="review-icons row justify-between q-mt-sm">
                <q-btn
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  @click="deleteReview(review)"
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
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
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import PageAbout from "./Profile.vue";
import SearchPage from "./SearchPage.vue";
import LocationReviews from "./SelectedLocReviews.vue";

export default {
  name: "ReviewComments",
  props: {
    revID: String,
  },
  data() {
    return {
      newCommentContent: "",
      authorName: "",
      reviewID: "",
      commentIDs: [],
      comments: [
        {
          content: "first first comment",
          author: "dani",
          locationID: "Not Midtown",
          date: "today 1",
          passingVal: "testing passing",
        },
        {
          content: "commenting 1",
          author: "dani",
          locationID: "Midtown",
          date: "today 2",
        },
        {
          content: "commenting 2",
          author: "not dani",
          locationID: "Midtown",
          date: "today 3",
        },
      ],
    };
  },
  methods: {
    addNewComment() {
      // const docRef = addDoc(collection(db, "comments"), {
      //   content: this.newCommentContent,
      //   author: this.authorName,
      //   locationID: this.location,
      //   date: Date.now(),
      // });
      //console.log("Document written with ID: ", docRef.id);
      let newComment = {
        content: this.newCommentContent,
        date: Date.now(),
      };
      this.comments.push(newComment);
    },
    deleteReview(comment) {
      db.collection("comments")
        .doc(comment.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
  },
  // mounted() {
  //   const q = query(
  //     collection(db, "comments"),
  //     where("reviewID", "==", this.revID)
  //   );
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       let reviewChange = change.doc.data();
  //       reviewChange.id = change.doc.id;
  //       if (change.type === "added") {
  //         console.log("New comment: ", change.doc.data());
  //         this.comments.unshift(reviewChange);
  //       }
  //       if (change.type === "modified") {
  //         console.log("Modified qweet: ", reviewChange);
  //         let index = this.comments.findIndex(
  //           (review) => review.id === reviewChange.id
  //         );
  //         Object.assign(this.comments[index], reviewChange);
  //       }
  //       if (change.type === "removed") {
  //         console.log("Removed qweet: ", reviewChange);
  //         let index = this.comments.findIndex(
  //           (review) => review.id === reviewChange.id
  //         );
  //         this.comments.splice(index, 1);
  //       }
  //     });
  //   });
  // },
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
