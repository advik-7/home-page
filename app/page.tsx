import Hero from "@/components/Hero"
import LaunchPromo from "@/components/LaunchPromo"
import MarketStats from "@/components/MarketStats"
import AIBenefits from "@/components/AIBenefits"
import PricingPreview from "@/components/PricingPreview"

export default function Home() {
  return (
    <div>
      <Hero />
      <LaunchPromo />
      <MarketStats />
      <AIBenefits />
      <PricingPreview />
    </div>
  )
}

