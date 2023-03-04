<template>
  <div>
    <q-page padding>
      <section class="row q-py-lg q-col-gutter-x-xl">
        <div class="col-auto">
          <q-avatar size="70px">
            <q-img src="~assets/quasar-logo-vertical.svg"></q-img>
          </q-avatar>
        </div>
        <div class="col-grow column justify-between">
          <div class="row items-center">
            <span class="text-h5">이름</span>
            <q-space />
            <div class="q-gutter-x-sm">
              <q-btn outline label="프로필 편집"></q-btn>
              <q-btn outline label="설정 버튼"></q-btn>
            </div>
          </div>
          <div class="q-gutter-x-sm">
            <span>게시물 238</span>
            <span>팔로워 2032</span>
            <span>팔로우 1432</span>
          </div>
          <div>
            <span>내용</span>
          </div>
        </div>
      </section>
      <section class="q-mt-xl">
        <div class=" row no-wrap scroll q-col-gutter-x-lg">
          <div class="col-auto" v-for="n in 15" :key="n">
            <article>
              <q-avatar size="70px">
                <q-img src="~assets/quasar-logo-vertical.svg"></q-img>
              </q-avatar>
              <div class="text-center q-mt-sm">제목</div>
            </article>
          </div>
        </div>
      </section>
      <section class="q-mt-xl">
        <div class="row q-col-gutter-md">
          <div class="col-4" v-for="n in 6" :key="n">
            <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-separator dark inset />

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
    </q-page>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>