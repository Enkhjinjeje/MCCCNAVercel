import WorkingOnPage from "../components/shared/WorkingOnPage"
import { unfinishedPages } from "../lib/unfinished-pages.mjs"

export default WorkingOnPage

export function getStaticPaths() {
  return {
    paths: Object.keys(unfinishedPages).map((path) => ({ params: { path: path.split("/") } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const pageName = unfinishedPages[params.path.join("/")]
  if (!pageName) return { notFound: true }
  return { props: { pageName } }
}
