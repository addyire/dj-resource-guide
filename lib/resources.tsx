import Image from "next/image"

export type ResourceSlug = 'youtube' | 'pioneerdj' | 'beatmatch' | 'soundcloud' | 'bpmsupreme' | 'djcity'
export interface Resource {
  title: string,
  id: ResourceSlug,
  updated: string,
  url: string,
  content: () => ReactNode
}

import YouTubeLogo from "@/public/logos/youtube.svg"
import RedditLogo from "@/public/logos/reddit.svg"
import PioneerDJLogo from "@/public/logos/pioneerdj.svg"
import SoundCloudLogo from "@/public/logos/soundcloud.svg"
import BPMSupremeLogo from "@/public/logos/bpmsupreme.svg"
import DJCityLogo from "@/public/logos/djcity.svg"
import React, {  ReactNode } from "react"

export const LearningResources = [{
    title: 'Youtube',
    id: 'youtube',
    icon: <Image src={YouTubeLogo} className="size-8" alt=""/>,
    desc: 'The go-to platform for DJ tutorials, gear reviews, and live set inspiration– perfect for visual learners and hands-on practice.'
  },
{
    title: 'r/Beatmatch',
    id: 'beatmatch',
    icon: <Image src={RedditLogo} className="size-8" alt=""/>,
      desc: 'An active Reddit community where DJs of all levels share advice, feedback, and real-world experiences.'
  },
{
    title: 'PioneerDJ',
    id: 'pioneerdj',
    icon: <Image src={PioneerDJLogo} className="size-8" alt=""/>,
      desc: 'The home of industry-standard DJ gear and rekordbox software, offering guides, updates, and tools to master your equipment.'
  }
  ]

export const MusicResources = [{
    title: 'SoundCloud',
    id: 'soundcloud',
    icon: <Image src={SoundCloudLogo} className="size-8" alt=""/>,
    desc: 'A massive platform for discovering DJ mixes, remixes, and underground tracks from artists around the world.'
  },
{
    title: 'BPMSupreme',
    id: 'bpmsupreme',
    icon: <Image src={BPMSupremeLogo} className="size-8" alt=""/>,
      desc: 'A professional DJ record pool offering high-quality, ready-to-mix tracks, edits, and exclusives across popular genres.'
  },
{
    title: 'DJCity',
    id: 'djcity',
    icon: <Image src={DJCityLogo} className="size-8" alt=""/>,
      desc: 'A leading source for club-ready edits, remixes, and new music, trusted by DJs in hip-hop, Latin, and open-format scenes.'
  }
  ]

export const RESOURCE_NAV = [ {
  title: 'Learning to DJ',
  id: 'learning',
  content: LearningResources
},
{
  title: 'Finding Music',
  id: 'music',
  content: MusicResources
}
]

const ResourceContainer = ({children}: {children: ReactNode}) => <div className="space-y-4">{children}</div>

