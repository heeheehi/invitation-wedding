import { useRef, useState } from "react"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { STATIC_ONLY } from "../../env"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { Modal } from "../modal"
import { AttendanceInfo } from "./attendance"
import CopyIcon from "../../icons/copy-line-icon.svg?react"

/**
 * 식사 정보 안내 컴포넌트입니다.
 */
export const Information1 = () => {
  return (
    <>
      <h2 className="english">Information</h2>
      <div className="info-card">
        <div className="label">식사 안내</div>
        <div className="content">
          식사시간: 12시 ~ 14시
          <br />
          먼저 식사하실 분은 축의대에서 안내 받으시기 바랍니다.
        </div>
      </div>
    </>
  )
}

/**
 * 축의금 계좌번호 안내 컴포넌트입니다.
 * 신랑측, 신부측 계좌번호를 모달로 보여줍니다.
 */
export const Information2 = () => {
  const donationModalState = useState(false)
  const [isGroom, setIsGroom] = useState(true)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimeout = useRef<number | null>(null)

  const showToast = (message: string) => {
    setToast(message)
    if (toastTimeout.current !== null) {
      clearTimeout(toastTimeout.current)
    }
    toastTimeout.current = window.setTimeout(() => setToast(null), 1800)
  }

  return (
    <>
      <div className="info-card">
        <div className="label">마음 전하기</div>
        <div className="row">
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              donationModalState[1](true)
              setIsGroom(true)
            }}
          >
            신랑측
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              donationModalState[1](true)
              setIsGroom(false)
            }}
          >
            신부측
          </Button>
        </div>
      </div>

      {/* 계좌 정보 모달 */}
      <Modal
        modalState={donationModalState}
        className="donation-modal"
        closeOnClickBackground={true}
      >
        <div className="header">
          <div className="title">{isGroom ? "신랑측" : "신부측"}</div>
        </div>
        <div className="content">
          {(isGroom ? GROOM_INFO : BRIDE_INFO)
            .filter(({ account }) => !!account)
            .map(({ relation, name, account }) => (
              <div className="person-row" key={relation}>
                <div className="person">
                  <div className="relation">{relation}</div>
                  <div className="name">{name}</div>
                </div>
                {/* 계좌번호를 누르면 복사됩니다 */}
                <button
                  className="account-copy"
                  aria-label={`${name} 계좌번호 복사하기`}
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(account)
                      showToast("계좌번호가 복사되었습니다")
                    } catch {
                      showToast("복사에 실패했습니다")
                    }
                  }}
                >
                  {account}
                  <CopyIcon />
                </button>
              </div>
            ))}
        </div>
        {/* 복사 결과 안내 (잠시 보였다가 사라집니다) */}
        {toast && <div className="copy-toast">{toast}</div>}
        <div className="footer">
          <Button
            buttonStyle="style2"
            onClick={() => donationModalState[1](false)}
          >
            닫기
          </Button>
        </div>
      </Modal>
    </>
  )
}

/**
 * 정보 안내(식사, 축의금, 참석의사)를 통합하여 표시하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 정보 안내 섹션
 */
export const Information = () => {
  // 정적 모드일 경우 참석 의사 전달 기능을 제외합니다.
  if (STATIC_ONLY) {
    return (
      <>
        <LazyDiv className="card information">
          <Information1 />
        </LazyDiv>
        <LazyDiv className="card information">
          <Information2 />
        </LazyDiv>
      </>
    )
  }

  return (
    <LazyDiv className="card information">
      <Information1 />
      <Information2 />
      <AttendanceInfo />
    </LazyDiv>
  )
}
