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
      <LazyDiv className="card location" id="location">
        <h2 className="english">Location</h2>
        <div className="section-title">오시는 길</div>
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
            {/* 지하철 */}
            <div className="sub-heading">지하철</div>
            <div className="subway-lines">
              <span className="subway-line line-2">2호선</span>
              <span className="subway-line line-4">4호선</span>
            </div>
            <b>사당역 14번출구</b> 도보 10분
            {/* 버스 */}
            <div className="sub-heading">버스</div>
            <b>방배동래미안타워 정류장</b> 하차 도보 3분
            <br />
            <b>대항병원 정류장</b> 하차 도보 3분
            {SHOW_CHARTER_BUS && (
              <>
                {/* 단체 대절 버스 */}
                <div className="sub-heading">단체 대절 버스</div>
                구미역 7시 출발
              </>
            )}
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            내비게이션에서 <b>세인트메리스 강남</b> 검색
            {/* 주차 */}
            <div className="sub-heading">주차</div>
            3시간 무료 주차 · 무료 발렛 제공
            <br />
            주차장에서 웨딩홀로 바로 연결됩니다.
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
