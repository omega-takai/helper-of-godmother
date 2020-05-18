// import { mapGetters } from 'vuex'

export default {
  name: 'BindAlphabetButtons',
  data() {
    return {
      alphabetJpHalfFirst: 'あいうえおかきくけこさしすせそたちつてとなにぬねの'.split(
        ''
      ),
      alphabetJpHalfLast: 'はひふへほまみむめもやゆよらりるれろわをん'.split(
        ''
      ),
    }
  },
  // computed: {
  //   ...mapGetters('material', [
  //     'alphabetJpArrayHalfFirst',
  //     'alphabetJpArrayHalfLast',
  //   ]),
  // },
}
