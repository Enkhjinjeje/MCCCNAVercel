import Image from "next/image"
import Link from "next/link"
import { getPublicClient } from "../../lib/supabase/server"
import { programAliases } from "../../lib/public-routes.mjs"

export default function Program({ program }) {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[400px]">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-white max-w-4xl px-4">
            {program.title}
          </h1>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-gray-600 mb-4 whitespace-pre-wrap">{program.description}</p>
        <p className="text-gray-600 mb-8 whitespace-pre-wrap">{program.details}</p>
        <Link href="/programs" className="text-brand-blue font-semibold">
          ← Back to All Programs
        </Link>
      </section>
    </div>
  )
}
export async function getServerSideProps({ params }) {
  const slug = programAliases[params.slug] || params.slug
  const { data: program, error } = await getPublicClient()
    .from("programs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .is("deleted_at", null)
    .maybeSingle()
  if (error) throw new Error("Unable to load program.")
  if (!program) return { notFound: true }
  if (slug !== params.slug)
    return { redirect: { destination: `/programs/${slug}`, permanent: true } }
  return { props: { program } }
}
