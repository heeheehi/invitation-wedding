import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

// dayjs 설정: UTC 및 타임존 플러그인 확장, 한국어 로캘 설정
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

/**
 * 예식 일시 설정
 * Asia/Seoul 타임존 기준으로 설정합니다.
 */
export const WEDDING_DATE = dayjs.tz("2026-12-27 12:00", "Asia/Seoul")

/**
 * 예식 일시 포맷
 * 분이 0이면 분을 생략하고, 그 외에는 표시합니다.
 * 예: 2024년 8월 24일 토요일 오후 1시
 */
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일\nA h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

/**
 * 예식 당월 휴무일 (달력 표시용)
 * 예: 8월 15일 광복절
 */
export const HOLIDAYS = [25]

/**
 * 예식 장소 명칭
 */
export const LOCATION = "세인트메리스 강남"

/**
 * 예식 장소 상세 주소
 */
export const LOCATION_ADDRESS = "서울 서초구 남부순환로289길 5 (5F)"

/**
 * 카카오톡 공유 시 사용할 위치 정보 주소
 * 필요에 따라 LOCATION과 다르게 설정할 수 있습니다.
 */
export const SHARE_ADDRESS = LOCATION

/**
 * 카카오톡 공유 시 표시될 위치 제목
 */
export const SHARE_ADDRESS_TITLE = LOCATION

/**
 * 지도 서비스(네이버, 카카오)에 사용할 좌표 [경도, 위도]
 */
export const WEDDING_HALL_POSITION = [126.9885333, 37.4755755]

/**
 * 네이버 지도 장소 ID (NMAP_PLACE_ID)
 * 네이버 지도에서 장소 검색 후 URL의 숫자 부분을 입력합니다.
 */
export const NMAP_PLACE_ID = 1428180390

/**
 * 카카오 지도 장소 ID (KMAP_PLACE_ID)
 * 카카오 지도에서 장소 상세보기 클릭 후 URL의 숫자 부분을 입력합니다.
 */
export const KMAP_PLACE_ID = 59391633

// 신부 정보 설정
export const BRIDE_FULLNAME = "장경희"
export const BRIDE_FIRSTNAME = "경희"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "장호열"
export const BRIDE_MOTHER = "정영자"

/**
 * 신부측 연락처 및 계좌 정보
 */
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-7300-8569",
    account: "신한은행 110412093082",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "",
    account: "",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-9611-8569",
    account: "농협 301-0240-0000-71",
  },
]

// 신랑 정보 설정
export const GROOM_FULLNAME = "박준호"
export const GROOM_FIRSTNAME = "준호"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "박형두"
export const GROOM_MOTHER = "정은순"

/**
 * 신랑측 연락처 및 계좌 정보
 */
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-3974-7582",
    account: "신한은행 110-345-044057",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-5605-7582",
    account: "국민은행 774-21-0294-024",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-7675-7582",
    account: "우리은행 1002-734-275886",
  },
]
