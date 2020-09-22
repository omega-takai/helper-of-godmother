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
  ExternalLinkIcon,
  XIcon,
  EditIcon,
  ListIcon,
  HomeIcon,
  InfoIcon,
  RefreshCwIcon,
  SettingsIcon,
  LinkIcon,
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
    ExternalLinkIcon,
    XIcon,
    EditIcon,
    ListIcon,
    HomeIcon,
    InfoIcon,
    RefreshCwIcon,
    SettingsIcon,
    LinkIcon,
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
          'LinkIcon',
        ].includes(value)
      },
    },
  },
}
