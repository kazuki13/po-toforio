import { useIntersectionObserver } from './hooks/use-intersection-observer'
import { FC, useRef } from 'react'
import styles from '../scc/Component.module.scss'
import move from './image/move.png'
import Egate_vue from './image/E-gate_vue.png'
// カスタムフックに渡すコールバック関数
const showElements = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // IntersectionObserver で設定された条件を満たした時に実行する処理
      // 要素に active クラスを適用する
      entry.target.classList.add(styles.active)
    }
  })
}
export const ScrollToTop: React.FC = () => {
  return <div onClick={scroll} />;
};

const scroll = (): void => {
  typeof window !== 'undefined' &&
    window.scroll({
      top: 0, // 最上部へスクロール
      behavior: 'smooth',
    });
};
const Component: FC = () => {
  const ref1 = useRef<HTMLHeadingElement>(null)
  const ref2 = useRef<HTMLHeadingElement>(null)
  const ref3 = useRef<HTMLHeadingElement>(null)
  const ref4 = useRef<HTMLHeadingElement>(null)

  // カスタムフックを呼ぶ
  useIntersectionObserver([ref1, ref2, ref3, ref4], showElements)

  return (
    <>
    <header className={styles.header2}>
      <h1 className={styles.header_logo}><a href="/">村山一輝</a></h1>

    </header>
      <h2 className={styles.heading_title} ref={ref1}>
        その他の作品
      </h2>
      <div className={styles.heading_text1} ref={ref2}>
        <figure className={styles.image}><img src={move} alt=""/></figure>
        <div className={styles.text}>
          <h2>動画制作</h2>
          <p>
            展示会に向け来校者に伝わりやすいように、FilmForthで動画の作成をしました。
            よりわかりやすい動画を制作するために、先生や友達に協力をいただきシュミレーション映像を組み込みました。
          </p>
        </div>
      </div>
      <div className={styles.heading_text2} ref={ref3}>
        <div className={styles.text}>
          <h2>動画制作</h2>
          <p>
              展示会後、フロントエンド側で顔の認識・写真の保存・azureへの送信をvue.jsを活用し開発を進めました
          </p>
        </div>
        <figure className={styles.image2}><img src={Egate_vue} alt=""/></figure>
      </div>
    </>
  )
}

export default Component