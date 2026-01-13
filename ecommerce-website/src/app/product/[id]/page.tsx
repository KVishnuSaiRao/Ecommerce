import ProductDetails from "@/components/ProductDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return <ProductDetails productId={id} />;
}