import React from 'react'
import { withRouter } from 'react-router-dom'
import Layout from './layout'
import './index.less'

const mockData = {
  '1': `Racket-on-Chez continues to improve. Snapshot builds are currently available at pre.racket-lang.org, and we expect that Racket-on-Chez will be included as a download option in the next release.`,
  '2': `This means anyone with more than three devices connected doesn't have to worry right this instant. That will change, however, when it comes time to replace one of your current devices or if you add another device to your collection. At that point, you will have to make a decision.`,
  '3': `World's most mysterious text is finally cracked: Bristol academic deciphers lost language of 600-year-old Voynich manuscript to reveal astrological sex tips, herbal remedies and other pagan beliefs`,
  '4': `After a successful test in Mexico City, fast-food chain Burger King will begin delivering food to drivers caught in traffic in Los Angeles in what they have dubbed The Traffic Jam Whopper.`,
  '5': `Product advertisement and promotion on YouTube is a function of the dedicated audience (or influence) of the individual (influencer) anchoring the advertising or promotion.`
}

function News (props) {
  return (
    <div className='news-container' >
      文章详情: {props.newsDetail}
    </div>
  )
}

// 自定义Layout
News.Layout = Layout

News.getInitialProps = (ctx) => {
  const newsId = __isBrowser__ ? ctx.match.params.id : ctx.params.id
  return Promise.resolve({
    newsDetail: mockData[newsId]
  })
}

// 如果使用React-Router确保使用withRouter来包裹组件，csr阶段需要读取props.history属性
export default withRouter(News)
