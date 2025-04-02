import { Routes, Route } from 'react-router-dom'; // ルーティング用コンポーネント
import HomePage from './pages/HomePage'; // ホームページコンポーネント
import ArticlePage from './pages/ArticlePage'; // 記事ページコンポーネント
import AspectRatioPage from './pages/layout/aspect-ratio-page'; // Aspect Ratio ページ
import BoxSizingPage from './pages/layout/box-sizing-page'; // Box Sizing ページ
import ContainerPage from './pages/layout/container-page';
import ColumnsPage from './pages/layout/columns-page';
import BreakAfterPage from './pages/layout/break-after-page';
import BreakBeforePage from './pages/layout/break-before-page';
import BreakInsidePage from './pages/layout/break-inside-page';
import BoxDecorationBreakPage from './pages/layout/box-decoration-break-page';
import DisplayPage from './pages/layout/display-page';
import FloatsPage from './pages/layout/floats-page';
import ClearPage from './pages/layout/clear-page';
import IsolationPage from './pages/layout/isolation-page';
import ObjectFitPage from './pages/layout/object-fit-page';
import ObjectPositionPage from './pages/layout/object-position-page';
import OverflowPage from './pages/layout/overflow-page';
import OverscrollBehaviorPage from './pages/layout/overscroll-behavior-page';
import PositionPage from './pages/layout/position-page';
import TopRightBottomLeftPage from './pages/layout/top-right-bottom-left-page';
import VisibilityPage from './pages/layout/visibility-page';
import ZIndexPage from './pages/layout/z-index-page';
import FlexBasisPage from './pages/flexbox-grid/flex-basis-page';
import FlexDirectionPage from './pages/flexbox-grid/flex-direction-page';
import FlexWrapPage from './pages/flexbox-grid/flex-wrap-page';
import FlexPage from './pages/flexbox-grid/flex-page';
import FlexGrowPage from './pages/flexbox-grid/flex-grow-page';
import FlexShrinkPage from './pages/flexbox-grid/flex-shrink-page';
import OrderPage from './pages/flexbox-grid/order-page';
import GridTemplateColumnsPage from './pages/flexbox-grid/grid-template-columns-page';
import GridColumnPage from './pages/flexbox-grid/grid-column-page';
import GridTemplateRowsPage from './pages/flexbox-grid/grid-template-rows-page';
import GridRowPage from './pages/flexbox-grid/grid-row-page';
import GridAutoFlowPage from './pages/flexbox-grid/grid-auto-flow-page';
import GridAutoColumnsPage from './pages/flexbox-grid/grid-auto-columns-page';
import GridAutoRowsPage from './pages/flexbox-grid/grid-auto-rows-page';
import GapPage from './pages/flexbox-grid/gap-page';
import JustifyContentPage from './pages/flexbox-grid/justify-content-page';
import JustifyItemsPage from './pages/flexbox-grid/justify-items-page';
import JustifySelfPage from './pages/flexbox-grid/justify-self-page';
import AlignContentPage from './pages/flexbox-grid/align-content-page';
import AlignItemsPage from './pages/flexbox-grid/align-items-page';
import AlignSelfPage from './pages/flexbox-grid/align-self-page';
import PlaceContentPage from './pages/flexbox-grid/place-content-page';
import PlaceSelfPage from './pages/flexbox-grid/place-self-page';
import PaddingPage from './pages/spacing/padding-page';
import MarginPage from './pages/spacing/margin-page';
import SpaceBetweenPage from './pages/spacing/space-between-page';
import WidthPage from './pages/sizing/width-page';
import MinWidthPage from './pages/sizing/min-width-page';
import MaxWidthPage from './pages/sizing/max-width-page';
import HeightPage from './pages/sizing/height-page';
import MinHeightPage from './pages/sizing/min-height-page';
import MaxHeightPage from './pages/sizing/max-height-page';
import SizePage from './pages/sizing/size-page';
import FontFamilyPage from './pages/typography/font-family-page';
import FontSizePage from './pages/typography/font-size-page';
import FontSmoothingPage from './pages/typography/font-smoothing-page';
import FontStylePage from './pages/typography/font-style-page';
import FontWeightPage from './pages/typography/font-weight-page';
import FontVariantNumericPage from './pages/typography/font-variant-numeric-page';
import LineClampPage from './pages/typography/line-clamp-page';
import LineHeightPage from './pages/typography/line-height-page';
import LetterSpacingPage from './pages/typography/letter-spacing-page';
import ListStyleImagePage from './pages/typography/list-style-image-page';
import ListStylePositionPage from './pages/typography/list-style-position-page';
import ListStyleTypePage from './pages/typography/list-style-type-page';
import TextAlignPage from './pages/typography/text-align-page';
import TextColorPage from './pages/typography/text-color-page';
import TextDecorationColorPage from './pages/typography/text-decoration-color-page';
import TextDecorationStylePage from './pages/typography/text-decoration-style-page';
import TextDecorationThicknessPage from './pages/typography/text-decoration-thickness-page';
import TextUnderlineOffsetPage from './pages/typography/text-underline-offset-page';
import TextDecorationPage from './pages/typography/text-decoration-page';
import TextOverflowPage from './pages/typography/text-overflow-page';
import TextWrapPage from './pages/typography/text-wrap-page';
import TextTransformPage from './pages/typography/text-transform-page';
import TextIndentPage from './pages/typography/text-indent-page';
import WhitespacePage from './pages/typography/whitespace-page';
import VerticalAlignPage from './pages/typography/vertical-align-page';
import WordBreakPage from './pages/typography/word-break-page';
import HyphensPage from './pages/typography/hyphens-page';
import ContentPage from './pages/typography/content-page';
import BackgroundAttachmentPage from './pages/backgrounds/background-attachment-page';
import BackgroundClipPage from './pages/backgrounds/background-clip-page';
import BackgroundOriginPage from './pages/backgrounds/background-origin-page';
import BackgroundPositionPage from './pages/backgrounds/background-position-page';
import BackgroundRepeatPage from './pages/backgrounds/background-repeat-page';
import BackgroundSizePage from './pages/backgrounds/background-size-page';
import BackgroundColorPage from './pages/backgrounds/background-color-page';
import BackgroundImagePage from './pages/backgrounds/background-image-page';
import GradientColorStopsPage from './pages/backgrounds/gradient-color-stops-page';
import BorderRadiusPage from './pages/borders/border-radius-page';
import BorderWidthPage from './pages/borders/border-width-page';
import BorderColorPage from './pages/borders/border-color-page';
import BorderStylePage from './pages/borders/border-style-page';
import DivideColorPage from './pages/borders/divide-color-page';
import DivideWidthPage from './pages/borders/divide-width-page';
import DivideStylePage from './pages/borders/divide-style-page';
import OutlineWidthPage from './pages/borders/outline-width-page';
import OutlineColorPage from './pages/borders/outline-color-page';
import OutlineStylePage from './pages/borders/outline-style-page';
import OutlineOffsetPage from './pages/borders/outline-offset-page';
import RingWidthPage from './pages/borders/ring-width-page';
import RingColorPage from './pages/borders/ring-color-page';
import RingOffsetWidthPage from './pages/borders/ring-offset-width-page';
import RingOffsetColorPage from './pages/borders/ring-offset-color-page';
import BoxShadowPage from './pages/effects/box-shadow-page';
import BoxShadowColorPage from './pages/effects/box-shadow-color-page';
import OpacityPage from './pages/effects/opacity-page';
import MixBlendModePage from './pages/effects/mix-blend-mode-page';
import BackgroundBlendModePage from './pages/effects/background-blend-mode-page';
import BlurPage from './pages/filters/blur-page';
import BrightnessPage from './pages/filters/brightness-page';
import ContrastPage from './pages/filters/contrast-page';
import GrayscalePage from './pages/filters/grayscale-page';
import HueRotatePage from './pages/filters/hue-rotate-page';
import InvertPage from './pages/filters/invert-page';
import SaturatePage from './pages/filters/saturate-page';
import DropShadowPage from './pages/filters/drop-shadow-page';
import SepiaPage from './pages/filters/sepia-page';
import BackdropBlurPage from './pages/filters/backdrop-blur-page';
import BackdropBrightnessPage from './pages/filters/backdrop-brightness-page';
import BackdropContrastPage from './pages/filters/backdrop-contrast-page';
import BackdropGrayscalePage from './pages/filters/backdrop-grayscale-page';
import BackdropInvertPage from './pages/filters/backdrop-invert-page';
import BackdropOpacityPage from './pages/filters/backdrop-opacity-page';
import BackdropSaturatePage from './pages/filters/backdrop-saturate-page';
import BackdropHueRotatePage from './pages/filters/backdrop-hue-rotate-page';
import BackdropSepiaPage from './pages/filters/backdrop-sepia-page';
import BorderCollapsePage from './pages/tables/border-collapse-page';
import BorderSpacingPage from './pages/tables/border-spacing-page';
import TableLayoutPage from './pages/tables/table-layout-page';
import CaptionSidePage from './pages/tables/caption-side-page';
import TransitionPropertyPage from './pages/transitions-animation/transition-property-page';
import TransitionTimingFunctionPage from './pages/transitions-animation/transition-timing-function-page';
import TransitionDurationPage from './pages/transitions-animation/transition-duration-page';
import TransitionDelayPage from './pages/transitions-animation/transition-delay-page';
import AnimationPage from './pages/transitions-animation/animation-page';
import ScalePage from './pages/transforms/scale-page';
import RotatePage from './pages/transforms/rotate-page';
import TranslatePage from './pages/transforms/translate-page';
import SkewPage from './pages/transforms/skew-page';
import TransformOriginPage from './pages/transforms/transform-origin-page';
import AccentColorPage from './pages/interactivity/accent-color-page';
import CursorPage from './pages/interactivity/cursor-page';
import CaretColorPage from './pages/interactivity/caret-color-page';
import PointerEventsPage from './pages/interactivity/pointer-events-page';
import ResizePage from './pages/interactivity/resize-page';
import ScrollMarginPage from './pages/interactivity/scroll-margin-page';
import ScrollPaddingPage from './pages/interactivity/scroll-padding-page';
import ScrollBehaviorPage from './pages/interactivity/scroll-behavior-page';
import ScrollSnapAlignPage from './pages/interactivity/scroll-snap-align-page';
import ScrollSnapTypePage from './pages/interactivity/scroll-snap-type-page';
import TouchActionPage from './pages/interactivity/touch-action-page';
import UserSelectPage from './pages/interactivity/user-select-page';
import ScrollSnapStopPage from './pages/interactivity/scroll-snap-stop-page';
import FillPage from './pages/svg/fill-page';
import StrokePage from './pages/svg/stroke-page';
import StrokeWidthPage from './pages/svg/stroke-width-page';
import ScreenReadersPage from './pages/accessibility/screen-readers-page';
import WillChangePage from './pages/interactivity/will-change-page';
/**
 * アプリケーションのルートコンポーネント
 * 全体のレイアウトとルーティングを定義
 */
