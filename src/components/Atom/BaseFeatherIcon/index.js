/**
 * SEE: https://vue-feather-icons.netlify.com/
 */
import {
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  ArrowUpIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  SmileIcon,
} from 'vue-feather-icons'

export default {
  name: 'BaseFeatherIcon',
  components: {
    ArrowDownLeftIcon,
    ArrowDownRightIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpLeftIcon,
    ArrowUpRightIcon,
    ArrowUpIcon,
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    TwitterIcon,
    SmileIcon,
  },
  props: {
    iconSize: {
      type: String,
      default: '1x',
      validate(value) {
        return ['24', '1x', '1.5x', '2x', '3x', '4x'].includes(value)
      },
    },
    iconName: {
      type: String,
      default: 'ArrowDownLeftIcon',
      validate(value) {
        return [
          'ArrowDownLeftIcon',
          'ArrowDownRightIcon',
          'ArrowDownIcon',
          'ArrowLeftIcon',
          'ArrowRightIcon',
          'ArrowUpLeftIcon',
          'ArrowUpRightIcon',
          'ArrowUpIcon',
          'FacebookIcon',
          'GithubIcon',
          'InstagramIcon',
          'TwitterIcon',
        ].includes(value)
      },
    },
  },
}
