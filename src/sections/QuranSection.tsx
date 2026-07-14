import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

export function QuranSection() {
  return (
    <Section
      id="quran"
      className="bg-background"
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Quran Verse
          </Paragraph>

          <Divider />

          <Heading>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Heading>

          <p className="font-arabic mt-12 text-3xl leading-loose md:text-4xl">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>

          <Paragraph className="mt-12 text-lg leading-9">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
             agar kamu cenderung dan merasa tenteram kepadanya. Dia menjadikan di antaramu rasa kasih dan sayang. 
             Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </Paragraph>

          <Paragraph className="mt-6 text-secondary font-semibold">
            QS. Ar-Rum : 21
          </Paragraph>
        </motion.div>
      </Container>
    </Section>
  );
}
