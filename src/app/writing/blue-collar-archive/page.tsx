"use client"

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

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
          layoutId={`blue-collar-${text.replace(/\W/g, "-")}-char-${i}`}
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
          layoutId={`blue-collar-${text.replace(/\W/g, "-")}-underline`}
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

export default function BlueCollarArchive() {
  const pdfUrl = "/blue-collar-archive.pdf";
  
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
            text="feeling work: the blue collar archive"
            level={1}
            underline
            className="mb-6 text-3xl md:text-5xl font-bold tracking-tighter"
          />
          <div className="space-y-2">
            <p className="text-sm opacity-50 tracking-widest leading-relaxed">
              advisor: professor victor peterson iii<br />
              fall 2025
            </p>
          </div>
        </div>

        {/* Academic Context */}
        <div className="bg-accent/5 p-8 border-l-4 border-accent mb-16">
          <p className="text-lg font-medium leading-relaxed">
            this project was developed for <strong>HUM-355: Race and Gender in Literature</strong>. i wrote this after being impacted by my experiences working in a BMW manufacturing plant in south carolina in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-accent lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                abstract
              </h3>
              <p className="text-lg opacity-80 leading-relaxed">
                this paper explores the representations of blue-collar work not only as an economic role but also as part of a greater cultural archive. it argues that through literature, oral history, music, and art, we can recognize the lived experience, stories, mood, and silences about working-class life.
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
                  archival absence
                </span>
                <p className="text-sm opacity-70">exploring saidiya hartman’s critical fabulation to reconstruct lives rendered inconsequential by official history.</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  collective moods
                </span>
                <p className="text-sm opacity-70">analyzing how moods like pride, frustration, and invisibility become social and contagious states among workers.</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-black text-sm tracking-wider underline underline-offset-4 decoration-accent/40 lowercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                  spatial politics
                </span>
                <p className="text-sm opacity-70">connecting geography, race, and labor to understand how place organizes visibility, opportunity, and exclusion.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Full Article Content */}
        <article className="max-w-4xl mx-auto space-y-12 text-lg leading-relaxed opacity-90 border-t border-foreground/10 pt-24">
            <h1 className="text-4xl font-bold pt-8">Feeling Work: The Blue Collar Archive</h1>
            <h2 className="text-xl font-bold pt-4">Abstract</h2>
            <p>This paper explores the representations of blue-collar work not only as an economic role but also as part of a greater cultural archive. It argues that through literature, oral history, music, and art, we can recognize the lived experience, stories, mood, and silences about working-class life. This archive preserves aspects that the official record neglects.</p>
            <p>Bringing together the work of Saidiya Hartman on archival absence and critical fabulation, Jonathan Michael Flatley’s writing on collective moods, and Robin D.G. Kelley’s analysis of labor and culture, the paper develops a framework for examining blue-collar narratives through the lens of race, geography, and gender.</p>
            <p>These categories shape who is visible as a worker, how labor is valued, and which stories survive. The paper also connects this framework to the psychological and cultural effects of blue-collar life, including my own experience working in an industrial plant. The paper concludes by contending that blue-collar narratives form a living archive through which one can observe both the burdens and the dignity of work in modern society.</p>
            <h2 className="text-2xl font-bold pt-8">Introduction: What Counts as an Archive?</h2>
            <p>When we think of archives, we usually think of a formal assemblage of documents: payroll records, census tables, accident reports, or company ledgers. In the case of blue-collar work, these are often the only traces that official history leaves behind. We can learn how many people worked a specific job, how much they got paid, and what they produced. What we don’t see is what it felt like to show up every day, what kind of pressure workers felt, or how they understood their place in the world.</p>
            <p>This project starts from the idea that those fragments have to be found elsewhere. Instead of treating the archive as a series of neutral facts, I follow Saidiya Hartman’s argument that archives are shaped by power: by decisions about whose stories matter enough to record and whose can be left out. She emphasizes that the silence in the record is not an accident but the result of social and political choices. For blue-collar workers, that means their inner lives and daily experiences often don’t show up in the traditional sources historians rely on.</p>
            <p>Because of that, I treat literature, oral history, music, and lived experience as a different kind of archive. These forms capture what official records miss: the routines and frictions of everyday labor, the ways workers talk to each other, the types of jokes they make, the pride or shame they feel, and the strategies they use to get through the day. They also register what is missing or unsaid. A novel might hint at a character’s exhaustion without ever naming it directly. An interview might talk about a painful story without fully telling it. These gaps are part of the archive as well.</p>
            <p>In this sense, an archive on this project is not a building full of boxes. It’s a messy and incomplete set of stories, moods, and memories that make their way through time. Hartman’s method of “critical fabulation” is to use imagination cautiously to supply what the record leaves out. This has been important for thinking about how to read these stories. Instead of accepting the archive’s silence as proof that nothing happened, she treats absence as a sign that something was pushed out of view. This is important in understanding blue-collar life, which is everywhere in practice but strangely thin in official memory.</p>
            <p>From this basis, I concentrate on three forces that structure how blue-collar labor enters this cultural archive: race, geography, and gender. On one hand, race contours who are visible as workers and how their labor is interpreted; geography intervenes in how work is tied to land, motion, and possibility; and gender mediates whose labor counts as real work and whose disappears into the substrate. Together, these categories condition what is recalled and what is forgotten.</p>
            <h2 className="text-2xl font-bold pt-8">Race: Visibility, Exclusion, and Creative Survival</h2>
            <p>One of the key forces that determines the appearance of blue-collar labor within the archive is race. Workers of color often appear within narratives of exclusion and economic insecurity. They are relegated to hazardous, physically demanding jobs, even as they are considered disposable. Only the explicit laborers are seen, of those who lift, carry, clean, or build, though their skills and perceptions go largely ignored.</p>
            <p>At the same time, literature about racialized workers does not only show victimhood. It often shows how people create meaning, culture, and community amid those constraints. Work can be a site of exploitation and also a site of pride. People form friendships at work, develop shared jokes and rhythms, and find ways to support each other. This tension between marginalization and creativity complicates the archival record beyond a simple story of suffering.</p>
            <p>Hartman’s approach helps explain why so many stories about racialized workers feel incomplete. She argues that the archive itself is structured by power and routinely renders certain lives inconsequential. She makes this explicit, as she notes that “by [this archive] exploiting the ‘transparency of sources’ as fictions of history, [she] wanted to make visible the production of disposable lives.” Because of this, what remains in the historical record are often only “fragments” and “traces” rather than full narratives. Rather than treating these fragments as a failure of evidence, Hartman builds a method around them. She describes her work as pressing “at the limits of the archive” and engaging in “critical fabulation,” a practice that combines historical research with imagination, so we can reconstruct what has been systematically excised, while also remaining accountable to the archive itself. This approach reframes absence as meaningful, showing how silence and omission point to the racial structures that shaped which lives were deemed worth recording at all.</p>
            <p>We must note that Hartman is careful not to definitively invent details of inner lives, since we cannot know every detail of a lived experience. She focuses on conditions, constraints, and choices, while leaving contradictions unresolved; she writes to ask questions rather than answer everything.</p>
            <p>Central to this method is narrative restraint: the refusal to fill in gaps or offer closure. Instead, Hartman reframes archival silence as a space for what she calls “black noise:” the shrieks, moans, opacity, and excess that resist legibility and law. These sounds gesture toward forms of life and aspiration that are “derelict to capitalism” and incompatible with its dominant narratives of labor, order, and value. Silence, in this sense, is not emptiness but evidence of the racial structures that determine whose suffering is documented, whose work is naturalized, and whose lives are allowed narrative coherence at all.</p>
            <p>An explicit example of this is the narrative produced in the movie Hidden Figures. The role played by Black women mathematicians in the Space Race in the 1950s and 60s is ignored.  They were essentially seen as human computers, devoid of importance, save for the function they performed: performing essential calculations for the first American crewed space flights. Their work survived and was even praised and built upon, but they were not considered necessary at the time. Their presence was erased for the most part.</p>
            <p>Even today, Black women in STEM careers form only a small fraction of the common workforce. The number may have been higher if these pioneers who worked at NASA had a more pronounced archival presence and were more celebrated. Their celebrated presence in history may have made them the ideal role models for generations of Black women who came after them.</p>
            <p>Applied to blue-collar narratives, this means reading the silences around racialized labor as meaningful. The same can be said regarding gendered labor, which will be introduced in more depth later. When a story skips over how a character got injured on the job or why a particular neighborhood looks the way it does, that gap can point to the underlying racial structures that shape work.</p>
            <p>Robin D. G. Kelley introduces a different analytic framework by shifting attention to culture and everyday life as central ideas of political struggle. Writing on working-class history, he argues that resistance is not confined to formal protests, unions, or organized movements, but is also embedded in music, style, humor, leisure, and ordinary refusals of control. More specifically, Kelley emphasizes that “Black working-class culture was created more for pleasure than to challenge or explain domination,” underlining the idea that cultural practices are not merely reactive but generative. These practices matter, he suggests, because they reveal how working people imagine freedom even under conditions of extreme constraint. As Kelley notes, “lived experience [and] the imagined world of what is possible” are not separable; together, they produce a form of politics grounded in everyday life rather than explicit opposition. Within this expanded understanding of politics, cultural expression becomes a space in which alternative values and futures can be rehearsed even when material conditions remain unchanged. Kelley’s interpretation ultimately challenges the tendency to view politics as strictly oppositional or bipolar, insisting instead that imaginative and cultural practices constitute a critical, if often overlooked, dimension of political life.</p>
            <p>The work of rapper Nas is an example of how the Black blue-collar experience can serve as the basis for testimony about the Black experience. He is forthright in his lyrics in describing the Black lived experience as everyday survival.  Nas has lived the life he describes, and his lyrics reflect the hope, despair, humor, and politics of everyday survival. His lyrics do not speak for the Black working class but speak from experience within that world. His descriptions of violence, hope, or longing are not standalone stories but come from a communal experience. His lyrics represent what Kelley says is the inseparability between “imagination of what’s possible and the lived experience.”</p>
            <p>This perspective is beneficial for reading blue-collar texts because it resists treating workers as passive objects within economic systems. Even when shaped by racial hierarchies and class discipline, workers cultivate forms of meaning, pleasure, and refusal that go beyond just the logics of productivity and control.</p>
            <p>Taken together, Hartman and Kelley provide a framework for understanding race as more than a demographic category within blue-collar narratives. Race structures who is visible in the archive and in what form, determining whose labor appears as skill, whose appears as brute force, and whose disappears altogether. Hartman’s attention to archival absence reveals how racialized workers are often preserved only through fragments, silences, or moments of injury and disposability, while Kelley’s focus on everyday culture insists that these same workers are never reducible to those conditions alone. Read together, their work shows that a tension between racial surveillance and creative survival shapes blue-collar labor. Race influences who gets hired, what kinds of jobs they are given, how closely they are monitored, and how their work is remembered, but it does not fully determine how workers live, imagine, or find meaning within those constraints.</p>
            <p>In the archive of blue-collar life, race governs not only who appears and who is omitted, but also how labor is interpreted: whether it is seen as respectable, expendable, criminal, or simply invisible. Reading these narratives through Hartman and Kelley makes clear that blue-collar texts are not just documents of work, but records of how race organizes visibility, value, and the possibilities of everyday life itself.</p>
            <h2 className="text-2xl font-bold pt-8">Geography: Place as a Hidden Organizer</h2>
            <p>Race does not operate in a vacuum; it is inseparable from geography: where people live, where jobs are concentrated, and how easily movement between spaces is allowed or restricted. In this project, geography functions less as a discrete topic than as a background condition that renders other dynamics legible. It shapes what kinds of work are available, how workers encounter and access those jobs, and how that labor is valued or stigmatized. Spatial organization, neighborhood boundaries, proximity to industry, and patterns of segregation not only shape economic opportunity but also how race and labor are lived and understood. Geography, then, is not merely the setting of blue-collar labor but an active force in shaping the racial conditions under which work becomes possible, visible, and meaningful.</p>
            <p>In rural settings, work is often tied to land and inheritance. Jesmyn Ward's Salvage the Bones serves as a good example of this. Her characters live in a poor, rural community in Mississippi where land, family, and survival are tightly connected. Work feels less like a choice and more like something handed down. In such a place, blue-collar labor is part of a longer story about race, poverty, and the environment. It is physically exhausting but also emotionally binding: people are attached to the places that limit them.</p>
            <p>Christopher W. Clark’s reading of Salvage the Bones helps clarify the connections among geography, race, and labor. He argues that Ward deliberately centers a poor Black working-class family in Mississippi, rather than New Orleans, to show how Katrina exposes a “state of African-American precariousness” that is regional and structural, not just individual misfortune. The Batistes live in “the poorest state in the nation,” surrounded by rusted cars, the Pit, and a “bleeding” landscape that looks like a scab; their environment is literally scarred by neglect and extraction. Their daily routines of fixing broken machinery, caring for animals, scavenging, and preparing for the storm are all forms of survival work, and the novel names them as such. This survival work is explicitly marked as belonging to a particular population: Black, poor, working-class. This is set apart from the “general” public who have the resources to evacuate or be protected. Ward’s storm narrative, in Clark’s terms, becomes a way of insisting that these lives and their labor are not marginal to the story of Katrina or the South but central to it.</p>
            <p>If rural geography binds labor to land, the following historical question is what happens when that attachment becomes untenable. For many Black working-class Southerners, the connection between labor and place did not simply persist; rather, it fractured. Economic exhaustion, environmental catastrophe, and racial violence made survival in rural spaces increasingly impossible, producing migration not as freedom but as necessity. Movement, in this sense, was not a break from blue-collar labor but its continuation under different spatial conditions.</p>
            
            <div className="my-12">
              <img src="https://lawrencemigration.phillipscollection.org/sites/default/files/styles/panel/public/MOMA_Panel28_900.jpg?itok=WAr_M0Ky" alt="Migration Series Panel 28" className="w-full rounded-lg shadow-lg" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 text-center mt-4 italic">
                Figure 1: “The labor agent sent south by northern industry was a familiar presence in the Black communities.”
              </p>
            </div>

            <p>This dynamic appears clearly in Jacob Lawrence’s Migration Series, particularly in Figure 1. The image reframes migration not as spontaneous movement or individual escape, but as an organized transfer of labor. Black Southern workers are not simply leaving rural hardship behind; they are being actively recruited into Northern industrial systems to meet labor demand. Geography once again operates as an active force, reorganizing labor by relocating it. The same bodies that were bound to land and inheritance in the rural South are reabsorbed into factories, rail yards, and urban blue-collar economies, where survival work continues under new forms of surveillance, discipline, and vulnerability.</p>
            <p>Within the United States, specific historical circumstances made this shift possible. In the agricultural South, rural, labor-intensive work was the norm for Black workers well into the early twentieth century, with economic opportunity tightly tied to land and racial hierarchy. Around 1910, however, Northern companies began sending labor agents into Southern Black communities to recruit workers for industrial jobs in the North. The onset of World War I intensified this process, as Northern factories faced acute labor shortages when existing workers left to join the war effort. Lawrence's panel captures this moment visually, portraying labor agents as both familiar and disruptive. These are symbols of how industrial capitalism reached into rural Black life to extract labor.</p>
            <p>Southern states quickly recognized the threat this posed to their agricultural economies and racial order. In response, many passed laws criminalizing labor recruitment in an effort to keep Black workers tied to land-based, low-wage labor in the South. Migration, then, was never simply about opportunity; it was contested terrain, shaped by competing economic interests and enforced through legal and spatial control.</p>
            <p>For those who did migrate, arrival in the industrial North brought new challenges. Migrants faced unfamiliar environments, discrimination, job competition, and segregation, even as they left behind the overt constraints of southern rural labor. The historical record emphasizes that migration was fueled by a collective sense of hope: the possibility of escape from poverty, racial terror, and the inherited limitations of rural working conditions. That hope, however fragile, became the driving force of the Great Migration, carrying blue-collar laborers from one restrictive geography into another, rather than delivering them into true economic freedom.</p>
            <p>Urban settings are vastly different in blue-collar narratives. In Studs Terkel’s Working, a collection of oral histories from a wide range of workers, the environment is defined by movement, density, and fragmentation. Jobs appear and disappear. People shift from one industry to another, from neighborhood to neighborhood, and even from city to city. Many of the workers Terkel interviews express sentiments of being replaceable, that their jobs were “too small” for what they wanted out of life. Here, the work of blue-collar workers is less about inheritance and more about a continuing search for stability.</p>
            <p>Both rural and urban locations shape how race and class appear in the archive. The same type of occupation (factory work or farm labor) can be understood to carry different meanings depending on the context. In one rural town, it is a point of continuity. In a city, it might indicate instability of sustainable work and stagnation. Geography accounts for this in part: blue-collar life seems different across texts, even though the tasks themselves remain similar.</p>
            <p>Rather than making the idea of place a different theme, I use it as a bridge. Geography is the hidden structure that makes certain stories possible and others unlikely. It sets the stage on which race and gender play out.</p>
            <h2 className="text-2xl font-bold pt-8">Gender: Whose Labor Counts?</h2>
            <p>Gender adds another layer to the archive of blue-collar labor. In many stories, the “typical” blue-collar worker is male: someone whose labor is judged by its physical demands. Heavy lifting, long hours, dangerous conditions, and visible exhaustion all help define what counts as “real” work in these stories. Masculinity is tied to endurance and sacrifice.</p>
            <p>But so much labor falls outside that model. Caring, affective work, and the unseen labor sustaining households and communities are often feminized, both in life and in literature. Those labors are very real and even very essential, usually unpaid but rarely valued as work in their own right. They appear as a backdrop rather than as the story’s foreground. This invisible work is necessary for capitalism to function, yet it is unrecorded in official statistics and unrewarded in conventional ways. This work usually happens in private spaces and is considered a moral obligation to allow society to function with no voice and no official records in history. The movie Hidden Figures again exemplifies the invisible labor of women. In this case, once more, they happened to be Black and marginalised. Their presence was not considered significant, despite their work being critical to the space mission.</p>
            <p>This has consequences for the archive. When we think about blue-collar work, we're more likely to picture someone on a construction site than someone doing overnight care for an elderly relative, even though both may be equally exhausting. Women’s work often appears in the record as “help,” “support,” or “responsibility,” rather than as a job. That means it is easier to overlook and harder to name.</p>
            <p>Other texts resist this trope by making women’s work central. They depict women engaged in hard labor or juggling multiple tasks simultaneously. At such moments, the sense of strength becomes increasingly complex. Endurance is no longer about lifting; it is also about staying, coordinating, and absorbing stress.</p>
            <p>Within this framework, gender is not just another demographic category. It affects who gets recognized as a worker, which activities are counted as labor, and whose effort is taken for granted. It determines which stories get told and which remain implied.</p>
            <h2 className="text-2xl font-bold pt-8">Mood: The Emotional State of Work</h2>
            <p>The archive of blue-collar life, so far, has been conceptualized in terms of its shaping by race, place, and gender. These very structures, however, also condition the feel of work. Many narratives of blue-collar life describe the psychic burden of routine and a shared emotional state: waking at the same hour, doing the same things, facing the same pressures. They also describe the psychic weight of invisibility: knowing that the work is necessary, but that most people would never see or think about who actually does it.</p>
            <p>Jonathan Michael Flatley’s writing on mood and politics is useful here. He writes that feelings are not only individual; they circulate through groups and become part of the way people make sense of their situation. This creates a collective experience that defines the “modern subject.” In the context of blue-collar work, this might mean that tiredness, frustration, pride, and even numbness are social and contagious, not just individually experienced. Literature and oral history preserve these moods across time and embed them into the cultural archive.</p>
            <p>My own experience working in an industrial plant gives me another entry point into this question. On one hand, the job made me feel very replaceable; the tasks were standardized, and it seemed like anyone else could have been trained to do them. On the other hand, actually doing the work gave me a sense of responsibility and competence: I became familiar with the rhythms of the place, the small shortcuts people took, and the informal rules that never showed up on paper. That mix of invisibility and importance, feeling both small and central at the same time, is something I now recognize in many of the texts I'm reading.</p>
            <p>These psychological effects are not independent of economics or culture. They emerge from how jobs are organized, who performs them, and the temporal horizon attached to them. At the same time, they echo older distinctions of status and class, including the lingering language of “collars.” During my time in the plant, I became aware of how sharply these categories were enforced through everyday interactions. Interns, many of whom held undergraduate degrees and were technically white-collar workers, circulated through the factory in ways that were structurally distinct from those on the assembly line. We were rarely assigned to floor labor unless we explicitly requested it, and our presence was framed as temporary, educational, and upward-moving rather than sustaining or necessary.</p>
            <p>This distinction became more visible in conversation. Workers would ask whether I had kids: a question that revealed not curiosity so much as a different orientation toward work itself. For many on the line, the job was inseparable from long-term responsibility, stability, and survival. For me, with fewer obligations and a more straightforward exit path, the work carried a different weight. The categorization intensified when a worker jokingly referred to the interns as “the smart kids of the factory.” Though framed humorously, the comment reinforced a hierarchy of value that separated intellectual labor from physical labor, even as both coexisted in the same space. These informal classifications produced subtle forms of social conflict and divergent norms about effort, endurance, and competence.</p>
            <p>The resulting sense of being “othered” was not purely individual but atmospheric, a shared mood shaped by what kind of work one did and how one was perceived to approach problems. Traits such as attention to detail, physical strength, and perseverance were implicitly sorted and assigned value, becoming tools through which the factory experience was made legible. Yet this mood was not static. In moments of collective gathering, particularly in shared spaces like the cafeteria, these distinctions occasionally blurred. Tension did not disappear, but it became a point of connection rather than separation. The very friction produced by difference could generate a fragile sense of unity: a shared, inarticulable understanding rooted in participation in the same process, even if from unequal positions.</p>
            <p>While the line between blue-collar and white-collar work has become increasingly blurred, especially as labor across sectors grows more precarious and tightly managed, the emotional patterns historically associated with blue-collar life remain powerful. Routine, physical strain, pride in craft, and the experience of being overlooked continue to shape how work is lived and felt. These dimensions persist even as formal job categories become less distinct, suggesting that class is not only an economic position but an emotional and cultural structure that endures through everyday practice.</p>
            <h2 className="text-2xl font-bold pt-8">Conclusion</h2>
            <p>Taken together, these strands suggest that blue-collar narratives do more than provide background color or realistic detail; they are a living archive of work and its meanings. Because official records tend to flatten labor into numbers and outputs, we see how stories, interviews, and even personal memories are where the texture of working-class life survives.</p>
            <p>Race, geography, and gender are the lenses through which that archive appears. They determine who appears in the narratives, what work individuals do, and how their labors are regarded. They also partly explain what is missing. When certain workers barely show up in the record, that absence is not just an oversight; it tells us something about whose lives were seen as worth documenting.</p>
            <p>Through a reading practice that spans novels, oral histories, theoretical texts, and lived experience, this project approaches blue-collar identity as produced in and through representation. Work is not just a thing people do to survive; it’s also a mode of visibility or invisibility in the world. The archive that forms around blue-collar life is incomplete and uneven, but it is active. It is constantly changing as new stories are told, as old ones are revisited.</p>
            <p>In that sense, the link between blue-collar work and the “real world” is not just economic; it's also cultural and emotional. The stories we tell about work shape how we understand inequality, dignity, and belonging. They influence how we imagine the future of labor and who we think deserves recognition within it.</p>
        </article>

        {/* Bibliography Section */}
        <div className="max-w-4xl mx-auto mt-24 pt-12 border-t border-foreground/10">
          <h2 className="text-2xl font-bold mb-8">Bibliography</h2>
          <ul className="text-sm space-y-4 opacity-70 list-decimal pl-4">
            <li>Aelarsen. “Hidden Figures: Laudable Liberties.” An Historian Goes to the Movies (blog), February 12, 2017. Accessed December 14, 2025. https://aelarsen.wordpress.com/2017/02/12/hidden-figures-laudable-lies/.</li>
            <li>Ginfray, Denise. “Review of Affective Mapping: Melancholia and the Politics of Modernism, by Jonathan Flatley.” Modern Fiction Studies 59, no. 4 (Winter 2013): 857–60. JSTOR 26287288.</li>
            <li>Hartman, Saidiya. “Venus in Two Acts.” Small Axe 12, no. 2 (2008): 1–14. https://muse.jhu.edu/article/241115.</li>
            <li>Kelley, Robin D. G. “‘We Are Not What We Seem’: Rethinking Black Working-Class Opposition in the Jim Crow South.” The Journal of American History 80, no. 1 (1993): 75–112. https://doi.org/10.2307/2079698.</li>
            <li>Lawrence, Jacob. The Labor Agent Sent South by Northern Industry Was a Familiar Presence in the Black Communities (Panel 28 of The Migration Series). 1940–41. The Phillips Collection. Accessed December 14, 2025. https://lawrencemigration.phillipscollection.org/the-migration-series/panels/28/the-labor-agent-sent-south-by-northern-industry-was-a-familiar-presence-in-the-black-communities.</li>
            <li>Macalester College. “Macalester professor writes about Nas’s ‘Illmatic’ album in relation to Critical Race Theory.” YouTube video, 3:57. May 17, 2023. http://www.youtube.com/watch?v=dRec-QV1MXA.</li>
            <li>National Archives and Records Administration. “The Great Migration (1910–1970).” National Archives. Accessed December 14, 2025. https://www.archives.gov/research/african-americans/migrations/great-migration.</li>
            <li>Terkel, Studs. Working: People Talk About What They Do All Day and How They Feel About What They Do. New York: Pantheon Books, 1974. Accessed December 14, 2025. https://files.libcom.org/files/Working%20-%20Studs%20Terkel.pdf.</li>
          </ul>
        </div>
        
        {/* Presentation Section */}
        <div className="max-w-4xl mx-auto mt-24 pt-12 border-t border-foreground/10">
          <h2 className="text-2xl font-bold mb-8">Presentation</h2>
          <p className="text-lg opacity-70 mb-8">
            You can also view the presentation deck I developed for this project, summarizing the core themes of the paper.
          </p>
          <a 
            href="/blue-collar-presentation.pptx" 
            download
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] border-2 border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all hover:scale-105 active:scale-95 shadow-lg w-fit"
          >
            <Download className="w-5 h-5" /> download presentation (pptx)
          </a>
        </div>

        {/* Download Section */}
        <div className="max-w-4xl mx-auto mt-24 flex justify-center pb-24 border-t border-foreground/10 pt-12">
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
