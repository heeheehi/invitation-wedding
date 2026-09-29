import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

/**
 * 카카오톡으로 초대장을 공유할 수 있는 버튼 컴포넌트입니다.
 *
 * @returns {JSX.Element} 공유 버튼 섹션
 */
export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      {/* 맺음말: 두 사람의 이름으로 초대장을 닫습니다. */}
      <div className="closing">
        <div className="closing-label">두 사람 결혼합니다</div>
        <div className="closing-names">
          <span>{GROOM_FULLNAME}</span>
          <span className="rule" />
          <span>{BRIDE_FULLNAME}</span>
        </div>
      </div>
      <button
        className="ktalk-share"
        onClick={() => {
          // 카카오 SDK 로드 전이면 무시
          if (!kakao) {
            return
          }

          // 초대장 페이지 주소 (예: https://heeheehi.github.io/invitation-wedding/)
          const pageUrl = new URL(baseUrl, window.location.origin).href

          // 카카오톡 공유 전송 (피드 템플릿: 카드와 버튼 모두 초대장 페이지로 연결)
          kakao.Share.sendDefault({
            objectType: "feed",
            content: {
              title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
              description:
                WEDDING_DATE.format(WEDDING_DATE_FORMAT) + "\n" + LOCATION,
              imageUrl: pageUrl + "preview_image.jpg",
              link: {
                mobileWebUrl: pageUrl,
                webUrl: pageUrl,
              },
            },
            buttons: [
              {
                title: "초대장 보기",
                link: {
                  mobileWebUrl: pageUrl,
                  webUrl: pageUrl,
                },
              },
              {
                title: "오시는 길",
                link: {
                  mobileWebUrl: pageUrl + "#location",
                  webUrl: pageUrl + "#location",
                },
              },
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
