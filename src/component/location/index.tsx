import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS, SHOW_CHARTER_BUS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철
            <br />
            <span className="subway-line line-2" aria-label="2호선">
              2
            </span>
            <span className="subway-line line-4" aria-label="4호선">
              4
            </span>
            <b>사당역 14번출구</b> 도보 10분
            <br />
            <br />* 버스
            <br />→ <b>방배동래미안타워 정류장</b> 하차 도보 3분
            <br />→ <b>대항병원 정류장</b> 하차 도보 3분
          </div>
          {SHOW_CHARTER_BUS && (
            <>
              <div />
              <div className="content">
                * 단체 대절 버스 이용 시
                <br />- 구미역 7시 출발
              </div>
            </>
          )}
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>세인트메리스 강남</b> 검색
            <br />
            - 3시간 무료 주차 가능. 무료 발렛 제공
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