function App() {
  return (
    // 全体のコンテナ、左右に自動マージン、上下左右にパディング
    <div className="container mx-auto p-4">
      {/* 各ページのコンテンツを表示するメインエリア */}
      <main>
        {/* ルーティング設定 */}
        <Routes>
          {/* ルートパス ("/") に HomePage を割り当て */}
          <Route path="/" element={<HomePage />} />
          {/* 動的ルート: ArticlePage は一旦コメントアウト or 削除 (必要に応じて調整) */}
          {/* <Route path="/:section/:articleName" element={<ArticlePage />} /> */}
          {/* 作成した静的ページへのルート */}
          <Route path="/layout/aspect-ratio" element={<AspectRatioPage />} />
          <Route path="/layout/box-sizing" element={<BoxSizingPage />} />
          <Route path="/flexbox-grid/flex-direction" element={<FlexDirectionPage />} />
          <Route path="/flexbox-grid/flex-basis" element={<FlexBasisPage />} />
          <Route path="/flexbox-grid/flex-wrap" element={<FlexWrapPage />} />
          <Route path="/flexbox-grid/flex" element={<FlexPage />} />
          <Route path="/flexbox-grid/flex-grow" element={<FlexGrowPage />} />
          <Route path="/flexbox-grid/flex-shrink" element={<FlexShrinkPage />} />
          <Route path="/flexbox-grid/order" element={<OrderPage />} />
          <Route path="/flexbox-grid/grid-template-columns" element={<GridTemplateColumnsPage />} />
          <Route path="/flexbox-grid/grid-column" element={<GridColumnPage />} />
          <Route path="/flexbox-grid/grid-template-rows" element={<GridTemplateRowsPage />} />
          <Route path="/flexbox-grid/grid-row" element={<GridRowPage />} />
          <Route path="/flexbox-grid/grid-auto-flow" element={<GridAutoFlowPage />} />
          <Route path="/flexbox-grid/grid-auto-columns" element={<GridAutoColumnsPage />} />
          <Route path="/flexbox-grid/grid-auto-rows" element={<GridAutoRowsPage />} />
          <Route path="/flexbox-grid/gap" element={<GapPage />} />
          <Route path="/flexbox-grid/justify-content" element={<JustifyContentPage />} />
          <Route path="/flexbox-grid/justify-items" element={<JustifyItemsPage />} />
          <Route path="/flexbox-grid/justify-self" element={<JustifySelfPage />} />
          <Route path="/flexbox-grid/align-content" element={<AlignContentPage />} />
          <Route path="/flexbox-grid/align-items" element={<AlignItemsPage />} />
          <Route path="/flexbox-grid/align-self" element={<AlignSelfPage />} />
          <Route path="/flexbox-grid/place-content" element={<PlaceContentPage />} />
          <Route path="/flexbox-grid/place-self" element={<PlaceSelfPage />} />
          <Route path="/spacing/padding" element={<PaddingPage />} />
          <Route path="/spacing/margin" element={<MarginPage />} />
          <Route path="/spacing/space-between" element={<SpaceBetweenPage />} />
          <Route path="/sizing/width" element={<WidthPage />} />
          <Route path="/sizing/min-width" element={<MinWidthPage />} />
          <Route path="/sizing/max-width" element={<MaxWidthPage />} />
          <Route path="/sizing/height" element={<HeightPage />} />
          <Route path="/sizing/min-height" element={<MinHeightPage />} />
          <Route path="/sizing/max-height" element={<MaxHeightPage />} />
          <Route path="/sizing/size" element={<SizePage />} />
          <Route path="/typography/font-family" element={<FontFamilyPage />} />
          <Route path="/typography/font-size" element={<FontSizePage />} />
          <Route path="/typography/font-smoothing" element={<FontSmoothingPage />} />
          <Route path="/typography/font-style" element={<FontStylePage />} />
          <Route path="/typography/font-weight" element={<FontWeightPage />} />
          <Route path="/typography/font-variant-numeric" element={<FontVariantNumericPage />} />
          <Route path="/typography/letter-spacing" element={<LetterSpacingPage />} />
          <Route path="/typography/line-clamp" element={<LineClampPage />} />
          <Route path="/typography/line-height" element={<LineHeightPage />} />
          <Route path="/typography/list-style-image" element={<ListStyleImagePage />} />
          <Route path="/typography/list-style-position" element={<ListStylePositionPage />} />
          <Route path="/typography/list-style-type" element={<ListStyleTypePage />} />
          <Route path="/typography/text-align" element={<TextAlignPage />} />
          <Route path="/typography/text-color" element={<TextColorPage />} />
          <Route path="/typography/text-decoration" element={<TextDecorationPage />} />
          <Route path="/typography/text-decoration-color" element={<TextDecorationColorPage />} />
          <Route path="/typography/text-decoration-thickness" element={<TextDecorationThicknessPage />} />
          <Route path="/typography/text-underline-offset" element={<TextUnderlineOffsetPage />} />
          <Route path="/typography/text-decoration-style" element={<TextDecorationStylePage />} />
          <Route path="/typography/text-transform" element={<TextTransformPage />} />
          <Route path="/typography/text-overflow" element={<TextOverflowPage />} />
          <Route path="/typography/text-wrap" element={<TextWrapPage />} />
          <Route path="/typography/text-indent" element={<TextIndentPage />} />
          <Route path="/typography/vertical-align" element={<VerticalAlignPage />} />
          <Route path="/typography/whitespace" element={<WhitespacePage />} />
          <Route path="/typography/word-break" element={<WordBreakPage />} />
          <Route path="/typography/hyphens" element={<HyphensPage />} />
          <Route path="/typography/content" element={<ContentPage />} />
          <Route path="/backgrounds/background-attachment" element={<BackgroundAttachmentPage />} />
          <Route path="/backgrounds/background-clip" element={<BackgroundClipPage />} />
          <Route path="/backgrounds/background-origin" element={<BackgroundOriginPage />} />
          <Route path="/backgrounds/background-position" element={<BackgroundPositionPage />} />
          <Route path="/backgrounds/background-color" element={<BackgroundColorPage />} />
          <Route path="/backgrounds/background-repeat" element={<BackgroundRepeatPage />} />
          <Route path="/backgrounds/background-size" element={<BackgroundSizePage />} />
          <Route path="/backgrounds/background-image" element={<BackgroundImagePage />} />
          <Route path="/backgrounds/gradient-color-stops" element={<GradientColorStopsPage />} />
          <Route path="/borders/border-radius" element={<BorderRadiusPage />} />
          <Route path="/borders/border-width" element={<BorderWidthPage />} />
          <Route path="/borders/border-color" element={<BorderColorPage />} />
          <Route path="/borders/border-style" element={<BorderStylePage />} />
          <Route path="/borders/divide-color" element={<DivideColorPage />} />
          <Route path="/borders/divide-width" element={<DivideWidthPage />} />
          <Route path="/borders/divide-style" element={<DivideStylePage />} />
          <Route path="/borders/outline-width" element={<OutlineWidthPage />} />
          <Route path="/borders/outline-color" element={<OutlineColorPage />} />
          <Route path="/borders/outline-style" element={<OutlineStylePage />} />
          <Route path="/borders/outline-offset" element={<OutlineOffsetPage />} />
          <Route path="/borders/ring-width" element={<RingWidthPage />} />
          <Route path="/borders/ring-color" element={<RingColorPage />} />
          <Route path="/borders/ring-offset-width" element={<RingOffsetWidthPage />} />
          <Route path="/borders/ring-offset-color" element={<RingOffsetColorPage />} />
          <Route path="/effects/box-shadow" element={<BoxShadowPage />} />
          <Route path="/effects/box-shadow-color" element={<BoxShadowColorPage />} />
          <Route path="/effects/opacity" element={<OpacityPage />} />
          <Route path="/effects/mix-blend-mode" element={<MixBlendModePage />} />
          <Route path="/effects/background-blend-mode" element={<BackgroundBlendModePage />} />
          <Route path="/filters/blur" element={<BlurPage />} />
          <Route path="/filters/brightness" element={<BrightnessPage />} />
          <Route path="/filters/contrast" element={<ContrastPage />} />
          <Route path="/filters/invert" element={<InvertPage />} />
          <Route path="/filters/hue-rotate" element={<HueRotatePage />} />
          <Route path="/filters/grayscale" element={<GrayscalePage />} />
          <Route path="/filters/drop-shadow" element={<DropShadowPage />} />
          <Route path="/filters/saturate" element={<SaturatePage />} />
          <Route path="/layout/container" element={<ContainerPage />} />
          <Route path="/layout/columns" element={<ColumnsPage />} />
          <Route path="/filters/backdrop-grayscale" element={<BackdropGrayscalePage />} />
          <Route path="/filters/backdrop-invert" element={<BackdropInvertPage />} />
          <Route path="/filters/backdrop-hue-rotate" element={<BackdropHueRotatePage />} />
          <Route path="/filters/backdrop-saturate" element={<BackdropSaturatePage />} />
          <Route path="/filters/backdrop-opacity" element={<BackdropOpacityPage />} />
          <Route path="/filters/backdrop-contrast" element={<BackdropContrastPage />} />
          <Route path="/filters/backdrop-brightness" element={<BackdropBrightnessPage />} />
          <Route path="/filters/backdrop-blur" element={<BackdropBlurPage />} />
          <Route path="/filters/sepia" element={<SepiaPage />} />
          <Route path="/tables/border-collapse" element={<BorderCollapsePage />} />
          <Route path="/tables/border-spacing" element={<BorderSpacingPage />} />
          <Route path="/tables/table-layout" element={<TableLayoutPage />} />
          <Route path="/tables/caption-side" element={<CaptionSidePage />} />
          <Route path="/filters/backdrop-sepia" element={<BackdropSepiaPage />} />
          <Route path="/transitions-animation/transition-property" element={<TransitionPropertyPage />} />
          <Route path="/transitions-animation/transition-timing-function" element={<TransitionTimingFunctionPage />} />
          <Route path="/transitions-animation/transition-duration" element={<TransitionDurationPage />} />
          <Route path="/transitions-animation/transition-delay" element={<TransitionDelayPage />} />
          <Route path="/transitions-animation/animation" element={<AnimationPage />} />
          <Route path="/transforms/scale" element={<ScalePage />} />
          <Route path="/transforms/rotate" element={<RotatePage />} />
          <Route path="/transforms/translate" element={<TranslatePage />} />
          <Route path="/transforms/skew" element={<SkewPage />} />
          <Route path="/transforms/transform-origin" element={<TransformOriginPage />} />
          <Route path="/interactivity/accent-color" element={<AccentColorPage />} />
          <Route path="/interactivity/cursor" element={<CursorPage />} />
          <Route path="/interactivity/caret-color" element={<CaretColorPage />} />
          <Route path="/interactivity/pointer-events" element={<PointerEventsPage />} />
          <Route path="/interactivity/resize" element={<ResizePage />} />
          <Route path="/interactivity/scroll-margin" element={<ScrollMarginPage />} />
          <Route path="/interactivity/scroll-padding" element={<ScrollPaddingPage />} />
          <Route path="/interactivity/scroll-behavior" element={<ScrollBehaviorPage />} />
          <Route path="/interactivity/scroll-snap-align" element={<ScrollSnapAlignPage />} />
          <Route path="/interactivity/scroll-snap-stop" element={<ScrollSnapStopPage />} />
          <Route path="/interactivity/scroll-snap-type" element={<ScrollSnapTypePage />} />
          <Route path="/interactivity/touch-action" element={<TouchActionPage />} />
          <Route path="/interactivity/user-select" element={<UserSelectPage />} />
          <Route path="/interactivity/will-change" element={<WillChangePage />} />
          <Route path="/svg/fill" element={<FillPage />} />
          <Route path="/svg/stroke" element={<StrokePage />} />
          <Route path="/svg/stroke-width" element={<StrokeWidthPage />} />
          <Route path="/accessibility/screen-readers" element={<ScreenReadersPage />} />
          <Route path="/layout/break-after" element={<BreakAfterPage />} />
          <Route path="/layout/break-before" element={<BreakBeforePage />} />
          <Route path="/layout/break-inside" element={<BreakInsidePage />} />
          <Route path="/layout/box-decoration-break" element={<BoxDecorationBreakPage />} />
          <Route path="/layout/display" element={<DisplayPage />} />
          <Route path="/layout/floats" element={<FloatsPage />} />
          <Route path="/layout/clear" element={<ClearPage />} />
          <Route path="/layout/isolation" element={<IsolationPage />} />
          <Route path="/layout/object-fit" element={<ObjectFitPage />} />
          <Route path="/layout/object-position" element={<ObjectPositionPage />} />
          <Route path="/layout/overflow" element={<OverflowPage />} />
          <Route path="/layout/overscroll-behavior" element={<OverscrollBehaviorPage />} />
          <Route path="/layout/position" element={<PositionPage />} />
          <Route path="/layout/top-right-bottom-left" element={<TopRightBottomLeftPage />} />
          <Route path="/layout/visibility" element={<VisibilityPage />} />
          <Route path="/layout/z-index" element={<ZIndexPage />} />
          {/* TODO: 他の静的ページルートや動的ルートをここに追加 */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
