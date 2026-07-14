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

interface GiftMethod {
  id: number;
  type: "bank" | "qris";
  title: string;
  accountName: string;
  accountNumber?: string;
  image?: string;
}

const giftMethods: GiftMethod[] = [
  {
    id: 1,
    type: "bank",
    title: "Bank BCA",
    accountName: "Siful Bahri",
    accountNumber: "1234567890",
  },
  {
    id: 2,
    type: "qris",
    title: "QRIS",
    accountName: "Siful Bahri",
    image: "/images/gift/qris.png",
  },
];

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
      className="bg-[var(--surface)]"
    >
      <Container>
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

          <Divider />

          <Heading>Send Your Blessing</Heading>

          <Paragraph className="mx-auto mt-8 max-w-2xl">
            Your prayers and presence are more than
            enough. If you wish to send a gift, you may
            use one of the options below.
          </Paragraph>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {giftMethods.map((gift) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                {gift.type === "bank" ? (
                  <CreditCard
                    className="text-secondary"
                    size={30}
                  />
                ) : (
                  <QrCode
                    className="text-secondary"
                    size={30}
                  />
                )}

                <Heading className="text-3xl">
                  {gift.title}
                </Heading>
              </div>

              <Paragraph className="mt-8">
                {gift.accountName}
              </Paragraph>

              {gift.accountNumber && (
                <>
                  <Paragraph className="mt-3 text-2xl font-semibold text-foreground">
                    {gift.accountNumber}
                  </Paragraph>

                  <Button
                    className="mt-8"
                    onClick={() =>
                      void copyToClipboard(
                        gift.accountNumber!,
                      )
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

              {gift.image && (
                <div className="mt-8 flex justify-center">
                  <img
                    src={gift.image}
                    alt="QRIS"
                    className="w-72 rounded-2xl"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
