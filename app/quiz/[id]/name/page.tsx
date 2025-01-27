import NameForm from '@/app/components/NameForm'

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }]
}

export default function NamePage({ params }: PageProps) {
  return <NameForm chapterId={params.id} />
} 