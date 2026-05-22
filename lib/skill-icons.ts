/** Simple Icons slug + brand color for cdn.simpleicons.org */
export type SkillIconConfig = {
  slug: string
  color?: string
}

const SKILL_ICON_MAP: Record<string, SkillIconConfig> = {
  pytorch: { slug: 'pytorch', color: 'EE4C2C' },
  tensorflow: { slug: 'tensorflow', color: 'FF6F00' },
  opencv: { slug: 'opencv', color: '5C3EE8' },
  'scikit-learn': { slug: 'scikitlearn', color: 'F7931E' },
  scipy: { slug: 'scipy', color: '8CAAE6' },
  crewai: { slug: 'openai', color: '412991' },
  langchain: { slug: 'langchain', color: '1C3C3C' },
  langgraph: { slug: 'langchain', color: '1C3C3C' },
  'r studio': { slug: 'r', color: '276DC3' },
  r: { slug: 'r', color: '276DC3' },
  labview: { slug: 'ni', color: '76B900' },
  'jupyter notebook': { slug: 'jupyter', color: 'F37626' },
  streamlit: { slug: 'streamlit', color: 'FF4B4B' },
  'power bi': { slug: 'powerbi', color: 'F2C811' },
  plotly: { slug: 'plotly', color: '3F4F75' },
  matplotlib: { slug: 'python', color: '3776AB' },
  aws: { slug: 'amazonaws', color: 'FF9900' },
  azure: { slug: 'microsoftazure', color: '0078D4' },
  'google colab': { slug: 'googlecolab', color: 'F9AB00' },
  'github actions': { slug: 'githubactions', color: '2088FF' },
  docker: { slug: 'docker', color: '2496ED' },
  'ci/cd': { slug: 'githubactions', color: '2088FF' },
  airbyte: { slug: 'airbyte', color: '615EFF' },
  python: { slug: 'python', color: '3776AB' },
  sql: { slug: 'postgresql', color: '4169E1' },
  javascript: { slug: 'javascript', color: 'F7DF1E' },
}

function normalizeSkillKey(name: string): string {
  return name
    .replace(/\(certified\)/gi, '')
    .replace(/\(.*\)/g, '')
    .trim()
    .toLowerCase()
}

export function getSkillIcon(name: string): SkillIconConfig | null {
  const key = normalizeSkillKey(name)
  if (SKILL_ICON_MAP[key]) return SKILL_ICON_MAP[key]

  const partial = Object.keys(SKILL_ICON_MAP).find(
    (k) => key.includes(k) || k.includes(key)
  )
  return partial ? SKILL_ICON_MAP[partial] : null
}

export function getSkillIconUrl(name: string): string | null {
  const icon = getSkillIcon(name)
  if (!icon) return null
  return icon.color
    ? `https://cdn.simpleicons.org/${icon.slug}/${icon.color}`
    : `https://cdn.simpleicons.org/${icon.slug}`
}
