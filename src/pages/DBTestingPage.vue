<template>
  <q-page class="q-pa-lg">
    <h4 class="q-mt-none q-mb-md text-weight-bold">About Qwitter</h4>
    <div class="text-body1">
      <p>Ohhh yeah testing</p>
    </div>
  </q-page>
</template>

<script>
//import db from "src/boot/firebase";

export default {
  name: "DBTestingPage",
  // mounted() {
  //   db.collection('reviews').orderBy('date').onSnapshot(snapshot => {
  //     snapshot.docChanges().forEach(change => {
  //       let reviewChange = change.doc.data()
  //       reviewChange.id = change.doc.id
  //       if (change.type === 'added') {
  //         console.log('New qweet: ', reviewChange)
  //         this.qweets.unshift(reviewChange)
  //       }
  //       if (change.type === 'modified') {
  //         console.log('Modified qweet: ', reviewChange)
  //         let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
  //         Object.assign(this.qweets[index], qweetChange)
  //       }
  //       if (change.type === 'removed') {
  //         console.log('Removed qweet: ', qweetChange)
  //         let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
  //         this.qweets.splice(index, 1)
  //       }
  //     })
  //   })
  // }
};
</script>
