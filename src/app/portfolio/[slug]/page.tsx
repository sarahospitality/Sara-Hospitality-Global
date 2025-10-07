import PortfolioDetailClient from "@/components/PortfolioDetailClient";

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  
  return <PortfolioDetailClient slug={slug} />;
}
