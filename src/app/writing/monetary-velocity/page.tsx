"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Download } from "lucide-react";

function DancingTitle({
  text,
  className,
  level = 3,
  underline = false,
}: {
  text: string;
  className: string;
  level?: 1 | 3 | "span";
  underline?: boolean;
}) {
  const letters = text.split("");
  const content = (
    <>
      {letters.map((char, i) => (
        <motion.span
          key={`${text}-${char}-${i}`}
          layoutId={`monetary-velocity-${text.replace(/\W/g, "-")}-char-${i}`}
          className="select-none"
          initial="initial"
          animate="dance"
          variants={{
            initial: { y: 0 },
            hover: {
              y: [0, -20, 0],
              transition: { duration: 0.4, ease: "easeOut" },
            },
            dance: {
              y: [0, -20, 0],
              transition: { duration: 0.4, ease: "easeOut", delay: i * 0.06 },
            },
          }}
        >
          {char === " " ? "\u00a0" : char}
        </motion.span>
      ))}
      {underline && (
        <motion.div
          layoutId={`monetary-velocity-${text.replace(/\W/g, "-")}-underline`}
          className="absolute -bottom-2 left-0 h-1 w-full bg-accent md:h-2"
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </>
  );

  const sharedProps = {
    className: `relative inline-flex cursor-default flex-wrap ${className}`,
    initial: "initial",
    whileHover: "hover",
    style: { fontFamily: '"Courier New", Courier, monospace' },
  };

  if (level === 1) return <motion.h1 {...sharedProps}>{content}</motion.h1>;
  if (level === "span") return <motion.span {...sharedProps}>{content}</motion.span>;
  return <motion.h3 {...sharedProps}>{content}</motion.h3>;
}

function Footnote({ id, text }: { id: string; text: string }) {
  return (
    <sup className="cursor-help text-accent font-bold px-0.5 group relative">
      {id}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-foreground text-background text-[10px] leading-tight rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl border border-accent/20 normal-case font-normal">
        {text}
      </span>
    </sup>
  );
}

export default function MonetaryVelocity() {
  const pdfUrl = "/monetary-velocity.pdf";
  
  return (
    <motion.main
      className="min-h-screen pb-12"
      style={{ fontFamily: '"Courier New", Courier, monospace' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="px-6 md:px-12 pt-12 flex justify-between items-center mb-12">
        <Link href="/writing" className="text-sm font-bold hover:text-accent transition-colors flex items-center gap-2 group w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> back to writing
        </Link>
        <ThemeToggle />
      </div>

      <div className="px-6 md:px-12 max-w-screen-xl mx-auto mb-24">
        <div className="mb-12 border-b border-foreground/10 pb-12">
          <DancingTitle
            text="monetary velocity"
            level={1}
            underline
            className="mb-6 text-4xl md:text-6xl font-bold tracking-tighter"
          />
          <div className="space-y-2">
            <p className="text-sm opacity-50 tracking-widest leading-relaxed">
              advisor: professor john sarich<br />
              fall 2025
            </p>
            <p className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] lowercase mt-4 flex items-center gap-2">
              <Trophy className="w-4 h-4 fill-current" /> nominated for the charles goodman essay award in humanities
            </p>
          </div>
        </div>

        {/* Academic Context */}
        <div className="bg-accent/5 p-8 border-l-4 border-accent mb-16">
          <p className="text-lg font-medium leading-relaxed">
            this project was developed for <strong>SS-347 Macroeconomics</strong> at the cooper union, reexamining the quantity theory of money with a focus on its dependence on privatized financial institutions and digital transaction systems. i explore the abstraction of the velocity term and the relationship between flow and stock variables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                thesis
              </h3>
              <p className="text-lg opacity-80 leading-relaxed">
                this paper argues that the velocity term in the equation MV = PY should be understood as an endogenous outcome of institutional structure rather than as a passive residual. by rearranging the identity to emphasize velocity, i clarify how circulation depends on who controls money creation and how monetary resources are distributed.
              </p>
            </div>
          </div>
          
          <div className="space-y-8 bg-foreground/[0.02] p-8 rounded-lg border border-foreground/5">
            <h3 className="text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
              conceptual nodes
            </h3>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  endogenous velocity
                </span>
                <p className="text-sm opacity-70">challenging the neoclassical view of velocity as a stable residual, instead framing it as a result of institutional power and credit allocation.</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  privatized money creation
                </span>
                <p className="text-sm opacity-70">emphasizing that commercial banks create money through lending, placing control over circulation within the private financial sector.</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  digital illusion
                </span>
                <p className="text-sm opacity-70">arguing that faster digital settlement mechanics do not necessarily increase the frequency of transactions tied to real output.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Full Article Content */}
        <article className="max-w-4xl mx-auto space-y-12 text-lg leading-relaxed opacity-90 border-t border-foreground/10 pt-24">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Introduction</h2>
            <p>
              The Quantity Theory of Money is commonly expressed through the identity MV = PY, which links the money supply, velocity, prices, and output. Despite its simplicity, this equation has supported vastly different interpretations across schools of economic thought. In most contemporary treatments, emphasis is placed on the money supply and inflation, while velocity is either assumed to be stable or treated as an inconvenient source of noise in otherwise clean models. As a result, velocity often functions as a residual term, absorbing unexplained variation, rather than as a variable worthy of independent analysis. Velocity is typically treated as the ratio of nominal output to the available money supply, serving as a residual measure of how intensively money is used.
            </p>
            <p>
              This treatment has become increasingly inadequate in modern economies shaped by financial privatization, credit-based money creation, and digital payments. The assumption that velocity fluctuates smoothly around a stable trend relies on institutional conditions that no longer hold. Money today is no longer primarily government-issued currency circulating physically among households, but rather a system of bank-created deposits mediated through private financial institutions. Under these conditions, velocity cannot be understood without reference to credit allocation, financial incentives, and monetary architecture.
            </p>
            <p>
              This paper advances the argument that velocity should be treated as an endogenous, institutionally driven variable. Rearranging to V = PY/M show velocity’s dependence on distribution and access, rather than on aggregate quantities alone. The frequency with which money circulates depends on where money enters the economy, who receives it, and how it is used. These are not neutral outcomes, but decisions shaped by profit motives, regulation, and financial concentration.
            </p>
            <p>
              Recent work by McLeay, et al. provides a critical foundation for this argument by demonstrating that commercial banks create new money through lending, rather than lending out preexisting funds. This insight makes clear that velocity cannot be analyzed in isolation from private banking. By combining classical theory, monetarist assumptions, and post-Keynesian institutional analysis, this paper reframes velocity as a function of privatized money creation in a digital economy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">The Quantity Theory of Money and the Neoclassical Assumptions Behind Velocity</h2>
            <p>
              Although MV = PY is an identity, its economic meaning depends entirely on the assumptions imposed upon it. In its earliest formulations, including those associated with Irving Fisher, velocity was treated as sufficiently stable to permit causal claims linking money supply growth to nominal income. This stability assumption allowed economists to focus on money supply control as the principal policy variable.
            </p>
            <p>
              The neoclassical and monetarist tradition articulates this position most clearly. In “The Quantity Theory of Money: A Restatement,” Milton Friedman argues that velocity behaves predictably over the long run because money demand is governed by stable preferences, institutional arrangements, and technologies. Within this framework, the money supply is treated as exogenous and controlled by public authorities, while velocity fluctuates within narrow, manageable bounds. This permits a clean mapping from monetary growth to inflation, reinforcing the policy relevance of quantity-based control.
            </p>
            <p>
              Several assumptions underlie this approach. First, commercial banks are assumed to function primarily as intermediaries rather than as creators of money. Second, financial institutions are largely neutral in their effects on aggregate circulation. Third, income distribution and credit allocation are treated as secondary to aggregate relationships. Together, these assumptions allow velocity to be treated as analytically convenient rather than institutionally contingent. Once these assumptions are relaxed, particularly the assumption of money's exogeneity, the interpretation of velocity changes fundamentally.
            </p>
            <p>
              Keynesian critiques introduce uncertainty and expectations into this framework, emphasizing the instability of money demand. Nevertheless, even these approaches often treat velocity as a reflection of household psychology rather than institutional power. This paper departs from both views by arguing that velocity is actively shaped by the structure of the financial system and by the privatized mechanisms that govern money creation and distribution.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Privatized Banking, Credit Creation, and the Institutional Control of Velocity</h2>
            <p>
              In modern economies, the assumption of an exogenous money supply no longer holds. As McLeay, Radia, and Thomas demonstrate, the majority of money is created when commercial banks issue loans, simultaneously generating deposits that function as spendable money. This process places control over effective money supply, and therefore velocity, within the private financial sector.
            </p>
            <p>
              When banks expand credit to households with high marginal propensities to consume, money circulates rapidly through goods and services markets. When credit is directed toward speculative activity, asset accumulation, or corporate balance sheets, money may circulate slowly despite nominal expansion. Velocity thus depends not only on the money supply but also on the structure of credit allocation.
            </p>
            <p>
              Privatization intensifies these effects by aligning money creation with profit maximization rather than macroeconomic stability. Financial concentration further magnifies this influence by allowing large institutions to shape systemic circulation while remaining insulated from failure. These dynamics show why velocity exhibits sharp swings during financial cycles and why monetary policy often fails to generate predictable real outcomes.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Monetary Aggregates, Financial Innovation, and Conceptual Breakdown</h2>
            <p>
              The instability of velocity is exacerbated by ambiguity surrounding the definition of money itself. Traditional aggregates such as M1 and M2 no longer correspond cleanly to transactional behavior. Savings deposits, money market funds, and digital balances can be converted instantly into spendable money.
            </p>

            {/* Embedded FRED Graph - Contextual Placement - Wider Breakout - Shifted Right */}
            <div className="my-16 relative left-1/2 -translate-x-1/2 ml-16 w-[calc(100vw-8rem)] max-w-screen-xl border border-foreground/10 bg-foreground/5 overflow-hidden group shadow-inner rounded-xl">
              <div className="h-[500px] md:h-[620px] w-full flex items-center justify-center">
                <iframe 
                  src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1W10z&width=1275&height=610" 
                  className="w-full h-full border-none grayscale group-hover:grayscale-0 transition-all duration-700"
                  scrolling="no"
                  allowtransparency="true"
                  loading="lazy"
                />
              </div>
              <div className="bg-foreground/[0.03] border-t border-foreground/10 py-4 px-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60 text-center">
                  figure 1: time-series of velocity in the united states (data: st. louis fed)
                </p>
              </div>
            </div>

            <p>
              McLeay et al. emphasize that modern money consists overwhelmingly of bank deposits rather than physical cash. Roughly 97% of the broad money supply in modern economies like the UK. Changes in measured velocity often reflect shifts between aggregates rather than genuine behavioral changes. This undermines the empirical usefulness of velocity as traditionally measured. Figure 1 shows the velocity of M2 money in the United States over time, capturing how frequently a dollar within the M2 money supply is used to purchase final goods and services during a given period. M2 is employed here as a broad measure of money, under the assumption that circulation includes not only immediately liquid assets but also funds that can be readily converted into transactional use. For much of the postwar period, velocity fluctuates within a relatively narrow range. This apparent stability helps explain why neoclassical and monetarist economists viewed velocity as sufficiently constant to support traditional, self-regulating policy models.
            </p>
            <p>
              However, beginning in the early 2000s, this assumption became increasingly untenable. The sustained decline in velocity coincides with significant financial innovation and the financial sector's expanding dominance. Automated payment systems, sweep accounts, and advanced liquidity management tools allow money to remain within the financial system without consistently entering goods and services markets. As a result, velocity increasingly reflects financial architecture rather than underlying economic fundamentals such as productive capacity or consumer demand.
            </p>
            <p>
              Velocity reached its peak in the late 1990s during a period characterized by strong wage growth, broad-based consumption, high investment, and relatively limited financial hoarding. From the early 2000s onward, however, velocity began a persistent decline that continues even outside of recessions. This pattern suggests that the drop is structural rather than merely cyclical. Each subsequent recovery fails to restore velocity to prior levels as the financial sector grows in scale, income inequality rises, credit becomes increasingly asset-focused, and a greater share of money circulates within financial channels rather than through consumption.
            </p>
            <p>
              These developments point to a blockage in monetary circulation rather than a simple contraction in spending. The changing composition and deployment of the money supply alter how money moves through the economy, weakening the relationship between money growth and real economic activity. This supports the broader claim that velocity is endogenous: it is not merely a function of prices and output, as summarized in GDP, but depends critically on how the business cycle is institutionally structured. As financialization and digitalization intensify, the business cycle itself becomes increasingly shaped by financial mechanisms, making it unreasonable to assume that output will rise in proportion to monetary expansion.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Digital Transactions and the Illusion of Acceleration</h2>
            <p>
              Digital payment systems are frequently assumed to increase velocity by accelerating transactions. Faster settlement, real-time transfers, and frictionless payments are often interpreted as evidence that money is circulating more rapidly through the economy. Nevertheless, transaction speed is not equivalent to circulation frequency. Digitalization alters settlement mechanics without necessarily increasing the number of transactions tied to real output.
            </p>
            <p>
              This misconception can be attributed to the idea that, as cash becomes a smaller share of the money supply, the expansion of digital currency creates greater potential for circulation. However, this circulation is primarily concentrated within the payment infrastructure rather than in the creation of new demand. While digitalization changes the method by which transactions occur, long-term spending behavior often remains unchanged due to binding income constraints, credit limits, and the fact that digital payments primarily represent substitution rather than expansion of consumption, and are therefore volatile and fragile. The modern banking system, with increased digitalization such as advertising credit cards, is linked to the growth of the financial sector, which would increase short-term activity; however, it would not sustain any real long-term growth, like how the quantity theory of money would generally assume.
            </p>
            <p>
              In the short term, these effects can be conflated with genuine increases in circulation. Lower transaction frictions, reduced salience of money, and faster settlement can lead to marginal increases in impulse spending. However, these effects are modest and highly context-dependent, and they do not produce sustained increases in aggregate consumption. Over time, the underlying constraints on spending reassert themselves, limiting the impact of payment technology on overall demand.
            </p>
            <p>
              Velocity increases only when money enters repeated cycles of spending on goods and services, rather than remaining within financial or transactional infrastructure. Digital systems tend to amplify the effects of privatized credit creation but do not independently increase circulation. In many cases, they facilitate the absorption of money into financial channels, weakening the link between money creation and real economic activity.
            </p>
            <p>
              The empirical evidence supports this interpretation. If digitalization directly raised consumption, velocity would be expected to increase steadily as payments became more digitized. Instead, velocity in the United States declines sharply after 2000, even as digital payment systems expand rapidly. This divergence suggests that digitalization alters how money moves without increasing its economic deployment, reinforcing the argument that velocity is shaped by institutional structure rather than by transaction technology alone.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Prices, Output, and Expectational Feedbacks</h2>
            <p>
              Prices and output affect velocity through both behavioral and structural channels. When inflation is expected, households and firms accelerate spending, increasing transaction frequency and raising velocity as nominal expenditures rise relative to the money supply. Conversely, deflationary expectations encourage postponement of consumption and investment, causing money to accumulate in deposits and reducing circulation. Output constraints further complicate this relationship: when productive capacity cannot expand, increases in money and demand may translate into higher prices or asset inflation rather than real output, limiting the number of transactions tied to goods and services.
            </p>
            <p>
              Private credit allocation critically mediates these feedback effects. Credit directed toward productive investment and wage growth supports repeated income and spending cycles, increasing velocity through multiplier effects. By contrast, speculative lending inflates asset prices without expanding output or employment, increasing money holdings without proportional growth in nominal spending. Distributional dynamics reinforce this outcome, as income concentration among low-spending households reduces aggregate transaction turnover. Taken together, these mechanisms demonstrate that changes in prices and output influence velocity not mechanically but through institutional pathways that determine how money is deployed within the economy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Future Velocity in a Privatized Monetary System</h2>
            <p>
              Velocity may rise periodically due to consumer credit expansion or fiscal intervention, but structural forces of inequality, financial concentration, and asset-based accumulation exert downward pressure on long-run circulation. Digitalization increases volatility rather than stability. Digitalization will continue to amplify inequality, accelerate credit cycles, keep money idle in financial form, and increase volatility in velocity, as economic circulation becomes increasingly concentrated among a small number of financial actors.
            </p>
            <p>
              In the absence of institutional reform, velocity will remain sensitive to private incentives rather than to public control. Monetary policy frameworks assuming stable velocity therefore risk systematic misinterpretation of economic dynamics.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Conclusion</h2>
            <p>
              Velocity should be understood not as a neutral scaling factor, but as a function of institutional power embedded in modern financial systems. Privatized banking determines how money is created, distributed, and circulated, shaping velocity independently of the money supply.
            </p>
            <p>
              Digitalization amplifies these effects without resolving underlying instability. As a result, MV = PY remains valid as an identity but misleading as a policy guide unless velocity is treated as an institutionally governed variable. In a financialized and digital economy, understanding velocity requires confronting the privatized architecture of money creation itself.
            </p>
          </section>

          <section className="pt-12 border-t border-foreground/10 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Works Cited</h2>
            <ul className="text-sm space-y-2 opacity-60 list-decimal pl-4">
              <li>Board of Governors of the Federal Reserve System. "Money Stock Measures - H.6 Release: Technical Q&As." 2021.</li>
              <li>Federal Reserve Bank of St. Louis. "Velocity of M2 Money Stock (M2V)." FRED Economic Data. 2025.</li>
              <li>Fisher, Irving. The Purchasing Power of Money: Its Determination and Relation to Credit, Interest, and Crises. New York: Macmillan, 1911.</li>
              <li>Friedman, Milton. “The Quantity Theory of Money: A Restatement.” In Studies in the Quantity Theory of Money (1956).</li>
              <li>McLeay, Michael, Amar Radia, and Ryland Thomas. “Money Creation in the Modern Economy.” 2014.</li>
              <li>Minsky, Hyman P. Stabilizing an Unstable Economy. Yale University Press, 1986.</li>
            </ul>
          </section>

          <section className="pt-8 text-xs italic opacity-40 text-center">
            Footnotes and additional attributions are mentioned in the PDF of this paper.
          </section>
        </article>

        {/* Download Section */}
        <div className="max-w-4xl mx-auto mt-24 flex justify-center pb-24">
          <a 
            href={pdfUrl} 
            download
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] border-2 border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <Download className="w-5 h-5" /> download full paper (pdf)
          </a>
        </div>
      </div>
      
      <footer className="max-w-screen-xl mx-auto px-6 md:px-12 opacity-30 text-[10px] tracking-[0.3em] py-12 border-t border-foreground/5 mt-24">
        © 2026 nolan griffith
      </footer>
    </motion.main>
  );
}
