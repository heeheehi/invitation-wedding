import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE, WAX_SEAL_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

/**
 * 초대장의 메인 커버 섹션입니다.
 * 상단 전면 사진과 하단 좌측 정렬 텍스트로 구성되며,
 * 사진과 여백의 경계에 실링 왁스 엠블럼이 걸쳐집니다.
 *
 * @returns {JSX.Element} 커버 섹션
 */
export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      {/* 전면 커버 이미지 */}
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="신랑 신부" />
        {/* 사진 하단 경계에 걸치는 실링 왁스 엠블럼 */}
        <img className="wax-seal" src={WAX_SEAL_IMAGE} alt="" />
      </div>
      {/* 이름 및 예식 정보 */}
      <div className="cover-caption">
        <div className="names">
          <div className="name">{GROOM_FULLNAME}</div>
          <div className="name">{BRIDE_FULLNAME}</div>
        </div>
        {/* 예식 정보 (포맷팅된 날짜 및 장소) */}
        <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
        <div className="info">{LOCATION}</div>
      </div>
    </LazyDiv>
  )
}