export function ClipPathCurve() {
  return (
    <svg width="0" height="0">
      <defs>
        <clipPath id="clip-path-curve" clipPathUnits="objectBoundingBox">
          <path
            d="M 0,1
        L 0,0
        L 1,0
        L 1,1
        C .45 .8, .1 1, 0 1
        Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
