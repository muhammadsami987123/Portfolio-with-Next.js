import { hackathonProjects } from '@/data/hackathon-projects';
import HackathonProjectDetailClient from '@/components/HackathonProjectDetailClient';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const project = hackathonProjects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Muhammad Sami`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  }
}

export async function generateStaticParams() {
    return hackathonProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default function Page() {
    return <HackathonProjectDetailClient />;
}
