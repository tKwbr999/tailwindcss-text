export interface ArticleInfo {
  name: string; // 表示名 (例: "Aspect Ratio")
  path: string; // ルーターパス (例: "#/layout/aspect-ratio")
  markdownPath: string; // 元のマークダウンファイルのパス
}

export interface SectionInfo {
  name: string; // セクション名 (例: "Layout")
  articles: ArticleInfo[];
}

// Helper function to format names (simple version for now)
const formatName = (rawName: string): string => {
  return rawName
    .replace(/^\d+_/, "") // Remove leading numbers and underscore
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\.md$/, "") // Remove .md extension
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" ");
};

// Helper function to create path, ensuring forward slashes for URL compatibility
const createPath = (sectionDir: string, articleFile: string): string => {
  const sectionName = sectionDir.replace(/^\d+_/, "");
  const articleName = articleFile.replace(/^\d+_/, "").replace(/\.md$/, "");
  // Explicitly join path segments with forward slashes for URL
  const pathSegments = ["", sectionName, articleName]; // Start with empty string for leading '/'
  return pathSegments.join("/");
};

// Manually construct the data based on the list_files result
// In a real application, this might be generated dynamically at build time
export const sections: SectionInfo[] = [
  {
    name: "Layout",
    articles: [
      {
        name: formatName("010_aspect-ratio.md"),
        path: createPath("010_layout", "010_aspect-ratio.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/010_aspect-ratio.md",
      },
      {
        name: formatName("020_container.md"),
        path: createPath("010_layout", "020_container.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/020_container.md",
      },
      {
        name: formatName("030_columns.md"),
        path: createPath("010_layout", "030_columns.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/030_columns.md",
      },
      {
        name: formatName("040_break-after.md"),
        path: createPath("010_layout", "040_break-after.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/040_break-after.md",
      },
      {
        name: formatName("050_break-before.md"),
        path: createPath("010_layout", "050_break-before.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/050_break-before.md",
      },
      {
        name: formatName("060_break-inside.md"),
        path: createPath("010_layout", "060_break-inside.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/060_break-inside.md",
      },
      {
        name: formatName("070_box-decoration-break.md"),
        path: createPath("010_layout", "070_box-decoration-break.md"),
        markdownPath:
          "tailwindcss-utilities-md/010_layout/070_box-decoration-break.md",
      },
      {
        name: formatName("080_box-sizing.md"),
        path: createPath("010_layout", "080_box-sizing.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/080_box-sizing.md",
      },
      {
        name: formatName("090_display.md"),
        path: createPath("010_layout", "090_display.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/090_display.md",
      },
      {
        name: formatName("100_floats.md"),
        path: createPath("010_layout", "100_floats.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/100_floats.md",
      },
      {
        name: formatName("110_clear.md"),
        path: createPath("010_layout", "110_clear.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/110_clear.md",
      },
      {
        name: formatName("120_isolation.md"),
        path: createPath("010_layout", "120_isolation.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/120_isolation.md",
      },
      {
        name: formatName("130_object-fit.md"),
        path: createPath("010_layout", "130_object-fit.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/130_object-fit.md",
      },
      {
        name: formatName("140_object-position.md"),
        path: createPath("010_layout", "140_object-position.md"),
        markdownPath:
          "tailwindcss-utilities-md/010_layout/140_object-position.md",
      },
      {
        name: formatName("150_overflow.md"),
        path: createPath("010_layout", "150_overflow.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/150_overflow.md",
      },
      {
        name: formatName("160_overscroll-behavior.md"),
        path: createPath("010_layout", "160_overscroll-behavior.md"),
        markdownPath:
          "tailwindcss-utilities-md/010_layout/160_overscroll-behavior.md",
      },
      {
        name: formatName("170_position.md"),
        path: createPath("010_layout", "170_position.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/170_position.md",
      },
      {
        name: formatName("180_top-right-bottom-left.md"),
        path: createPath("010_layout", "180_top-right-bottom-left.md"),
        markdownPath:
          "tailwindcss-utilities-md/010_layout/180_top-right-bottom-left.md",
      },
      {
        name: formatName("190_visibility.md"),
        path: createPath("010_layout", "190_visibility.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/190_visibility.md",
      },
      {
        name: formatName("200_z-index.md"),
        path: createPath("010_layout", "200_z-index.md"),
        markdownPath: "tailwindcss-utilities-md/010_layout/200_z-index.md",
      },
    ],
  },
  {
    name: "Flexbox & Grid", // Corrected name
    articles: [
      {
        name: formatName("010_flex-basis.md"),
        path: createPath("020_flexbox-grid", "010_flex-basis.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/010_flex-basis.md",
      },
      {
        name: formatName("020_flex-direction.md"),
        path: createPath("020_flexbox-grid", "020_flex-direction.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/020_flex-direction.md",
      },
      {
        name: formatName("030_flex-wrap.md"),
        path: createPath("020_flexbox-grid", "030_flex-wrap.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/030_flex-wrap.md",
      },
      {
        name: formatName("040_flex.md"),
        path: createPath("020_flexbox-grid", "040_flex.md"),
        markdownPath: "tailwindcss-utilities-md/020_flexbox-grid/040_flex.md",
      },
      {
        name: formatName("050_flex-grow.md"),
        path: createPath("020_flexbox-grid", "050_flex-grow.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/050_flex-grow.md",
      },
      {
        name: formatName("060_flex-shrink.md"),
        path: createPath("020_flexbox-grid", "060_flex-shrink.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/060_flex-shrink.md",
      },
      {
        name: formatName("070_order.md"),
        path: createPath("020_flexbox-grid", "070_order.md"),
        markdownPath: "tailwindcss-utilities-md/020_flexbox-grid/070_order.md",
      },
      {
        name: formatName("080_grid-template-columns.md"),
        path: createPath("020_flexbox-grid", "080_grid-template-columns.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/080_grid-template-columns.md",
      },
      {
        name: formatName("090_grid-column.md"),
        path: createPath("020_flexbox-grid", "090_grid-column.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/090_grid-column.md",
      },
      {
        name: formatName("100_grid-template-rows.md"),
        path: createPath("020_flexbox-grid", "100_grid-template-rows.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/100_grid-template-rows.md",
      },
      {
        name: formatName("110_grid-row.md"),
        path: createPath("020_flexbox-grid", "110_grid-row.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/110_grid-row.md",
      },
      {
        name: formatName("120_grid-auto-flow.md"),
        path: createPath("020_flexbox-grid", "120_grid-auto-flow.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/120_grid-auto-flow.md",
      },
      {
        name: formatName("130_grid-auto-columns.md"),
        path: createPath("020_flexbox-grid", "130_grid-auto-columns.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/130_grid-auto-columns.md",
      },
      {
        name: formatName("140_grid-auto-rows.md"),
        path: createPath("020_flexbox-grid", "140_grid-auto-rows.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/140_grid-auto-rows.md",
      },
      {
        name: formatName("150_gap.md"),
        path: createPath("020_flexbox-grid", "150_gap.md"),
        markdownPath: "tailwindcss-utilities-md/020_flexbox-grid/150_gap.md",
      },
      {
        name: formatName("160_justify-content.md"),
        path: createPath("020_flexbox-grid", "160_justify-content.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/160_justify-content.md",
      },
      {
        name: formatName("170_justify-items.md"),
        path: createPath("020_flexbox-grid", "170_justify-items.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/170_justify-items.md",
      },
      {
        name: formatName("180_justify-self.md"),
        path: createPath("020_flexbox-grid", "180_justify-self.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/180_justify-self.md",
      },
      {
        name: formatName("190_align-content.md"),
        path: createPath("020_flexbox-grid", "190_align-content.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/190_align-content.md",
      },
      {
        name: formatName("200_align-items.md"),
        path: createPath("020_flexbox-grid", "200_align-items.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/200_align-items.md",
      },
      {
        name: formatName("210_align-self.md"),
        path: createPath("020_flexbox-grid", "210_align-self.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/210_align-self.md",
      },
      {
        name: formatName("220_place-content.md"),
        path: createPath("020_flexbox-grid", "220_place-content.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/220_place-content.md",
      },
      {
        name: formatName("230_place-items.md"),
        path: createPath("020_flexbox-grid", "230_place-items.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/230_place-items.md",
      },
      {
        name: formatName("240_place-self.md"),
        path: createPath("020_flexbox-grid", "240_place-self.md"),
        markdownPath:
          "tailwindcss-utilities-md/020_flexbox-grid/240_place-self.md",
      },
    ],
  },
  {
    name: "Spacing",
    articles: [
      {
        name: formatName("010_padding.md"),
        path: createPath("030_spacing", "010_padding.md"),
        markdownPath: "tailwindcss-utilities-md/030_spacing/010_padding.md",
      },
      {
        name: formatName("020_margin.md"),
        path: createPath("030_spacing", "020_margin.md"),
        markdownPath: "tailwindcss-utilities-md/030_spacing/020_margin.md",
      },
      {
        name: formatName("030_space-between.md"),
        path: createPath("030_spacing", "030_space-between.md"),
        markdownPath:
          "tailwindcss-utilities-md/030_spacing/030_space-between.md",
      },
    ],
  },
  {
    name: "Sizing",
    articles: [
      {
        name: formatName("010_width.md"),
        path: createPath("040_sizing", "010_width.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/010_width.md",
      },
      {
        name: formatName("020_min-width.md"),
        path: createPath("040_sizing", "020_min-width.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/020_min-width.md",
      },
      {
        name: formatName("030_max-width.md"),
        path: createPath("040_sizing", "030_max-width.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/030_max-width.md",
      },
      {
        name: formatName("040_height.md"),
        path: createPath("040_sizing", "040_height.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/040_height.md",
      },
      {
        name: formatName("050_min-height.md"),
        path: createPath("040_sizing", "050_min-height.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/050_min-height.md",
      },
      {
        name: formatName("060_max-height.md"),
        path: createPath("040_sizing", "060_max-height.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/060_max-height.md",
      },
      {
        name: formatName("070_size.md"),
        path: createPath("040_sizing", "070_size.md"),
        markdownPath: "tailwindcss-utilities-md/040_sizing/070_size.md",
      },
    ],
  },
  {
    name: "Typography",
    articles: [
      {
        name: formatName("010_font-family.md"),
        path: createPath("050_typography", "010_font-family.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/010_font-family.md",
      },
      {
        name: formatName("020_font-size.md"),
        path: createPath("050_typography", "020_font-size.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/020_font-size.md",
      },
      {
        name: formatName("030_font-smoothing.md"),
        path: createPath("050_typography", "030_font-smoothing.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/030_font-smoothing.md",
      },
      {
        name: formatName("040_font-style.md"),
        path: createPath("050_typography", "040_font-style.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/040_font-style.md",
      },
      {
        name: formatName("050_font-weight.md"),
        path: createPath("050_typography", "050_font-weight.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/050_font-weight.md",
      },
      {
        name: formatName("060_font-variant-numeric.md"),
        path: createPath("050_typography", "060_font-variant-numeric.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/060_font-variant-numeric.md",
      },
      {
        name: formatName("070_letter-spacing.md"),
        path: createPath("050_typography", "070_letter-spacing.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/070_letter-spacing.md",
      },
      {
        name: formatName("080_line-clamp.md"),
        path: createPath("050_typography", "080_line-clamp.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/080_line-clamp.md",
      },
      {
        name: formatName("090_line-height.md"),
        path: createPath("050_typography", "090_line-height.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/090_line-height.md",
      },
      {
        name: formatName("100_list-style-image.md"),
        path: createPath("050_typography", "100_list-style-image.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/100_list-style-image.md",
      },
      {
        name: formatName("110_list-style-position.md"),
        path: createPath("050_typography", "110_list-style-position.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/110_list-style-position.md",
      },
      {
        name: formatName("120_list-style-type.md"),
        path: createPath("050_typography", "120_list-style-type.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/120_list-style-type.md",
      },
      {
        name: formatName("130_text-align.md"),
        path: createPath("050_typography", "130_text-align.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/130_text-align.md",
      },
      {
        name: formatName("140_text-color.md"),
        path: createPath("050_typography", "140_text-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/140_text-color.md",
      },
      {
        name: formatName("150_text-decoration.md"),
        path: createPath("050_typography", "150_text-decoration.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/150_text-decoration.md",
      },
      {
        name: formatName("160_text-decoration-color.md"),
        path: createPath("050_typography", "160_text-decoration-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/160_text-decoration-color.md",
      },
      {
        name: formatName("170_text-decoration-style.md"),
        path: createPath("050_typography", "170_text-decoration-style.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/170_text-decoration-style.md",
      },
      {
        name: formatName("180_text-decoration-thickness.md"),
        path: createPath("050_typography", "180_text-decoration-thickness.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/180_text-decoration-thickness.md",
      },
      {
        name: formatName("190_text-underline-offset.md"),
        path: createPath("050_typography", "190_text-underline-offset.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/190_text-underline-offset.md",
      },
      {
        name: formatName("200_text-transform.md"),
        path: createPath("050_typography", "200_text-transform.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/200_text-transform.md",
      },
      {
        name: formatName("210_text-overflow.md"),
        path: createPath("050_typography", "210_text-overflow.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/210_text-overflow.md",
      },
      {
        name: formatName("220_text-wrap.md"),
        path: createPath("050_typography", "220_text-wrap.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/220_text-wrap.md",
      },
      {
        name: formatName("230_text-indent.md"),
        path: createPath("050_typography", "230_text-indent.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/230_text-indent.md",
      },
      {
        name: formatName("240_vertical-align.md"),
        path: createPath("050_typography", "240_vertical-align.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/240_vertical-align.md",
      },
      {
        name: formatName("250_whitespace.md"),
        path: createPath("050_typography", "250_whitespace.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/250_whitespace.md",
      },
      {
        name: formatName("260_word-break.md"),
        path: createPath("050_typography", "260_word-break.md"),
        markdownPath:
          "tailwindcss-utilities-md/050_typography/260_word-break.md",
      },
      {
        name: formatName("270_hyphens.md"),
        path: createPath("050_typography", "270_hyphens.md"),
        markdownPath: "tailwindcss-utilities-md/050_typography/270_hyphens.md",
      },
      {
        name: formatName("280_content.md"),
        path: createPath("050_typography", "280_content.md"),
        markdownPath: "tailwindcss-utilities-md/050_typography/280_content.md",
      },
    ],
  },
  {
    name: "Backgrounds",
    articles: [
      {
        name: formatName("010_background-attachment.md"),
        path: createPath("060_backgrounds", "010_background-attachment.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/010_background-attachment.md",
      },
      {
        name: formatName("020_background-clip.md"),
        path: createPath("060_backgrounds", "020_background-clip.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/020_background-clip.md",
      },
      {
        name: formatName("030_background-color.md"),
        path: createPath("060_backgrounds", "030_background-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/030_background-color.md",
      },
      {
        name: formatName("040_background-origin.md"),
        path: createPath("060_backgrounds", "040_background-origin.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/040_background-origin.md",
      },
      {
        name: formatName("050_background-position.md"),
        path: createPath("060_backgrounds", "050_background-position.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/050_background-position.md",
      },
      {
        name: formatName("060_background-repeat.md"),
        path: createPath("060_backgrounds", "060_background-repeat.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/060_background-repeat.md",
      },
      {
        name: formatName("070_background-size.md"),
        path: createPath("060_backgrounds", "070_background-size.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/070_background-size.md",
      },
      {
        name: formatName("080_background-image.md"),
        path: createPath("060_backgrounds", "080_background-image.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/080_background-image.md",
      },
      {
        name: formatName("090_gradient-color-stops.md"),
        path: createPath("060_backgrounds", "090_gradient-color-stops.md"),
        markdownPath:
          "tailwindcss-utilities-md/060_backgrounds/090_gradient-color-stops.md",
      },
    ],
  },
  {
    name: "Borders",
    articles: [
      {
        name: formatName("010_border-radius.md"),
        path: createPath("070_borders", "010_border-radius.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/010_border-radius.md",
      },
      {
        name: formatName("020_border-width.md"),
        path: createPath("070_borders", "020_border-width.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/020_border-width.md",
      },
      {
        name: formatName("030_border-color.md"),
        path: createPath("070_borders", "030_border-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/030_border-color.md",
      },
      {
        name: formatName("040_border-style.md"),
        path: createPath("070_borders", "040_border-style.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/040_border-style.md",
      },
      {
        name: formatName("050_divide-width.md"),
        path: createPath("070_borders", "050_divide-width.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/050_divide-width.md",
      },
      {
        name: formatName("060_divide-color.md"),
        path: createPath("070_borders", "060_divide-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/060_divide-color.md",
      },
      {
        name: formatName("070_divide-style.md"),
        path: createPath("070_borders", "070_divide-style.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/070_divide-style.md",
      },
      {
        name: formatName("080_outline-width.md"),
        path: createPath("070_borders", "080_outline-width.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/080_outline-width.md",
      },
      {
        name: formatName("090_outline-color.md"),
        path: createPath("070_borders", "090_outline-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/090_outline-color.md",
      },
      {
        name: formatName("100_outline-style.md"),
        path: createPath("070_borders", "100_outline-style.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/100_outline-style.md",
      },
      {
        name: formatName("110_outline-offset.md"),
        path: createPath("070_borders", "110_outline-offset.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/110_outline-offset.md",
      },
      {
        name: formatName("120_ring-width.md"),
        path: createPath("070_borders", "120_ring-width.md"),
        markdownPath: "tailwindcss-utilities-md/070_borders/120_ring-width.md",
      },
      {
        name: formatName("130_ring-color.md"),
        path: createPath("070_borders", "130_ring-color.md"),
        markdownPath: "tailwindcss-utilities-md/070_borders/130_ring-color.md",
      },
      {
        name: formatName("140_ring-offset-width.md"),
        path: createPath("070_borders", "140_ring-offset-width.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/140_ring-offset-width.md",
      },
      {
        name: formatName("150_ring-offset-color.md"),
        path: createPath("070_borders", "150_ring-offset-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/070_borders/150_ring-offset-color.md",
      },
    ],
  },
  {
    name: "Effects",
    articles: [
      {
        name: formatName("010_box-shadow.md"),
        path: createPath("080_effects", "010_box-shadow.md"),
        markdownPath: "tailwindcss-utilities-md/080_effects/010_box-shadow.md",
      },
      {
        name: formatName("020_box-shadow-color.md"),
        path: createPath("080_effects", "020_box-shadow-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/080_effects/020_box-shadow-color.md",
      },
      {
        name: formatName("030_opacity.md"),
        path: createPath("080_effects", "030_opacity.md"),
        markdownPath: "tailwindcss-utilities-md/080_effects/030_opacity.md",
      },
      {
        name: formatName("040_mix-blend-mode.md"),
        path: createPath("080_effects", "040_mix-blend-mode.md"),
        markdownPath:
          "tailwindcss-utilities-md/080_effects/040_mix-blend-mode.md",
      },
      {
        name: formatName("050_background-blend-mode.md"),
        path: createPath("080_effects", "050_background-blend-mode.md"),
        markdownPath:
          "tailwindcss-utilities-md/080_effects/050_background-blend-mode.md",
      },
    ],
  },
  {
    name: "Filters",
    articles: [
      {
        name: formatName("010_blur.md"),
        path: createPath("090_filters", "010_blur.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/010_blur.md",
      },
      {
        name: formatName("020_brightness.md"),
        path: createPath("090_filters", "020_brightness.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/020_brightness.md",
      },
      {
        name: formatName("030_contrast.md"),
        path: createPath("090_filters", "030_contrast.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/030_contrast.md",
      },
      {
        name: formatName("040_drop-shadow.md"),
        path: createPath("090_filters", "040_drop-shadow.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/040_drop-shadow.md",
      },
      {
        name: formatName("050_grayscale.md"),
        path: createPath("090_filters", "050_grayscale.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/050_grayscale.md",
      },
      {
        name: formatName("060_hue-rotate.md"),
        path: createPath("090_filters", "060_hue-rotate.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/060_hue-rotate.md",
      },
      {
        name: formatName("070_invert.md"),
        path: createPath("090_filters", "070_invert.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/070_invert.md",
      },
      {
        name: formatName("080_saturate.md"),
        path: createPath("090_filters", "080_saturate.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/080_saturate.md",
      },
      {
        name: formatName("090_sepia.md"),
        path: createPath("090_filters", "090_sepia.md"),
        markdownPath: "tailwindcss-utilities-md/090_filters/090_sepia.md",
      },
      {
        name: formatName("100_backdrop-blur.md"),
        path: createPath("090_filters", "100_backdrop-blur.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/100_backdrop-blur.md",
      },
      {
        name: formatName("110_backdrop-brightness.md"),
        path: createPath("090_filters", "110_backdrop-brightness.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/110_backdrop-brightness.md",
      },
      {
        name: formatName("120_backdrop-contrast.md"),
        path: createPath("090_filters", "120_backdrop-contrast.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/120_backdrop-contrast.md",
      },
      {
        name: formatName("130_backdrop-grayscale.md"),
        path: createPath("090_filters", "130_backdrop-grayscale.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/130_backdrop-grayscale.md",
      },
      {
        name: formatName("140_backdrop-hue-rotate.md"),
        path: createPath("090_filters", "140_backdrop-hue-rotate.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/140_backdrop-hue-rotate.md",
      },
      {
        name: formatName("150_backdrop-invert.md"),
        path: createPath("090_filters", "150_backdrop-invert.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/150_backdrop-invert.md",
      },
      {
        name: formatName("160_backdrop-opacity.md"),
        path: createPath("090_filters", "160_backdrop-opacity.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/160_backdrop-opacity.md",
      },
      {
        name: formatName("170_backdrop-saturate.md"),
        path: createPath("090_filters", "170_backdrop-saturate.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/170_backdrop-saturate.md",
      },
      {
        name: formatName("180_backdrop-sepia.md"),
        path: createPath("090_filters", "180_backdrop-sepia.md"),
        markdownPath:
          "tailwindcss-utilities-md/090_filters/180_backdrop-sepia.md",
      },
    ],
  },
  {
    name: "Tables",
    articles: [
      {
        name: formatName("010_border-collapse.md"),
        path: createPath("100_tables", "010_border-collapse.md"),
        markdownPath:
          "tailwindcss-utilities-md/100_tables/010_border-collapse.md",
      },
      {
        name: formatName("020_border-spacing.md"),
        path: createPath("100_tables", "020_border-spacing.md"),
        markdownPath:
          "tailwindcss-utilities-md/100_tables/020_border-spacing.md",
      },
      {
        name: formatName("030_table-layout.md"),
        path: createPath("100_tables", "030_table-layout.md"),
        markdownPath: "tailwindcss-utilities-md/100_tables/030_table-layout.md",
      },
      {
        name: formatName("040_caption-side.md"),
        path: createPath("100_tables", "040_caption-side.md"),
        markdownPath: "tailwindcss-utilities-md/100_tables/040_caption-side.md",
      },
    ],
  },
  {
    name: "Transitions & Animation", // Corrected name
    articles: [
      {
        name: formatName("010_transition-property.md"),
        path: createPath(
          "110_transitions-animation",
          "010_transition-property.md",
        ),
        markdownPath:
          "tailwindcss-utilities-md/110_transitions-animation/010_transition-property.md",
      },
      {
        name: formatName("020_transition-duration.md"),
        path: createPath(
          "110_transitions-animation",
          "020_transition-duration.md",
        ),
        markdownPath:
          "tailwindcss-utilities-md/110_transitions-animation/020_transition-duration.md",
      },
      {
        name: formatName("030_transition-timing-function.md"),
        path: createPath(
          "110_transitions-animation",
          "030_transition-timing-function.md",
        ),
        markdownPath:
          "tailwindcss-utilities-md/110_transitions-animation/030_transition-timing-function.md",
      },
      {
        name: formatName("040_transition-delay.md"),
        path: createPath(
          "110_transitions-animation",
          "040_transition-delay.md",
        ),
        markdownPath:
          "tailwindcss-utilities-md/110_transitions-animation/040_transition-delay.md",
      },
      {
        name: formatName("050_animation.md"),
        path: createPath("110_transitions-animation", "050_animation.md"),
        markdownPath:
          "tailwindcss-utilities-md/110_transitions-animation/050_animation.md",
      },
    ],
  },
  {
    name: "Transforms",
    articles: [
      {
        name: formatName("010_scale.md"),
        path: createPath("120_transforms", "010_scale.md"),
        markdownPath: "tailwindcss-utilities-md/120_transforms/010_scale.md",
      },
      {
        name: formatName("020_rotate.md"),
        path: createPath("120_transforms", "020_rotate.md"),
        markdownPath: "tailwindcss-utilities-md/120_transforms/020_rotate.md",
      },
      {
        name: formatName("030_translate.md"),
        path: createPath("120_transforms", "030_translate.md"),
        markdownPath:
          "tailwindcss-utilities-md/120_transforms/030_translate.md",
      },
      {
        name: formatName("040_skew.md"),
        path: createPath("120_transforms", "040_skew.md"),
        markdownPath: "tailwindcss-utilities-md/120_transforms/040_skew.md",
      },
      {
        name: formatName("050_transform-origin.md"),
        path: createPath("120_transforms", "050_transform-origin.md"),
        markdownPath:
          "tailwindcss-utilities-md/120_transforms/050_transform-origin.md",
      },
    ],
  },
  {
    name: "Interactivity",
    articles: [
      {
        name: formatName("010_accent-color.md"),
        path: createPath("130_interactivity", "010_accent-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/010_accent-color.md",
      },
      {
        name: formatName("020_appearance.md"),
        path: createPath("130_interactivity", "020_appearance.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/020_appearance.md",
      },
      {
        name: formatName("030_cursor.md"),
        path: createPath("130_interactivity", "030_cursor.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/030_cursor.md",
      },
      {
        name: formatName("040_caret-color.md"),
        path: createPath("130_interactivity", "040_caret-color.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/040_caret-color.md",
      },
      {
        name: formatName("050_pointer-events.md"),
        path: createPath("130_interactivity", "050_pointer-events.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/050_pointer-events.md",
      },
      {
        name: formatName("060_resize.md"),
        path: createPath("130_interactivity", "060_resize.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/060_resize.md",
      },
      {
        name: formatName("070_scroll-behavior.md"),
        path: createPath("130_interactivity", "070_scroll-behavior.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/070_scroll-behavior.md",
      },
      {
        name: formatName("080_scroll-margin.md"),
        path: createPath("130_interactivity", "080_scroll-margin.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/080_scroll-margin.md",
      },
      {
        name: formatName("090_scroll-padding.md"),
        path: createPath("130_interactivity", "090_scroll-padding.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/090_scroll-padding.md",
      },
      {
        name: formatName("100_scroll-snap-align.md"),
        path: createPath("130_interactivity", "100_scroll-snap-align.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/100_scroll-snap-align.md",
      },
      {
        name: formatName("110_scroll-snap-stop.md"),
        path: createPath("130_interactivity", "110_scroll-snap-stop.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/110_scroll-snap-stop.md",
      },
      {
        name: formatName("120_scroll-snap-type.md"),
        path: createPath("130_interactivity", "120_scroll-snap-type.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/120_scroll-snap-type.md",
      },
      {
        name: formatName("130_touch-action.md"),
        path: createPath("130_interactivity", "130_touch-action.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/130_touch-action.md",
      },
      {
        name: formatName("140_user-select.md"),
        path: createPath("130_interactivity", "140_user-select.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/140_user-select.md",
      },
      {
        name: formatName("150_will-change.md"),
        path: createPath("130_interactivity", "150_will-change.md"),
        markdownPath:
          "tailwindcss-utilities-md/130_interactivity/150_will-change.md",
      },
    ],
  },
  {
    name: "Svg",
    articles: [
      {
        name: formatName("010_fill.md"),
        path: createPath("140_svg", "010_fill.md"),
        markdownPath: "tailwindcss-utilities-md/140_svg/010_fill.md",
      },
      {
        name: formatName("020_stroke.md"),
        path: createPath("140_svg", "020_stroke.md"),
        markdownPath: "tailwindcss-utilities-md/140_svg/020_stroke.md",
      },
      {
        name: formatName("030_stroke-width.md"),
        path: createPath("140_svg", "030_stroke-width.md"),
        markdownPath: "tailwindcss-utilities-md/140_svg/030_stroke-width.md",
      },
    ],
  },
  {
    name: "Accessibility",
    articles: [
      {
        name: formatName("010_screen-readers.md"),
        path: createPath("150_accessibility", "010_screen-readers.md"),
        markdownPath:
          "tailwindcss-utilities-md/150_accessibility/010_screen-readers.md",
      },
    ],
  },
];
