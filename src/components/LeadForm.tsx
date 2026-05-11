import { useState } from "react";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  interest_level: z.enum(["Immediate", "3 Months", "Just Browsing"]),
});

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>("");
  const [visitDate, setVisitDate] = useState<Date | undefined>();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, phone, interest_level: interest });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      interest_level: parsed.data.interest_level,
      preferred_visit_date: visitDate ? visitDate.toISOString() : null,
      source: "landing-page",
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Thank you! Our team will reach out shortly.");
  };

  if (done) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-[var(--shadow-elegant)]">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h3 className="mt-4 text-2xl font-bold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">
          Your interest has been registered. Our sales team will call you within 24 hours
          {visitDate && <> to confirm your site visit on <strong>{format(visitDate, "PPP")}</strong></>}.
        </p>
        <a
          href="/brochure-mauli-town-36.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-gold)] px-6 py-3 font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition hover:opacity-95"
        >
          <Download className="h-5 w-5" />
          Download Brochure
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-elegant)] md:p-8"
    >
      <h3 className="text-2xl font-bold text-foreground">Register Your Interest</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get instant brochure, pricing & a free site visit.
      </p>

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex">
            <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
              +91
            </span>
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="10-digit mobile"
              className="rounded-l-none"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Interest Level</Label>
          <Select value={interest} onValueChange={setInterest}>
            <SelectTrigger>
              <SelectValue placeholder="When are you planning to buy?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Immediate">Immediate (within 30 days)</SelectItem>
              <SelectItem value="3 Months">Within 3 Months</SelectItem>
              <SelectItem value="Just Browsing">Just Browsing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Schedule Site Visit (optional)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !visitDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {visitDate ? format(visitDate, "PPP") : "Pick a preferred date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={visitDate}
                onSelect={setVisitDate}
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="mt-6 h-12 w-full bg-[image:var(--gradient-primary)] text-base font-semibold shadow-[var(--shadow-elegant)] transition hover:opacity-95"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Book My Site Visit"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted by our sales team.
      </p>
    </form>
  );
}