export const RESOURCES: Resource[]  = [
   {
    title: "YouTube",
    id: 'youtube',
    updated: 'April 28, 2025',
    url: 'https://youtube.com',
    content: () => <ResourceContainer ><p>YouTube is one of the most powerful platforms for learning how to DJ, no matter your skill level or style. From beginner-friendly walkthroughs to advanced techniques like beat juggling and harmonic mixing, there’s content for everyone. DJs and educators from around the world share tutorials, gear reviews, performance breakdowns, and livestream sets that you can learn from at your own pace.</p>

<p>What makes YouTube especially valuable is the ability to see DJing in action—whether it’s how someone uses FX on a Pioneer mixer, or how they layer tracks in a high-energy house set. You can follow along step-by-step, slow down videos to better understand techniques, and subscribe to creators who match your learning style. If you’re a visual learner or just like to experiment by watching others, YouTube is an essential part of your DJ journey.</p></ResourceContainer>

  },
  {
    title: "r/Beatmatch",
    id: 'beatmatch',
    updated: 'April 28, 2025',
    url: 'https://reddit.com/r/Beatmatch',
    content: () => <ResourceContainer><p>r/Beatmatch is a thriving online community for DJs of all skill levels, hosted on Reddit. Whether you{"'"}re brand new to DJing or have been spinning for years, this subreddit is a great place to ask questions, share knowledge, and connect with other people passionate about the craft.</p>

<p>The community covers everything from basic mixing techniques and gear recommendations to advanced workflow setups, creative routines, and feedback on mixes. It’s a no-judgment zone where you can post beginner questions without feeling out of place, get advice on which controller to buy, or troubleshoot an issue with your software setup.</p>

<p>One of the most valuable aspects of r/Beatmatch is its interactivity. You’re not just reading static guides—you’re learning from real DJs, in real time. Members often share their personal workflows, break down techniques in the comments, and post clips or full sets for feedback. Weekly threads also invite gear talk, mix sharing, and deeper discussions around the culture and business of DJing.</p>

<h2 className="text-2xl font-medium">Useful Tips</h2>
<p>Before posting, try using the search bar—many questions have already been answered in detail. When you do post, be specific and clear to get the best help. Don’t be afraid to engage with others too—feedback goes both ways, and being part of the conversation will level up your understanding fast.</p><p>If you{"'"}re learning to DJ and want community support, insight, and inspiration, r/Beatmatch is a great space to hang out, ask questions, and grow.</p></ResourceContainer>
  },
{
    title: "PioneerDJ",
    id: 'pioneerdj',
    updated: 'April 30, 2025',
    url: 'https://pioneerdj.com',
    content: () => <ResourceContainer><p>Pioneer DJ is the global leader in DJ technology and the brand behind some of the most widely used equipment in the industry—like the CDJ-3000, DJM mixers, and the rekordbox software ecosystem. If you{"'"}ve ever stepped into a club booth or watched a major festival set, chances are the gear in use is made by Pioneer DJ. Their products set the standard for reliability, creative performance, and pro-level control.</p><p>The Pioneer DJ website isn’t just a place to browse gear—it’s an essential learning resource for DJs. Whether you{"'"}re just getting started with your first controller or diving into advanced CDJ setups, you’ll find detailed product guides, firmware updates, manuals, video tutorials, and blog content that help you get the most out of your equipment. It’s also where you can download rekordbox, their music management and performance software, which is central to preparing and performing with Pioneer gear.</p><p>For new DJs, understanding the rekordbox workflow—creating playlists, setting cue points, analyzing tracks by BPM and key—is a huge step toward building polished, professional sets. The site breaks this down in an approachable way, and offers tutorials to guide you through every feature.</p><p>If you’re aiming to play out live or eventually perform in club environments, getting comfortable with the Pioneer DJ ecosystem is a smart move. Their tools are designed to grow with you—from beginner controllers like the DDJ-FLX4 to the club-standard CDJ and DJM series.</p></ResourceContainer>
  },
{
    title: "SoundCloud",
    id: 'soundcloud',
    updated: 'April 27, 2025',
    url: 'https://soundcloud.com',
    content:  () => <ResourceContainer>
      <p>SoundCloud is one of the most important platforms for DJs looking to discover new music, find inspiration, and connect with artists. With millions of tracks uploaded by independent musicians, producers, and fellow DJs, SoundCloud is a goldmine of underground gems, bootlegs, remixes, and full DJ sets that you won’t find on mainstream platforms.</p>

<p>What sets SoundCloud apart is its diversity and accessibility. You’ll find everything from bedroom producers dropping unreleased edits to major artists testing out experimental sounds. For DJs, that means an endless stream of fresh material to dig through, sample, and build into your sets. It’s also a great place to study how other DJs structure their mixes, discover regional genres, or trace the evolution of niche scenes.</p>

<p>SoundCloud’s interface makes it easy to follow artists, build playlists, and repost tracks to your profile. Many DJs also use it as a portfolio—uploading their own recorded mixes to showcase their style and reach new audiences. If you{"'"}re producing music or creating your own edits, uploading to SoundCloud is a low-barrier way to share your work and start building a following.</p>
</ResourceContainer>
  },
{
    title: "BPMSupreme",
    id: 'bpmsupreme',
    updated: 'April 27, 2025',
    url: 'https://bpmsupreme.com',
    content:  () => <ResourceContainer>
      <p>BPMSupreme is a professional DJ record pool designed to give DJs fast, easy access to high-quality music that{"'"}s ready for live performance. Unlike streaming platforms or casual download sites, BPMSupreme is built specifically for DJs—offering curated edits, extended versions, remixes, and intros/outros that make mixing smooth and club-ready.</p>

<p>{`The platform is subscription-based and constantly updated with new tracks across a wide range of genres, including hip-hop, electronic, Latin, pop, reggae, R&B, and more. Each track is tagged with BPM, key, and version type, so you can quickly find music that fits your set, tempo, or vibe. You'll find clean versions for radio, dirty versions for clubs, and DJ edits that give you more control when performing.`}</p>

<p>BPMSupreme is a favorite among working DJs because it saves time and ensures quality. Instead of scouring the internet for usable tracks, you can download everything you need from one place—organized, high bitrate, and performance-ready.</p>

</ResourceContainer>
  },
{
    title: "DJCity",
    id: 'djcity',
    updated: 'May 2, 2025',
    url: 'https://djcity.com',
    content:  () => <ResourceContainer>
      <p>DJCity is one of the world’s leading digital record pools, trusted by club DJs, radio personalities, and open-format selectors across the globe. Known for its exclusive edits, high-quality remixes, and early access to trending tracks, DJCity is a go-to resource for DJs who need clean, curated music that’s ready to rock a dance floor.</p>

<p>{ `With a DJCity subscription, you get access to thousands of tracks in genres like hip-hop, pop, Latin, electronic, dancehall, and more—each version designed specifically with DJ performance in mind. You'll find intro edits, radio and dirty versions, acapellas, instrumentals, and remixes you won’t get anywhere else. Their editorial team works closely with artists and producers to ensure that every file is club-friendly, well-tagged, and high in audio quality.` }</p>

<p>{ `What sets DJCity apart is its focus on current hits and urban sounds. If you're playing in nightclubs, lounges, or at events that demand the latest popular music, this pool gives you exactly what you need—often before it hits other platforms.` }</p>

      <h2 className="text-2xl font-medium">Tips</h2>
      <p>Check the daily “Top Downloads” chart to see what’s trending with other DJs. Use filters to find tracks by genre, BPM, or release date. Download both clean and dirty versions of your go-to tracks so you’re prepared for any type of gig. Explore their international pools (like DJCity Latino) to diversify your sets with global sounds.</p>
    </ResourceContainer>
  }
]

