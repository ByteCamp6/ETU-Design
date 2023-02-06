---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/85510872?s=96&v=4',
    name: 'home Gario',
    links: [
      { icon: 'github', link: 'https://github.com/sami-jiaze' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/75741098?s=96&v=4',
    name: 'voilt-sourse',
    links: [
      { icon: 'github', link: 'https://github.com/voilt-sourse' }
    ]
  },
{
    avatar: 'https://avatars.githubusercontent.com/u/100053992?s=192&v=1',
    name: '张艺耀',
    links: [
      { icon: 'github', link: 'https://github.com/1379255913' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/103236054?s=96&v=4',
    name: 'Ocean',
    links: [
      { icon: 'github', link: 'https://github.com/Polaris-6625' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/79243297?s=96&v=4',
    name: 'WangFan',
    links: [
      { icon: 'github', link: 'https://github.com/233333-doge' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      ETU团队
    </template>
    <template #lead>
      ETU组件库是由ETU团队设计的，以下是ETU团队的成员
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
