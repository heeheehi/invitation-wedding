/**
 * 기기의 글자 크기 설정을 초대장에 반영합니다.
 *
 * 루트 글자 크기는 카드 폭에 맞춰 `min(4vw, 20px)`로 정해지기 때문에 그대로는
 * 기기 설정(안드로이드 '글꼴 크기', iOS '텍스트 크기')이 무시됩니다.
 * 그래서 기기 설정이 기본값 대비 몇 배인지 재서 `--user-font-scale` 변수로 넘기고,
 * App.scss의 루트 글자 크기에 곱합니다.
 *
 * - iOS: 텍스트 크기(Dynamic Type)는 `-apple-system-body` 서체로만 드러납니다. 기본값 17px.
 * - 그 외: 브라우저 기본 글자 크기(`medium`)에 반영됩니다. 기본값 16px.
 */

// 배율이 너무 커지면 사진·지도 등 rem으로 잡힌 레이아웃이 화면을 넘칩니다.
const MIN_SCALE = 0.85
const MAX_SCALE = 1.5

const IS_APPLE_SYSTEM_FONT = CSS.supports("font", "-apple-system-body")
const BASE_SIZE = IS_APPLE_SYSTEM_FONT ? 17 : 16

/**
 * 기기 설정 글자 크기를 재서 루트에 배율을 적용합니다.
 */
const applyUserFontScale = () => {
  // 루트 글자 크기의 영향을 받지 않는 값으로만 재야 하므로 별도 요소를 잠깐 붙입니다.
  const probe = document.createElement("div")
  probe.style.position = "absolute"
  probe.style.visibility = "hidden"
  if (IS_APPLE_SYSTEM_FONT) {
    probe.style.font = "-apple-system-body"
  } else {
    probe.style.fontSize = "medium"
  }
  document.body.appendChild(probe)
  const size = parseFloat(getComputedStyle(probe).fontSize)
  probe.remove()

  if (!size) return
  const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, size / BASE_SIZE))
  document.documentElement.style.setProperty("--user-font-scale", `${scale}`)
}

applyUserFontScale()

// 초대장을 열어 둔 채 설정을 바꾸고 돌아오는 경우에도 다시 맞춥니다.
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") applyUserFontScale()
})

// 부수 효과만 있는 파일이지만 모듈로 취급되도록 합니다(isolatedModules).
export {}
