import { Theme, getThemeColors, highlight } from "@code-hike/lighter"
import { siteConfig } from "@/config/site"

export async function Code({
  content,
  language,
}: {
  content: string
  language: string
  lineNumbers?: boolean
  theme?: Theme
}) {
  const { lines, style } = await highlight(
    content.trimEnd(),
    language,
    siteConfig.highlighter.theme
  )

  const colors = await getThemeColors(siteConfig.highlighter.theme)
  const { color, background } = style

  const lineCount = lines.length
  const digits = lineCount.toString().length

  const kids = lines.map((tokens, i) => (
    <span key={i}>
      {siteConfig.highlighter.lineNumbers && (
        <span className="bright-ln" style={{ width: `${digits}ch` }}>
          {i + 1}
        </span>
      )}
      {tokens.map((t, j) => (
        <span key={j} style={t.style}>
          {t.content}
        </span>
      ))}
      <br />
    </span>
  ))

  return (
    <pre
      style={{
        color,
        background,
        padding: "1em",
        borderRadius: "4px",
      }}
    >
      <style>{`
        code ::selection {
          background-color: ${colors.editor.selectionBackground};
        }
        .bright-ln {
          color: ${colors.editorLineNumber.foreground};
          padding-right: 2ch;
          display: inline-block;
          text-align: right;
          user-select: none;
        }
      `}</style>
      <code>{kids}</code>
    </pre>
  )
}