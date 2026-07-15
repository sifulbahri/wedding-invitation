import { motion } from "framer-motion";
import { Copy, CreditCard, QrCode } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Section } from "@/components/ui/Section";
import {
  Heading,
  Paragraph,
} from "@/components/ui/Typography";

import { gifts } from "@/data/gifts";


export function WeddingGiftSection() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Account number copied.");
    } catch {
      alert("Unable to copy account number.");
    }
  };

  return (
    <Section
      id="wedding-gift"
      className="relative overflow-hidden bg-[var(--surface)]"
    >

  <img
  src="/wedding-invitation/images/GalleryBackground.png"
    alt=""
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-0
      h-full
      w-full
      object-cover
      opacity-70
    "
  />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Paragraph className="uppercase tracking-[0.4em] text-secondary">
            Wedding Gift
          </Paragraph>


            <div className="mt-5 mb-8 flex items-center justify-center gap-4">
                <div className="h-px w-24 bg-[#C9A34E]/40"/>

                <div className="flex h-3 w-3 items-center justify-center rotate-45 border border-[#C9A34E]">
                    <div className="h-1 w-1 bg-[#C9A34E]"/>
                </div>

                <div className="h-px w-24 bg-[#C9A34E]/40"/>
            </div>


          <Heading className="text-5xl md:text-6xl">Send Your Blessing</Heading>

          <Paragraph className="mx-auto mt-6 max-w-lg leading-8 text-white/75">
            Your prayers and presence are more than
            enough. If you wish to send a gift, you may
            use one of the options below.
          </Paragraph>
        </motion.div>

        <div className="
mt-16 grid gap-8
                group relative overflow-hidden rounded-[36px]
                border border-[#C9A34E]/25
                bg-gradient-to-br from-white/[0.04] to-white/[0.02]
                p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#C9A34E]/50 hover:shadow-[0_0_40px_rgba(201,163,78,0.12)]
        ">
         


            {gifts.map((gift) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-[#C9A34E]/20
                  bg-gradient-to-br
                  from-[#1F1B19]/95
                  to-[#151311]/95
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#C9A34E]/40
                  hover:shadow-[0_0_40px_rgba(201,163,78,0.15)]
                "
              >
                {/* Ambient Glow */}
                <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#D4AF37]/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#D4AF37]/5 blur-2xl" />

                {/* Watermark */}
                <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 opacity-5">
                  {gift.type === "bank" ? (
                    <CreditCard size={180} strokeWidth={1} />
                  ) : (
                    <QrCode size={180} strokeWidth={1} />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 grid grid-cols-[96px_1fr] gap-8">

                  {/* LEFT COLUMN */}
                  <div className="shrink-0">
                    <div
                      className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/40
                        bg-[#D4AF37]/5
                        shadow-[0_0_25px_rgba(212,175,55,0.12)]
                      "
                    >
                      {gift.type === "bank" ? (
                        <CreditCard
                          size={38}
                          className="text-[#D4AF37]"
                        />
                      ) : (
                        <QrCode
                          size={38}
                          className="text-[#D4AF37]"
                        />
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="flex-1">

                    <Heading className="text-4xl">
                      {gift.title}
                    </Heading>

                    <div className="my-4 flex items-center gap-3">
                      <div className="h-px flex-1 bg-[#C9A34E]/30" />

                      <div className="h-2 w-2 rotate-45 border border-[#C9A34E]" />

                      <div className="h-px flex-1 bg-[#C9A34E]/30" />
                    </div>

                    <Paragraph className="text-white/70">
                      {gift.accountName}
                    </Paragraph>

                    {/* BANK */}
                    {gift.type === "bank" && (
                      <>
                        <Paragraph className="mt-3 text-2xl font-semibold tracking-wide text-[#D4AF37]">
                          {gift.accountNumber}
                        </Paragraph>

                        <Button
                          className="
                            mt-8
                            inline-flex
                            items-center
                            rounded-full
                            bg-[#D4AF37]
                            px-8
                            py-2
                            text-black
                            font-medium
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)]
                          "
                          onClick={() =>
                            void copyToClipboard(gift.accountNumber!)
                          }
                        >
                          <Copy
                            size={18}
                            className="mr-2"
                          />

                          Copy Account Number
                        </Button>
                      </>
                    )}

                    {/* QRIS */}
                    {gift.type === "qris" && (
                      <>
                        <div className="mt-6">
                          <img
                            src={gift.image}
                            alt="QRIS"
                            className="
                              w-52
                              rounded-2xl
                              border
                              border-[#C9A34E]/20
                            "
                          />
                        </div>
                      </>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
            
          
        </div>


      </Container>
    </Section>
  );
}
