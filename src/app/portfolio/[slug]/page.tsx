import HotelDetailClient from "@/components/HotelDetailClient";

interface HotelDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const { slug } = await params;
  
  return <HotelDetailClient slug={slug} />;
}
