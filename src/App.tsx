import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { useEffect } from "react"

/**
 * 메인 애플리케이션 컴포넌트입니다.
 * 초대장의 각 섹션을 조합하여 화면을 구성합니다.
 *
 * @returns {JSX.Element} 애플리케이션 화면
 */
function App() {
  // 주소에 #location 같은 앵커가 있으면 해당 섹션으로 이동합니다(카카오톡 공유의 "오시는 길" 버튼).
  // 화면이 그려진 직후 한 번, 사진이 모두 로드되어 위치가 확정된 뒤 한 번 더 맞춥니다.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return

    const scrollToAnchor = () =>
      document.getElementById(id)?.scrollIntoView({ block: "start" })

    // 사용자가 직접 스크롤을 시작하면 이후의 자동 이동은 하지 않습니다.
    const cancel = () => window.removeEventListener("load", scrollToAnchor)

    const timer = window.setTimeout(scrollToAnchor, 100)
    window.addEventListener("load", scrollToAnchor)
    window.addEventListener("touchstart", cancel, { once: true })
    window.addEventListener("wheel", cancel, { once: true })
    return () => {
      window.clearTimeout(timer)
      cancel()
      window.removeEventListener("touchstart", cancel)
      window.removeEventListener("wheel", cancel)
    }
  }, [])

  return (
    <div className="background">
      {/* 배경 애니메이션 효과 (예: 꽃잎 내리기) */}
      <BGEffect />
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 메인 커버 섹션 */}
          <Cover />

          {/* 모시는 글 섹션 */}
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 결혼식 날짜 및 달력 섹션 */}
          <Calendar />

          {/* 사진 갤러리 섹션 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 오시는 길 및 지도 섹션 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 축의금 및 연락처 정보 섹션 */}
          <Information />
        </LazyDiv>

        {/* 카카오톡/링크 공유 버튼 */}
        <ShareButton />
      </div>
    </div>
  )
}

export default App
